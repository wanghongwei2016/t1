"use client"
import up from "@/assets/up.png"
import Image from "next/image"
import { useRouter } from "@/navigation"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { updateUser } from "@/hooks/actions"
import user_default from "@/assets/profile/user_default.png"
import useAppStore from "@/app/[locale]/useAppStore"
import { globalData } from "@/lib/utils"

export const runtime = "edge"

export default function Page() {
  const router = useRouter()
  const t = useTranslations("me")
  const { user } = useAppStore((state) => state)
  const [avatarUrl, setAvatarUrl] = useState(user?.me.avatar_url)
  const [username, setUsername] = useState(user?.me.username)

  useEffect(() => {
    setAvatarUrl(user?.me.avatar_url)
    setUsername(user?.me.username)
  }, [])

  return (
    <>
      <div className="f fx fcc relative w-full" style={{ height: "45px" }}>
        <div
          className="f fx fcc fmc relative"
          style={{ width: "45px", height: "45px" }}
          onClick={() => {
            history.back()
          }}
        >
          <Image src={up} alt="" className="-rotate-90" width={25} />
        </div>

        <div className="f-1 f fx fcc fmc relative">{t("edit-user-info")}</div>
      </div>

      <div
        className="f fx fcc relative w-full px-3"
        style={{ height: "100px" }}
      >
        <div className="f-1 relative">{t("upload-avatar")}</div>
        <Image
          className="oh br-full"
          src={avatarUrl || user_default}
          alt=""
          width={60}
          height={60}
          unoptimized
          onClick={() => {
            globalData.uploadImageComponent.upload({
              success: ({ url }: { url: string }) => {
                setAvatarUrl(url)
              },
            })
          }}
        />
      </div>

      <div
        className="f fx fcc relative w-full px-3"
        style={{ height: "80px" }}
        onClick={() => {
          globalData.promptComponent.open({
            ok: (value: string) => {
              setUsername(value)
            },
          })
        }}
      >
        <div className="f-1 relative">{t("name")}</div>
        <div className="relative text-[#f8f8f8]">{username || ""}</div>
        <Image src={up} alt="" className="rotate-90" width={25} unoptimized />
      </div>

      <div className="f-1"></div>
      <div
        className="oh br f fx fcc fmc f16 relative mb-3 w-10/12 text-white"
        style={{ height: "50px", border: "1px solid #FFFFFF" }}
        onClick={async () => {
          await updateUser({ ...user?.me, username, avatar_url: avatarUrl })
          globalData.alertComponent.open({
            title: t("prompt"),
            content: "保存成功",
            ok: () => {
              router.back()
            },
          })
        }}
      >
        {t("save")}
      </div>
    </>
  )
}
