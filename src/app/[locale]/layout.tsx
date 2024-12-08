import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import { Suspense } from "react"
import bg from "../bg.png"
import { redirect } from "next/navigation"
import Script from "next/script"
import SeoBody from "./SeoBody"
import GlobalAudioPlayer, {
  GlobalAudioPlayerData,
} from "@/components/GlobalAudioPlayer"
import {
  ConfirmComponent,
  UploadImageComponent,
  PromptComponent,
  AlertComponent,
} from "@/components/common"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Luna",
  description: "Always stay with you.",
}
//console.log(process.env)
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  // if (locale !== "en") {
  //   redirect("/en")
  // }
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <head>
        <Script
          src={"/init.js?" + Date.now()}
          strategy="beforeInteractive"
          async
        ></Script>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="relative flex h-screen flex-col items-center justify-start text-white">
            <Image
              alt=""
              src={bg}
              placeholder="blur"
              quality={75}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <main className="absolute inset-0 flex min-h-0 flex-1 flex-col bg-[rgba(0,0,0,.42)]">
              <Suspense>{children}</Suspense>
            </main>
          </div>
        </NextIntlClientProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token":"1ef9c5bd90e647d9b2a77b14c691c92d"}'
            />
            <Script id="facebook-sdk" strategy="lazyOnload">
              {`
                window.fbAsyncInit = function() {
                  FB.init({
                    appId      : '8542329022494934',
                    xfbml      : true,
                    version    : 'v20.0'
                  });
                  FB.AppEvents.logPageView();
                };
                (function(d, s, id){
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) {return;}
                  js = d.createElement(s); js.id = id;
                  js.src = "https://connect.facebook.net/en_US/sdk.js";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `}
            </Script>

            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '496369176710022');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=496369176710022&ev=PageView&noscript=1"
                alt=""
              />
            </noscript>
          </>
        )}
        <SeoBody locale={locale} />
        <GlobalAudioPlayer />
        <ConfirmComponent />
        <PromptComponent />
        <AlertComponent />
        <UploadImageComponent />
      </body>
    </html>
  )
}
