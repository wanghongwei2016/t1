import { ReactNode } from "react"
import ServiceTermsAndPrivacyPolicy from "@/components/ServiceTermsAndPrivacyPolicy"

export default function Layout({
  children,
  sessions,
}: {
  children: ReactNode
  sessions: React.ReactNode
}) {
  return (
    <>
      {/* <div className="flex min-h-0 w-10/12 flex-1 space-x-4"> */}
      {/* {sessions} */}
      {children}
      {/* </div> */}
      <div className="" style={{ height: "10px" }}></div>
      {/* <ServiceTermsAndPrivacyPolicy mode="footer"></ServiceTermsAndPrivacyPolicy> */}
    </>
  )
}
