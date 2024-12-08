"use client"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export default function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      role="status"
      className={cn(
        "h-5 min-w-5 rounded-lg bg-[#F64545] px-1.5 text-center text-sm leading-5",
        className
      )}
    >
      {children}
    </span>
  )
}
