"use client"
import Filter from "./Filter"
import { Tag } from "@/lib/typing"
import useActiveTags from "./useActiveTags"
import useUpdateSearch from "../useUpdateSearch"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import useAppStore from "../../useAppStore"
import { ChevronDown, ChevronUp } from "lucide-react"
import { CloseComponent } from "@/components/common"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu"
import { useTranslations } from "next-intl"
import { useSearchParams, useParams } from "next/navigation"

function parseTags(tags: any[], activeTags: number[]) {
  const ts: any[] = []
  tags.forEach((tag: any) => {
    if (activeTags.includes(tag.id)) {
      ts.push(tag)
    }
  })
  tags.forEach((tag: any) => {
    if (!activeTags.includes(tag.id)) {
      ts.push(tag)
    }
  })
  return ts
}

export default function TagFilters({ tags }: { tags: Tag[] }) {
  const locale: string = useParams().locale + ""
  const updateSearch = useUpdateSearch()
  const activeTags = useActiveTags()
  const [collapsed, setCollapsed] = useState(true)
  const [showTagSelectDialogH5, setShowTagSelectDialogH5] = useState(false)
  const { sessions, sm } = useAppStore((state) => state)
  const t = useTranslations("home")
  const search = useSearchParams()
  const gender = search.get("gender") ? Number(search.get("gender")) : null
  return !sm ? (
    <div className="flex space-x-3">
      <div
        className={cn(
          "flex flex-1 gap-3",
          collapsed ? "max-h-[45px] overflow-hidden" : "flex-wrap"
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Filter onClick={() => {}} active={gender !== null}>
              {gender === null && t("gender")}
              {gender === 1 && t("male")}
              {gender === 2 && t("female")}
              {gender === 3 && t("non-binary")}
              <ChevronDown className="ml-3" />
            </Filter>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/80 text-white">
            <DropdownMenuItem
              className="cursor-pointer justify-center"
              onClick={() => {
                updateSearch({ gender: "" })
              }}
            >
              {t("all")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer justify-center"
              onClick={() => {
                updateSearch({ gender: "1" })
              }}
            >
              {t("male")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer justify-center"
              onClick={() => {
                updateSearch({ gender: "2" })
              }}
            >
              {t("female")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer justify-center"
              onClick={() => {
                updateSearch({ gender: "3" })
              }}
            >
              {t("non-binary")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {tags && tags.map
          ? tags.map((tag) => (
              <Filter
                onClick={() => {
                  updateSearch({
                    tags: activeTags.some((t) => t === tag.id)
                      ? ""
                      : tag.id.toString(),
                  })
                }}
                active={activeTags.length === 1 && activeTags[0] === tag.id}
                key={tag.id}
              >
                {tag.l10n_label[locale] || tag.label}
              </Filter>
            ))
          : null}
        {!collapsed && (
          <Filter
            onClick={() => {
              setCollapsed(!collapsed)
            }}
            active={false}
          >
            <ChevronUp />
          </Filter>
        )}
      </div>
      {collapsed && (
        <Filter
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          active={false}
        >
          <ChevronDown />
        </Filter>
      )}
    </div>
  ) : (
    <>
      <div className="f fx fcc f12 relative">
        <div
          className={
            !activeTags.length
              ? "roll-item oh br relative mr-3 bg-[#613254] px-3 text-white"
              : "roll-item oh br relative mr-3 bg-[#626061] px-3 text-white"
          }
          style={{ height: "24px", lineHeight: "24px" }}
          onClick={() => {
            updateSearch({
              tags: "",
            })
          }}
        >
          All
        </div>
        <div className="f-1 roll f fx fcc relative" style={{ height: "24px" }}>
          {tags &&
            parseTags(tags, activeTags).map((tag) => (
              <div
                key={tag.id}
                className={
                  activeTags.length && activeTags.includes(tag.id)
                    ? "roll-item oh br relative mr-3 bg-[#613254] px-3 text-white"
                    : "roll-item oh br relative mr-3 bg-[#626061] px-3 text-white"
                }
                style={{ height: "24px", lineHeight: "24px" }}
              >
                {tag.l10n_label[locale] || tag.label}
              </div>
            ))}
        </div>
        <div
          className="f fx fcc fmc relative px-3"
          style={{ height: "24px" }}
          onClick={() => {
            setShowTagSelectDialogH5(true)
          }}
        >
          {t("all")}
        </div>
      </div>
      {showTagSelectDialogH5 && (
        <TagSelectDialogH5
          activeTags={activeTags}
          tags={tags}
          close={() => {
            setShowTagSelectDialogH5(false)
          }}
          ok={(selectedTags: number[]) => {
            updateSearch({
              tags: selectedTags.join(","),
            })
          }}
        />
      )}
    </>
  )
}

function TagSelectDialogH5({
  tags,
  close,
  ok,
  activeTags,
}: {
  tags: any[]
  close: Function
  ok: Function
  activeTags: number[]
}) {
  const locale: string = useParams().locale + ""
  const [selectedTag, setSelectedTag] = useState<any>(null)
  const t = useTranslations("setting")
  const tt = useTranslations("home")
  const [selectedTags, setSelectedTags] = useState([...activeTags])
  return (
    <>
      <div>
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-40"
          style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          onClick={() => {
            close()
          }}
        ></div>
        <div
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#363234] p-3"
          style={{
            width: "90%",
            borderColor: "rgba(255,255,255,0.5)",
            borderWidth: "1px",
            borderRadius: "15px",
          }}
        >
          <div className="f fx fcc relative">
            <div className="f16 f-1 f fx fcc fmc relative">{tt("all")}</div>
            <CloseComponent close={close} />
          </div>
          <div className="oya f12 relative mt-3" style={{ maxHeight: "50vh" }}>
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={
                  selectedTags.includes(tag.id)
                    ? "oh br relative mb-3 mr-3 inline-block bg-[#613254] px-3 text-white"
                    : "oh br relative mb-3 mr-3 inline-block bg-[#626061] px-3 text-white"
                }
                style={{ height: "24px", lineHeight: "24px" }}
                onClick={() => {
                  if (selectedTags.includes(tag.id)) {
                    setSelectedTags(
                      selectedTags.filter((item) => item != tag.id)
                    )
                  } else {
                    setSelectedTags([...selectedTags, tag.id])
                  }
                }}
              >
                {tag.l10n_label[locale] || tag.label}
              </span>
            ))}
          </div>

          <div className="f fx fcc fmc relative mt-5">
            <div
              className="f fx fcc fmc oh br hm relative bg-[#2B6FF9]"
              style={{ width: "312px", height: "43px" }}
              onClick={() => {
                ok(selectedTags)
                close()
              }}
            >
              {t("space_01")}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
