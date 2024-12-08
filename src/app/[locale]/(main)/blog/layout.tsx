import { ReactNode } from "react"
import { ScrollArea } from "@/components/ScrollArea"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <ScrollArea className="self-stretch">
      <div className="blog-main relative mx-auto mt-10 min-h-0 w-10/12 sm:mt-5 sm:w-full">
        {children}
      </div>
    </ScrollArea>
  )
}
