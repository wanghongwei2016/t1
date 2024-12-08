"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/Dialog"
import Loading from "@/components/Loading"
import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import { cn } from "@/lib/utils"
import request from "@/request"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ReactNode, Suspense, useState } from "react"
import { useVipProudctStore } from "../useProudctStore"
import useCreateOrder from "../../../../hooks/useCreateOrder"
import checkIcon from "./check.png"
import crossIcon from "./cross.png"
import renewBg from "./renewBg.jpg"
import useVipTitle from "./useVipTitle"
import useAppStore from "@/app/[locale]/useAppStore"
import { Loader2 } from "lucide-react"

export default function Renew() {
  const [active, setActive] = useState<1 | 2>(1)
  const { open, toggle } = useVipProudctStore()
  const t = useTranslations("product")
  const {
    products,
    default: defaultProduct,
  }: { products: Product[]; default: number } = useApi(store)
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="max-h-[90vh] w-auto max-w-[95vw] overflow-y-auto text-black sm:w-full sm:max-w-full sm:rounded-[40px]">
        <Image src={renewBg} alt="" layout="fill" objectFit="cover" />
        <DialogTitle className="relative flex justify-center">
          <div className="flex w-[306px] justify-between rounded-[39px] bg-black/[.48] p-1 text-center text-2xl text-white">
            <span
              className={cn(
                "w-[137px] cursor-pointer rounded-full py-2",
                active === 1 && "bg-[#923EFC]"
              )}
              onClick={() => setActive(1)}
            >
              {t("month")}
            </span>
            <span
              className={cn(
                "w-[137px] cursor-pointer rounded-full py-2",
                active === 2 && "bg-[#923EFC]"
              )}
              onClick={() => setActive(2)}
            >
              {t("year")}
              <span className="relative">
                <span
                  className="absolute flex w-max items-center justify-center border border-white bg-black text-white"
                  style={{
                    height: "20px",
                    fontSize: "10px",
                    left: "110%",
                    top: "-20px",
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    padding: "0 5px",
                  }}
                >
                  {products && products[1] && products[1].description
                    ? products[1].description.tip
                    : null}
                </span>
              </span>
            </span>
          </div>
        </DialogTitle>
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] min-w-[916px]">
              <Loading />
            </div>
          }
        >
          <VipProducts plan={active} />
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}

const store = new Store(async () => {
  const { data } = await request("/order/vipProducts")
  data.products = data.products.map((product: any) => {
    try {
      const description = JSON.parse(product.description)
      return {
        ...product,
        description: description,
      }
    } catch (e) {
      // console.error(product)
      throw e
    }
  })
  return data
})
interface Product {
  id: number
  price: number
  renewal_mode: 1 | 2
  vip_level: 1 | 2 | 3
  description: {
    title: string
    tip: string
    descList: { check: 0 | 1; desc: string }[]
  }
}

function VipProducts({ plan }: { plan: 1 | 2 }) {
  const {
    products,
    default: defaultProduct,
  }: { products: Product[]; default: number } = useApi(store)
  const t = useTranslations("product")
  const { user, sessions, sm } = useAppStore((state) => state)
  return (
    <div className={sm ? "roll relative" : "relative"}>
      <div
        className={
          sm
            ? "role-item relative flex space-x-2.5 text-white"
            : "relative flex space-x-2.5 text-white"
        }
      >
        {products
          .filter((product) => product.renewal_mode === plan)
          .map((product, i) => (
            <ProductDetails
              key={product.id}
              product={product}
              isDefaultProduct={i === defaultProduct}
            />
          ))}
      </div>
    </div>
  )
}

function ProductDetails({
  product,
  isDefaultProduct,
}: {
  product: Product
  isDefaultProduct: boolean
}) {
  const createOrder = useCreateOrder()
  const t = useTranslations("product")
  const vipTitles = useVipTitle()
  const [loading, setLoading] = useState(false)
  return (
    <RenewalSection key={product.id}>
      {isDefaultProduct && (
        <div className="absolute top-0 rounded-b-3xl border border-white bg-black px-14 py-2 text-lg font-medium">
          {t("popular")}
        </div>
      )}
      <span className="mb-2.5 text-xl font-medium">
        {vipTitles[product.vip_level]}
      </span>
      <div className="mb-[14px] whitespace-nowrap text-[28px]">
        <span className="text-5xl leading-[67px]">
          ${(product.price / 100).toFixed(2)}
        </span>
        /{product.renewal_mode === 1 ? t("month") : t("year")}
      </div>
      {/* <div className="mb-8 space-x-[27px] text-[28px] font-medium leading-10">
        <span className="text-[#6BD9F5]">$58.88/年</span>
        <span className="text-[#B3B6B6] line-through">$70.8/年</span>
      </div> */}
      <button
        className={cn(
          "mb-4 flex h-[50px] items-center justify-center self-stretch rounded-3xl bg-[#923EFC] text-xl"
        )}
        onClick={async () => {
          try {
            setLoading(true)
            await createOrder(product.id)
          } catch (e) {
            setLoading(false)
          }
        }}
      >
        {loading && (
          <Loader2 className={cn("mr-5", loading && "animate-spin")} />
        )}
        {t("subscribe")}
      </button>
      <div className="space-y-4 pl-3 sm:pl-1">
        {product.description.descList.map(({ check, desc }) => (
          <RenewalSummary
            plan={product.renewal_mode}
            key={desc}
            check={check === 1}
            desc={desc}
          />
        ))}
        {/* <RenewalSummary>每月2000条视频消息</RenewalSummary> */}
        {/* <RenewalSummary>每月2000条文本消息</RenewalSummary> */}
        {/* <RenewalSummary check={false}>有限的内存</RenewalSummary> */}
        {/* <RenewalSummary>具有基本优先级的专用聊天容量</RenewalSummary> */}
        {/* <RenewalSummary>访问社区角色</RenewalSummary> */}
      </div>
    </RenewalSection>
  )
}

function RenewalSummary({
  desc,
  plan,
  check = true,
}: {
  desc: string
  plan: 1 | 2
  check?: boolean
}) {
  const { user, sessions, sm } = useAppStore((state) => state)
  const t = useTranslations("product")
  function renderDesc(desc: string) {
    const planText = plan === 1 ? t("month") : t("year")
    if (desc.startsWith("text")) {
      const [_, number] = desc.split(" ")
      const amount = number === "unlimited" ? t("unlimited") : number
      // return `每月${number}条文本消息`
      return t("desc", {
        plan: planText,
        amount: amount,
        type: t("text"),
      })
    } else if (desc.startsWith("audio")) {
      const [_, number] = desc.split(" ")
      const amount = number === "unlimited" ? t("unlimited") : number
      // return `每月${number}条语音消息`
      return t("desc", {
        plan: planText,
        amount: amount,
        type: t("audio"),
      })
    } else if (desc.startsWith("image")) {
      const [_, number] = desc.split(" ")
      const amount = number === "unlimited" ? t("unlimited") : number
      return t("desc", {
        plan: planText,
        amount: amount,
        type: t("image"),
      })
    } else if (desc === "unlimited memory") {
      return t("unlimited-memory")
    }
    return desc
  }
  return (
    <div className="flex items-center space-x-2.5">
      <div className="relative h-[38px] w-[38px] sm:h-[20px] sm:w-[20px]">
        <Image
          fill
          src={check ? checkIcon : crossIcon}
          alt=""
          objectFit="contain"
        />
      </div>
      <span
        className={
          sm ? "oh flex-1 text-sm font-medium" : "flex-1 text-lg font-medium"
        }
      >
        {/* {renderDesc(desc)} */}
        {desc}
      </span>
    </div>
  )
}

function RenewalSection({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center rounded-[63px] bg-black/[.44] px-6 pb-10 pt-16 sm:rounded-[30px] sm:px-3",
        className
      )}
    >
      {children}
    </div>
  )
}
