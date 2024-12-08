import { URLImageContent } from "@/lib/typing"
import Image from "next/image"
import PhotoViewer from "./PhotoDialog"
import { solidColorImageDataURL } from "./solidColorImageDataURL"
import useAppStore from "@/app/[locale]/useAppStore"
import {
  useDiamondProudctStore,
  useVipProudctStore,
} from "@/app/[locale]/(main)/useProudctStore"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function URLImage({ content }: { content: URLImageContent }) {
  const user = useAppStore((state) => state.user)!
  const shouldBlurImage = content.ImageBlur && user?.me.vip_level === 0
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const toggleDiamond = useDiamondProudctStore((state) => state.toggle)
  const [loaded, setLoaded] = useState(false)
  return shouldBlurImage ? (
    <div className="relative cursor-pointer" onClick={() => toggleVip()}>
      <div className="h-[150px] w-[150px] bg-gray-200" />
      <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-xl">
        <span className="text-sm text-gray-600">VIP content</span>
      </div>
    </div>
  ) : (
    <PhotoViewer photo={content.URL}>
      <Image
        src={content.URL}
        alt=""
        placeholder={solidColorImageDataURL}
        width={150}
        height={150}
        unoptimized
      />
    </PhotoViewer>
  )
}
