"use client"
import { useEffect } from "react"
import useAppStore from "../useAppStore"
import Logo from "@/components/Logo"
import googleIcon from "./googleIcon.png"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useRouter } from "@/navigation"
import ServiceTermsAndPrivacyPolicy from "@/components/ServiceTermsAndPrivacyPolicy"
import sm_logo from "@/assets/sm_logo.png"

export const runtime = "edge"

export default function Page() {
  const user = useAppStore((state) => state.user)

  const router = useRouter()
  useEffect(() => {
    if (user) {
      router.replace("/")
    }
  }, [user, router])
  const t = useTranslations("signin")
  return (
    <>
      <div className="flex flex-1 flex-col items-center space-y-48 pt-7 sm:hidden">
        <header className="w-9/12">
          <Logo />
        </header>
        <div className="flex flex-1 flex-col items-center">
          <div className="text-4xl font-medium">{t("create-an-account")}</div>
          <div className="pb-[95px] pt-[14px] text-[#B4B4B4]">
            {t("start-chat")}
          </div>
          <a
            // href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=955099577093-n32e5o8tp7m29lp8aht6c7hjos4nhabh.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.myluna.vip&scope=email+profile+openid&access_type=offline&prompt=consent"
            href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=955099577093-n32e5o8tp7m29lp8aht6c7hjos4nhabh.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.myluna.vip&scope=email+profile+openid&access_type=offline&prompt=consent"
            className="lg:w-[660px] flex w-[314px] items-center justify-center space-x-4 rounded-full bg-white py-[15px] text-xl text-black"
          >
            <Image src={googleIcon} alt="" width={40} height={40} />
            <span>{t("sign-in-with-google")}</span>
          </a>
          <ServiceTermsAndPrivacyPolicy mode="login"></ServiceTermsAndPrivacyPolicy>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 top-0 hidden sm:block">
        <div className="f fy fcc fmc absolute bottom-0 left-0 right-0 top-0 py-3">
          <div className="f-1"></div>
          <Image src={sm_logo} alt="" width={60} />

          <div className="f36 relative mt-3">My Luna</div>

          <a
            // href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=955099577093-n32e5o8tp7m29lp8aht6c7hjos4nhabh.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.myluna.vip&scope=email+profile+openid&access_type=offline&prompt=consent"
            href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=955099577093-n32e5o8tp7m29lp8aht6c7hjos4nhabh.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.myluna.vip&scope=email+profile+openid&access_type=offline&prompt=consent"
            className="lg:w-[660px] mb-3 mt-20 flex w-[314px] items-center justify-center space-x-4 rounded-full bg-white py-[10px] text-xl text-black"
          >
            <Image src={googleIcon} alt="" width={40} height={40} />
            <span>{t("sign-in-with-google")}</span>
          </a>

          <div className="f-1"></div>
          <ServiceTermsAndPrivacyPolicy mode="foolter"></ServiceTermsAndPrivacyPolicy>
        </div>
      </div>
    </>
  )
}
