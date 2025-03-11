"use client"

import { Menu, X } from "lucide-react"

interface CustomHamburgerProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function CustomHamburger({ isOpen, onClick, className = "" }: CustomHamburgerProps) {
  return (
    <button
      onClick={onClick}
      className={`btn relative inline-flex items-center justify-center z-10 bg-transparent btn-hamburger h-[54px] min-w-[54px] ${className}`}
    >
      <span className="relative z-20 text-white">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </span>
    </button>
  )
}

