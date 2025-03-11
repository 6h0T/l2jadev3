import Image from "next/image"

export default function SectionSeparator() {
  return (
    <div className="relative w-full h-8 -mt-4 -mb-4 z-20">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%201-Vn4RI6Gw7Rj0NLGuetebOUOKZyc9WP.png"
        alt="Section Separator"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}

