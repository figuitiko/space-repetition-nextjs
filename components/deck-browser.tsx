"use client"

import { useState } from "react"
import type { Deck } from "@/types/deck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Tag } from "lucide-react"
import { Flashcard } from "@/components/flashcard"
import { Input } from "@/components/ui/input"

interface DeckBrowserProps {
  deck: Deck
}

export function DeckBrowser({ deck }: DeckBrowserProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags from the deck
  const allTags = Array.from(new Set(deck.cards.flatMap((card) => card.tags))).sort()

  // Filter cards based on search term and selected tag
  const filteredCards = deck.cards.filter((card) => {
    const matchesSearch =
      searchTerm === "" ||
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTag = selectedTag === null || card.tags.includes(selectedTag)

    return matchesSearch && matchesTag
  })

  const currentCard = filteredCards[currentCardIndex]
  const hasCards = filteredCards.length > 0

  const goToNextCard = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  }

  const goToPrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  }

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null)
    } else {
      setSelectedTag(tag)
    }
    setCurrentCardIndex(0)
  }

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{deck.name} - Browse Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentCardIndex(0)
              }}
              className="mb-4"
            />

            <div className="flex flex-wrap gap-2 mb-4">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={
                    selectedTag === tag ? "bg-robins-500 hover:bg-robins-600 cursor-pointer" : "cursor-pointer"
                  }
                  onClick={() => handleTagClick(tag)}
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              Showing {filteredCards.length} of {deck.cards.length} cards
              {selectedTag && <span> with tag "{selectedTag}"</span>}
            </div>
          </div>

          {hasCards ? (
            <>
              <Flashcard card={currentCard} onAnswer={() => {}} browseMode />

              <div className="flex justify-between items-center mt-6">
                <Button variant="outline" onClick={goToPrevCard} disabled={currentCardIndex === 0}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <div className="text-sm text-gray-600">
                  {currentCardIndex + 1} of {filteredCards.length}
                </div>
                <Button
                  variant="outline"
                  onClick={goToNextCard}
                  disabled={currentCardIndex === filteredCards.length - 1}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No cards match your filters</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
