"use server"

import { locales } from "@/config"
import request from "@/server-request"

// import seoDataJson from "./seo_data.json"

// const seoData: { [key: string]: any } = seoDataJson

const messages: { [key: string]: any } = {}

locales.forEach(async (locale) => {
  messages[locale] = (await import(`../../messages/${locale}.json`)).default
})

export async function getMessage(
  locale: string,
  keys: string
): Promise<string> {
  // let message = (await import(`../../messages/${locale}.json`)).default
  let message = messages[locale]
  let result = message
  let ks = keys.split(".")
  for (let k of ks) {
    if (result && result[k]) {
      result = result[k]
    } else {
      return ""
    }
  }
  return result
}

export async function getSeoData(
  id: string,
  locale: string
): Promise<{ seo_title: string; seo_description: string }> {
  // 这个seo_data.json文件太大了，超出限制，所以先不加载
  // let seoData: { [key: string]: any } = (await import(`./seo_data.json`))

  const aiView = await request("/ai/view", {
    body: { user_id: id },
    headers: { "accept-language": locale },
  })

  return aiView && aiView.data && aiView.data.user
    ? {
        seo_title: aiView.data.user.username,
        seo_description: aiView.data.user.description,
      }
    : {
        seo_title: await getMessage(locale, "metadata.title"),
        seo_description: await getMessage(locale, "metadata.description"),
      }

  // let seoData: { [key: string]: any } | null = {}

  // return seoData && seoData[id] && seoData[id][locale]
  //   ? seoData[id][locale]
  //   : {
  //     seo_title: getMessage(locale, "metadata.title"),
  //     seo_description: getMessage(locale, "metadata.description"),
  //   }
}
