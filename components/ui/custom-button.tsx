"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "red" | "grey" | "yellow"
  buttonType?: "play" | "register"
  size?: "small" | "medium" | "large"
}

export function CustomButton({
  children,
  className,
  variant = "red",
  buttonType = "play",
  size = "medium",
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={cn(
        "btn relative inline-flex items-center justify-center z-10 bg-transparent",
        buttonType === "play" && "btn-play min-w-[200px] h-[90px]",
        buttonType === "register" && "btn-register min-w-[150px] h-[54px] text-sm",
        size === "small" && "scale-90",
        size === "large" && "scale-110",
        variant === "grey" && "btn--grey",
        variant === "yellow" && "btn--yellow",
        className,
      )}
      {...props}
    >
      <span className="relative z-20 text-white font-bold uppercase tracking-wide">{children}</span>
    </button>
  )
}

