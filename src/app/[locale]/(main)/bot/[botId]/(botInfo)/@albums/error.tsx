"use client"

import { ErrorMessage } from "@/components/ErrorMessage"

export default function BotListError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div className="flex min-h-48 flex-[2] items-center justify-center pb-24">
      <ErrorMessage
        error={error}
        className="mt-10"
        message="load albums failed"
      >
        <button
          className="w-[340px] rounded-xl bg-[linear-gradient(155deg,#9D4AE0_0%,#E151BE_100%)] px-4 py-2 text-white"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => {
              window.location.reload()
            }
          }
        >
          Refresh
        </button>
      </ErrorMessage>
    </div>
  )
}
