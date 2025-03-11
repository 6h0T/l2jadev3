"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Information from "@/components/information"
import Downloads from "@/components/downloads"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const checkI18n = () => {
      if (i18n.isInitialized && i18n.language === "es") {
        setIsLoaded(true)
      } else {
        setTimeout(checkI18n, 100) // Check again after 100ms
      }
    }

    checkI18n()

    return () => {
      // Clean up any potential memory leaks
      setIsLoaded(false)
    }
  }, [i18n])

  if (!isLoaded) return <Preloader />

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-y-auto overflow-x-hidden opacity-0 animate-fade-in">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Information />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

