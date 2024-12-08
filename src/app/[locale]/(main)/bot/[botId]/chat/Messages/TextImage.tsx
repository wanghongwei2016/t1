import { ImageOff, Loader } from "lucide-react"
import Image from "next/image"
import { TextContent } from "@/lib/typing"
import { solidColorImageDataURL } from "./solidColorImageDataURL"
import { useEffect, useRef, useState } from "react"
import loadingGif from "./loading.gif"
import PhotoViewer from "./PhotoDialog"

function useTimeout(callback: () => void, delay: number | null) {
  const savedCallbck = useRef<() => void>()
  useEffect(() => {
    savedCallbck.current = callback
  })
  useEffect(() => {
    function tick() {
      savedCallbck.current!()
    }
    if (delay !== null) {
      let id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}

export default function TextImage({
  loadingImage,
  content,
}: {
  loadingImage: boolean
  content: TextContent
}) {
  const [isTimeout, setIsTimeout] = useState<boolean>(false)
  useTimeout(
    () => {
      setIsTimeout(true)
    },
    loadingImage ? 30 * 1000 : null
  )
  if (isTimeout) {
    return (
      <div className="flex h-[150px] w-[150px] items-center justify-center bg-[#333]">
        <ImageOff className="text-[#bc97d9]" />
      </div>
    )
  }
  return loadingImage ? (
    <div className="flex h-[150px] w-[150px] items-center justify-center">
      <Image src={loadingGif} alt="" width={150} height={150} />
    </div>
  ) : (
    content.TextImage && (
      <PhotoViewer photo={content.TextImage}>
        <Image
          src={content.TextImage}
          placeholder={solidColorImageDataURL}
          alt=""
          width={150}
          height={150}
          unoptimized
        />
      </PhotoViewer>
    )
  )
}
