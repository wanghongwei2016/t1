import { Button } from "@/components/Button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"
import { useRouter } from "@/navigation"
import request from "@/request"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { ReactNode, useTransition } from "react"

export default function DeleteAccountDialog({
  children,
}: {
  children: ReactNode
}) {
  const t = useTranslations("me")
  const tt = useTranslations("deleteAccountDialog")

  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-[710px] rounded-3xl bg-black px-[60px] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-5xl font-medium">
            {t("prompt")}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-[50px] text-2xl">{tt("content")}</div>
        <Button
          className="mt-[85px] h-[90px] rounded-3xl bg-[#C62D2D] text-3xl leading-[90px]"
          onClick={() => {
            startTransition(async () => {
              await request("/user/requestAccountDeletion")
              router.replace("/signout")
            })
          }}
        >
          {isPending && <Loader2 className="mr-2 h-10 w-10 animate-spin" />}
          {tt("btn")}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
