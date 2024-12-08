import appStore from "./app/[locale]/appStore"
import { redirect } from "@/navigation"
// import { useParams } from "next/navigation"
import { locales } from "@/config"

// 获取本地cookies
export function getLocalCookieObject() {
  const cookiesArray = document.cookie.split("; ")
  const cookiesObject: any = {}
  cookiesArray.forEach((cookie) => {
    const parts = cookie.split("=")
    cookiesObject[parts[0]] = parts[1]
  })
  console.log(cookiesObject)
  return cookiesObject
}

export default function request<T = any>(
  path: string,
  options: { body: object } = { body: {} }
): Promise<T> {
  // const locale: string = useParams().locale + ''
  const cookie = getLocalCookieObject()
  const url = path.startsWith("http")
    ? path
    : `https://api.myluna.vip/api/v1${path}`
  // : `https://luna-test-api.datespark.top/api/v1${path}`
  const session_key = appStore.getState().user?.session_key
  const requestPayload = session_key
    ? {
        session_key: session_key,
        ...options.body,
      }
    : options.body

  return fetch(url, {
    referrerPolicy: "unsafe-url",
    headers: {
      "accept-language":
        // window.location.pathname.split("/")[1] === "zh-TW" ? "zh-TW" : "en",
        locales.includes(window.location.pathname.split("/")[1])
          ? window.location.pathname.split("/")[1]
          : "en",
    },
    method: "POST",
    body: JSON.stringify({ ...requestPayload, cookie }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then((data) => {
      if (data.meta.code === 401) {
        // redirect("/signin")
        // throw new Error("Unauthorized")
        // redirect("/signout")
        // window.location.href = "/signout"
        window.location.replace("/signout")
      }
      return data
    })
    .catch((e) => {
      // console.error(path, options, e)
      throw e
    })
}
