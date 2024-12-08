import { Bot } from "@/lib/typing"
import fetchUser from "../fetchUser"
import { Profile } from "./Profile"
import request from "@/server-request"
import SigninPage from "../../signin/page"
import { ProfileH5 } from "./ProfileH5"

export const runtime = "edge"
async function fetchFavoriteBots() {
  const response: {
    data: { users: Bot[] }
    meta: { next_url: string | null }
  } = await request("/ai/likeList")
  return {
    data: response.data.users,
    next_url: response.meta.next_url,
  }
}
export default async function Page() {
  const user = await fetchUser()
  const moreData = await fetchFavoriteBots()
  return user ? (
    <>
      <Profile user={user} moreData={moreData} />
      <ProfileH5 user={user} moreData={moreData} />
    </>
  ) : (
    <SigninPage></SigninPage>
  )
}
