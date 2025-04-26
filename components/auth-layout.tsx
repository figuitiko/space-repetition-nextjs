import type React from "react"
import Link from "next/link"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-robins-600">JSRepeat</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">{children}</div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} JSRepeat - Spaced Repetition for JavaScript Learning</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
