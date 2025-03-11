import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import ClientRootLayout from "./client-layout"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "L2JADE",
  description: "Lineage II Private Server",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}



import './globals.css'