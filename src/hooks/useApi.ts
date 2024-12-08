"use client"
import { use, useSyncExternalStore } from "react"
import Store from "./Store"

interface API {
  (...args: any[]): Promise<any>
  clear(): void
}

export function useApi(store: Store, ...args: any[]): any {
  const promise = useSyncExternalStore(store.subscribe, () =>
    store.getSnapshot(...args)
  )
  const result = use(promise)
  return result
}
