import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import { ChatMessage, MoreData, Session } from "@/lib/typing"
import request from "@/request"
import { useCallback, useEffect, useRef, useState } from "react"

async function fetchDefaultMessages(
  session: Session
): Promise<MoreData<ChatMessage>> {
  return request("/chat/session/messageList", {
    body: { session_id: session.id, limit: 20 },
  }).then(({ data: { messages }, meta: { next_url } }) => {
    if (session.is_created) {
      messages.forEach((message: any) => {
        message.received = true
      })
    }
    return {
      data: messages.reverse(),
      next_url,
    }
  })
}

const store = new Store(fetchDefaultMessages)

export default function useMessages(session: Session) {
  const moreData = useApi(store, session)
  const [messages, setMessages] = useState<ChatMessage[]>(moreData.data)
  const [isLoading, setIsLoading] = useState(false)
  const nextUrlRef = useRef(moreData.next_url)
  const loadMessages = useCallback(() => {
    setIsLoading(true)
    request(nextUrlRef.current!, {
      body: { session_id: session.id, limit: 20 },
    }).then(({ data: { messages }, meta: { next_url } }) => {
      if (session.is_created) {
        messages.forEach((message: any) => {
          message.received = true
        })
      }
      setMessages((prev) => [...messages.reverse(), ...prev])
      setIsLoading(false)
      nextUrlRef.current = next_url
    })
  }, [session])
  useEffect(() => {
    if (session.is_created) {
      nextUrlRef.current = "/chat/session/messageList"
      setMessages([])
      loadMessages()
    }
  }, [session])
  return {
    messages,
    setMessages,
    isLoading,
    loadMore: loadMessages,
    hasMore: nextUrlRef.current !== null,
  }
}
