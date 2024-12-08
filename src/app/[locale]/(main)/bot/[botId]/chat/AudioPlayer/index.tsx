import { cn } from "@/lib/utils"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import playAudio from "./playAudio.png"
import playing from "./playing.gif"
import GlobalAudioPlayer, {
  GlobalAudioPlayerData,
} from "@/components/GlobalAudioPlayer"

const AudioPlayer = ({
  src,
  genVoice,
  className,
  autoPlay,
}: {
  src: string | undefined
  genVoice: () => void
  className?: string
  autoPlay: boolean
}) => {
  // const audioRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // const handlePlayPause = useCallback(() => {
  //   if (audioRef.current) {
  //     try {
  //       audioRef.current.play()?.catch(() => {
  //         setIsPlaying(false)
  //       })
  //       setIsPlaying(true)
  //     } catch (error) {
  //       console.error("Error playing audio:", error)
  //     }
  //   }
  // }, [])

  // const handleStop = () => {
  //   audioRef.current.pause()
  //   audioRef.current.currentTime = 0
  //   setIsPlaying(false)
  // }

  // useEffect(() => {
  //   const audioElement = audioRef.current

  //   const handleEnded = () => {
  //     setIsPlaying(false)
  //   }

  //   audioElement.addEventListener("ended", handleEnded)

  //   return () => {
  //     audioElement.removeEventListener("ended", handleEnded)
  //   }
  // }, [])

  // const autoPlayRef = useRef(autoPlay)

  // useEffect(() => {
  //   if (autoPlayRef.current && src) {
  //     handlePlayPause()
  //   }
  // }, [src, handlePlayPause])

  function handleStop() {
    GlobalAudioPlayerData.reset()
    setIsPlaying(false)
  }

  function handlePlayPause() {
    console.log("ttt handlePlayPause")
    GlobalAudioPlayerData.startTask("reset", {
      src,
      start: () => {
        setIsPlaying(true)
      },
      stop: () => {
        setIsPlaying(false)
      },
    })
  }

  useEffect(() => {
    if (src && autoPlay) {
      GlobalAudioPlayerData.startTask("", {
        src,
        start: () => {
          setIsPlaying(true)
        },
        stop: () => {
          setIsPlaying(false)
        },
      })
    }
  }, [src])

  return (
    <div className={cn("custom-audio-player flex items-center", className)}>
      {/* <audio ref={audioRef} src={src}></audio> */}
      <button
        onClick={
          src
            ? isPlaying
              ? handleStop
              : handlePlayPause
            : () => {
                setIsPlaying(true)
                genVoice()
              }
        }
        className="h-[22px] w-[38px] overflow-hidden"
      >
        <Image
          src={playing}
          alt="Playing"
          width={38}
          height={22}
          style={{ width: "auto", height: "100%" }}
          className={!isPlaying ? "hidden" : ""}
        />
        <Image
          src={playAudio}
          alt="Play"
          width={32}
          height={6}
          className={cn(isPlaying && "hidden", "ml-[3px]")}
        />
      </button>
    </div>
  )
}

export default AudioPlayer
