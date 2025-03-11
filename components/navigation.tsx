"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next"
import { CustomButton } from "@/components/ui/custom-button"
import { CustomHamburger } from "@/components/ui/custom-hamburger"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Asegurarse de que el idioma español esté seleccionado por defecto
    if (i18n.language !== "es") {
      i18n.changeLanguage("es")
    }
  }, [i18n])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const getLanguageName = (code: string) => {
    switch (code) {
      case "es":
        return "Español"
      case "en":
        return "English"
      case "pt":
        return "Português"
      default:
        return code
    }
  }

  const openRegistrationPage = () => {
    window.open("https://l2jade.com.ar/panel/registro", "_blank", "noopener,noreferrer")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a12]/80 backdrop-blur-md shadow-lg`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-bold text-jade">JADE X30</span>
            <Badge
              variant={isOnline ? "default" : "destructive"}
              className={`${isOnline ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"} text-white text-xs md:text-sm`}
            >
              {isOnline ? "Online" : "Offline"}
            </Badge>
          </div>

          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {["hero", "about", "information", "downloads", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-jade uppercase text-sm tracking-wider font-medium transition-colors duration-200 relative group"
              >
                {t(`navigation.${section}`)}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-jade transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-jade border-jade bg-transparent hover:bg-transparent hover:border-jade hover:text-jade"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  {getLanguageName(i18n.language)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0a0a12]/95 backdrop-blur-md border border-jade/20 text-gray-300">
                {["es", "en", "pt"]
                  .filter((lang) => lang !== i18n.language)
                  .map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className="hover:bg-jade/10 focus:bg-jade/10 text-gray-300 hover:text-gray-300 focus:text-gray-300"
                    >
                      {getLanguageName(lang)}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <CustomButton
              buttonType="register"
              onClick={openRegistrationPage}
              className="transform hover:scale-105 transition-transform duration-200"
              size="small"
            >
              {t("navigation.register")}
            </CustomButton>
          </div>

          <CustomHamburger
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a12]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {["hero", "about", "information", "downloads", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-jade uppercase text-sm tracking-wider font-medium transition-colors duration-200 py-2 relative group"
                >
                  {t(`navigation.${section}`)}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-jade transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </button>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-jade border-jade w-full bg-transparent hover:bg-transparent hover:border-jade hover:text-jade"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    {getLanguageName(i18n.language)}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0a0a12]/95 backdrop-blur-md border border-jade/20 text-gray-300">
                  {["es", "en", "pt"]
                    .filter((lang) => lang !== i18n.language)
                    .map((lang) => (
                      <DropdownMenuItem
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className="hover:bg-jade/10 focus:bg-jade/10 text-gray-300 hover:text-gray-300 focus:text-gray-300"
                      >
                        {getLanguageName(lang)}
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <CustomButton
                buttonType="register"
                onClick={openRegistrationPage}
                className="transform hover:scale-105 transition-transform duration-200"
              >
                {t("navigation.register")}
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

