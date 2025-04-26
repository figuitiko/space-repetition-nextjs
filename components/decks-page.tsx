"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { DeckList } from "@/components/deck-list"
import { DeckForm } from "@/components/deck-form"
import { Button } from "@/components/ui/button"
import { PlusCircle, X } from "lucide-react"
import { useDecks } from "@/hooks/use-decks"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeckBrowser } from "@/components/deck-browser"

export function DecksPage() {
  const { decks, isLoading } = useDecks()
  const [isCreating, setIsCreating] = useState(false)
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null)

  const selectedDeck = selectedDeckId ? decks.find((deck) => deck.id === selectedDeckId) : null

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Flashcard Decks</h1>
          {!isCreating && !selectedDeckId && (
            <Button onClick={() => setIsCreating(true)} className="bg-robins-500 hover:bg-robins-600">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Deck
            </Button>
          )}
          {(isCreating || selectedDeckId) && (
            <Button
              variant="outline"
              onClick={() => {
                setIsCreating(false)
                setSelectedDeckId(null)
              }}
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          )}
        </div>

        {isCreating && (
          <div className="mb-8">
            <DeckForm onComplete={() => setIsCreating(false)} />
          </div>
        )}

        {selectedDeckId && selectedDeck && (
          <div className="mb-8">
            <Tabs defaultValue="browse">
              <TabsList className="mb-4">
                <TabsTrigger value="browse">Browse Cards</TabsTrigger>
                <TabsTrigger value="edit">Edit Deck</TabsTrigger>
              </TabsList>
              <TabsContent value="browse">
                <DeckBrowser deck={selectedDeck} />
              </TabsContent>
              <TabsContent value="edit">
                <DeckForm deck={selectedDeck} onComplete={() => setSelectedDeckId(null)} />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {!isCreating && !selectedDeckId && (
          <DeckList
            decks={decks}
            isLoading={isLoading}
            onStartStudy={() => {}}
            onViewDeck={setSelectedDeckId}
            showViewButton
          />
        )}
      </div>
    </Layout>
  )
}
