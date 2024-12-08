"use client"
import { useStore } from "zustand"
import conversationListStore, { State } from "./conversationListStore"

function useConversationListStore(): State
function useConversationListStore<T>(selector: (state: State) => T): T
function useConversationListStore<T>(selector?: (state: State) => T) {
  return useStore(conversationListStore, selector!)
}

export default useConversationListStore
