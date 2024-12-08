import { create } from "zustand"

export const useDiamondProudctStore = create<{
  open: boolean
  toggle: (open?: boolean) => void
}>((set) => ({
  open: false,
  toggle: (diamond?: boolean) =>
    set((state) => ({ open: diamond ?? !state.open })),
}))
export const useVipProudctStore = create<{
  open: boolean
  toggle: (open?: boolean) => void
}>((set) => ({
  open: false,
  toggle: (diamond?: boolean) =>
    set((state) => ({ open: diamond ?? !state.open })),
}))

export const useSigninConfirmStore = create<{
  open: boolean
  toggle: (open?: boolean) => void
}>((set) => ({
  open: false,
  toggle: (open?: boolean) => set((state) => ({ open: open ?? !state.open })),
}))
