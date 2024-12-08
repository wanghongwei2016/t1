import { cn } from "@/lib/utils"

export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex h-[22px] items-center rounded-lg bg-[rgba(194,194,194,.51)] px-3 text-sm text-white",
        className
      )}
    >
      {children}
    </span>
  )
}
