import appStore from "@/app/[locale]/appStore"
import { reloadSessions } from "@/hooks/actions"
import conversationListStore from "@/hooks/conversationListStore"
import request from "@/request"
import TencentCloudChat, { ChatSDK } from "@tencentcloud/chat"
import { ChatMessage, Session } from "./typing"
import { globalData } from "@/lib/utils"

let chat: ChatSDK

export function initChat(): [Promise<unknown>, () => void] {
  if (typeof window !== "undefined") {
    chat = TencentCloudChat.create({
      SDKAppID: 1771000359,
    })

    chat.setLogLevel(0)
  }
  let offReady: () => void
  const promise = new Promise((resolve, reject) => {
    function onReady() {
      resolve(void 0)
    }
    offReady = () => {
      chat.off(TencentCloudChat.EVENT.SDK_READY, onReady)
    }
    chat.on(TencentCloudChat.EVENT.SDK_READY, onReady)
    request("/chat/timSign")
      .then(({ data: { sign } }) => {
        return chat
          .login({
            userID: appStore.getState().user!.me.id.toString(),
            userSig: sign,
          })
          .then((imResponse) => {
            //console.log(imResponse.data)
            if (imResponse.data.repeatLogin === true) {
              //console.log(imResponse.data.errorInfo)
              onReady()
            }
          })
      })
      .catch((error) => {
        if (error.code !== 2025) {
          //console.warn("login error", error)
          reject(error)
        }
      })
  })
  return [promise, offReady!]
}

export function send(botId: number, payload: any) {
  let message
  if ("text" in payload) {
    message = chat.createTextMessage({
      to: String(botId),
      conversationType: TencentCloudChat.TYPES.CONV_C2C,
      payload,
    })
  } else {
    message = chat.createCustomMessage({
      to: String(botId),
      conversationType: TencentCloudChat.TYPES.CONV_C2C,
      // 消息优先级，用于群聊。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息，详细请参考：https://cloud.tencent.com/document/product/269/3663#.E6.B6.88.E6.81.AF.E4.BC.98.E5.85.88.E7.BA.A7.E4.B8.8E.E9.A2.91.E7.8E.87.E6.8E.A7.E5.88.B6)
      // 支持的枚举值：TencentCloudChat.TYPES.MSG_PRIORITY_HIGH, TencentCloudChat.TYPES.MSG_PRIORITY_NORMAL（默认）, TencentCloudChat.TYPES.MSG_PRIORITY_LOW, TencentCloudChat.TYPES.MSG_PRIORITY_LOWEST
      // priority: TencentCloudChat.TYPES.MSG_PRIORITY_HIGH,
      payload: {
        data: JSON.stringify(payload), // 用于标识该消息是骰子类型消息
        description: "", // 获取骰子点数
        extension: "",
      },
    })
  }
  return chat
    .sendMessage(message)
    .then((imResponse) => {
      //console.log(imResponse)
      conversationListStore.getState().fetchConversations()
    })
    .catch((error) => {
      //console.warn("sendMessage error", error)
      throw error
    })
}

function receive(
  botId: number,
  callback: (response: { message: ChatMessage }) => void
) {
  async function onMessage(message: {
    data: [{ payload: { data: string }; isRead: boolean }]
  }) {
    console.log("message", message)

    try {
      const response: { message: ChatMessage; action: string } = JSON.parse(
        message.data[0].payload.data
      )
      console.log("onMessage response", response)
      if (
        response.action == "recommendReplies" &&
        globalData.setRecommendReplies
      ) {
        globalData.setRecommendReplies(
          JSON.parse(message.data[0].payload.data).message.recommendations || []
        )
        globalData.updateLoading && globalData.updateLoading(false)
        await chat.setMessageRead({ conversationID: `C2C${botId}` })
      }
      if (
        response.action != "recommendReplies" &&
        response.message.user_id === botId
      ) {
        callback(response)
        if (!message.data[0].isRead) {
          await new Promise((resolve) => setTimeout(resolve, 300))
          await chat.setMessageRead({ conversationID: `C2C${botId}` })
        }
      }
      conversationListStore.getState().fetchConversations()
      appStore.getState().fetchSessions()
      reloadSessions()
    } catch (error) {
      console.error("onMessage error", error, message)
      throw error
    }
  }
  chat.on(TencentCloudChat.EVENT.MESSAGE_RECEIVED, onMessage)
  return () => {
    chat.off(TencentCloudChat.EVENT.MESSAGE_RECEIVED, onMessage)
  }
}

export async function restart(botId: number, identity_id?: number) {
  const { data }: { data: { content: string; session: Session } } =
    await request("/chat/session/restart", {
      body: { user_id: botId, identity_id },
    })
  return data
}
export function initialize(
  botId: number,
  setMessages: (setter: (messages: ChatMessage[]) => ChatMessage[]) => void
) {
  const offReceive = receive(botId, async (response) => {
    setMessages((messages) => {
      const prevMessageIndex = messages.findIndex(
        (m) => m.msg_seq === response.message.msg_seq
      )
      if (prevMessageIndex === -1) {
        response.message.received = true
        return [...messages, response.message]
      } else {
        const newMessages = [...messages]
        const prevMessage = newMessages[prevMessageIndex]
        newMessages[prevMessageIndex] = response.message
        newMessages[prevMessageIndex].received = prevMessage.received
        return newMessages
      }
    })
  })
  async function _initialize() {
    await new Promise((resolve) => setTimeout(resolve, 300))
    chat.setMessageRead({ conversationID: `C2C${botId}` }).then((r) => {
      conversationListStore.getState().fetchConversations()
    })
  }
  _initialize()
  return () => {
    offReceive()
  }
}

export async function conversationList(): Promise<
  { unreadCount: number; userProfile: { userID: string } }[]
> {
  let isSyncCompleted = false,
    conversationList = []
  while (!isSyncCompleted) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    ;({
      data: { conversationList, isSyncCompleted },
    } = await chat.getConversationList())
  }
  return conversationList
}
