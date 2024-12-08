"use client"

import { ScrollArea } from "@/components/ScrollArea"

import { Session, User } from "@/lib/typing"
import request from "@/request"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import up from "@/assets/up.png"
import Image from "next/image"

import SignDialog from "@/components/sign/SignDialog"

import { Link, usePathname, useRouter } from "@/navigation"

import ServiceTermsAndPrivacyPolicy from "@/components/ServiceTermsAndPrivacyPolicy"

import useAppStore from "@/app/[locale]/useAppStore"

export default function Award() {
  const t = useTranslations("task")
  const tt = useTranslations("bot")

  const router = useRouter()

  const [inited, setInited] = useState(true)
  const [step, setStep] = useState(2)
  const [tasks, setTasks] = useState({} as any)

  const [showInviteDialog, setShowInviteDialog] = useState(false)
  const [showInviteDialog2, setShowInviteDialog2] = useState(false)
  const [showGainDialog, setShowGainDialog] = useState(false)
  const [showSignDialog, setShowSignDialog] = useState(false)
  const [showSignDialogReward, setShowSignDialogReward] = useState(0)

  const { user, setUser, fetchSignInDetail, sm } = useAppStore((state) => state)

  async function fetchUser() {
    if (!user) return
    const result: { data: { me: User } } = await request("/user/me")
    setUser({ me: result.data.me, session_key: user.session_key })
  }

  function load() {
    request("/activity/dailyTasks").then((res) => {
      console.log(res)
      setTasks(res.data.tasks)
      setInited(true)
    })
  }

  function receiveTaskReward() {
    request("/activity/receiveTaskReward", {
      body: { task_id: tasks.active_task.id },
    }).then((res) => {
      console.log("receiveTaskReward", res)
      if (!res.meta.success) {
        alert(res.meta.error_message || "failed")
        return
      }
      setShowSignDialogReward(res.data.reward)
      setShowGainDialog(true)
      fetchUser()
    })
  }

  useEffect(() => {
    load()
  }, [])

  return inited ? (
    <>
      {sm && (
        <div className="f fx fcc relative w-full" style={{ height: "45px" }}>
          <div
            className="f fx fcc fmc relative"
            style={{ width: "45px", height: "45px" }}
            onClick={() => {
              history.back()
            }}
          >
            <Image src={up} alt="" className="-rotate-90" width={25} />
          </div>

          <div className="f-1 f fx fcc fmc relative">{t("space_101")}</div>
        </div>
      )}
      {sm && (
        <div className="f fx fcc fma f14 relative w-full py-4 text-white">
          <div
            className="relative"
            onClick={() => {
              setStep(1)
            }}
          >
            {tt("description")}
            {step == 1 && (
              <div
                className="br-sm absolute left-1/2 top-full -translate-x-1/2"
                style={{
                  width: "32px",
                  height: "7px",
                  background:
                    "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
                }}
              ></div>
            )}
          </div>
          <div
            className="relative"
            onClick={() => {
              setStep(2)
            }}
          >
            {t("space_102")}
            {step == 2 && (
              <div
                className="br-sm absolute left-1/2 top-full -translate-x-1/2"
                style={{
                  width: "32px",
                  height: "7px",
                  background:
                    "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
                }}
              ></div>
            )}
          </div>
        </div>
      )}
      <ScrollArea className="self-stretch">
        <div
          className={
            sm
              ? "relative mx-auto min-h-0 w-full p-1"
              : "relative mx-auto mt-10 min-h-0 w-10/12 p-6"
          }
          style={{
            borderWidth: sm ? "0px" : "1px",
            borderRadius: "20px",
            borderColor: "rgba(255,255,255,0.5)",
          }}
        >
          {/* <div className="relative flex items-center">
            <div className="flex-1"></div>
            <img
              style={{ width: "50px", height: "50px" }}
              src="/static/sign/icon2.png"
              alt=""
            />
            <span
              className="ml-1 text-2xl text-white"
              style={{ fontSize: "20px" }}
            >
              750
            </span>
          </div> */}

          <div
            className="relative mt-14 sm:hidden"
            style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <div
              className="absolute bottom-0 right-0 top-0"
              style={{ width: "70%", backgroundColor: "#E661DC" }}
            >
              <span className="f20 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full text-[#E661DC]">
                {t("space_102")}
              </span>
            </div>
          </div>

          <div className="f fx relative mt-8 sm:mt-1">
            {/* 左边 */}
            {sm && step == 2 ? null : (
              <div
                className="f-3 f20 relative pr-5 text-[#D9D9D9] sm:px-2"
                style={{}}
              >
                <div className="relative text-[#FC75F2]">{t("space_103")}</div>

                <div className="relative mt-6">{t("space_104")}</div>
                <div className="relative mt-12 text-[#FC75F2]">
                  {t("space_105")}
                </div>
                <div className="relative mt-6">{t("space_106")}</div>
                <div className="relative mt-12 text-[#FC75F2]">
                  {t("space_107")}
                </div>
                <div className="relative mt-6">{t("space_108")}</div>
                <div
                  className="f fx fcc fmc hm relative mt-12 text-white"
                  style={{
                    height: "66px",
                    borderRadius: "33px",
                    background:
                      "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
                  }}
                  onClick={() => {
                    setShowInviteDialog(true)
                  }}
                >
                  {t("space_109")}
                </div>
              </div>
            )}
            {/* 右边 */}
            {sm && step == 1 ? null : (
              <div
                className={sm ? "f-7 relative px-1" : "f-7 relative pl-5"}
                style={{}}
              >
                <div
                  className="absolute sm:hidden"
                  style={{
                    top: "50px",
                    bottom: "50px",
                    left: "0",
                    width: "1px",
                    backgroundColor: "rgba(255,255,255,0.5)",
                  }}
                ></div>
                {/* 邀请奖励 */}
                <div
                  className="relative overflow-hidden pb-1"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgba(255,255,255,0.5)",
                    borderRadius: "11px",
                  }}
                >
                  <div
                    className="f fx fcc relative h-12 px-2"
                    style={{
                      background:
                        "linear-gradient(155deg, #9D4AE0 0%, #E151BE 100%)",
                    }}
                  >
                    {t("space_201")}
                  </div>
                  <div className="f fx relative p-4" style={{}}>
                    <div className="f-1 relative">{t("space_202")}</div>
                    <div
                      className="f fy fcc relative"
                      style={{ width: "120px" }}
                    >
                      <div className="f fx fcc fma relative">
                        <img
                          style={{ height: "1.8em" }}
                          src="/static/sign/icon2.png"
                          alt=""
                        />
                        <span className="f20 ml-1">+750</span>
                      </div>

                      <div
                        className="f fx fcc fmc hm f16 relative mt-8 text-white"
                        style={{
                          width: "107px",
                          height: "36px",
                          borderRadius: "18px",
                          background:
                            "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
                        }}
                        onClick={() => {
                          setShowInviteDialog2(true)
                        }}
                      >
                        {t("space_203")}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative mt-4 text-[#FC75F2]"
                  style={{ fontSize: "20px" }}
                >
                  {t("space_204")}
                </div>
                {/* 每日签到奖励 */}
                <div
                  className="relative mt-2 overflow-hidden p-2"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgba(255,255,255,0.5)",
                    borderRadius: "11px",
                  }}
                >
                  <div className="f fx relative p-2" style={{}}>
                    <div className="f-1 relative">
                      <div className="relative text-[#75D5FC]">
                        {t("space_205")}
                      </div>
                      <div className="relative mt-4">{t("space_206")}</div>
                    </div>
                    <div
                      className="f fy fcc relative"
                      style={{ width: "120px" }}
                    >
                      <div className="f fx fcc fma relative">
                        <img
                          style={{ height: "1.8em" }}
                          src="/static/sign/icon2.png"
                          alt=""
                        />
                        <span className="f20 ml-1">+500</span>
                      </div>

                      <div
                        className="f fx fcc fmc hm f16 relative mt-8 text-center text-white"
                        style={{
                          width: "107px",
                          height: "36px",
                          borderRadius: "18px",
                          background:
                            "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
                        }}
                        onClick={() => {
                          setShowSignDialog(true)
                        }}
                      >
                        {t("space_207")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 每日对话奖励 */}
                <div
                  className="relative mt-2 overflow-hidden p-2"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgba(255,255,255,0.5)",
                    borderRadius: "11px",
                  }}
                >
                  <div className="f fx relative p-2" style={{}}>
                    <div className="f-1 relative">
                      <div className="relative text-[#75D5FC]">
                        {t("space_208")}
                      </div>
                      <div className="relative mt-4">{t("space_209")}</div>
                    </div>
                    <div
                      className="f fy fcc relative"
                      style={{ width: "120px" }}
                    >
                      <div className="f fx fcc fma relative">
                        <img
                          style={{ height: "1.8em" }}
                          src="/static/sign/icon2.png"
                          alt=""
                        />
                        <span className="f20 ml-1">+150</span>
                      </div>

                      {/* 如果当前任务未完成，则显示去完成按钮 */}
                      {tasks.active_task && !tasks.active_task.is_completed ? (
                        <div
                          className="f fx fcc fmc hm f16 relative mt-8 text-center text-white"
                          style={{
                            width: "107px",
                            height: "36px",
                            borderRadius: "18px",
                            backgroundColor: "#923EFC",
                          }}
                          onClick={() => {
                            router.push("/")
                          }}
                        >
                          {t("space_210")}
                        </div>
                      ) : null}
                      {/* 如果当前任务已完成，并且未领取，则显示立即领取按钮 */}
                      {tasks.active_task &&
                      tasks.active_task.is_completed &&
                      !tasks.active_task.is_received ? (
                        <div
                          className="f fx fcc fmc hm f16 relative mt-2 text-center text-white"
                          style={{
                            width: "107px",
                            height: "36px",
                            borderRadius: "18px",
                            backgroundColor: "#923EFC",
                          }}
                          onClick={() => {
                            receiveTaskReward()
                          }}
                        >
                          {t("space_207")}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div
                  className="relative mt-4 text-[#FC75F2]"
                  style={{ fontSize: "20px" }}
                >
                  {t("space_211")}
                </div>
                {/* 邀请朋友 */}
                <div
                  className="relative mt-2 overflow-hidden p-2"
                  style={{
                    borderWidth: "1px",
                    borderColor: "rgba(255,255,255,0.5)",
                    borderRadius: "11px",
                  }}
                >
                  <div className="f fx relative p-2" style={{}}>
                    <div className="f-1 relative">
                      <div className="relative text-[#75D5FC]">
                        {t("space_212")}
                      </div>
                      <div className="relative mt-4">{t("space_213")}</div>
                      <div className="relative">{t("space_214")}</div>
                    </div>
                    <div
                      className="f fy fcc relative"
                      style={{ width: "120px" }}
                    >
                      <div className="f fx fcc fma relative">
                        <img
                          style={{ height: "1.8em" }}
                          src="/static/sign/icon2.png"
                          alt=""
                        />
                        <span className="f20 ml-1">+1500</span>
                      </div>

                      <div
                        className="f fx fcc fmc hm f16 relative mt-8 text-center text-white"
                        style={{
                          width: "107px",
                          height: "36px",
                          borderRadius: "18px",
                          backgroundColor: "#923EFC",
                        }}
                        onClick={() => {
                          setShowInviteDialog(true)
                        }}
                      >
                        {t("space_215")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <ServiceTermsAndPrivacyPolicy mode="footer" />
      </ScrollArea>
      {showSignDialog ? (
        <SignDialog
          close={() => {
            setShowSignDialog(false)
            fetchUser()
            fetchSignInDetail()
          }}
        ></SignDialog>
      ) : null}
      {showGainDialog && showSignDialogReward ? (
        <GainDialog
          n={showSignDialogReward}
          close={() => {
            setShowGainDialog(false)
            fetchUser()
            fetchSignInDetail()
          }}
        ></GainDialog>
      ) : null}
      {showInviteDialog ? (
        <InviteDialog
          botId={null}
          invite_code={tasks.invite_code}
          close={() => {
            setShowInviteDialog(false)
            fetchUser()
            fetchSignInDetail()
          }}
        ></InviteDialog>
      ) : null}
      {showInviteDialog2 ? (
        <InviteDialog2
          ok={(invite_code: string) => {
            invite_code = invite_code || ""
            if (invite_code && invite_code.includes("=")) {
              invite_code = invite_code.substring(
                invite_code.lastIndexOf("=") + 1
              )
            }
            request("/activity/updateMyInvitedCode", {
              body: { invite_code },
            }).then((res) => {
              console.log("/activity/updateMyInvitedCode", res)
              if (!res.meta.success) {
                alert(res.meta.error_message || "failed")
              } else {
                setShowInviteDialog2(false)
                setShowSignDialogReward(res.data.reward)
                setShowGainDialog(true)
              }
            })
          }}
          close={() => {
            setShowInviteDialog2(false)
            fetchUser()
            fetchSignInDetail()
          }}
        ></InviteDialog2>
      ) : null}
    </>
  ) : null
}

// 邀请弹框
export const InviteDialog = function InviteDialog({
  close,
  invite_code,
  botId,
}: {
  close: Function
  invite_code: string | null
  botId: number | null
}) {
  function parseUrl(invite_code: string | null) {
    if (!invite_code) return ""
    if (botId) {
      return location.origin + "/bot/" + botId + "?invite_code=" + invite_code
    } else {
      return location.origin + "/?invite_code=" + invite_code
    }
  }

  const t = useTranslations("task")

  const { sm } = useAppStore((state) => state)

  // const url = location.origin + "/?invite_code=" + invite_code

  const [url, setUrl] = useState(parseUrl(invite_code))

  useEffect(() => {
    if (invite_code) {
      setUrl(location.origin + "/?invite_code=" + invite_code)
    } else {
      request("/activity/dailyTasks").then((res) => {
        setUrl(parseUrl(res.data.tasks.invite_code))
      })
    }
  }, [])

  return url ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black p-9 sm:p-3"
        style={{
          width: "800px",
          borderColor: "rgba(255,255,255,0.5)",
          borderWidth: "1px",
          borderRadius: "15px",
        }}
      >
        <div className="f fx fcc relative">
          <div className="f-1"></div>
          <div className="">{t("space_301")}</div>
          <div className="f-1"></div>
          <span
            className="hm p-1"
            onClick={() => {
              close()
            }}
          >
            <img
              style={{ width: "24px", height: "24px" }}
              src="/static/sign/close.png"
              alt=""
            />
          </span>
        </div>
        <div className="f fx fcc relative">{t("space_302")}</div>
        <div className="f fx fcc relative mt-3">
          <div
            className="f-1 f fx fcc relative pl-3"
            style={{
              height: "58px",
              backgroundColor: "#4B4B4B",
              borderRadius: "12px",
              borderWidth: "1px",
              borderColor: "white",
            }}
          >
            {url}
          </div>

          {!sm && (
            <div
              className="f fx fcc fmc hm relative ml-3 overflow-hidden"
              style={{
                width: "130px",
                height: "58px",
                borderRadius: "12px",
                background:
                  "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
              }}
              onClick={() => {
                copy(url)
              }}
            >
              {t("space_303")}
            </div>
          )}
        </div>

        {sm && (
          <div className="f fx fcc fme relative mt-3">
            <div
              className="f fx fcc fmc hm relative ml-3 overflow-hidden"
              style={{
                width: "130px",
                height: "58px",
                borderRadius: "12px",
                background:
                  "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
              }}
              onClick={() => {
                copy(url)
              }}
            >
              {t("space_303")}
            </div>
          </div>
        )}

        {/* <div className="f fx relative mt-3">
          <div className="f fy fcs relative">
            <div
              className="relative border border-white"
              style={{ width: "170px", height: "210px" }}
            ></div>
            <span
              className="relative mt-3 overflow-hidden bg-[#4B4B4B] px-2"
              style={{ borderRadius: "12px" }}
            >
              {t("space_304")}
            </span>
            <div
              className="relative mt-3 overflow-hidden bg-[#4B4B4B] px-2"
              style={{ borderRadius: "12px" }}
            >
              {t("space_305")}
            </div>
          </div>

          <div className="f-1 relative ml-4">
            <div className="">MIKE</div>
            <div className="">{t("space_306")}</div>
          </div>
          <div className="f-1"></div>
          <div className="f fy fcc fme relative">
            <img
              style={{ width: "50px", height: "50px" }}
              src="/static/sign/icon2.png"
              alt=""
            />
            <span className="f20 ml-1">{t("space_307")}</span>
          </div>
        </div>
        <div className="f fx fcc fmc relative mt-5">{t("space_308")}</div> */}
      </div>
    </div>
  ) : null
}

// 邀请弹框（被邀请，输入邀请码）
export const InviteDialog2 = function InviteDialog2({
  close,
  ok,
}: {
  close: Function
  ok: Function
}) {
  const t = useTranslations("task")
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black p-9 sm:p-3"
        style={{
          width: "800px",
          borderColor: "rgba(255,255,255,0.5)",
          borderWidth: "1px",
          borderRadius: "15px",
        }}
      >
        <div className="f fx fcc relative">
          <div className="f-1"></div>
          <div className="">{t("space_201")}</div>
          <div className="f-1"></div>
          <span
            className="hm p-1"
            onClick={() => {
              close()
            }}
          >
            <img
              style={{ width: "24px", height: "24px" }}
              src="/static/sign/close.png"
              alt=""
            />
          </span>
        </div>
        <div className="f fx fcc relative">{t("space_202")}</div>
        <div className="f fx fcc relative mt-3">
          <div
            className="f-1 f fx fcc relative pl-3"
            style={{
              height: "58px",
              backgroundColor: "#4B4B4B",
              borderRadius: "12px",
              borderWidth: "1px",
              borderColor: "white",
            }}
          >
            <input
              className="relative block h-full w-full bg-transparent outline-none"
              type="text"
              ref={inputRef}
              placeholder={t("space_309")}
            />
          </div>

          <div
            className="f fx fcc fmc hm relative ml-3 overflow-hidden"
            style={{
              width: "130px",
              height: "58px",
              borderRadius: "12px",
              background: "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
            }}
            onClick={() => {
              ok(inputRef.current?.value)
            }}
          >
            {t("space_203")}
          </div>
        </div>
      </div>
    </div>
  )
}

// 领取弹框
export const GainDialog = function GainDialog({
  n,
  close,
}: {
  n: number
  close: Function
}) {
  const [inited, setInited] = useState(true)

  const [mode, setMode] = useState(1)

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
        className="dialog fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black px-10 pb-10"
        style={{
          width: "800px",
          background: "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
          borderWidth: "1px",
          borderRadius: "21px",
          borderColor: "white",
        }}
      >
        <div className="f fx fcc relative mt-12">
          <div className="f-1"></div>
          <div className="f46 relative text-[#FFF1AB]">恭喜你</div>
          <div className="f-1"></div>
          <img
            className="-translate-y-full"
            style={{ width: "24px", height: "24px" }}
            src="/static/sign/close.png"
            alt=""
            onClick={() => {
              close()
            }}
          />
        </div>

        <div
          className="f fy fcc relative mx-auto mt-5 w-4/5 overflow-hidden bg-white pb-8 pt-12"
          style={{ borderRadius: "31px" }}
        >
          <div className="f fx fcc relative text-[#333]">
            <img
              style={{ height: "1.8em" }}
              src="/static/sign/icon2.png"
              alt=""
            />
            <span className="f20 ml-1">+ {n}</span>
          </div>
          <div
            className="hm f22 f fx fcc fmc relative mt-8 w-4/5 overflow-hidden"
            style={{
              height: "58px",
              borderRadius: "12px",
              background: "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
            }}
            onClick={() => {
              close()
            }}
          >
            好的
          </div>
        </div>
      </div>
    </div>
  ) : null
}

// 复制
function copy(textToCopy: string) {
  const tempInput = document.createElement("input")
  tempInput.value = textToCopy
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand("copy")
  document.body.removeChild(tempInput)
  alert("Copy Success !")
}
