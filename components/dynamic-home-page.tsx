"use client"

import dynamic from "next/dynamic"

const DynamicHomePage = dynamic(() => import("@/components/home-page"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function DynamicHomePageWrapper() {
  return <DynamicHomePage />
}

