"use client"

import type React from "react"
import { useEffect, useState } from "react"

import "./globals.css"
import "./custom-button.css"
import { Space_Grotesk } from "next/font/google"
import { I18nextProvider } from "react-i18next"
import i18n, { loadTranslations } from "@/lib/i18n"
import VoteButtons from "@/components/vote-buttons"
import Preloader from "@/components/preloader"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [i18nReady, setI18nReady] = useState(false)

  useEffect(() => {
    loadTranslations().then(() => {
      i18n.changeLanguage("es")
      setI18nReady(true)
    })
  }, [])

  return (
    <html lang="es" className={`overflow-y-scroll ${spaceGrotesk.variable}`}>
      <I18nextProvider i18n={i18n}>
        <body className="font-space-grotesk">
          <Preloader />
          {i18nReady ? children : null}
          <VoteButtons />
        </body>
      </I18nextProvider>
    </html>
  )
}

