import appStore from "@/app/[locale]/appStore"
import { conversationList } from "@/lib/chat"
import { Conversation } from "@/lib/typing"
import { createStore } from "zustand/vanilla"

export interface State {
  conversations: Conversation[]
  fetchConversations: () => void
}

const conversationListStore = createStore<State>((set) => ({
  conversations: [],
  fetchConversations: async () => {
    if (appStore.getState().user === null) {
      set({ conversations: [] })
      return
    }
    const conversations: Conversation[] = await conversationList()
    console.log("conversations", conversations)
    set({
      conversations: conversations,
    })
  },
}))

export default conversationListStore
