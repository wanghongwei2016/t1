"use client"

import request from "@/request"
import { globalData } from "@/lib/utils"
import close_png from "@/assets/close.png"
import Image from "next/image"
import { useApi } from "@/hooks/useApi"
import { useTranslations } from "next-intl"
import useAppStore from "@/app/[locale]/useAppStore"

import { uploadStore } from "@/app/[locale]/(main)/profile/UploadArea"

import { useCallback, useEffect, useRef, useState } from "react"

export function CloseComponent({ close }: { close: Function }) {
  return (
    <div
      className="f fx fcc fmc hm absolute right-0 top-0"
      style={{ width: "35px", height: "35px" }}
      onClick={() => {
        close()
      }}
    >
      <Image
        className="relative"
        style={{ width: "20px" }}
        src={close_png}
        alt=""
      ></Image>
    </div>
  )
}

export function AlertComponent() {
  // const t = useTranslations("identity")
  const [options, setOptions] = useState<any>(null)
  const { setSm } = useAppStore((state) => state)
  function close() {
    setOptions(null)
  }

  useEffect(() => {
    globalData.alertComponent = {
      open: (options: any) => {
        setOptions(options)
      },
    }
    setSm(window.innerWidth <= 750)
  }, [])

  return options ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog f fy oya oh fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-black px-8 pb-5"
        style={{
          width: "824px",
          height: "",
          border: "2px solid #FFFFFF",
        }}
      >
        <CloseComponent close={close} />

        <div className="f fx fcc fmc f36 relative mt-5 text-white">
          {options.title}
        </div>
        <div className="f fx fcc fmc f24 relative mt-5 text-white">
          {options.content}
        </div>
        <div className="f fx fcc relative mt-5">
          <div
            className="f-1 f fx fcc fmc hm btn relative ml-3 text-white"
            style={{ height: "60px" }}
            onClick={() => {
              options.ok && options.ok()
              close()
            }}
          >
            {/* {t("space_09")} */}
            Ok
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export function ConfirmComponent() {
  // const t = useTranslations("identity")
  const [options, setOptions] = useState<any>(null)
  const { sm, setSm } = useAppStore((state) => state)
  function close() {
    setOptions(null)
  }

  useEffect(() => {
    globalData.confirmComponent = {
      open: (options: any) => {
        setOptions(options)
      },
    }
    setSm(window.innerWidth <= 750)
    window.addEventListener("resize", () => {
      setSm(window.innerWidth <= 750)
    })
  }, [])

  return options ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0"
        style={{ backgroundColor: "rgba(0,0,0,.5)", zIndex: "90" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className={
          sm
            ? "dialog f fy oya oh br fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 pb-5"
            : "dialog f fy oya oh fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-8 pb-5"
        }
        style={{
          zIndex: "91",
          width: "824px",
          height: "",
          border: "2px solid #FFFFFF",
        }}
      >
        <CloseComponent close={close} />

        <div className="f fx fcc fmc f36 relative mt-5 text-white">
          {options.title}
        </div>
        <div className="f fx fcc fmc f24 relative mt-5 text-white">
          {options.content}
        </div>
        <div
          className={sm ? "f fy fr relative mt-5" : "f fx fcc relative mt-5"}
        >
          <div
            className={
              sm
                ? "f-1 f fx fcc fmc hm oh br relative mt-3 bg-[#494949] text-white"
                : "f-1 f fx fcc fmc hm relative bg-[#494949] text-white"
            }
            style={{ height: sm ? "45px" : "60px" }}
            onClick={() => {
              close()
            }}
          >
            {/* {t("space_08")} */}
            Cancel
          </div>
          <div
            className={
              sm
                ? "f-1 f fx fcc fmc hm btn oh br relative text-white"
                : "f-1 f fx fcc fmc hm btn relative ml-3 text-white"
            }
            style={{ height: sm ? "45px" : "60px" }}
            onClick={() => {
              options.ok && options.ok()
              close()
            }}
          >
            {/* {t("space_09")} */}
            Save
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export function PromptComponent() {
  // const t = useTranslations("identity")
  const [options, setOptions] = useState<any>(null)
  const { setSm } = useAppStore((state) => state)
  const inputRef = useRef<HTMLInputElement>(null)
  function close() {
    setOptions(null)
  }

  useEffect(() => {
    globalData.promptComponent = {
      open: (options: any) => {
        setOptions(options)
      },
    }
  }, [])

  return options ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog f fy oya oh fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-black px-8 pb-5"
        style={{
          width: "824px",
          height: "",
          border: "2px solid #FFFFFF",
        }}
      >
        <CloseComponent close={close} />

        <div className="f fx fcc fmc f36 relative mt-5 text-white">
          {options.title}
        </div>
        <div className="f fx fcc fmc f24 relative mt-5 text-white">
          {options.content}
        </div>
        <div className="f fx fcc fmc f24 relative mt-5 text-white">
          <input
            ref={inputRef}
            className="f-1 oh br-sm border bg-[#494949] px-2"
          />
        </div>
        <div className="f fx fcc relative mt-5">
          <div
            className="f-1 f fx fcc fmc hm relative bg-[#494949] text-white"
            style={{ height: "60px" }}
            onClick={() => {
              close()
            }}
          >
            {/* {t("space_08")} */}
            Cancel
          </div>
          <div
            className="f-1 f fx fcc fmc hm btn relative ml-3 text-white"
            style={{ height: "60px" }}
            onClick={() => {
              if (inputRef && inputRef.current && inputRef.current.value) {
                options.ok && options.ok(inputRef.current.value)
                close()
              }
            }}
          >
            {/* {t("space_09")} */}
            Ok
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export function SwitchComponent({
  initValue,
  onChange,
}: {
  initValue?: boolean
  onChange?: Function
}) {
  const [value, setValue] = useState(!!initValue)
  useEffect(() => {
    onChange && onChange(value)
  }, [])
  useEffect(() => {
    onChange && onChange(value)
  }, [value])
  return value ? (
    <div
      className="hm f fx fcc fme relative ml-2 overflow-hidden bg-[#3288FF] px-1"
      style={{ width: "46px", height: "26px", borderRadius: "26px" }}
      onClick={() => {
        setValue(!value)
      }}
    >
      <span
        className="relative overflow-hidden bg-white"
        style={{ width: "20px", height: "20px", borderRadius: "20px" }}
      ></span>
    </div>
  ) : (
    <div
      className="hm f fx fcc relative ml-2 overflow-hidden bg-[#505055] px-1"
      style={{ width: "46px", height: "26px", borderRadius: "26px" }}
      onClick={() => {
        setValue(!value)
      }}
    >
      <span
        className="relative overflow-hidden bg-[#D8D8D8]"
        style={{ width: "20px", height: "20px", borderRadius: "20px" }}
      ></span>
    </div>
  )
}

export function UploadImageComponent() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [options, setOptions] = useState<any>(null)

  const [key, setKey] = useState(Date.now())

  // const { uploadURL } = useApi(uploadStore)

  useEffect(() => {
    globalData.uploadImageComponent = {
      upload: (options: any) => {
        if (inputRef.current) {
          setOptions(options)
          inputRef.current.click()
        }
      },
    }
  }, [])

  return (
    <input
      key={key}
      ref={inputRef}
      style={{ display: "none" }}
      type="file"
      accept="image/*"
      onChange={async (e) => {
        const file = e.target.files?.[0]
        if (file) {
          const uploadURL = (await request("/upload/getUploadPresignedUrl"))
            .data
          // const body = new FormData()
          // body.append("file", file)
          await fetch(uploadURL, {
            method: "PUT",
            body: file,
            headers: { "Content-Type": file.type },
          })
          const ss = uploadURL.split("?")[0].split("/")
          options.success({
            url: "https://image.myluna.vip/" + ss[ss.length - 1],
          })
          setKey(Date.now())
        }
      }}
    ></input>
  )
}

// 弹框
function Dialog({ close }: { close: Function }) {
  const [inited, setInited] = useState(true)

  return inited ? (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => {
          close()
        }}
      ></div>
      <div
        className="dialog fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
        }}
      ></div>
    </div>
  ) : null
}
