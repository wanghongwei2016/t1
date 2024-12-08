"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export default function Popover({
  children,
  content,
}: {
  children: React.ReactNode
  content: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  useEffect(() => {
    const listener = (event: any) => {
      if (!event.target.closest(".Popover")) {
        close()
      }
    }
    document.addEventListener("click", listener)
    return () => {
      document.removeEventListener("click", listener)
    }
  }, [])

  return (
    <div
      className="relative"
      onClick={() => {
        setOpen(true)
      }}
    >
      {children}
      <div className="absolute left-0 top-full">{content}</div>
    </div>
  )
}
