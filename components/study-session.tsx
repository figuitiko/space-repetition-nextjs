"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flashcard } from "@/components/flashcard"
import { useStudySession } from "@/hooks/use-study-session"
import { ArrowLeft, CheckCircle } from "lucide-react"

interface StudySessionProps {
  deckId: string
  onFinish: () => void
}

export function StudySession({ deckId, onFinish }: StudySessionProps) {
  const { cards, currentCardIndex, totalDueCards, isLoading, answerCard, isSessionComplete } = useStudySession(deckId)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-robins-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading study session...</p>
        </div>
      </div>
    )
  }

  if (isSessionComplete || totalDueCards === 0) {
    return (
      <div className="max-w-lg mx-auto">
        <Card className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-robins-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
          <p className="text-gray-600 mb-6">
            You've completed all due cards for this deck. Come back later for more review.
          </p>
          <Button onClick={onFinish} className="bg-robins-500 hover:bg-robins-600">
            Back to Dashboard
          </Button>
        </Card>
      </div>
    )
  }

  const currentCard = cards[currentCardIndex]
  const progress = Math.round((currentCardIndex / totalDueCards) * 100)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <Button variant="ghost" onClick={onFinish} className="text-gray-600">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Decks
        </Button>
        <div className="text-sm text-gray-600">
          Card {currentCardIndex + 1} of {totalDueCards}
        </div>
      </div>

      <Progress value={progress} className="mb-8 bg-gray-200" />

      <Flashcard card={currentCard} onAnswer={(difficulty) => answerCard(currentCard.id, difficulty)} />
    </div>
  )
}
