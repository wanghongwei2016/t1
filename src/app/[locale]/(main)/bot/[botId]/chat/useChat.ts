import useAppStore from "@/app/[locale]/useAppStore"
import { initialize, restart, send } from "@/lib/chat"
import { ChatMessage, MessageType, MoreData, Session } from "@/lib/typing"
import { useIdentityStore } from "@/components/Identity"
import { redirect } from "@/navigation"
import { useEffect, useState } from "react"
import {
  useDiamondProudctStore,
  useVipProudctStore,
} from "../../../useProudctStore"
import useMessages from "./Messages/useMessages"

export default function useChat(botId: number, defaultSession: Session) {
  const { setCurrentIdentity } = useIdentityStore()
  const user = useAppStore((state) => state.user)
  if (user === null) {
    redirect("/signin")
  }
  const [session, setSession] = useState<Session>(defaultSession)
  const { setMessages, ...rest } = useMessages(session)
  const [waiting, setWaiting] = useState(false)
  let waitTimeout: any
  function wait(v: boolean) {
    clearTimeout(waitTimeout)
    setWaiting(v)
    if (v) {
      waitTimeout = setTimeout(() => {
        setWaiting(false)
      }, 1000 * 30)
    }
  }
  useEffect(() => {
    return initialize(botId, (...args) => {
      setMessages(...args)
      // setWaiting(false)
      wait(false)
    })
  }, [botId, setMessages])
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const toggleDiamond = useDiamondProudctStore((state) => state.toggle)
  const handleToggleProduct:
    | ((reason: any) => void | PromiseLike<void>)
    | null
    | undefined = (e) => {
    if (e.code === 120005) {
      toggleVip()
    } else if (e.code === 120003) {
      toggleDiamond()
    }
  }
  return {
    ...rest,
    waiting,
    sendMessage: (text: string) => {
      let prevMessages: ChatMessage[]
      send(botId, { text }).then(
        () => {
          // setWaiting(true)
          wait(true)
        },
        (e) => {
          setMessages(prevMessages)
          handleToggleProduct(e)
        }
      )
      setMessages((messages) => {
        prevMessages = messages
        return [
          ...messages,
          {
            user_id: user!.me.id,
            content: { Text: text },
            msg_seq: -1,
            msg_type: MessageType.Text,
            updated_on: 0,
          },
        ]
      })
    },
    restart: async (identity_id?: number) => {
      const { session } = await restart(botId, identity_id)
      setSession(session)
      // setWaiting(false)
      wait(false)
      setCurrentIdentity(session.identity)
    },
    genLinggan: (msg_seq: number) => {
      send(botId, { action: "getReplies", msg_seq, lang: "en" }).then(() => {
        // setWaiting(true)
      }, handleToggleProduct)
    },
    genText: (msg_seq: number) => {
      send(botId, { action: "genText", msg_seq, lang: "en" }).then(() => {
        // setWaiting(true)
        wait(true)
      }, handleToggleProduct)
    },
    genTextNew: () => {
      send(botId, { action: "sendText", lang: "en" }).then(() => {
        // setWaiting(true)
        wait(true)
      }, handleToggleProduct)
    },
    genImage: (msg_seq: number) => {
      send(botId, { action: "genImage", msg_seq, lang: "en" }).catch(
        handleToggleProduct
      )
      setMessages((messages) => [...messages])
    },
    genVideo: (msg_seq: number) => {
      send(botId, { action: "genVideo", msg_seq, lang: "en" }).catch(
        handleToggleProduct
      )
    },
    genVoice: (msg_seq: number) => {
      send(botId, { action: "genVoice", msg_seq, lang: "en" }).catch(
        handleToggleProduct
      )
    },
  }
}
