import type React from "react"
import { MarketingLayout } from "@/components/marketing-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MarketingLayout>{children}</MarketingLayout>
}
