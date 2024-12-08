"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Task = {
  key: string
  start: Function
  stop: Function
  src: string
}

let timer: any

let queue: Task[] = []

export const GlobalAudioPlayerData: {
  timer: any
  queue: any[]
  reset: Function
  startTask: Function
  task: Task | null
  status: number
} = {
  timer: null,
  queue: [],
  reset: () => {},
  startTask: () => {},
  task: null,
  status: 0,
}

export default function GlobalAudioPlayer() {
  const [task, setTask] = useState<Task | null>(null)

  function reset() {
    console.log("ttt audio reset")
    GlobalAudioPlayerData.queue = []
    console.log("ttt task", task)
    GlobalAudioPlayerData.task?.stop()
    setTask(null)
    GlobalAudioPlayerData.task = null
    GlobalAudioPlayerData.status = 0
  }

  function startTask(mode: string, task: any) {
    console.log("ttt audio startTask", mode, task)
    if ("reset" == mode) {
      reset()
    }
    GlobalAudioPlayerData.queue.push({
      ...task,
      key: Math.floor(Math.random() * 10000) + "",
    })
  }

  useEffect(() => {
    console.log("ttt audio useEffect")
    GlobalAudioPlayerData.timer = setInterval(() => {
      if (
        GlobalAudioPlayerData.status == 0 &&
        GlobalAudioPlayerData.queue.length
      ) {
        GlobalAudioPlayerData.task = GlobalAudioPlayerData.queue.shift()
        setTask(GlobalAudioPlayerData.task)
        GlobalAudioPlayerData.status = 1
        task?.start()
      }
    }, 100)

    GlobalAudioPlayerData.reset = reset

    GlobalAudioPlayerData.startTask = startTask

    return () => {
      clearInterval(GlobalAudioPlayerData.timer)
    }
  }, [])

  return task ? (
    <audio
      key={task?.key}
      autoPlay={true}
      src={task?.src}
      onPlay={() => {
        console.log("ttt audio onPlay")
        GlobalAudioPlayerData.status = 2
        GlobalAudioPlayerData.task?.start()
      }}
      onPlaying={() => {
        console.log("ttt audio onPlaying")
        GlobalAudioPlayerData.status = 2
        GlobalAudioPlayerData.task?.start()
      }}
      onPause={() => {
        console.log("ttt audio onPause")
        GlobalAudioPlayerData.status = 0
        GlobalAudioPlayerData.task?.stop()
        setTask(null)
      }}
      onError={() => {
        console.log("ttt audio onError")
        GlobalAudioPlayerData.status = 0
        GlobalAudioPlayerData.task?.stop()
        setTask(null)
      }}
    ></audio>
  ) : null
}
