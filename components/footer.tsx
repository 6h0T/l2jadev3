"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#000000] text-gray-400 pt-8">
      {" "}
      {/* Añadido pt-8 para dar espacio al separador */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-6 md:mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-wLBB9y6KreoxJBVQKAJj1BZ1eqO9f4.png"
              alt="L2JADE Logo"
              width={200}
              height={67}
              className="h-auto w-[150px] md:w-[200px]"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            {["hero", "about", "information", "downloads", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-jade uppercase text-xs md:text-sm tracking-wider font-medium transition-colors duration-200"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-jade/10 text-center text-sm">
          <p className="mb-2">© {new Date().getFullYear()} L2JADE. All rights reserved.</p>
          <p>
            Designed by{" "}
            <Link
              href="https://gh0tstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-jade hover:underline"
            >
              gh0tstudio.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

