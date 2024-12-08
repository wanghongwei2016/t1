import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"
import { useApi } from "@/hooks/useApi"
import { Loader } from "lucide-react"
import { Suspense, useState } from "react"
import { UploadArea } from "./UploadArea"
import { useTranslations } from "next-intl"
import { User } from "@/lib/typing"

export default function UploadDialog({
  children,
  user,
}: {
  children: React.ReactNode
  user: User
}) {
  const [open, setOpen] = useState(false)
  const t = useTranslations("me")
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#ECDBF5]">
        <DialogHeader>
          <DialogTitle>{t("upload-avatar")}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <Suspense fallback={<Loader className="animate-spin" />}>
            <UploadArea onFinish={() => setOpen(false)} user={user} />
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  )
}
