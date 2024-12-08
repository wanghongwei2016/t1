import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ReactNode, useState } from "react"

export default function PhotoViewer({
  children,
  photo,
}: {
  children: ReactNode
  photo: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
      }}
    >
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex h-screen max-w-none justify-center py-0 text-white">
        <div
          className="absolute inset-0"
          onClick={() => {
            setOpen(false)
          }}
        />
        <Image
          className="relative"
          src={photo}
          alt=""
          sizes="100vh"
          style={{
            width: "auto",
            height: "100%",
          }}
          width={600}
          height={300}
          unoptimized
          onClick={() => {
            setOpen(false)
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
