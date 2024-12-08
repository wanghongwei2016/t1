import Store from "@/hooks/Store"
import { updateUser } from "@/hooks/actions"
import { useApi } from "@/hooks/useApi"
import { User } from "@/lib/typing"
import request from "@/request"
import { Loader, Plus } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { FormEvent, startTransition, useState } from "react"

// const store = new Store(async () => {
//   const result: {
//     data: {
//       id: string
//       uploadURL: string
//     }
//   } = await request("/upload/getUploadToken")
//   return result.data
// })

const store = new Store(async () => {
  const result: {
    data: string
  } = await request("/upload/getUploadPresignedUrl")

  return {
    id: "",
    uploadURL: result.data,
  }
})

export const uploadStore = store

export function UploadArea({
  onFinish,
  user,
}: {
  onFinish: () => void
  user: User
}) {
  const { uploadURL } = useApi(store)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const [loading, setLoading] = useState(false)
  const t = useTranslations("me")
  return (
    <form
      className="flex flex-col items-center"
      method="POST"
      encType="multipart/form-data"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          setLoading(true)
          const body = new FormData()
          body.append("file", (e.target as any)[0].files[0])
          const response = await fetch(uploadURL, { method: "POST", body })
          const {
            result: {
              variants: [avatar_url],
            },
          }: { result: { variants: [string] } } = await response.json()
          startTransition(async () => {
            updateUser({ ...user, avatar_url })
            onFinish()
          })
        } finally {
          setLoading(false)
        }
      }}
    >
      <label className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-2xl border bg-black/5 p-1 hover:border-dashed hover:border-[#5ea1f9]">
        {preview ? (
          <div className="relative h-24 w-24">
            <Image
              src={preview}
              alt="Preview"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <Plus />
        )}
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      <button
        type="submit"
        className="mt-4 flex rounded-md bg-black px-4 py-2 text-white"
      >
        {loading && <Loader className="mr-2 animate-spin" />}
        {t("save")}
      </button>
    </form>
  )
}
