"use client"
import { Button } from "@/components/Button"
import { ScrollArea } from "@/components/ScrollArea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"
import { useRouter } from "@/navigation"
import { format, fromUnixTime } from "date-fns"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useDiamondProudctStore, useVipProudctStore } from "../useProudctStore"
import DeleteAccountDialog from "./DeleteAccountDialog"
import EditUserInfoDialog from "./EditUserInfoDialog"
import FavBots from "./FavBots"
import UploadDialog from "./UploadDialog"
import chatIcon from "./chatIcon.png"
import count from "./diamond.png"
import EditIcon from "./editIcon.png"
import photoIcon from "./photo.png"
import useVipTitle from "./useVipTitle"
import { Bot, MoreData, User } from "@/lib/typing"
import ServiceTermsAndPrivacyPolicy from "@/components/ServiceTermsAndPrivacyPolicy"
import setting from "@/assets/profile/setting.png"
import user_default from "@/assets/profile/user_default.png"
import profile_img from "@/assets/profile/profile.png"
import zuanshi from "@/assets/zuanshi.png"
import { Link } from "@/navigation"

export function ProfileH5({
  user,
  moreData,
}: {
  user: User
  moreData: MoreData<Bot>
}) {
  const router = useRouter()
  const t = useTranslations("me")
  const tt = useTranslations("product")
  const ttt = useTranslations("vipPopover")
  const tttt = useTranslations("task")
  const ttttt = useTranslations("home")
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const toggleDiamond = useDiamondProudctStore((state) => state.toggle)
  const vipTitles = useVipTitle()
  return user ? (
    <>
      <div className="f-1 f fy relative hidden w-full sm:flex">
        {/*  */}
        <div className="f fx fcc relative mx-2 py-2">
          <div className="relative">
            <Image
              className="oh br-full"
              src={user.avatar_url || user_default}
              alt=""
              width={60}
              height={60}
              unoptimized
            />
          </div>
          <div className="f-1 f fy fmb relative ml-2">
            <div className="relative">{user.username}</div>
            <div className="f fx fcc relative mt-2">
              <Image src={zuanshi} alt="" width={23} height={16} />
              <div className="f-1 relative"></div>
            </div>
          </div>
          <div className="f fy fmb fce relative">
            <Link href="/setting">
              <Image src={setting} alt="" width={22} height={22} />
            </Link>
            <div
              className="f12 oh br-sm relative mt-2 bg-[#3F3F3F] px-2 py-1"
              onClick={() => {
                router.push("/profile/setting")
              }}
            >
              {t("edit-user-info")}
            </div>
          </div>
        </div>
        <div className="f-1 oya relative">
          {/* 钻石 */}
          <div
            className="f fx fcc oh br relative mx-2 mt-2 border p-3"
            onClick={() => toggleDiamond()}
          >
            <Image src={chatIcon} alt="" width={35} height={35} />
            <div className="relative ml-2">{t("text")}：</div>
            <div className="f-1 relative ml-3">1</div>
            <div className="btn br px-2 py-1">{tt("buy")}</div>
          </div>
          {/* 会员 */}
          <div
            className="relative mx-2 mt-2 text-[#FFC872]"
            onClick={() => {
              toggleVip()
            }}
          >
            <Image src={profile_img} alt="" className="relative block" />
            <div className="f28 absolute" style={{ top: "30%", left: "30%" }}>
              {ttt("space_8")}
            </div>
            {user.vip_expire_time ? (
              <div className="f14 absolute" style={{ top: "70%", left: "30%" }}>
                {user.vip_expire_time} {t("expires")}
              </div>
            ) : (
              <div className="f14 absolute" style={{ top: "70%", left: "30%" }}>
                {ttt("space_10")}
              </div>
            )}

            <div
              className="f12 oh br absolute bg-[#3F415A] px-3 py-2"
              style={{ top: "30%", left: "75%" }}
            >
              {ttt("space_9")}
            </div>
          </div>
          {/* 奖励 */}
          <div
            className="oh br f fx relative mx-2 mt-3 p-2"
            style={{
              background: "linear-gradient(155deg, #9d4ae0 0%, #e151be 100%)",
            }}
            onClick={() => {
              router.push("/award")
            }}
          >
            <div className="f fx fcc fmc relative">
              <Image src={zuanshi} alt="" height={28} />
            </div>
            <div className="f-1 f fy fmb relative ml-2">
              <div className="f16 relative">{tttt("space_107")}</div>
              <div className="f10 relative">{tttt("space_108")}</div>
            </div>
            <div className="f fy fmb fce f12 relative">
              <div className="f fx fcc relative">
                <div className="relative">{ttttt("see-more")}</div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <div className="relative mt-3 f fx fcc f16 text-[#999999]">
        <div className="relative px-5 py-3 hm">喜欢</div>
        <div className="relative px-5 py-3 hm">创建</div>
        <div className="relative px-5 py-3 hm">私密</div>
      </div> */}
          {/*  */}
          <div className="f-1 oya relative">
            <Tabs
              defaultValue="fav-bots"
              className="flex flex-1 flex-col items-stretch px-2"
            >
              <TabsList>
                <TabsTrigger value="fav-bots">
                  {t("my-favorite-characters")}
                </TabsTrigger>
                {/* <TabsTrigger value="fav-diaries">
              {t("my-favorite-diaries")}
            </TabsTrigger> */}
              </TabsList>
              <TabsContent value="fav-bots">
                <FavBots moreData={moreData} />
              </TabsContent>
              <TabsContent value="fav-diaries"></TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  ) : (
    <ScrollArea>
      <ServiceTermsAndPrivacyPolicy mode="footer"></ServiceTermsAndPrivacyPolicy>
    </ScrollArea>
  )
}
