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
import ServiceTermsAndPrivacyPolicy from "@/components/ServiceTermsAndPrivacyPolicy"

export const runtime = "edge"
export default function Page() {
  const router = useRouter()
  const [showLogoffDialog, setShowLogoffDialog] = useState(false)
  const [showLocaleDialog, setShowLocaleDialog] = useState(false)
  const locale: string = useParams().locale + ""
  const t = useTranslations("setting")

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

        <div className="f-1 f fx fcc fmc relative">{t("space_01")}</div>
      </div>
      <div className="oh br f16 relative mt-3 w-10/12 border px-3">
        <div
          className="f fx fcc relative"
          style={{ height: "60px", borderBottom: "1px solid #FFFFFF" }}
          onClick={() => {
            setShowLocaleDialog(true)
          }}
        >
          <div className="f-1 text-white">{t("space_02")}</div>
          <div className="text-[#888888]">{locales[locale]}</div>
          <Image src={up} alt="" className="rotate-90" width={25} />
        </div>
        <div
          className="f fx fcc fmc relative text-[#888888]"
          style={{ height: "60px" }}
          onClick={() => {
            setShowLogoffDialog(true)
          }}
        >
          {t("space_03")}
        </div>
      </div>
      <div className="f-1"></div>
      <div
        className="oh br f fx fcc fmc f16 relative mb-3 mt-3 w-10/12 text-white"
        style={{ height: "50px", border: "1px solid #FFFFFF" }}
        onClick={async () => {
          router.push("/signout")
        }}
      >
        {t("space_04")}
      </div>

      <ServiceTermsAndPrivacyPolicy mode="footer"></ServiceTermsAndPrivacyPolicy>

      {showLogoffDialog && (
        <LogoffDialog
          close={() => {
            setShowLogoffDialog(false)
          }}
        />
      )}
      {showLocaleDialog && (
        <LocaleDialog
          close={() => {
            setShowLocaleDialog(false)
          }}
        />
      )}
    </>
  )
}

// 注销弹框
function LogoffDialog({ close }: { close: Function }) {
  const [inited, setInited] = useState(true)

  const [isPending, startTransition] = useTransition()
  const t = useTranslations("setting")

  const router = useRouter()

  return inited ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 px-3"
        style={{
          width: "100vw",
          background: "linear-gradient( 180deg, #4F1212 0%, #07060B 100%)",
        }}
      >
        <CloseComponent
          close={() => {
            close()
          }}
        />
        <div className="f fx fcc fmc relative mt-4">{t("space_05")}</div>
        <div className="relative mt-4">{t("space_06")}</div>
        <div
          className="oh br-lg f fx fcc fmc relative mb-4 mt-4 bg-[#C62D2D] text-white"
          style={{ height: "50px" }}
          onClick={() => {
            startTransition(async () => {
              await request("/user/requestAccountDeletion")
              router.replace("/signout")
            })
          }}
        >
          {t("space_07")}
        </div>
      </div>
    </div>
  ) : null
}

// 多语言弹框
function LocaleDialog({ close }: { close: Function }) {
  const [inited, setInited] = useState(true)

  const router = useRouter()

  return inited ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#181717] px-3"
        style={{
          width: "80vw",
          height: "80vh",
        }}
      >
        <CloseComponent
          close={() => {
            close()
          }}
        />

        <div className="oya relative h-full px-5">
          {Object.keys(locales).map((key) => (
            <div
              key={key}
              className="f fx fcc fmc oh br relative my-3 border py-2"
              onClick={() => {
                // router.push(pathname, { locale: key })
                // router.push('/' + key)
                window.location.replace("/" + key)
              }}
            >
              {locales[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null
}
