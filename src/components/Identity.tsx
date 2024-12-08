"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import ddd from "@/assets/ddd.png"
import profile_card from "@/assets/profile_card.png"
import zuanshi from "@/assets/zuanshi.png"
import jiahao from "@/assets/jiahao.png"
import person from "@/assets/person.png"
import { createStore } from "zustand/vanilla"
import { useTranslations } from "next-intl"
import up from "@/assets/up.png"
import useAppStore from "@/app/[locale]/useAppStore"
import { useStore } from "zustand"
import request from "@/request"
import { Divide } from "lucide-react"

import { globalData } from "@/lib/utils"

import { CloseComponent, SwitchComponent } from "@/components/common"
import { set } from "date-fns"

// 角色卡 state
export interface IdentityState {
  botId: number | null
  botInfo: any | null
  identityList: any[]
  currentIdentity: any | null
  selectedIdentity: any | null
  identityStep: number // 角色卡莫框页面展示状态： 0 初始化 1 提示信息弹框 2 新建角色卡弹框
  initIdentityList: Function
  setSelectedIdentity: Function
  setCurrentIdentity: Function
  setIdentityStep: Function
}

// 角色卡 store
export const identityStore = createStore<IdentityState>((set) => {
  return {
    botId: null,
    botInfo: null,
    identityList: [],
    currentIdentity: null,
    selectedIdentity: null,
    identityStep: 0,
    initIdentityList: (callback?: Function) => {
      request("/chat/identity/list", { body: {} }).then((res) => {
        set({
          identityList: res.data.identities || [],
        })
        callback && callback()
      })
    },
    setSelectedIdentity: (selectedIdentity: any) => {
      set({
        selectedIdentity,
      })
    },
    setCurrentIdentity: (currentIdentity: any) => {
      set({
        currentIdentity,
      })
    },
    setIdentityStep: (identityStep: number) => {
      set({ identityStep })
    },
  }
})

export function useIdentityStore(): IdentityState {
  return useStore(identityStore)
}

// 角色卡入口 1 聊天页右侧 机器人详情页下面 新建个人资料卡
export function IdentityButton1() {
  const t = useTranslations("identity")
  const {
    identityStep,
    botId,
    botInfo,
    identityList,
    initIdentityList,
    setIdentityStep,
  } = useIdentityStore()

  return (
    <div
      className="f fx fcc fmc f16 oh hm relative mx-3 my-3 bg-[#484848] text-white"
      style={{ height: "130px", borderRadius: "14px" }}
      onClick={() => {
        setIdentityStep(2)
      }}
    >
      <Image src={jiahao} alt="" height={30}></Image>
      <div className="ml-3">{t("space_02")}</div>
    </div>
  )
}

// 角色卡入口 2 聊天页信息输入框上面
export function IdentityButton2() {
  const t = useTranslations("identity")
  const { user, sessions, sm } = useAppStore((state) => state)

  const {
    identityStep,
    botId,
    botInfo,
    identityList,
    currentIdentity,
    initIdentityList,
    setIdentityStep,
  } = useIdentityStore()

  return (
    <div
      className="f fx fcc f12 hm relative ml-2 w-fit bg-[#333] px-3 py-2"
      style={{ borderRadius: "17px" }}
      onClick={() => {
        if (identityList && identityList.length) {
          setIdentityStep(3)
        } else {
          setIdentityStep(1)
        }
      }}
    >
      <Image src={person} alt="" height={15} />

      <div className="relative mx-2">
        {currentIdentity ? currentIdentity.username : t("space_03")}
      </div>
      <Image src={ddd} alt="" height={20} />
    </div>
  )
}

// 角色卡 提示信息弹框
export function IdentityPromptDialog() {
  const t = useTranslations("identity")

  const { identityStep, identityList, initIdentityList, setIdentityStep } =
    useIdentityStore()

  function close() {
    setIdentityStep(0)
  }
  return identityStep == 1 ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog f fy fcc fma oh fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#242323]"
        style={{
          width: "774px",
          height: "485px",
          border: "2px solid #FFFFFF",
        }}
      >
        <CloseComponent close={close} />
        <Image src={profile_card} alt="" width={409} height={244}></Image>
        <div className="f24 relative text-center">
          {identityList && identityList.length ? t("space_40") : t("space_05")}
        </div>
        <div
          className="f fx fcc fmc oh hm relative"
          style={{
            width: "343px",
            height: "75px",
            borderRadius: "38px",
            background: "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
          }}
          onClick={() => {
            setIdentityStep(identityList && identityList.length ? 3 : 2)
          }}
        >
          {identityList && identityList.length ? t("space_41") : t("space_06")}
        </div>
      </div>
    </div>
  ) : null
}

// 角色卡 编辑 弹框
export function IdentityEditDialog({ botInfo }: { botInfo: any }) {
  const t = useTranslations("identity")

  const {
    identityStep,
    selectedIdentity,
    identityList,
    initIdentityList,
    setIdentityStep,
  } = useIdentityStore()

  const { user, sessions, sm } = useAppStore((state) => state)
  const ageRef = useRef<HTMLInputElement>(null)
  const [gender, setGender] = useState(1)
  const usernameRef = useRef<HTMLInputElement>(null)
  const likesRef = useRef<HTMLInputElement>(null)
  const dislikesRef = useRef<HTMLInputElement>(null)
  const [avatar, setAvatar] = useState("")
  const [isDefault, setIsDefault] = useState(false)
  const informationRef = useRef<HTMLInputElement>(null)

  const [errorDetail, setErrorDetail] = useState<any>(null)

  const [informationLength, setInformationLength] = useState(0)
  const [likesLength, setLikesLength] = useState(0)
  const [dislikesLength, setDislikesLength] = useState(0)

  useEffect(() => {
    if (identityStep == 5) {
      if (ageRef.current) {
        ageRef.current.value = selectedIdentity.age
      }
      if (usernameRef.current) {
        usernameRef.current.value = selectedIdentity.username
      }
      if (informationRef.current) {
        informationRef.current.value = selectedIdentity.information
        setInformationLength((selectedIdentity.information || "").length)
      }
      if (likesRef.current) {
        likesRef.current.value = selectedIdentity.likes
        setLikesLength((selectedIdentity.likes || "").length)
      }
      if (dislikesRef.current) {
        dislikesRef.current.value = selectedIdentity.dislikes
        setDislikesLength((selectedIdentity.dislikes || "").length)
      }
      setGender(selectedIdentity.gender)
      setAvatar(selectedIdentity.avatar)
    }
  }, [])

  function close() {
    setIdentityStep(0)
  }

  function create() {
    setErrorDetail(null)
    request("/chat/identity/create", {
      body: {
        gender,
        age: ageRef.current?.value,
        avatar,
        username: usernameRef.current?.value,
        information: informationRef.current?.value,
        likes: likesRef.current?.value,
        dislikes: dislikesRef.current?.value,
        is_default: isDefault,
      },
    }).then((res) => {
      if (!(res && res.meta && res.meta.success)) {
        setErrorDetail(res.meta.error_detail)
        return
      }
      initIdentityList()
      // close()
      setIdentityStep(3)
    })
  }
  function update() {
    setErrorDetail(null)
    request("/chat/identity/update", {
      body: {
        gender,
        age: ageRef.current?.value,
        avatar,
        username: usernameRef.current?.value,
        information: informationRef.current?.value,
        identity_id: selectedIdentity.id,
        likes: likesRef.current?.value,
        dislikes: dislikesRef.current?.value,
        is_default: isDefault,
      },
    }).then((res) => {
      if (!(res && res.meta && res.meta.success)) {
        setErrorDetail(res.meta.error_detail)
        return
      }
      initIdentityList()
      // close()
      setIdentityStep(3)
    })
  }

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
        className={
          sm
            ? "f fy fixed bottom-0 left-0 right-0 top-0 z-50 bg-[#242323] px-4 pb-5"
            : "dialog oh br f fy oya scrollbar oya fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#242323] px-10 py-5"
        }
        style={{
          width: sm ? "" : "774px",
          height: sm ? "" : "90%",
          border: sm ? "" : "1px solid #FFFFFF",
        }}
      >
        <div
          className={
            sm
              ? "f fx fcc fmc f18 relative mt-5"
              : "f fx fcc fmc f36 relative mt-5"
          }
        >
          {sm && (
            <Image
              src={up}
              alt=""
              className="-rotate-90"
              width={25}
              onClick={close}
            />
          )}
          <div className="f-1"></div>
          {t("space_12")}
          <div className="f-1"></div>
        </div>

        <div className={sm ? "f-1 f fy oya relative py-2" : "relative"}>
          <div className="f fx fcc relative mt-3">
            <Image
              src={botInfo.avatar_url}
              alt=""
              width={27}
              height={27}
              className="oh br-full"
              unoptimized
            />
            <div className="relative ml-3">
              {t("space_13")} {botInfo.username}
            </div>
          </div>
          {/* 姓名 */}
          {sm && (
            <div className="f fx fcc relative mt-3">
              <span className="mr-1 text-[red]">*</span>
              <div className="relative">{t("space_15")}</div>
            </div>
          )}
          <div
            className="f fx fcc relative mt-3 p-3"
            style={{
              border:
                errorDetail && errorDetail.username
                  ? "1px solid red"
                  : "1px solid #A3A3A3",
            }}
          >
            {!sm && (
              <>
                <span className="mr-1 text-[red]">*</span>
                <div className="relative">{t("space_15")}</div>
              </>
            )}
            <input
              ref={usernameRef}
              className="f-1 input-none text-right sm:text-left"
              placeholder={t("space_16")}
            ></input>
          </div>
          {/* 头像 */}
          <div className="relative mt-3">{t("space_17")}</div>
          <div className="f fx fcb relative mt-3">
            <div
              className="oh relative bg-[#4D4D4D]"
              style={{ width: "115px", height: "115px", borderRadius: "100%" }}
            >
              {avatar ? (
                <Image
                  src={avatar}
                  alt=""
                  width={115}
                  height={115}
                  unoptimized
                ></Image>
              ) : null}
            </div>
            <div
              className="btn f fx fcc fmc br-lg oh relative ml-5 px-10"
              style={{ height: "30px" }}
              onClick={() => {
                globalData.uploadImageComponent.upload({
                  success: ({ url }: { url: string }) => {
                    setAvatar(url)
                  },
                })
              }}
            >
              {t("space_07")}
            </div>
            {errorDetail && errorDetail.avatar ? (
              <span className="ml-3 text-[red]">{t("space_14")}</span>
            ) : null}
          </div>
          {/* 性别 */}
          {sm && (
            <div className="f fx fcc relative mt-3">
              <span className="mr-1 text-[red]">*</span>
              <div className="relative">{t("space_18")}</div>
            </div>
          )}
          <div
            className="f fx fcc fmb relative mt-3 p-3"
            style={{
              border:
                errorDetail && errorDetail.gender
                  ? "1px solid red"
                  : "1px solid #A3A3A3",
            }}
          >
            <span className="mr-1 text-[red] sm:hidden">*</span>
            <div className="relative sm:hidden">{t("space_18")}</div>
            <div className="f-1 sm:hidden"></div>
            <div
              className="oh hm f fx fcc fmc relative ml-2"
              style={{
                width: "20px",
                height: "20px",
                border: "2px solid #979797",
                borderRadius: "100%",
              }}
              onClick={() => {
                setGender(1)
              }}
            >
              {gender == 1 ? (
                <div
                  className="br-full oh relative bg-white"
                  style={{ width: "10px", height: "10px" }}
                ></div>
              ) : null}
            </div>
            <div className="relative ml-2">{t("space_19")}</div>
            <div
              className="oh hm f fx fcc fmc relative ml-2"
              style={{
                width: "20px",
                height: "20px",
                border: "2px solid #979797",
                borderRadius: "100%",
              }}
              onClick={() => {
                setGender(2)
              }}
            >
              {gender == 2 ? (
                <div
                  className="br-full oh relative bg-white"
                  style={{ width: "10px", height: "10px" }}
                ></div>
              ) : null}
            </div>
            <div className="relative ml-2">{t("space_20")}</div>
            <div
              className="oh hm f fx fcc fmc relative ml-2"
              style={{
                width: "20px",
                height: "20px",
                border: "2px solid #979797",
                borderRadius: "100%",
              }}
              onClick={() => {
                setGender(3)
              }}
            >
              {gender == 3 ? (
                <div
                  className="br-full oh relative bg-white"
                  style={{ width: "10px", height: "10px" }}
                ></div>
              ) : null}
            </div>
            <div className="relative ml-2">{t("space_21")}</div>
          </div>
          {/* 年龄 */}
          {sm && (
            <div className="f fx fcc relative mt-3">
              <span className="mr-1 text-[red]">*</span>
              <div className="relative">{t("space_22")}</div>
            </div>
          )}
          <div
            className="f fx fcc relative mt-3 p-3"
            style={{
              border:
                errorDetail && errorDetail.age
                  ? "1px solid red"
                  : "1px solid #A3A3A3",
            }}
          >
            <span className="mr-1 text-[red] sm:hidden">*</span>
            <div className="relative sm:hidden">{t("space_22")}</div>
            <input
              ref={ageRef}
              className="f-1 input-none text-right sm:text-left"
              placeholder={t("space_23")}
            ></input>
          </div>
          {/* 喜欢 不喜欢 */}
          <div className={sm ? "f fy relative mt-3" : "f fx fcc relative mt-3"}>
            {sm && (
              <div className="f fx fcc relative mt-3">
                <div className="relative">{t("space_24")}</div>
              </div>
            )}
            <div
              className="f-1 f fx fcc relative mt-3 p-3"
              style={{ border: "1px solid #A3A3A3", height: sm ? "50px" : "" }}
            >
              <div className="relative sm:hidden">{t("space_24")}</div>
              <input
                ref={likesRef}
                className="f-1 input-none text-right sm:text-left"
                placeholder={sm ? t("space_24") : "0/40"}
                maxLength={40}
                onChange={(e) => {
                  setLikesLength((e.target.value || "").length)
                }}
              ></input>
            </div>
            {sm && (
              <div className="relative mt-3 sm:text-right">
                {likesLength}/40{t("space_10")}
              </div>
            )}
            {sm && (
              <div className="f fx fcc relative mt-3">
                <div className="relative">{t("space_25")}</div>
              </div>
            )}
            <div
              className={
                sm
                  ? "f-1 f fx fcc relative mt-3 p-3"
                  : "f-1 f fx fcc relative ml-5 mt-3 p-3"
              }
              style={{ border: "1px solid #A3A3A3", height: sm ? "50px" : "" }}
            >
              <div className="relative sm:hidden">{t("space_25")}</div>
              <input
                ref={dislikesRef}
                className="f-1 input-none text-right sm:text-left"
                placeholder={sm ? t("space_25") : "0/40"}
                maxLength={40}
                onChange={(e) => {
                  setDislikesLength((e.target.value || "").length)
                }}
              ></input>
            </div>
            {sm && (
              <div className="relative mt-3 sm:text-right">
                {dislikesLength}/40{t("space_10")}
              </div>
            )}
          </div>
          {/* 介绍 */}
          {sm && (
            <div className="f fx fcc relative mt-3">
              <div className="relative">{t("space_26")}</div>
            </div>
          )}
          <div
            className="relative mt-3 p-3"
            style={{ border: "1px solid #A3A3A3" }}
          >
            <div className="relative sm:hidden">{t("space_26")}</div>
            <input
              ref={informationRef}
              className="f-1 input-none relative mt-3 min-h-10 w-full sm:mt-0"
              placeholder={t("space_27")}
              onChange={(e) => {
                setInformationLength((e.target.value || "").length)
              }}
              maxLength={1000}
            ></input>
          </div>
          <div className="relative mt-3 sm:text-right">
            {informationLength}/1000{t("space_10")}
          </div>
          {/* 设置默认 */}
          <div className="f fx fcc relative mt-3">
            <SwitchComponent
              initValue={
                identityStep == 5 &&
                selectedIdentity &&
                selectedIdentity.is_default
              }
              onChange={setIsDefault}
            />
            <div className="f-1 relative ml-3">{t("space_11")}</div>
          </div>
        </div>

        {/* 按钮 */}
        <div className="f fx fcc relative mt-3">
          {/* 取消 */}
          {!sm && (
            <div
              className="f-1 f fx fcc fmc hm relative bg-[#494949]"
              style={{ height: "60px" }}
              onClick={() => {
                close()
              }}
            >
              {t("space_08")}
            </div>
          )}
          {/* 保存 */}
          <div
            className={
              sm
                ? "f-1 f fx fcc fmc hm btn oh br relative"
                : "f-1 f fx fcc fmc hm btn relative ml-3 sm:ml-0"
            }
            style={{ height: sm ? "45px" : "60px" }}
            onClick={() => {
              if (identityStep == 5) {
                update()
              } else {
                create()
              }
            }}
          >
            {t("space_09")}
          </div>
        </div>
      </div>
    </div>
  )
}

// 角色卡 中心 弹框
export function IdentityCenterDialog({
  botId,
  restart,
}: {
  botId: number | string
  restart: Function
}) {
  const t = useTranslations("identity")
  const { user, sessions, sm } = useAppStore((state) => state)

  const {
    identityStep,
    identityList,
    selectedIdentity,
    currentIdentity,
    setSelectedIdentity,
    initIdentityList,
    setIdentityStep,
  } = useIdentityStore()

  useEffect(() => {
    setSelectedIdentity(null)
    initIdentityList(() => {
      identityList.forEach((item) => {
        if (currentIdentity && item.id == currentIdentity.id) {
          setSelectedIdentity(item)
        }
      })
    })
  }, [])

  function close() {
    setIdentityStep(0)
  }

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
        className={
          sm
            ? "f fy oya fixed bottom-0 left-0 right-0 top-0 z-50 bg-[#242323] px-4 pb-5"
            : "dialog f fy oya oh fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-[#242323] px-8 pb-5 sm:px-4"
        }
        style={{
          width: sm ? "" : "1000px",
          border: sm ? "" : "2px solid #FFFFFF",
        }}
      >
        {!sm && <CloseComponent close={close} />}

        <div
          className={
            sm
              ? "f fx fcc fmc f18 relative mt-5"
              : "f fx fcc fmc f36 relative mt-5"
          }
        >
          {sm && (
            <Image
              src={up}
              alt=""
              className="-rotate-90"
              width={25}
              onClick={close}
            />
          )}
          <div className="f-1"></div>
          {t("space_29")}
          <div className="f-1"></div>
        </div>
        <div
          className={
            sm ? "f fx fcc relative mt-5" : "f fx fcc fme relative mt-5"
          }
        >
          <div
            className="hm oh br f fx fcc fmc relative bg-[#484848] px-3 py-2"
            onClick={() => {
              setIdentityStep(2)
            }}
          >
            <Image className="mr-2" src={jiahao} alt="" height={30} />
            {t("space_30")}
          </div>
        </div>
        <div
          className={sm ? "f-1 oya relative mt-5" : "roll relative mt-5"}
          style={{ height: "215px" }}
        >
          {identityList.map((item, index) => (
            <div
              key={index}
              className={
                sm ? "hm roll-item relative mt-3" : "hm roll-item relative"
              }
              onClick={() => {
                console.log("ttt setSelectedIdentity", item)
                setSelectedIdentity(item)
              }}
            >
              <IdentityCard
                mode="list"
                identity={item}
                selected={selectedIdentity && selectedIdentity.id == item.id}
                change={() => {
                  globalData.confirmComponent.open({
                    title: t("space_04"),
                    content: t("space_33"),
                    ok: () => {
                      restart(item.id)
                      setIdentityStep(0)
                    },
                  })
                }}
              ></IdentityCard>
            </div>
          ))}
        </div>

        <div className="f fx fcc fmc relative mt-5">
          <div
            className="btn f fx fcc fmc br-lg"
            style={{ width: "498px", height: sm ? "45px" : "75px" }}
            onClick={() => {
              globalData.confirmComponent.open({
                title: t("space_04"),
                content: t("space_33"),
                ok: () => {
                  restart(selectedIdentity.id)
                  setIdentityStep(0)
                },
              })
            }}
          >
            {t("space_09")}
          </div>
        </div>
      </div>
    </div>
  )
}

export function IdentityCard({
  identity,
  selected,
  mode,
  change,
}: {
  identity: any
  selected: boolean
  mode?: string
  change?: Function
}) {
  const t = useTranslations("identity")

  const {
    identityStep,
    identityList,
    currentIdentity,
    setSelectedIdentity,
    initIdentityList,
    setIdentityStep,
  } = useIdentityStore()

  const [open, setOpen] = useState(false)
  const { user, sessions, sm } = useAppStore((state) => state)

  function close() {
    setOpen(false)
  }

  function deleteFn() {
    request("/chat/identity/delete", {
      body: {
        identity_id: identity.id,
      },
    }).then((res) => {
      initIdentityList()
    })
  }

  useEffect(() => {
    const listener = (event: any) => {
      if (!event.target.closest(".IdentityCardPopover")) {
        close()
      }
    }
    document.addEventListener("click", listener)
    return () => {
      document.removeEventListener("click", listener)
    }
  }, [])

  const genderMap: { [key: string]: string } = {
    "1": t("space_19"),
    "2": t("space_20"),
    "3": t("space_21"),
  }

  return (
    <div
      className="f12 f fy br fma oh relative mx-3 bg-[#484848] p-2"
      style={{
        width: sm ? "" : "262px",
        height: "215px",
        border: selected ? "#E151BE solid 1px" : "",
      }}
    >
      {/* 默认 */}
      {identity.is_default ? (
        <div
          className="f fx fcc fmc oh f12 absolute left-0 top-0 z-10 px-2 text-white"
          style={{
            height: "24px",
            background: "linear-gradient( 155deg, #9D4AE0 0%, #E151BE 100%)",
            borderRadius: "13px 0px 13px 0px",
          }}
        >
          {t("space_28")}
        </div>
      ) : null}
      <div className="relative">
        {/* <Image className="relative oh" style={{ borderRadius: "100%" }} src={identity.avatar} alt="" width={63} height={63} unoptimized></Image> */}
        <div className="relative">
          <div
            className="oh br-full bg-image relative"
            style={{
              width: "63px",
              height: "63px",
              backgroundImage: `url(${identity.avatar})`,
            }}
          ></div>
          {/* 正在使用 */}
          {currentIdentity && currentIdentity.id == identity.id ? (
            <div
              className="f12 oh f fx fcc fmc br-sm absolute"
              style={{
                width: "60px",
                height: "20px",
                border: "#E151BE solid 2px",
                bottom: "5px",
                left: "80px",
              }}
            >
              正在使用
            </div>
          ) : null}
        </div>
        <div
          className="IdentityCardPopover f fx fcc fmc absolute right-0 top-0"
          style={{ width: "35px", height: "35px" }}
        >
          <Image
            className="hm relative"
            src={ddd}
            alt=""
            height={22}
            onClick={(e) => {
              e.preventDefault()
              setOpen(true)
            }}
            unoptimized
          ></Image>
          {open ? (
            <div className="f fy oh br hm absolute right-0 top-full z-10 bg-black p-3">
              {/* 编辑 */}
              <div
                className="relative"
                onClick={() => {
                  setSelectedIdentity(identity)
                  setIdentityStep(5)
                }}
              >
                {t("space_37")}
              </div>
              {/* 设为默认 */}
              {!identity.is_default ? (
                <div
                  className="relative mt-3"
                  onClick={() => {
                    globalData.confirmComponent.open({
                      title: t("space_04"),
                      content: t("space_39") + " ?",
                      ok: () => {
                        request("/chat/identity/update", {
                          body: {
                            ...identity,
                            identity_id: identity.id,
                            is_default: true,
                          },
                        }).then((res) => {
                          initIdentityList()
                        })
                      },
                    })
                  }}
                >
                  {t("space_39")}
                </div>
              ) : null}
              {/* 切换 */}
              {mode == "list" &&
              !(currentIdentity && currentIdentity.id == identity.id) ? (
                <div
                  className="relative mt-3"
                  onClick={() => {
                    change && change()
                  }}
                >
                  {t("space_43")}
                </div>
              ) : null}
              {/* 更换 */}
              {mode == "info" ? (
                <div
                  className="relative mt-3"
                  onClick={() => {
                    setIdentityStep(3)
                  }}
                >
                  {t("space_42")}
                </div>
              ) : null}
              {/* 删除 */}
              {!(currentIdentity && currentIdentity.id == identity.id) ? (
                <div
                  className="relative mt-3"
                  onClick={() => {
                    globalData.confirmComponent.open({
                      title: t("space_04"),
                      content: t("space_35"),
                      ok: () => {
                        deleteFn()
                      },
                    })
                  }}
                >
                  {t("space_38")}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      <div className="f fx fcc relative">
        <div className="relative text-[#ADADAD]">{t("space_15")}</div>
        <div className="f-1"></div>
        <div className="relative">{identity.username || ""}</div>
      </div>

      <div className="f fx fcc relative">
        <div className="relative text-[#ADADAD]">{t("space_18")}</div>
        <div className="f-1"></div>
        <div className="relative">{genderMap[identity.gender] || ""}</div>
      </div>

      <div className="f fx fcc relative">
        <div className="relative text-[#ADADAD]">{t("space_31")}</div>
        <div className="f-1"></div>
        <div className="relative">{identity.likes || ""}</div>
      </div>

      <div className="f fx fcc relative">
        <div className="relative text-[#ADADAD]">{t("space_32")}</div>
        <div className="f-1"></div>
        <div className="relative">{identity.dislikes || ""}</div>
      </div>
    </div>
  )
}

function BiTianXiang() {
  const t = useTranslations("identity")
  return (
    <div className="absolute bottom-full right-0 mb-2">{t("space_14")}</div>
  )
}
