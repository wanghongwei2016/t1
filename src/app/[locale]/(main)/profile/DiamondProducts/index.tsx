"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog"
import Loading from "@/components/Loading"
import local from "next/font/local"
import { Suspense } from "react"
import { useDiamondProudctStore } from "../../useProudctStore"
import { DiamondProducts } from "./DiamondProducts"
import { useTranslations } from "next-intl"

export const myFont = local({
  src: "./DingTalk Sans.ttf",
  display: "swap",
})

export default function BuyDiamonds() {
  const { open, toggle } = useDiamondProudctStore()
  const t = useTranslations("diamondProducts")
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="flex max-h-[90vh] min-h-80 w-[710px] max-w-[90%] flex-col items-stretch space-y-5 overflow-auto bg-gradient-to-b from-[#4A1989] to-black px-14 text-white sm:px-3">
        <DialogHeader>
          <DialogTitle className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-full bg-black px-10 pb-2 pt-1 text-2xl font-medium">
            {t("space3")}
          </DialogTitle>
        </DialogHeader>
        <Suspense fallback={<Loading />}>
          <DiamondProducts />
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}
