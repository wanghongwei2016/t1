import Store from "@/hooks/Store"
import { useApi } from "@/hooks/useApi"
import { cn } from "@/lib/utils"
import request from "@/request"
import Image from "next/image"
import { useState } from "react"
import { myFont } from "."
// import Diamonds from "./diamonds.webp"
import Diamonds from "./zuanshi.png"
// import pentagon from "./pentagon.webp"
import pentagon from "./zuanshi1.png"
import useCreateOrder from "../../../../../hooks/useCreateOrder"
import { useTranslations } from "next-intl"
import { Loader2 } from "lucide-react"

const store = new Store(async () => {
  const { data } = await request("/order/diamondProducts")
  return data
})

interface Product {
  diamond_quantity: number
  id: number
  price: number
  vip_days: number
}

export function DiamondProducts() {
  const {
    products,
    default: defaultSelected,
  }: { products: Product[]; default: number } = useApi(store)
  const [selected, setSelected] = useState(() => products[defaultSelected].id)
  const t = useTranslations("product")
  const tt = useTranslations("diamondProducts")
  const createOrder = useCreateOrder()
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Image
        src={Diamonds}
        className="self-center"
        alt=""
        width={158}
        height={114}
      />
      {products.map((product) => (
        <button
          key={product.id}
          className={cn(
            "flex items-center justify-between rounded-full px-7 py-4 text-xl",
            selected === product.id
              ? "bg-[linear-gradient(155deg,#9D4AE0_0%,#E151BE_100%)]"
              : "border border-white bg-transparent"
          )}
          onClick={() => setSelected(product.id)}
        >
          <span className="flex items-center justify-between space-x-5">
            <Image src={pentagon} alt="" width={33} height={33} />
            <span>{product.diamond_quantity}</span>
          </span>
          <span className={myFont.className}>
            {(product.price / 100).toFixed(2)}$
          </span>
        </button>
      ))}
      <button
        className="flex items-center justify-center rounded-full bg-[#923EFC] px-7 py-4 text-xl"
        onClick={async () => {
          try {
            setLoading(true)
            await createOrder(selected)
          } catch (e) {
            setLoading(false)
          }
        }}
      >
        {loading && (
          <Loader2 className={cn("mr-5", loading && "animate-spin")} />
        )}
        {t("buy")}
      </button>
      <p>
        {tt("space1")}
        <br />
        {tt("space2")}
        <br />
      </p>
    </>
  )
}
