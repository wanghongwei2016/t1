"use client"
import BuyDiamonds from "./profile/DiamondProducts"
import Renew from "./profile/Renew"
import RenewH5 from "./profile/RenewH5"
import useAppStore from "../useAppStore"

export default function Products() {
  const user = useAppStore((state) => state.user?.me)
  const sm = useAppStore((state) => state.sm)
  return user ? (
    <>
      <BuyDiamonds />
      {sm ? <RenewH5 /> : <Renew />}
    </>
  ) : null
}
