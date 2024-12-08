import { cookies } from "next/headers"

export default function getSessionKey() {
  return cookies().get("session_key")?.value
}
