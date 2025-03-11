import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link href="/" className="text-jade hover:underline">
        Return to Home
      </Link>
    </div>
  )
}

