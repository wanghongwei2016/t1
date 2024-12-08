import createMiddleware from "next-intl/middleware"
import { NextResponse } from "next/server"
import { locales, localePrefix } from "./config"

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix,
})

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix,
})

export function middleware(request: any) {
  // 你的自定义请求拦截逻辑代码
  // console.log('Request received:', request.url);

  // console.log("request", request)

  // 如果通过检查，继续处理请求
  const intlResponse = intlMiddleware(request) // 调用 next-intl 中间件

  // 将 URL 添加到响应头部
  intlResponse.headers.set("x-request-url", request.url)
  intlResponse.headers.set("x-request-path", request.nextUrl.pathname)

  // 你可以在这里继续对返回的响应进行修改
  // console.log('Intl Middleware response:', intlResponse);

  // 返回最终的响应
  return intlResponse
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
