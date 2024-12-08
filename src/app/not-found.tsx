"use client"
import Image from "next/image"
import bg from "./bg.png"
import Logo from "@/components/Logo"

// Error boundaries must be Client Components

export default function NotFoundPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
          <div className="absolute inset-0 flex min-h-0 flex-1 flex-col items-center bg-[rgba(0,0,0,.42)]">
            <header className="w-9/12">
              <Logo />
            </header>
            <div
              style={{
                display: "flex",
                height: "100vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Page not found
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
