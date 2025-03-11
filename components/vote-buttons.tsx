"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { useEffect, useState } from "react"

const VoteButtons = () => {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Escuchar cambios de idioma
  useEffect(() => {
    const handleLanguageChange = () => {
      // Forzar actualización del componente
      setMounted(false)
      setTimeout(() => setMounted(true), 0)
    }

    i18n.on('languageChanged', handleLanguageChange)

    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          {t("voteButtons.vote")}
        </h3>
        <div className="flex flex-col space-y-4">
          <a
            href="https://l2.hopzone.net/site/vote/106242/1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 mx-auto flex items-center justify-center bg-center bg-no-repeat bg-contain hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundImage:
                'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hopzone-VYR0XOPPB2ngzldEIQ3d67njjgv0M9.png"
              alt="Vote on Hopzone"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://svtop.net/vote/618"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 mx-auto flex items-center justify-center bg-center bg-no-repeat bg-contain hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundImage:
                'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/server%20top-7GxSuHn9q4YBc5NRwjr90CNlPGvLVZ.png"
              alt="Vote on Server Top"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default VoteButtons

