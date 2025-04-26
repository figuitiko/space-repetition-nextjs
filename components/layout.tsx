import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-robins-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
