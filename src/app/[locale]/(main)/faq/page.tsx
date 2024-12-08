"use client"

import { useParams } from "next/navigation"

import Article_ar from "./article/ar"
import Article_de from "./article/de"
import Article_en from "./article/en"
import Article_es from "./article/es"
import Article_fil from "./article/fil"
import Article_fr from "./article/fr"
import Article_hi from "./article/hi"
import Article_id from "./article/id"
import Article_it from "./article/it"
import Article_ja from "./article/ja"
import Article_ko from "./article/ko"
import Article_pl from "./article/pl"
import Article_pt from "./article/pt"
import Article_ru from "./article/ru"
import Article_zh from "./article/zh"

const articles: { [key: string]: any } = {
  ar: Article_ar,
  de: Article_de,
  en: Article_en,
  es: Article_es,
  fil: Article_fil,
  fr: Article_fr,
  hi: Article_hi,
  id: Article_id,
  it: Article_it,
  ja: Article_ja,
  ko: Article_ko,
  pl: Article_pl,
  pt: Article_pt,
  ru: Article_ru,
  zh: Article_zh,
}

export const runtime = "edge"

export default function FaqPage() {
  const locale: string = useParams().locale + ""
  const Article = articles[locale.split("-")[0]]
  return (
    <div className="scrollbar relative w-full flex-1 overflow-y-auto">
      <Article></Article>
    </div>
  )
}
