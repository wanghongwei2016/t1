"use client"
import request from "@/request"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

export default function SignDialog({ close }: { close: Function }) {
  const [inited, setInited] = useState(false)

  const [mode, setMode] = useState(1)

  const [signInStreak, setSignInStreak] = useState(0)
  const [todayIsCheckedIn, setTodayIsCheckedIn] = useState(false)

  const [rewardAmount, setRewardAmount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await request("/activity/signInDetail")
      setSignInStreak(res.data.activity.sign_in_streak)
      setTodayIsCheckedIn(res.data.activity.today_is_checked_in)
      // setSignInStreak(6)
      // setTodayIsCheckedIn(true)
      setMode(1)
      setInited(true)
    }
    fetchData()
  }, [])

  function signIn() {
    request("/activity/signIn").then((res) => {
      console.log("=============signInDetail", res)
      setRewardAmount(res.data.activity.reward_amount)
      setMode(2)
    })
  }

  const t = useTranslations("dailyCheckIn")
  const locale: string = useParams().locale + ""

  return inited ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "500px", maxWidth: "90%" }}
      >
        <img
          className="relative block"
          style={{ width: "100%" }}
          src={mode == 1 ? "/static/sign/b1.png" : "/static/sign/b2.png"}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 z-40">
          <div
            className="absolute left-1/2 w-full -translate-x-1/2 text-center text-white"
            style={{ top: "16%", fontSize: "32px", fontFamily: "字由文艺黑" }}
          >
            {mode == 1 ? t("title1") : t("title2")}
          </div>

          {/* 7天矩形布局 */}
          {mode == 1 ? (
            <>
              <JuXing
                n={1}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={150}
              ></JuXing>
              <JuXing
                n={2}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={200}
              ></JuXing>
              <JuXing
                n={3}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={250}
              ></JuXing>
              <JuXing
                n={4}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={300}
              ></JuXing>
              <JuXing
                n={5}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={350}
              ></JuXing>
              <JuXing
                n={6}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={400}
              ></JuXing>
              <JuXing
                n={7}
                signInStreak={signInStreak}
                todayIsCheckedIn={todayIsCheckedIn}
                z={500}
              ></JuXing>
            </>
          ) : null}

          {/* 获得布局 */}
          {mode == 2 ? (
            <>
              {/* <div
                className="absolute left-1/2 w-full -translate-x-1/2 text-center text-[#333]"
                style={{ top: "36%", fontSize: "24px" }}
              >
                {t("huode")}
              </div> */}
              <img
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: "38%", height: "15%" }}
                src="/static/sign/icon.png"
                alt=""
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 text-[#333]"
                style={{ top: "60%", fontSize: "24px" }}
              >
                +{rewardAmount}
                {/* {t("zuanshi")} */}
              </div>
            </>
          ) : null}

          {/* 底部按钮 */}

          {mode == 1 && !todayIsCheckedIn ? (
            <Btn
              text={t("btn1")}
              cb={() => {
                signIn()
              }}
            ></Btn>
          ) : null}
          {mode == 1 && todayIsCheckedIn ? (
            <Btn
              text={
                signInStreak < 7
                  ? `${t("btn2")} ${signInStreak} ${locale == "zh-TW" ? "天" : ""}`
                  : t("close")
              }
              cb={() => {
                close()
              }}
            ></Btn>
          ) : null}
          {mode == 2 ? (
            <Btn
              text={t("close")}
              cb={() => {
                close()
              }}
            ></Btn>
          ) : null}
        </div>
      </div>
    </div>
  ) : null
}

/**
 * 签到举行框
 */
function JuXing({
  n,
  z,
  signInStreak,
  todayIsCheckedIn,
}: {
  n: number // 第几天
  z: number // 几颗钻石
  signInStreak: number // 已连续签到天数
  todayIsCheckedIn: boolean // 今日是否已签到
}) {
  const top = (n <= 4 ? 34 : 55) + "%"
  let left = 11 + ((n % 4 == 0 ? 4 : n % 4) - 1) * 21 + "%"

  let t = 0 // 是否今天 0 不是 1 是
  let s = 0 // 签到状态 0 未签到 1 已签到

  if (signInStreak >= n) {
    s = 1
  }

  if (todayIsCheckedIn && n == signInStreak) {
    t = 1
  } else if (!todayIsCheckedIn && n == signInStreak + 1) {
    t = 1
  }

  const tt = useTranslations("dailyCheckIn")
  const locale: string = useParams().locale + ""

  return (
    <div
      className="absolute flex flex-col items-center justify-around"
      style={{
        width: "16%",
        height: "18%",
        top,
        left,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundImage: s
          ? "url(/static/sign/jx1.png)"
          : "url(/static/sign/jx2.png)",
      }}
    >
      <div
        className="relative border-spacing-5 bg-[#ffffff] text-center text-white"
        style={{
          width: "80%",
          fontSize: "10px",
          borderRadius: ".5em",
          backgroundColor: "#7491EC",
        }}
      >
        {t ? tt("today") : locale == "zh-TW" ? `第${n}天` : `No. ${n}`}
      </div>
      <img style={{ height: "30%" }} src="/static/sign/icon.png" alt="" />
      <div style={{ fontSize: "12px", color: "#3CA6F1" }}>
        + {z}
        {/* {tt("zuanshi")} */}
      </div>
      {s ? (
        <img
          className="absolute z-10"
          style={{ top: "63%", left: "66%", width: "50%" }}
          src="/static/sign/d.png"
          alt=""
        />
      ) : null}
    </div>
  )
}
/**
 * 底部按钮
 * @param param0
 * @returns
 */
function Btn({ text, cb }: { text: string; cb: Function }) {
  return (
    <div
      className="hm absolute left-1/2 flex -translate-x-1/2 items-center justify-center text-white"
      style={{
        width: "80%",
        height: "10%",
        top: "85%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundImage: "url(/static/sign/btn.png)",
      }}
      onClick={() => {
        cb()
      }}
    >
      {text}
    </div>
  )
}
