"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface AnimatedShinyTextProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({ children, className, onClick }) => {
  return (
    <div className="relative inline-flex">
      <span
        className={cn("relative inline-flex items-center justify-center font-medium cursor-pointer", className)}
        onClick={onClick}
      >
        {children}
        <span className="absolute inset-0 bg-gradient-to-r from-jade/50 via-jade/25 to-jade/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </span>
    </div>
  )
}

