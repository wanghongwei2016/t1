import { Metadata } from "next"
import PageClient from "./pageClient"
import { getMessage } from "@/lib/utilsForServer"
export const runtime = "edge"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return {
    title: await getMessage(locale, "metadata.title"),
    description: await getMessage(locale, "metadata.description"),
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: { keyword: string; gender: string; is_nsfw: number }
}) {
  return <PageClient searchParams={searchParams} />
}
