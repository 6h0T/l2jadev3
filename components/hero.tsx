"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { NumberTicker } from "@/components/ui/number-ticker"
import { useTranslation } from "react-i18next"
import { AnimatedShinyTextDemo } from "@/components/ui/animated-shiny-text-demo"
import { CustomButton } from "@/components/ui/custom-button"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

export default function Hero() {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isVimeoLoaded, setIsVimeoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true
    script.onload = () => setIsVimeoLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (isVimeoLoaded && videoRef.current) {
      const player = new (window as any).Vimeo.Player(videoRef.current)
      player.setVolume(0)
      player.setLoop(true)
      player.play().catch((error: Error) => {
        console.error("Error playing the video:", error)
        setVideoError(true)
      })
    }
  }, [isVimeoLoaded])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-[110vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!videoError ? (
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/1064449618?h=1184f76324&background=1"
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              isMobile ? "w-[300%] h-[300%]" : "w-[155%] h-[155%]"
            }`}
            style={{
              transform: `translate(-50%, -50%) ${isMobile ? "scale(1.5)" : "scale(1)"}`,
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Lineage II Background"
          ></iframe>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r"></div>
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="container mx-auto px-4 z-20 text-center relative">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <AnimatedShinyTextDemo />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 md:mb-6 inline-block"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-wLBB9y6KreoxJBVQKAJj1BZ1eqO9f4.png"
                alt="L2JADE Logo"
                width={500}
                height={167}
                className="h-auto w-[200px] md:w-[300px] lg:w-[400px] mx-auto"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center mb-8 md:mb-10"
            >
              <NumberTicker
                value={7}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                delay={800} // 0.8 segundos en milisegundos
              />
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white ml-4 uppercase">
                {t("hero.monthsWithYou")}
              </span>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center"
            >
              <CustomButton
                buttonType="play"
                onClick={() => scrollToSection("downloads")}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                {t("hero.playNow")}
              </CustomButton>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

