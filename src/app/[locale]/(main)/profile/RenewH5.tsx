"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/Dialog"
import Loading from "@/components/Loading"
import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import { cn } from "@/lib/utils"
import request from "@/request"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ReactNode, Suspense, useEffect, useState } from "react"
import { useVipProudctStore } from "../useProudctStore"
import useCreateOrder from "../../../../hooks/useCreateOrder"
import checkIcon from "./check.png"
import crossIcon from "./cross.png"
import renewBg from "./renewBg.jpg"
import useVipTitle from "./useVipTitle"
import useAppStore from "@/app/[locale]/useAppStore"
import { Loader2 } from "lucide-react"
import { CloseComponent } from "@/components/common"

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

export default function Renew() {
  const [active, setActive] = useState<1 | 2>(1)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const { open, toggle } = useVipProudctStore()
  const t = useTranslations("product")
  const createOrder = useCreateOrder()
  const [loading, setLoading] = useState(false)
  const vipTitles = useVipTitle()
  const {
    products,
    default: defaultProduct,
  }: { products: Product[]; default: number } = useApi(store)

  useEffect(() => {
    setActiveProduct(
      products.filter((product) => product.renewal_mode === active)[0]
    )
  }, [active])

  return open ? (
    <>
      <div className="text-white">
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-40"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => {
            toggle()
          }}
        ></div>
        <div
          className="oh br-lg fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "100vw",
            height: "485px",
          }}
        >
          <Image src={renewBg} alt="" className="h-full w-full"></Image>

          <div className="f fy absolute bottom-0 left-0 right-0 top-0 px-3">
            <CloseComponent close={toggle}></CloseComponent>
            <div
              className="f fx oh br f16 relative mx-auto mt-5"
              style={{
                backgroundColor: "rgba(0,0,0,0.48)",
                width: "205px",
                height: "36px",
              }}
            >
              <div
                className={
                  active == 1
                    ? "f-1 oh br f fx fcc fmc relative bg-[#923EFC]"
                    : "f-1 oh br f fx fcc fmc relative"
                }
                onClick={() => setActive(1)}
              >
                {t("month")}
              </div>
              <div
                className={
                  active == 2
                    ? "f-1 oh br f fx fcc fmc relative bg-[#923EFC]"
                    : "f-1 oh br f fx fcc fmc relative"
                }
                onClick={() => setActive(2)}
              >
                {t("year")}
              </div>
            </div>

            <div className="roll relative mt-12">
              {products &&
                products.map &&
                products
                  .filter((product) => product.renewal_mode === active)
                  .map((product, i) => (
                    <div
                      key={product.id}
                      className="roll-item mr-3"
                      style={{ width: "170px", height: "240px" }}
                      onClick={() => {
                        setActiveProduct(product)
                      }}
                    >
                      {/* {i === defaultProduct && (
                <div className="absolute z-10 top-[-5px] rounded-tl-3xl rounded-br-3xl border border-white bg-black px-3 py-1 text-sm font-medium">
                  {t("popular")}
                </div>
              )} */}
                      <div
                        className="oh br f fy relative h-full w-full py-3"
                        style={{
                          backgroundColor:
                            activeProduct && activeProduct.id == product.id
                              ? "rgba(146, 62, 252, 0.4)"
                              : "rgba(0,0,0,0.7)",
                        }}
                      >
                        <div className="f fx fmc f16 relative">
                          {vipTitles[product.vip_level]}
                        </div>
                        <div className="f fx fce fmc f12 mt-3">
                          <span className="f20">
                            ${(product.price / 100).toFixed(2)}
                          </span>
                          /{product.renewal_mode === 1 ? t("month") : t("year")}
                        </div>

                        <div className="f12 relative mt-5">
                          {product.description.descList.map(
                            ({ check, desc }) => (
                              <div key={desc} className="f fx relative px-2">
                                <div className="relative h-[15px] w-[15px]">
                                  <Image
                                    fill
                                    src={check ? checkIcon : crossIcon}
                                    alt=""
                                    objectFit="contain"
                                  />
                                </div>
                                <div
                                  className="f-1 ml-2"
                                  style={{ whiteSpace: "pre-wrap" }}
                                >
                                  {desc}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>

            <div
              className="f fx fcc fmc oh br-lg relative mt-8 bg-[#923EFC]"
              style={{ height: "60px" }}
              onClick={async () => {
                if (activeProduct) {
                  try {
                    setLoading(true)
                    await createOrder(activeProduct.id)
                  } catch (e) {
                    setLoading(false)
                  }
                }
              }}
            >
              {t("subscribe")}
              {loading && (
                <Loader2 className={cn("mr-5", loading && "animate-spin")} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null
}
