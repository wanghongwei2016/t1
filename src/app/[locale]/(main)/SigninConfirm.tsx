"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/Dialog"
import React from "react"
import { useSigninConfirmStore } from "./useProudctStore"
import { Button } from "@/components/Button"
import { useRouter } from "@/navigation"
import { useTranslations } from "next-intl"

const SigninConfirm: React.FC = () => {
  const { open, toggle } = useSigninConfirmStore()
  const router = useRouter()

  const handleConfirm = () => {
    toggle()
    router.push("/signin")
  }
  const t = useTranslations("signinConfirm")
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="bg-black text-white">
        <DialogTitle>{t("title")}</DialogTitle>
        {t("content")}
        <div className="flex justify-end space-x-2">
          <Button onClick={() => toggle()} variant="outline">
            {t("cancel")}
          </Button>
          <Button onClick={handleConfirm} variant="outline">
            {t("confirm")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SigninConfirm
