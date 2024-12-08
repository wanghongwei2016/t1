import { cookies } from "next/headers"
import { redirect } from "./navigation"

const API_HOST =
  process.env.NODE_ENV === "development" && process.env.PROXY_SERVER
    ? process.env.PROXY_SERVER
    // : "https://api.myluna.vip/"
: "http://localhost:18001"

export default async function request<T = any>(
  path: string,
  options: { body: object; headers?: object } = { body: {} }
): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_HOST}/api/v1${path}`
  const session_key = cookies().get("session_key")?.value
  const requestPayload = session_key
    ? {
        session_key: session_key,
        ...options.body,
      }
    : options.body
  try {
    const res = await fetch(url, {
      headers: {
        "accept-language": "en",
        ...options.headers,
      },
      method: "POST",
      body: JSON.stringify(requestPayload),
    })
    if (!res.ok) {
      console.error('ttt',url,res.status,res.statusText)
      throw new Error(res.statusText)
    }
    const data: any = await res.json()
    if (data.meta.code === 401) {
      redirect("/signout")
    }
    return data
  } catch (e) {
    //console.error(path, requestPayload, e)
    throw e
  }
}
