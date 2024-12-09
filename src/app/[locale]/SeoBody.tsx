"use server"

import { headers } from "next/headers"
import request from "@/server-request"
import blogList from "@/app/[locale]/(main)/blog/blogList"

export default async function SeoBody({ locale }: { locale: string }) {
  // try {
    const localePath = "en" == locale ? "/" : `/${locale}`

    const headersList = headers()
    const requestUrl: string = headersList.get("x-request-url") || ""
    const requestPath: string = headersList.get("x-request-path") || ""

    console.log("requestUrl", requestUrl)

    // 首页
    // if (localePath == requestPath) {
    //   const resp = await request("/ai/search", {
    //     body: { limit: 15 },
    //     headers: { "accept-language": locale },
    //   })
    //   return resp && resp.data && resp.data.users ? (
    //     <div>
    //       {resp.data.users.map((user: any) => (
    //         <div
    //           className="fixed"
    //           style={{ top: "300%", left: "300%", color: "rgba(0,0,0,0)" }}
    //           key={user.user_id}
    //         >
    //           <img src={user.avatar_url} alt="" />
    //           <h1>{user.username}</h1>
    //           {user.tags.map((tag: any) => (
    //             <div key={tag}>{tag}</div>
    //           ))}
    //           <p>{user.description}</p>
    //           <a
    //             href={`${localePath == "/" ? localePath : localePath + "/"}bot/${user.user_id}`}
    //           >
    //             View
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   ) : null
    // }

    // 机器人详情页
    // if (/\/bot\/\d+$/.test(requestPath)) {
    //   const id = requestUrl.substring(requestUrl.lastIndexOf("/") + 1)
    //   const resp = await request("/ai/view", {
    //     body: { user_id: id },
    //     headers: { "accept-language": locale },
    //   })
    //   return resp && resp.data && resp.data.user ? (
    //     <div
    //       className="fixed"
    //       style={{ top: "300%", left: "300%", color: "rgba(0,0,0,0)" }}
    //     >
    //       <img src={resp.data.user.avatar_url} alt="" />
    //       <h1>{resp.data.user.username}</h1>
    //       {resp.data.user.tags.map((tag: any) => (
    //         <div key={tag}>{tag}</div>
    //       ))}
    //       <p>{resp.data.user.description}</p>
    //     </div>
    //   ) : null
    // }

    // faq
  //   if (requestPath.endsWith("/faq")) {
  //     const FaqPage = require(
  //       `@/app/[locale]/(main)/faq/article/${locale.split("-")[0]}.tsx`
  //     )
  //     return (
  //       <div
  //         className="fixed"
  //         style={{ top: "300%", left: "300%", color: "rgba(0,0,0,0)" }}
  //       >
  //         {FaqPage.default()}
  //       </div>
  //     )
  //   }

  //   // blog
  //   if (requestPath.endsWith("/blog")) {
  //     return (
  //       <div
  //         className="fixed"
  //         style={{ top: "300%", left: "300%", color: "rgba(0,0,0,0)" }}
  //       >
  //         {blogList.map((item, i) => (
  //           <div key={i}>
  //             {/* <Image src={item.image} alt={item.title} /> */}
  //             <h1>{item.title}</h1>
  //             <p>{item.description}</p>
  //             <a
  //               href={`${localePath == "/" ? localePath : localePath + "/"}blog/${item.id}`}
  //             >
  //               View
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     )
  //   }

  //   if (/\/blog\/\d+$/.test(requestPath)) {
  //     const id = requestUrl.substring(requestUrl.lastIndexOf("/") + 1)

  //     const blogPage = require(
  //       `@/app/[locale]/(main)/blog/(blogs)/${id}/page.tsx`
  //     )
  //     return (
  //       <div
  //         className="fixed"
  //         style={{ top: "300%", left: "300%", color: "rgba(0,0,0,0)" }}
  //       >
  //         {blogPage.default()}
  //       </div>
  //     )
  //   }
  // } catch (error) {
  //   console.log(error)
  // }

  return <div></div>
}
