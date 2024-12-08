"use client" // Error boundaries must be Client Components

import Logo from "@/components/Logo"
import { redirect } from "@/navigation"
import * as Sentry from "@sentry/nextjs"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { ErrorMessage } from "../../components/ErrorMessage"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { locale } = useParams()
  return (
    <div className="flex flex-1 flex-col items-center pt-7">
      <header className="w-9/12">
        <Logo />
      </header>
      <ErrorMessage
        error={error}
        message={
          locale === "en"
            ? "Failed to load the current page"
            : "當前頁面載入失敗"
        }
      >
        <button
          className="w-[340px] rounded-xl bg-[linear-gradient(155deg,#9D4AE0_0%,#E151BE_100%)] px-4 py-2 text-white"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => {
              window.location.reload()
            }
          }
        >
          {locale === "en" ? "Refresh" : "重新載入"}
        </button>
      </ErrorMessage>
    </div>
  )
}
