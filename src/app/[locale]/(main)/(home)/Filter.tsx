import { cn } from "@/lib/utils"

export default function Filter({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode
  onClick: () => void
  active: boolean
}) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "flex h-[45px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-[#ffffff2e] bg-[rgba(216,216,216,0.28)] px-4 py-2 text-white backdrop-blur-md",
        active && "border-[#DD57F1] text-[#DD57F1]"
      )}
    >
      {children}
    </span>
  )
}
