"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, HardDrive } from "lucide-react"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import SectionSeparator from "./section-separator"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

export default function Downloads() {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <SectionSeparator />
      </div>
      <section id="downloads" className="pt-24 pb-20 relative bg-gradient-to-b from-[#0a0a12] to-[#121220]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-jade relative inline-block">
                <span className="relative z-10">{t("downloads.title")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-jade/30"></span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">{t("downloads.description")}</p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-12">
            <AnimatedSection>
              <div className="w-full aspect-video">
                <HeroVideoDialog
                  title="Lineage II Gameplay"
                  description="Experience the epic world of Lineage II"
                  thumbnailUrl="/placeholder.svg?height=400&width=600"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {["gameClient", "l2JadeClient"].map((client, index) => (
                <AnimatedSection key={client}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <Card className="bg-[#0a0a12] border-jade/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-jade">{t(`downloads.${client}.title`)}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {t(`downloads.${client}.description`)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex justify-between">
                            <span>{t(`downloads.${client}.version`)}</span>
                            <span className="font-medium">{client === "gameClient" ? "Interlude" : "07-03-2025"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{t(`downloads.${client}.size`)}</span>
                            <span className="font-medium">{client === "gameClient" ? "3 GB" : "1 GB"}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-2">
                        <Button
                          className="w-full bg-jade hover:bg-jade-dark text-white border border-jade-light text-sm md:text-base py-2 md:py-3"
                          onClick={() =>
                            window.open(
                              client === "gameClient"
                                ? "https://drive.usercontent.google.com/download?id=1ltuv1QYkwjTi-dFAYRXRIQfPSqMLsK1P&export=download&authuser=0"
                                : "https://drive.google.com/file/d/1FeUK9rpcxK17ybNGShlGiobDvqLoGhZp/view",
                              "_blank",
                            )
                          }
                        >
                          <Cloud className="mr-2 h-4 w-4" /> {t(`downloads.${client}.downloadGDrive`)}
                        </Button>
                        <Button
                          className="w-full bg-jade hover:bg-jade-dark text-white border border-jade-light text-sm md:text-base py-2 md:py-3"
                          onClick={() =>
                            window.open(
                              client === "gameClient"
                                ? "https://www.mediafire.com/file/dehqh6dpzj0r3os/Client_L2_Clean.rar/"
                                : "https://www.mediafire.com/file/14m5ufc8mfnfufe/L2Jade0307.zip/file",
                              "_blank",
                            )
                          }
                        >
                          <HardDrive className="mr-2 h-4 w-4" /> {t(`downloads.${client}.downloadMediaFire`)}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

