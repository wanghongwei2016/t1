import request from "@/request"
import { User } from "@/lib/typing"

export default async function fetchUser() {
  const result: { data: { me: User } } = await request("/user/me")
  return result.data && result.data.me
}
