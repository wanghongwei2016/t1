"use client"
import request from "@/request"
import up from "@/assets/up.png"
import Image from "next/image"
import { Link, usePathname, useRouter } from "@/navigation"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { CloseComponent } from "@/components/common"
import { ReactNode, useTransition } from "react"
import { locales } from "@/app/[locale]/(main)/Header"

import Sessions from "@/app/[locale]/(main)/bot/[botId]/chat/Sessions"

import Messages from "@/app/[locale]/(main)/bot/[botId]/chat/Messages"

export const runtime = "edge"
export default function Page() {
  const router = useRouter()
  const locale: string = useParams().locale + ""

  const t = useTranslations("diary")

  return (
    <>
      <Messages />
    </>
  )
}
