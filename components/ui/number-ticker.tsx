"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface NumberTickerProps {
  value: number
  className?: string
  onComplete?: () => void
  delay?: number
}

export const NumberTicker: React.FC<NumberTickerProps> = ({ value, className, onComplete, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!shouldAnimate) return

    let animationFrameId: number

    const animateValue = (
      currentTime: number,
      startTime: number,
      startValue: number,
      changeInValue: number,
      duration: number,
    ) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      return startValue + changeInValue * progress
    }

    const startAnimation = () => {
      const startTime = performance.now()
      const startValue = displayValue
      const changeInValue = value - displayValue
      const duration = 1000 // Animation duration in milliseconds

      const step = (currentTime: number) => {
        const newValue = animateValue(currentTime, startTime, startValue, changeInValue, duration)
        setDisplayValue(Math.round(newValue))

        if (currentTime - startTime < duration) {
          animationFrameId = requestAnimationFrame(step)
        } else {
          setDisplayValue(value)
          if (onComplete) {
            onComplete()
          }
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }

    startAnimation()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [value, displayValue, onComplete, shouldAnimate])

  return <span className={className}>{displayValue}</span>
}

