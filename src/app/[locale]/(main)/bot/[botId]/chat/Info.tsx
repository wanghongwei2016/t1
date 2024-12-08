"use client"
import { ScrollArea } from "@/components/ScrollArea"
import { Bot } from "@/lib/typing"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import Image, { StaticImageData } from "next/image"
import { useParams } from "next/navigation"
import useBotInfo from "./useBotInfo"
import up from "@/assets/up.png"
import { useId, useLayoutEffect, useEffect, useRef, useState } from "react"
import left2 from "@/assets/left2.png"
import {
  useIdentityStore,
  IdentityButton1,
  IdentityCard,
} from "@/components/Identity"

let initialOpen = false

export default function Info() {
  const [open, setOpen] = useState(initialOpen)
  const {
    identityStep,
    currentIdentity,
    identityList,
    initIdentityList,
    setIdentityStep,
  } = useIdentityStore()
  const botInfo = useBotInfo()
  const t = useTranslations("chat")
  const tt = useTranslations("identity")
  const { botId }: { botId: string } = useParams()
  useEffect(() => {
    initialOpen = open
  }, [open])
  return (
    <div
      className="relative"
      style={{
        width: open ? "290px" : "60px",
        transform: "all 0.35s linear",
      }}
    >
      {!open ? (
        <div className="f fx fcc fme relative px-1 py-3">
          <div
            className="f fx fcc fmc relative bg-[#3B3A3A]"
            style={{ width: "55px", height: "55px", borderRadius: "10px" }}
            onClick={() => {
              setOpen(!open)
            }}
          >
            <Image
              className={!open ? "hm" : "hm rotate-180"}
              src={left2}
              alt=""
              width={28}
              height={28}
            ></Image>
          </div>
        </div>
      ) : null}

      {open ? (
        <div
          className="f fx fcc fmc absolute right-full top-1/2 bg-[#5B5959]"
          style={{
            width: "20px",
            height: "80px",
            borderRadius: "10px 0px 0px 10px",
          }}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <Image
            className={open ? "rotate-90" : "-rotate-90"}
            src={up}
            alt=""
            width={16}
            height={16}
          />
        </div>
      ) : null}
      {open ? (
        <ScrollArea className="h-full">
          <div className="flex flex-col items-stretch bg-[#242323]">
            <div className="px-2.5 pt-2.5">
              <Link href={`/bot/${botId}`}>
                <Image
                  src={botInfo.avatar_url}
                  alt={botInfo.username}
                  width={270}
                  height={343}
                  unoptimized
                />
              </Link>
            </div>
            <div
              className="info-name h-[60px] overflow-hidden text-ellipsis whitespace-nowrap px-5 text-3xl font-medium leading-[60px]"
              title={botInfo.username}
            >
              {botInfo.username}
            </div>
            <div className="p-4 text-sm text-[#646464]">
              <div className="mb-7">{botInfo.description}</div>
              {/* <section
            aria-labelledby="personality-attributes"
            className="mb-4 border-b border-[#979797]"
          >
            <div id="personality-attributes" className="mb-4">
              {t("personality-attributes")}
            </div>
            <div className="mb-6 flex space-x-2.5">
              <Attribute
                icon={personality}
                term={t("personality")}
                value="Nympho"
              />
              <Attribute
                icon={occupation}
                term={t("occupation")}
                value="Teacher"
              />
            </div>
            <div className="mb-8 flex space-x-2.5">
              <Attribute icon={hobbies} term={t("hobbies")} value="Artr" />
              <Attribute
                icon={relationship}
                term={t("relationship")}
                value="Sex Friend"
              />
            </div>
          </section> */}
              {/* <section aria-labelledby="physical-attributes border-b border-[#979797]">
            <div id="physical-attributes" className="mb-[18px]">
              {t("physical-attributes")}
            </div>
            <div className="mb-6 flex flex-wrap space-x-2">
              <div className="flex-1">
                <Attribute icon={body} term={t("body")} value="Slim" />
              </div>
              <div className="flex-1">
                <Attribute icon={age} term={t("age")} value="32" />
              </div>
            </div>
            <div className="mb-5 flex-1">
              <Attribute
                icon={ethnicity}
                term={t("ethnicity")}
                value="Caucasian"
              />
            </div>
          </section> */}
            </div>
            <div className="f18 relative mx-3 mb-3">{tt("space_01")}</div>
            {currentIdentity ? (
              <div className="relative">
                <IdentityCard
                  mode="info"
                  identity={currentIdentity}
                  selected={false}
                />
              </div>
            ) : (
              <IdentityButton1 />
            )}
            <div className="relative mt-3"></div>
          </div>
        </ScrollArea>
      ) : null}
    </div>
  )
}
function Attribute({
  icon,
  term,
  value: value,
}: {
  icon: StaticImageData
  term: string
  value: string
}) {
  const id = useId()
  return (
    <div className="flex flex-1 space-x-1.5 text-xs font-medium">
      <Image src={icon} alt="" width={37} height={37} />
      <dl>
        <dt id={id}>{term}</dt>
        <dd aria-labelledby={id} className="text-[#979797]">
          {value}
        </dd>
      </dl>
    </div>
  )
}
