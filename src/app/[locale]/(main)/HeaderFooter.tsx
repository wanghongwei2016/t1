"use client"
import Logo from "@/components/Logo"
import { Session, User } from "@/lib/typing"
import { cn } from "@/lib/utils"
import { Link, usePathname, useRouter } from "@/navigation"
import { useTranslations } from "next-intl"
import useAppStore from "../useAppStore"
import TotalUnread from "./TotalUnread"
import UserDetails from "./UserDetails"
import Image from "next/image"
import home_1 from "@/assets/tabBar/home_1.png"
import home_2 from "@/assets/tabBar/home_2.png"
import jiahao_1 from "@/assets/tabBar/jiahao_1.png"
import jiahao_2 from "@/assets/tabBar/jiahao_2.png"
import im_1 from "@/assets/tabBar/im_1.png"
import im_2 from "@/assets/tabBar/im_2.png"
import me_1 from "@/assets/tabBar/me_1.png"
import me_2 from "@/assets/tabBar/me_2.png"

function showHeaderFooter({ pathname }: { pathname: string }) {
  if (pathname == "/") return true
  if (pathname == "/profile") return true
  if (pathname == "/sessions") return true

  return false
}

export default function HeaderFooter(
  {
    // user,
    // sessions,
  }: {
    // user: User | null
    // sessions: Session[]
  }
) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("header")
  const { user, sessions } = useAppStore((state) => ({
    user: state.user,
    sessions: state.sessions,
  }))
  return showHeaderFooter({ pathname }) ? (
    <div
      className="relative hidden w-full text-[#AFAFAF] sm:block"
      style={{ height: "82px" }}
    >
      <div className="f fx fcc absolute bottom-0 left-0 right-0 top-0">
        <div
          className="f-1 f fx fcc fmc relative h-full"
          onClick={() => {
            router.push("/")
          }}
        >
          <Image
            src={pathname == "/" ? home_1 : home_2}
            alt=""
            width={24}
            height={36}
          />
        </div>
        <div
          className="f-1 f fx fcc fmc relative h-full"
          onClick={() => {
            router.push(user ? `/sessions` : "/signin")
          }}
        >
          <Image
            src={pathname.startsWith("/sessions") ? im_1 : im_2}
            alt=""
            width={24}
            height={36}
          />
        </div>
        <div
          className="f-1 f fx fcc fmc relative h-full"
          onClick={() => {
            router.push(user ? "/profile" : "/signin")
          }}
        >
          <Image
            src={pathname === "/profile" ? me_1 : me_2}
            alt=""
            width={24}
            height={36}
          />
        </div>
      </div>
    </div>
  ) : null
}
