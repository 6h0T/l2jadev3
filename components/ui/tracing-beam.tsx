"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div ref={ref} className={className}>
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          className="absolute left-0 top-3 w-[2px] h-[calc(100%-24px)] bg-gradient-to-b from-[#c9aa71] to-[#c9aa71]/20"
          style={{
            scaleY,
            transformOrigin: "top",
          }}
        />
        <div className="ml-4">{children}</div>
      </div>
    </div>
  )
}

