"use client"
import { useStore } from "zustand"
import appStore, { AppState } from "./appStore"

function useAppStore(): AppState
function useAppStore<T>(selector: (state: AppState) => T): T
function useAppStore<T>(selector?: (state: AppState) => T) {
  return useStore(appStore, selector!)
}

export default useAppStore
