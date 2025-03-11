"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.isInitialized && i18n.language === "es") {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    } else {
      const handleLanguageChanged = (lng: string) => {
        if (lng === "es") {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
        }
      }

      i18n.on("languageChanged", handleLanguageChanged)
      return () => {
        i18n.off("languageChanged", handleLanguageChanged)
      }
    }
  }, [i18n])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{
        opacity: loading ? 1 : 0,
        visibility: loading ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
      }}
    >
      <div className="text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-wLBB9y6KreoxJBVQKAJj1BZ1eqO9f4.png"
          alt="L2JADE Logo"
          width={300}
          height={100}
          className="mb-4"
          priority
        />
        <div className="w-16 h-16 border-t-4 border-jade border-solid rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}

