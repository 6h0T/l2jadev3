"use client"

import { Swords, Users, Shield, ScrollText } from "lucide-react"
import SectionSeparator from "./section-separator"
import { useTranslation } from "react-i18next"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

export default function About() {
  const { t } = useTranslation()

  const features = [
    { icon: Swords, key: "stability" },
    { icon: Shield, key: "anticheat" },
    { icon: Users, key: "competition" },
    { icon: ScrollText, key: "noP2W" },
  ]

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <SectionSeparator />
      </div>
      <section id="about" className="pt-24 pb-20 relative bg-gradient-to-b from-[#0a0a12] to-[#121220]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-jade relative inline-block">
                <span className="relative z-10">{t("about.title")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-jade/30"></span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">{t("about.description")}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {features.map(({ icon: Icon, key }, index) => (
              <AnimatedSection key={key}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="bg-[#0a0a12] border border-jade/20 p-4 md:p-6 mb-4 md:mb-6 mx-auto rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center group-hover:border-jade/50 transition-all duration-300">
                    <Icon className="h-8 w-8 md:h-12 md:w-12 text-jade" />
                  </div>
                  <h3 className="text-xl font-bold text-jade mb-3">{t(`about.features.${key}.title`)}</h3>
                  <p className="text-gray-400">{t(`about.features.${key}.description`)}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

