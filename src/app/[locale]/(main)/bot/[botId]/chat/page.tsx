"use client"

import { ChatMessage, MoreData, Session } from "@/lib/typing"
import request from "@/server-request"
import fetchChatSession from "../../fetchChatSession"
import fetchBotInfo from "../(botInfo)/fetchBotInfo"
import { ConfirmComponent, UploadImageComponent } from "@/components/common"
import Sessions from "@/app/[locale]/(main)/bot/@sessions/[botId]/chat/page"

import Info from "./Info"
import Messages from "./Messages"

export default async function Page() {
  return (
    <>
      <div className="flex min-h-0 w-10/12 flex-1 space-x-4">
        <Sessions />
        <Messages />
        <Info />
        {/* <UploadImageComponent /> */}
      </div>
    </>
  )
}

export const runtime = "edge"
