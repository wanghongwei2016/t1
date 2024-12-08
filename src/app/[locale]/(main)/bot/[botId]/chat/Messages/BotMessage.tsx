import { ChatMessage, MessageType } from "@/lib/typing"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Remark } from "react-remark"
import Action from "../Action"
import AudioPlayer from "../AudioPlayer"
import TextImage from "./TextImage"
import PhotoViewer from "./PhotoDialog"
import URLImage from "./URLImage"
import { solidColorImageDataURL } from "./solidColorImageDataURL"
import continueIcon from "@/assets/continue.png"
import { useTranslations } from "next-intl"

export default function BotMessage({
  genVoice,
  genImage,
  genText,
  genVideo,
  action,
  message,
  autoPlay,
  isLast,
  continueFn,
  waiting,
}: {
  genVoice: (msg_seq: number) => void
  genImage: (msg_seq: number) => void
  genText: (msg_seq: number) => void
  genVideo: (msg_seq: number) => void
  action: boolean
  message: ChatMessage
  autoPlay: boolean
  isLast: boolean
  continueFn: Function
  waiting: boolean
}) {
  const t = useTranslations()
  const { msg_type, content, msg_seq } = message
  const [loadingImage, setLoadingImage] = useState(false)
  useEffect(() => {
    if (message.msg_type === MessageType.Text && message.content.TextImage) {
      setLoadingImage(false)
    }
  }, [message])
  return (
    <>
      <div className="flex">
        <div className="relative flex max-w-[66.67%] flex-col gap-2 sm:max-w-[88%]">
          {(msg_type === MessageType.Text ||
            msg_type === MessageType.AUDIO) && (
            <>
              <div
                className={cn(
                  "relative rounded-2xl rounded-bl-none bg-[#333] p-4"
                )}
              >
                {msg_type === MessageType.Text && (
                  <div>
                    <div className="flex justify-between space-x-[26px] overflow-hidden">
                      <span className="min-w-0 flex-1">
                        <Remark
                          rehypeReactOptions={{
                            components: {
                              em({ children }: any) {
                                return (
                                  <em className="text-[#979797]">{children}</em>
                                )
                              },
                              img({ src, alt }: any) {
                                return (
                                  <div className="relative h-[400px]">
                                    <PhotoViewer photo={src}>
                                      <Image
                                        layout="fill"
                                        src={src}
                                        alt={alt}
                                        className="rounded-lg"
                                        style={{ objectFit: "contain" }}
                                        unoptimized
                                      />
                                    </PhotoViewer>
                                  </div>
                                )
                              },
                            },
                          }}
                        >
                          {content.Text.replace(/\\n/g, "\n")
                            .replace(/\* +/g, "*&nbsp;")
                            .replace(/ +\*/g, "&nbsp;*")}
                        </Remark>
                      </span>
                    </div>
                    {msg_seq !== -1 && content.TextVoice && (
                      <div className="absolute top-0 flex -translate-y-1/2 items-center space-x-1 rounded-full bg-white px-2 py-1">
                        <AudioPlayer
                          src={content.TextVoice}
                          genVoice={() => genVoice(msg_seq)}
                          autoPlay={autoPlay}
                        />
                        {content.TextVoiceSecond && (
                          <span className="text-[#F084E0]">
                            {(content.TextVoiceSecond / 1000).toFixed(0)}“
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {msg_type === MessageType.AUDIO && (
                  <span className="flex space-x-4">
                    <span>{content.Second}</span>
                    <AudioPlayer
                      autoPlay={autoPlay}
                      src={content.URL}
                      genVoice={() => genVoice(msg_seq)}
                    />
                  </span>
                )}
              </div>
              {action && (
                <Action
                  waiting={waiting}
                  genImage={() => {
                    setLoadingImage(true)
                    genImage(msg_seq)
                  }}
                  genText={() => genText(msg_seq)}
                  genVideo={() => genVideo(msg_seq)}
                  received={message.received}
                />
              )}
            </>
          )}
          {msg_type === MessageType.URL && <URLImage content={content} />}
          {msg_type === MessageType.Text && (
            <TextImage
              loadingImage={loadingImage}
              content={content}
              key={content.TextImage}
            />
          )}
          {/* {action && (
            <Action
              waiting={waiting}
              genImage={() => {
                setLoadingImage(true)
                genImage(msg_seq)
              }}
              genText={() => genText(msg_seq)}
              genVideo={() => genVideo(msg_seq)}
              received={message.received}
            />
          )} */}
        </div>
        <div className="flex-1"></div>
      </div>
      {/* {isLast && (
        <div
          className="f fx fcc f12 hm relative w-fit bg-[#333] px-3 py-2"
          style={{ borderRadius: "17px" }}
          onClick={() => {
            continueFn()
          }}
        >
          <Image src={continueIcon} alt="continue" width={14} height={14} />
          <span className="ml-2 text-white">{t("continue")}</span>
        </div>
      )} */}
    </>
  )
}
