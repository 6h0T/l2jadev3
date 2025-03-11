import type { Metadata } from "next"
import HomePage from "@/components/home-page"

export const metadata: Metadata = {
  title: "L2JADE - Lineage 2 Private Server",
  description: "Join L2JADE, the ultimate Lineage 2 private server experience. High-quality gameplay, active community, and regular updates.",
}

export default function Home() {
  return <HomePage />
}

