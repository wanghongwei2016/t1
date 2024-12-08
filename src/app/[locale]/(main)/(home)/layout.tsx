import { ScrollArea } from "@/components/ScrollArea"
import { Tag } from "@/lib/typing"
import request from "@/server-request"
import Home from "./Home"

import ServiceTermsAndPrivacyPolicy from "@/components/ServiceTermsAndPrivacyPolicy"

async function fetchTagsData() {
  const resp = await request("/ai/tags")
  return resp.data
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const tags: Tag[] = await fetchTagsData()
  return (
    <ScrollArea className="flex-1 self-stretch">
      <div className="m-auto w-10/12 sm:mx-2 sm:w-auto">
        <Home tags={tags} />
        {children}
      </div>
      <ServiceTermsAndPrivacyPolicy mode="footer"></ServiceTermsAndPrivacyPolicy>
    </ScrollArea>
  )
}
