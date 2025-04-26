import type { Deck } from "@/types/deck"
import { DeckCard } from "@/components/deck-card"
import { Skeleton } from "@/components/ui/skeleton"

interface DeckListProps {
  decks: Deck[]
  isLoading: boolean
  onStartStudy: (deckId: string) => void
  onViewDeck?: (deckId: string) => void
  showViewButton?: boolean
}

export function DeckList({ decks, isLoading, onStartStudy, onViewDeck, showViewButton = false }: DeckListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <div className="flex justify-between items-center mt-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (decks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No decks found</h3>
        <p className="text-gray-600 mb-4">
          Create your first deck to start learning JavaScript with spaced repetition.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <DeckCard
          key={deck.id}
          deck={deck}
          onStartStudy={onStartStudy}
          onViewDeck={onViewDeck}
          showViewButton={showViewButton}
        />
      ))}
    </div>
  )
}
