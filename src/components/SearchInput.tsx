import { Input } from "@/components/Input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { useCallback, useEffect, useRef, useState } from "react"

function getParameterByQueryString(queryString: string, key: string) {
  let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, "i")
  let r = queryString.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

export default function SearchInput({
  handleSearch,
  className,
}: {
  handleSearch: (value: string) => void
  className?: string
}) {
  useEffect(() => {
    if (window && document) {
      const searchInput = document.getElementById(
        "searchInput"
      ) as HTMLInputElement
      if (searchInput) {
        searchInput.value =
          getParameterByQueryString(location.search, "keyword") || ""
      }
    }
  })

  const t = useTranslations()
  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const element = e.currentTarget.elements[0] as HTMLInputElement
          const value = element.value
          handleSearch(value)
          e.currentTarget.reset()
          element.blur()
        }}
      >
        <Input
          id="searchInput"
          autoComplete="off"
          name="search"
          placeholder={t("search-placeholder")}
          className={cn(
            "h-[60px] rounded-[30px] border-[3px] border-[#8E74BA;] bg-transparent pl-10",
            className
          )}
        />
        <button className="search absolute right-2 top-1/2 flex h-[46px] w-[100px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full sm:hidden">
          <Search />
        </button>
      </form>
    </div>
  )
}
