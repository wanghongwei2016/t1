"use client"
import Image from "next/image"
import bg from "./bg.png"
import Logo from "@/components/Logo"
import { useEffect } from "react"
import * as Sentry from "@sentry/nextjs"
import Error from "next/error"

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="relative flex h-screen flex-col items-center justify-start text-white">
          <Image
            alt=""
            src={bg}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div>
            <header className="w-9/12">
              <Logo />
            </header>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                height: "100vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,.42)",
                color: "white",
              }}
            >
              {error.toString()}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
