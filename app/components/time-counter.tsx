"use client"

import { useEffect, useState } from "react"

interface TimeCounterProps {
  startDate: string
}

export default function TimeCounter({ startDate }: TimeCounterProps) {
  const [timeString, setTimeString] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const start = new Date(startDate).getTime()
      const now = new Date().getTime()
      const diff = now - start

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeString(`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  return <span>{timeString}</span>
}

