import { usePathname } from "@/navigation"
import request from "@/request"
import { useSearchParams } from "next/navigation"

export default function useCreateOrder() {
  const pathname = usePathname()
  const search = useSearchParams()

  async function createOrder(product_id: number) {
    const nextSearch = new URLSearchParams(search)
    nextSearch.set("order", "ORDER_ID")
    const returnUrl = `${window.location.origin}${pathname}?${nextSearch.toString()}`
    nextSearch.set("cancel", "ORDER_ID")
    const cancelUrl = `${window.location.origin}${pathname}?${nextSearch.toString()}`
    const {
      data: { order },
    }: { data: { order: { id: string; pay_info: string } } } = await request(
      "/order/create",
      {
        body: {
          product_id,
          pay_channel: 9,
          return_url: returnUrl,
          cancel_url: cancelUrl,
        },
      }
    )
    const pay_info: {
      links: {
        href: string
        rel: "self" | "payer-action"
        method: "GET"
      }[]
    } = JSON.parse(
      order.pay_info.replace("False", "false").replace("True", "true")
    )
    window.location.href = pay_info.links.find(
      ({ rel }) => rel === "payer-action"
    )!.href
  }
  return createOrder
}
