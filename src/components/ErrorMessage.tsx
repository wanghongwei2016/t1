"use client" // Error boundaries must be Client Components

import * as Sentry from "@sentry/nextjs"
import { ReactNode, useEffect } from "react"
import errorIcon from "./error.png"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { redirect } from "@/navigation"

export function ErrorMessage({
  message,
  children,
  className,
  error,
}: {
  message: ReactNode
  children: ReactNode
  className?: string
  error?: Error & { digest?: string }
}) {
  if (error && error.message === "Unauthorized") {
    redirect("/signout")
  }
  useEffect(() => {
    // Log the error to an error reporting service
    //console.error(error)
    if (error) Sentry.captureException(error)
  }, [error])
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center self-stretch",
        className
      )}
    >
      <Image src={errorIcon} alt="" width={150} height={150} />
      <span className="mb-10 mt-6">{message}</span>
      {children}
    </div>
  )
}
