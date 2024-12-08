import Image from "next/image"
import { cn } from "@/lib/utils"
import { Star, ThumbsUp } from "lucide-react"
import { useTranslations } from "next-intl"

export default function FeaturedDiary({
  diary,
}: {
  diary: {
    album_number: number
    avatar_url: string
    birthday: number
    chat_number: string
    description: string
    gender: number
    has_video_album: number
    like_number: string
    tags: never[]
    id: number
    username: string
    images: string[]
  }
}) {
  const t = useTranslations("diary")
  return (
    <div className="space-y-2 rounded-[21px] border-2 border-white p-5">
      <div className="flex justify-between">
        <span className="flex items-center space-x-3">
          <Image
            src={diary.avatar_url}
            alt=""
            width={37}
            height={37}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xl">{diary.username}</span>
            <span className="text-sm">@Madder</span>
          </div>
        </span>
        <button className="h-7 rounded-full bg-white px-3 text-[#373F80]">
          {t("go-chat")}
        </button>
      </div>
      <div className="text-sm">
        你们班上来了一个神奇的机器，他会解答你的所有疑虑，你试图和他做朋友
      </div>
      <div
        className={cn({
          "grid grid-cols-2 gap-2": diary.images.length > 1,
          "flex items-stretch gap-2": diary.images.length === 1,
        })}
      >
        {diary.images.map((image, i) => (
          <div key={i} className="relative flex-1">
            <Image
              src={image}
              alt=""
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
