"use client"

import { useTranslation } from "react-i18next"
import { Mail, MessageSquare } from "lucide-react"
import SectionSeparator from "./section-separator"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <SectionSeparator />
      </div>
      <section id="contact" className="pt-24 pb-20 relative overflow-hidden">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08282-vimAQpT8CpHTQy3PajgxBDXHG1bR2E.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-jade relative inline-block">
                <span className="relative z-10">{t("contact.title")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-jade/30"></span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">{t("contact.description")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a0a12]/80 border border-jade/20 p-8 backdrop-blur-md rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div
                    className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 mx-auto flex items-center justify-center bg-center bg-no-repeat bg-contain transition-transform duration-300 ease-in-out hover:scale-110"
                    style={{
                      backgroundImage:
                        'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
                    }}
                  >
                    <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-jade mb-2">{t("contact.emailSupport.title")}</h3>
                  <p className="text-gray-300">{t("contact.emailSupport.email")}</p>
                </div>

                <div className="text-center">
                  <div
                    className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 mx-auto flex items-center justify-center bg-center bg-no-repeat bg-contain transition-transform duration-300 ease-in-out hover:scale-110"
                    style={{
                      backgroundImage:
                        'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
                    }}
                  >
                    <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-jade mb-2">{t("contact.liveChat.title")}</h3>
                  <p className="text-gray-300">{t("contact.liveChat.description")}</p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-jade mb-4">{t("contact.connectWithUs.title")}</h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="#"
                      className="relative w-12 h-12 flex items-center justify-center bg-center bg-no-repeat bg-contain hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
                      }}
                      aria-label="Facebook"
                    >
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="relative w-12 h-12 flex items-center justify-center bg-center bg-no-repeat bg-contain hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
                      }}
                      aria-label="Twitter"
                    >
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="relative w-12 h-12 flex items-center justify-center bg-center bg-no-repeat bg-contain hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_social-43mGPacUpNQDw0Hh7VhqGNh8gyTPz9.png")',
                      }}
                      aria-label="Discord"
                    >
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0">
        <SectionSeparator />
      </div>
    </div>
  )
}

