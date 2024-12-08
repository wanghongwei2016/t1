import { Session, User } from "@/lib/typing"
import request from "@/request"
import { createStore } from "zustand/vanilla"

export interface UserSession {
  me: User
  session_key: string
}

export interface SignInDetail {
  activity: {
    today_is_checked_in: boolean
  }
}

export interface AppState {
  user: UserSession | null
  setUser: (user: UserSession) => void
  clearUser: () => void
  sessions: Session[]
  fetchSessions: () => Promise<void>
  signInDetail: SignInDetail | null
  fetchSignInDetail: () => Promise<void>
  sm: boolean
  setSm: Function
}

async function fetchSessions() {
  const {
    data: { session },
  }: {
    data: { session: Session[] | null }
  } = await request("/chat/session/list")
  return (session || []).sort(
    (a, b) => b.last_msg.updated_on - a.last_msg.updated_on
  )
}

async function fetchSignInDetail() {
  const { data } = await request("/activity/signInDetail")
  return data
}

const appStore = createStore<AppState>((set) => {
  const storedUser =
    typeof window === "undefined" ? null : localStorage.getItem("user")
  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    setUser: (user: UserSession) => {
      localStorage.setItem("user", JSON.stringify(user))
      set({ user })
    },
    clearUser: () => {
      typeof window !== "undefined" && localStorage.removeItem("user")
      set({ user: null, sessions: [] })
    },
    sessions: [],
    setSessions: (sessions: Session[]) => {
      set({ sessions })
    },
    fetchSessions: () => {
      return fetchSessions().then((sessions) => set({ sessions }))
    },
    signInDetail: null,
    fetchSignInDetail: () => {
      return fetchSignInDetail().then((signInDetail) => set({ signInDetail }))
    },
    sm: false,
    setSm: (sm: boolean) => {
      set({ sm })
    },
  }
})

export default appStore
