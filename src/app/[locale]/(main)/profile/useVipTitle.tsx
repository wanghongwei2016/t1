"use client"
import { useTranslations } from "next-intl"

export default function useVipTitle() {
  const t = useTranslations()
  return {
    0: t("freePlan"),
    1: t("standard"),
    2: t("premium"),
    3: t("luxury"),
  } as const
}
