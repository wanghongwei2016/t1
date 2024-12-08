import { ErrorMessage } from "@/components/ErrorMessage"
import { Link } from "@/navigation"

export default function BotNotFound() {
  return (
    <ErrorMessage message="bot not found">
      <Link
        className="block w-[340px] rounded-xl bg-[linear-gradient(155deg,#9D4AE0_0%,#E151BE_100%)] px-4 py-2 text-center text-white"
        href="/"
        replace
      >
        Back Home
      </Link>
    </ErrorMessage>
  )
}
