"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

export function AnimatedShinyTextDemo() {
  const scrollToDownloads = () => {
    console.log("Scrolling to downloads section")
    const downloadsSection = document.getElementById("downloads")
    if (downloadsSection) {
      downloadsSection.scrollIntoView({ behavior: "smooth" })
    } else {
      console.error("Downloads section not found")
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white/10 bg-white/5 backdrop-blur-sm",
          "hover:bg-white/10 transition-all duration-300 ease-in-out cursor-pointer",
        )}
      >
        <AnimatedShinyText
          className="inline-flex items-center justify-center px-4 py-1.5 text-sm text-white/90"
          onClick={scrollToDownloads}
        >
          <span className="flex items-center gap-2">
            ✨Nueva actualización 07-03-2025
            <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </span>
        </AnimatedShinyText>
      </div>
    </div>
  )
}

