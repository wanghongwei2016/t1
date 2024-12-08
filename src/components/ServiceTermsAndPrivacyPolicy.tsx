"use client"

import { useTranslations } from "next-intl"
import { Link, usePathname, useRouter } from "@/navigation"

/**
 * 隐私协议 服务条款
 * @param mode 注册页 login 网站底部 footer
 * @returns
 */

export default function ServiceTermsAndPrivacyPolicy({
  mode,
}: {
  mode: String
}) {
  const t = useTranslations("serviceTermsAndPrivacyPolicy")

  return "login" === mode ? (
    <div className="ServiceTermsAndPrivacyPolicy px-1 pb-[30px] pt-[30px] text-center text-[#B4B4B4]">
      {t("space1")}
      <a
        className="mx-1 text-[#F556FF]"
        href="/terms-of-service.html"
        target="_blank"
      >
        {t("space2")}
      </a>
      {t("space3")}
      <a
        className="mx-1 text-[#F556FF]"
        href="/privacy-policy.html"
        target="_blank"
      >
        {t("space4")}
      </a>
      {t("space5")}
    </div>
  ) : (
    <div className="ServiceTermsAndPrivacyPolicy px-1 py-2 text-center">
      <a
        className="mx-1 text-[#F556FF]"
        href="/terms-of-service.html"
        target="_blank"
      >
        {t("space2")}
      </a>
      |
      <a
        className="mx-1 text-[#F556FF]"
        href="/privacy-policy.html"
        target="_blank"
      >
        {t("space4")}
      </a>
      |
      <Link className="mx-1 text-[#F556FF]" href="/faq" target="_blank">
        {t("faq")}
      </Link>
    </div>
  )
}
