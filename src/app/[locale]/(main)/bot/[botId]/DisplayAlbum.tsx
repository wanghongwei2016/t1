import useAppStore from "@/app/[locale]/useAppStore"
import request from "@/request"
import { Heart } from "lucide-react"
import Image from "next/image"
import { startTransition, useState } from "react"
import { useSigninConfirmStore } from "../../useProudctStore"
import { Album } from "@/lib/typing"
import { likePhoto } from "@/hooks/actions"
import { useParams } from "next/navigation"

function useLike(
  album: Album,
  update: (isLiked: boolean, likeNumber: number) => void
) {
  const { botId }: { botId: string } = useParams()
  const user = useAppStore((state) => state.user)
  const [isLiked, setIsLiked] = useState(album.is_favorite ? true : false)
  const [likeNumber, setLikeNumber] = useState(() =>
    Number(album.like_number || 0)
  )
  const toggle = useSigninConfirmStore((state) => state.toggle)
  const like = async () => {
    if (user) {
      // startTransition(async () => {
        await likePhoto(botId, album.id)
        const nextIsLiked = !isLiked
        setIsLiked(nextIsLiked)
        const nextLikeNumber = Math.max(0, likeNumber + (isLiked ? -1 : 1))
        setLikeNumber(nextLikeNumber)
        update(nextIsLiked, nextLikeNumber)
      // })
    } else {
      toggle()
    }
  }
  return { isLiked, likeNumber, like }
}

export default function DisplayAlbum({
  album,
  update,
}: {
  album: Album
  update: (isLiked: boolean, likeNumber: number) => void
}) {
  const { sm } = useAppStore((state) => state)
  const { isLiked, likeNumber, like } = useLike(album, update)
  return (
    <div className={sm ? "f fy fcc fmc relative" : "relative"}>
      <Image
        className="relative"
        src={album.url}
        alt=""
        sizes="100vh"
        style={{
          width: sm ? "296px" : "auto",
          height: sm ? "403px" : "100%",
        }}
        width={600}
        height={300}
        unoptimized
      />
      <div
        className={
          sm
            ? "relative mt-3 flex flex-col items-center space-y-2"
            : "absolute -right-12 bottom-1/3 flex translate-x-full flex-col items-center space-y-2"
        }
      >
        <Heart
          onClick={() => {
            like()
          }}
          className="h-[50px] w-[50px] cursor-pointer"
          color="white"
          fill={isLiked ? "white" : ""}
        />
        <span className="text-xl">{likeNumber}</span>
      </div>
    </div>
  )
}
