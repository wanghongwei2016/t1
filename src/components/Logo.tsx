"use client"
import cslx from "clsx"
import localFont from "next/font/local"
import Link from "next/link"

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./alimamashuhei.woff2",
  display: "swap",
  weight: "700",
})

export default function Logo() {
  return (
    <Link href="/">
      <span
        className={cslx(
          myFont.className,
          "logo whitespace-nowrap text-4xl font-bold leading-10"
        )}
      >
        My Luna
      </span>
    </Link>
  )
}
