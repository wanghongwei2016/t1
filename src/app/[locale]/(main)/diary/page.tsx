"use client"
import useDiaries from "./useDiaries"
import { ScrollArea } from "@/components/ScrollArea"
import RightSide from "./RightSide"
import DiaryCard from "./DiaryCard"

export const runtime = "edge"

export default function Diary() {
  const diaries = useDiaries()
  return (
    <div className="flex w-9/12 space-x-5 overflow-hidden p-1">
      <ScrollArea className="flex-1">
        <div className="space-y-4">
          {diaries.map((diary) => (
            <DiaryCard diary={diary} key={diary.id} />
          ))}
        </div>
      </ScrollArea>
      <RightSide />
    </div>
  )
}
