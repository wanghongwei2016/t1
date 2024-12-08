"use client"
import { logout } from "@/hooks/actions"
import { useRouter } from "@/navigation"
import { useEffect } from "react"
import useAppStore from "../useAppStore"

export const runtime = "edge"

export default function SignOutPage() {
  const router = useRouter()
  const clearUser = useAppStore((state) => state.clearUser)
  useEffect(() => {
    logout().then(() => {
      clearUser()
    })
  }, [router, clearUser])
  return null
}
