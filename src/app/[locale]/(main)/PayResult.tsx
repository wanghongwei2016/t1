"use client"
import { Button } from "@/components/Button"
import { Dialog, DialogContent, DialogTitle } from "@/components/Dialog"
import { usePathname, useRouter } from "@/navigation"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import useUpdateSearch from "./useUpdateSearch"
import Order from "./Order"

const PayResultDialog: React.FC = () => {
  const search = useSearchParams()
  const order = search.get("order")
  const PayerID = search.get("PayerID")
  const cancel = search.get("cancel")
  const [open, setOpen] = useState(!!((order && PayerID) || (order && cancel)))
  const updateSearch = useUpdateSearch()
  useEffect(() => {
    if (open === false) {
      updateSearch({ order: "", PayerID: "", cancel: "", token: "" })
    }
  }, [open, updateSearch])
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(false)
      }}
    >
      <DialogContent className="bg-black text-white">
        <DialogTitle>Payment Result</DialogTitle>
        {open && <Order orderId={order!} payerId={PayerID!} cancel={cancel} />}
        <div className="flex justify-end space-x-2">
          <Button
            onClick={() => {
              setOpen(false)
            }}
            variant="outline"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PayResultDialog
