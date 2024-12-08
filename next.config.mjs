import createNextIntlPlugin from "next-intl/plugin"
import { withSentryConfig } from "@sentry/nextjs"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV !== "development",
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  transpilePackages: ["tailwind-merge","@radix-ui"],
}

export default withSentryConfig(withNextIntl(nextConfig))
