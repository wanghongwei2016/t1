"use client"
import { orderResult } from "@/hooks/actions"
import { useEffect } from "react"

export default function Order({
  orderId,
  payerId,
  cancel,
}: {
  orderId: string
  payerId: string
  cancel: string | null
}) {
  useEffect(() => {
    orderResult(orderId, payerId)
  }, [])
  return <div>Payment {cancel ? "canceled" : "success"}</div>
}
