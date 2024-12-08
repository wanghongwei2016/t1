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

export function Profile({
  user,
  moreData,
}: {
  user: User
  moreData: MoreData<Bot>
}) {
  const router = useRouter()
  const t = useTranslations("me")
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const toggleDiamond = useDiamondProudctStore((state) => state.toggle)
  const vipTitles = useVipTitle()
  return user ? (
    <>
      <ScrollArea className="self-stretch sm:hidden">
        <div className="mx-auto mb-20 mt-10 flex w-10/12 flex-1 divide-x-2 divide-[rgba(255,255,255,.5)] rounded-3xl border-2 border-[rgba(255,255,255,.5)] py-7">
          <div className="box-content flex w-[310px] flex-col items-stretch gap-5 px-7 pt-10">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="h-[218px] w-[218px] rounded-full border-[9px] border-transparent bg-clip-border bg-origin-border [background-image:linear-gradient(180deg,rgba(255,220,142,1),rgba(255,147,47,1))]">
                  <Image
                    src={user.avatar_url}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-full"
                    unoptimized
                  />
                </div>
                <UploadDialog user={user}>
                  <Image
                    className="absolute -top-2 right-2 cursor-pointer"
                    src={photoIcon}
                    alt=""
                    width={62}
                    height={62}
                  />
                </UploadDialog>
              </div>
              <div className="flex h-[45px] items-center space-x-2">
                <span className="text-3xl">{user.username}</span>
                <EditUserInfoDialog user={user}>
                  <Image
                    className="cursor-pointer"
                    src={EditIcon}
                    alt=""
                    width={30}
                    height={30}
                  />
                </EditUserInfoDialog>
              </div>
            </div>
            <div
              className="flex cursor-pointer items-center justify-between rounded-[20px] bg-[rgba(255,255,255,0.29)] px-5 py-2"
              onClick={() => toggleDiamond()}
            >
              <Image src={count} alt="" width={65} height={65} />
              <div className="text-center">
                <div className="text-xl">{t("diamond-balance")}</div>
                <div className="text-3xl">{user.diamond}</div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[20px] bg-[rgba(255,255,255,0.29)] px-5 py-2">
              <Image src={chatIcon} alt="" width={65} height={65} />
              <div className="text-right">
                <div className="text-base">
                  {t("text")}：{user.text_number}
                </div>
                {/* <div className="text-base">
              {t("image")}：{user.image_number}
            </div> */}
                {/* <div className="text-base">{t("video")}：99</div> */}
              </div>
            </div>
            <div className="relative flex flex-col rounded-[20px] pb-[15px] pl-[18px] pr-[15px] pt-[22px] text-black [background:linear-gradient(165deg,#FAAC40_0%,#F6A842_100%)]">
              {user.vip_level !== 0 && (
                <div className="absolute right-0 top-0 flex h-[33px] items-center rounded-bl-[20px] rounded-tr-[20px] bg-[#A37F29] bg-[linear-gradient(115deg,#C07F27_0%,#A37F29_44%,#FFDF3C_100%)] px-2 text-base text-white">
                  {vipTitles[user.vip_level]}
                </div>
              )}
              <span className="text-2xl font-medium">
                {user.vip_level === 0
                  ? t("member-not-activated")
                  : t("member-activated")}
              </span>
              <div>
                {user.vip_level !== 0 && (
                  <>
                    {format(fromUnixTime(user.vip_expire_time), "yyyy-MM-dd")}
                    {t("expires")}
                  </>
                )}
                &nbsp;
              </div>
              <button
                onClick={() => toggleVip()}
                className="ml-auto rounded-full bg-black px-8 py-1.5 text-2xl font-medium text-white"
              >
                {t("activate")}
              </button>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-medium">{user.city_name}</span>
              <span className="text-xl font-medium">{user.email}</span>
            </div>
            <div className="flex justify-around">
              <Button
                variant="outline"
                onClick={async () => {
                  router.push("/signout")
                }}
              >
                {t("log-out")}
              </Button>
              <DeleteAccountDialog>
                <Button variant="outline">{t("delete-account")}</Button>
              </DeleteAccountDialog>
            </div>
          </div>
          <Tabs
            defaultValue="fav-bots"
            className="flex flex-1 flex-col items-stretch px-10"
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
        <ServiceTermsAndPrivacyPolicy mode="footer"></ServiceTermsAndPrivacyPolicy>
      </ScrollArea>
    </>
  ) : (
    <ScrollArea>
      <ServiceTermsAndPrivacyPolicy mode="footer"></ServiceTermsAndPrivacyPolicy>
    </ScrollArea>
  )
}
