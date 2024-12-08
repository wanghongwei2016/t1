"use client"
import { initChat } from "@/lib/chat"
import { Session, User } from "@/lib/typing"
import { usePathname, useRouter } from "@/navigation"
import request from "@/request"
import { useSearchParams } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import useAppStore from "../useAppStore"
// 这里由原来的服务端掉接口改为浏览器端掉接口
// import { signIn } from "./actions"
import { signIn } from "./actionsForClient"
import appStore from "../appStore"

async function fetchUser() {
  const result: { data: { me: User } } = await request("/user/me")
  return result.data && result.data.me
}

export default function Auth({
  children,
  sign,
}: {
  children: ReactNode
  sign: string | null
}) {
  const search = useSearchParams()
  const { setUser, fetchSessions } = useAppStore((state) => state)
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const code = search.get("code")
  const invite_code = search.get("invite_code")
  useEffect(() => {
    console.log("code", code)
    if (code) {
      signIn(code, localStorage.getItem("invite_code") || "")
        .then(({ data }) => {
          const { me, session_key } = data
          const user = { me, session_key }
          setUser(user)
          const nextSearch = new URLSearchParams(search)
          nextSearch.delete("code")
          router.replace(`${pathname}?${nextSearch.toString()}`)
        })
        .catch(() => {
          router.replace("/signin")
        })
      localStorage.removeItem("invite_code")
    } else if (invite_code) {
      localStorage.setItem("invite_code", invite_code)
      const nextSearch = new URLSearchParams(search)
      nextSearch.delete("invite_code")
      router.replace(`${pathname}?${nextSearch.toString()}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (!code) {
      const user = appStore.getState().user
      if (user === null) {
        setAuthed(true)
      } else {
        document.cookie = `session_key=${user.session_key}; path=/`
        const p3 = fetchUser().then((me) =>
          setUser({ me, session_key: user.session_key })
        )
        const [p, unlisten] = initChat()
        const p2 = fetchSessions()
        Promise.all([p2, p, p3]).then(
          () => setAuthed(true),
          (e) => setError(e)
        )
        return unlisten
      }
    }
  }, [router, code, setUser, fetchSessions])
  if (error) {
    throw error
  }
  return authed && <>{children}</>
}
