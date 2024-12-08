import { Session } from "@/lib/typing"
import Auth from "./Auth"
import Header from "./Header"
import PayResultDialog from "./PayResult"
import Products from "./Products"
import SigninConfirm from "./SigninConfirm"
import HeaderFooter from "./HeaderFooter"
import HeaderTop from "./HeaderTop"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let sign = null,
    user = null,
    sessions: Session[] = []
  // const session_key = getSessionKey()
  // if (session_key) {
  //   try {
  //     const [userResult, signResult, sessionsResult] = await Promise.all([
  //       fetchUser(),
  //       request("/chat/timSign"),
  //       fetchSessions(),
  //     ])
  //     user = userResult
  //     sign = signResult.data.sign
  //     sessions = sessionsResult
  //   } catch (e) {
  //     console.error(e)
  //     sign = null
  //     user = null
  //     sessions = []
  //   }
  // }
  return (
    <Auth sign={sign}>
      <div className="f fy flex min-h-0 w-screen flex-1 flex-col items-center">
        {/* <Header user={user} sessions={sessions} /> */}
        <Header />
        <HeaderTop />
        {children}
        <Products />
        <SigninConfirm />
        <PayResultDialog />
        <HeaderFooter />
      </div>
    </Auth>
  )
}
