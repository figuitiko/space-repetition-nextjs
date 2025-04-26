"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { StudySession } from "@/components/study-session"
import { DeckList } from "@/components/deck-list"
import { ProgressStats } from "@/components/progress-stats"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useDecks } from "@/hooks/use-decks"
import Link from "next/link"

export function DashboardPage() {
  const { decks, isLoading } = useDecks()
  const [activeView, setActiveView] = useState<"decks" | "study" | "stats">("decks")
  const [activeDeckId, setActiveDeckId] = useState<string | null>(null)

  const handleStartStudy = (deckId: string) => {
    setActiveDeckId(deckId)
    setActiveView("study")
  }

  const handleBackToDashboard = () => {
    setActiveView("decks")
    setActiveDeckId(null)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">JavaScript Spaced Repetition</h1>
          <div className="flex gap-4">
            <Link href="/">
              <Button
                variant={activeView === "decks" ? "default" : "outline"}
                className={activeView === "decks" ? "bg-robins-500 hover:bg-robins-600" : ""}
              >
                Decks
              </Button>
            </Link>
            <Link href="/statistics">
              <Button variant="outline" className="">
                Progress
              </Button>
            </Link>
          </div>
        </div>

        {activeView === "decks" && (
          <>
            <div className="mb-8">
              <ProgressStats compact />
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Your Decks</h2>
              <Button className="bg-robins-500 hover:bg-robins-600">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Deck
              </Button>
            </div>
            <DeckList
              decks={decks}
              isLoading={isLoading}
              onStartStudy={handleStartStudy}
              onViewDeck={(deckId) => {
                window.location.href = `/decks?id=${deckId}`
              }}
              showViewButton
            />
          </>
        )}

        {activeView === "study" && activeDeckId && (
          <StudySession deckId={activeDeckId} onFinish={handleBackToDashboard} />
        )}

        {activeView === "stats" && <ProgressStats />}
      </div>
    </Layout>
  )
}
