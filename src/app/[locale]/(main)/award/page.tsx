import { Bot } from "@/lib/typing"
import fetchUser from "../fetchUser"
import request from "@/server-request"
import SigninPage from "../../signin/page"
import Award from "./Award"

export const runtime = "edge"
export default async function Page() {
  const user = await fetchUser()
  return user ? <Award /> : <SigninPage></SigninPage>
  // return <Award />
}
