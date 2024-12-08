import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"
import { Input } from "@/components/Input"
import { updateUser } from "@/hooks/actions"
import { User } from "@/lib/typing"
import { Loader } from "lucide-react"
import { useTranslations } from "next-intl"
import { startTransition, useId, useState } from "react"

export default function EditUserInfoDialog({
  user,
  children,
}: {
  children: React.ReactNode
  user: User
}) {
  const nameInputId = useId()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const t = useTranslations("me")
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{t("edit-user-info")}</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col"
          onSubmit={async (e) => {
            e.preventDefault()
            try {
              setLoading(true)
              const form = e.target as HTMLFormElement
              const username = (
                form.elements.namedItem("username") as HTMLInputElement
              ).value
              // startTransition(async () => {
                await updateUser({ ...user, username })
                setOpen(false)
              // })
            } catch (error) {
            } finally {
              setLoading(false)
            }
          }}
        >
          <label htmlFor={nameInputId} className="space-y-2">
            <span>{t("name")}</span>
            <Input name="username" id={nameInputId} />
          </label>
          <button
            type="submit"
            className="mt-4 flex self-end rounded-md bg-black px-4 py-2 text-white"
          >
            {loading && <Loader className="mr-2 animate-spin" />}
            {t("save")}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
