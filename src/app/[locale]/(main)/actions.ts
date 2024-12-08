"use server"

import { cookies } from "next/headers"
import request from "../../../server-request"
import { redirect } from "@/navigation"

export async function signIn(code: string) {
  try {
    const result =
      process.env.NODE_ENV === "development"
        ? {
            data: {
              session_key: process.env.SESSION_KEY!,
              me: {
                avatar_url: "https://image.myluna.vip/RLrAEByFwLZI9b02pOkt.png",
                birthday: null,
                city_name: null,
                description: "",
                diamonds: 0,
                email: "levinqdl@gmail.com",
                gender: 0,
                getui_cid: "",
                has_video_album: 0,
                id: 1058478,
                image_number: 0,
                is_contact_block: false,
                is_invisible: false,
                is_sms_notify: false,
                like_number: 0,
                my_album: [],
                notify: null,
                phone_number: null,
                received_like_number: 0,
                review_avatar: "",
                review_desc: "",
                review_username: "",
                text_number: 77,
                username: "DEV",
                vip_expire_time: null,
                vip_level: 0,
                voice_number: 0,
              },
            },
          }
        : await request("/auth/thirdPartyLogin", {
            body: {
              code,
              provider: "google",
              redirect_uri: "https://www.myluna.vip",
            },
          })
    cookies().set("session_key", result.data.session_key)
    return result
  } catch (e) {
    redirect("/signin")
  }
}
