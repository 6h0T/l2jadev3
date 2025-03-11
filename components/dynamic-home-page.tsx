"use client"

import dynamic from "next/dynamic"
import Preloader from "@/components/preloader"

const DynamicHomePage = dynamic(() => import("@/components/home-page"), {
  loading: () => <Preloader />,
})

export default function DynamicHomePageWrapper() {
  return <DynamicHomePage />
}

