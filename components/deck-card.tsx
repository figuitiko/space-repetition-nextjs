"use client"

import type { Deck } from "@/types/deck"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Edit } from "lucide-react"
import { calculateDueCards } from "@/lib/spaced-repetition"

interface DeckCardProps {
  deck: Deck
  onStartStudy: (deckId: string) => void
  onViewDeck?: (deckId: string) => void
  showViewButton?: boolean
}

export function DeckCard({ deck, onStartStudy, onViewDeck, showViewButton = false }: DeckCardProps) {
  const dueCards = calculateDueCards(deck)
  const completionPercentage =
    deck.cards.length > 0 ? Math.round(((deck.cards.length - dueCards) / deck.cards.length) * 100) : 0

  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-robins-400" />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{deck.name}</CardTitle>
          <Badge variant="outline" className={dueCards > 0 ? "bg-robins-100 text-robins-800" : "bg-gray-100"}>
            {dueCards} due
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{deck.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-robins-500 h-2 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Cards</span>
            <span>{deck.cards.length} total</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        {showViewButton && onViewDeck ? (
          <Button variant="outline" size="sm" className="text-gray-600" onClick={() => onViewDeck(deck.id)}>
            <Edit className="h-4 w-4 mr-1" />
            View Deck
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="text-gray-600">
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
        )}
        <Button
          onClick={() => onStartStudy(deck.id)}
          size="sm"
          className="bg-robins-500 hover:bg-robins-600"
          disabled={dueCards === 0}
        >
          <PlayCircle className="h-4 w-4 mr-1" />
          Study Now
        </Button>
      </CardFooter>
    </Card>
  )
}
