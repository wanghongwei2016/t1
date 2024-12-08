import Image from "next/image"
import genImageIcon from "./genImage.png"
import genVideoIcon from "./genVideo.png"
import { RefreshCcw } from "lucide-react"
import genTextIcon from "./genText.png"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip"
import { useTranslations } from "next-intl"

export default function Action({
  genImage,
  genText,
  genVideo,
  received,
  waiting,
}: {
  genImage: () => void
  genText: () => void
  genVideo: () => void
  received: boolean | undefined
  waiting: boolean
}) {
  const t = useTranslations("chat")
  return (
    <div className="absolute bottom-0 left-full ml-4 flex w-40 items-center space-x-4 text-sm font-semibold">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          {/* <TooltipTrigger>
            <button onClick={genImage}>
              <Image src={genImageIcon} alt="" width={22} height={22} />
            </button>
          </TooltipTrigger> */}
          <TooltipContent side="bottom">
            <p>{t("generate-image-tooltip")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* <button onClick={genVideo}>
        <Image src={genVideoIcon} alt="" width={22} height={22} />
        </button> */}
      {received && !waiting && (
        <button onClick={genText} className="flex items-center">
          <Image
            src={genTextIcon}
            alt=""
            width={22}
            height={22}
            className="mr-1"
          />
          {t("regenerate")}
        </button>
      )}
    </div>
  )
}
