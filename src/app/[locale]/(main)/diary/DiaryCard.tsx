import Image from "next/image"
import { cn } from "@/lib/utils"
import { Star, ThumbsUp } from "lucide-react"
import { useTranslations } from "next-intl"

export default function DiaryCard({
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
    <div className="space-y-4 rounded-[21px] border-2 border-white p-5">
      <div className="flex justify-between">
        <span className="flex items-center space-x-3">
          <Image
            src={diary.avatar_url}
            alt=""
            width={45}
            height={45}
            className="rounded-full"
          />
          <span>{diary.username}</span>
        </span>
        <button className="rounded-full bg-white px-7 py-2 text-lg text-[#373F80]">
          {t("go-chat")}
        </button>
      </div>
      <div>
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
      <div className="flex justify-end space-x-11">
        <div className="flex space-x-2">
          <Star />
          <span>1.2k</span>
        </div>
        <div className="flex space-x-2">
          <ThumbsUp />
          <span>1.2k</span>
        </div>
      </div>
    </div>
  )
}
