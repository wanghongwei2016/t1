"use client"
import SearchInput from "@/components/SearchInput"
import useDiaries from "./useDiaries"
import DiaryCard from "./DiaryCard"
import { ScrollArea } from "@/components/ScrollArea"
import FeaturedDiary from "./FeaturedDiary"
import { useTranslations } from "next-intl"

export default function RightSide() {
  const diaries = useDiaries()
  const t = useTranslations("diary")
  return (
    <div className="flex w-[320px] flex-col divide-y-2 overflow-hidden">
      <div className="pb-11">
        <SearchInput handleSearch={() => {}} className="pl-5" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <span className="mb-[25px] mt-8 text-[22px] font-medium leading-[30px]">
          {t("recommended-diaries")}
        </span>
        <ScrollArea className="flex-1">
          <div className="space-y-2">
            {diaries.map((diary) => (
              <FeaturedDiary diary={diary} key={diary.id} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
