import { Session } from "@/lib/typing"
import request from "@/server-request"
// import { cache } from "react"
import getSessionKey from "./getSessionKey"

// const fetchSessions = cache(async function _fetchSessions() {
//   const {
//     data: { session: sessions },
//   }: {
//     data: { session: Session[] }
//   } = await request("/chat/session/list")
//   return sessions.sort((a, b) => b.last_msg.updated_on - a.last_msg.updated_on)
// })

const fetchSessions = async function () {
  const {
    data: { session: sessions },
  }: {
    data: { session: Session[] }
  } = await request("/chat/session/list")
  return sessions.sort((a, b) => b.last_msg.updated_on - a.last_msg.updated_on)
}

export default () => {
  if (getSessionKey()) {
    return fetchSessions()
  }
  return []
}
