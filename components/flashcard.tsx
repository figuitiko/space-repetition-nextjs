"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { FlashCard } from "@/types/card"
import { cn } from "@/lib/utils"
import type { Difficulty } from "@/types/difficulty"
import { CodeBlock } from "@/components/code-block"

interface FlashcardProps {
  card: FlashCard
  onAnswer: (difficulty: Difficulty) => void
  browseMode?: boolean
}

export function Flashcard({ card, onAnswer, browseMode = false }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnswering, setIsAnswering] = useState(false)

  const handleFlip = () => {
    if (!isAnswering) {
      setIsFlipped(!isFlipped)
    }
  }

  const handleAnswer = (difficulty: Difficulty) => {
    if (browseMode) {
      setIsFlipped(!isFlipped)
      return
    }

    setIsAnswering(true)
    onAnswer(difficulty)
    setTimeout(() => {
      setIsFlipped(false)
      setIsAnswering(false)
    }, 300)
  }

  return (
    <div className="perspective-1000 w-full">
      <div
        className={cn(
          "relative transition-transform duration-500 transform-style-3d w-full cursor-pointer",
          isFlipped ? "rotate-y-180" : "",
        )}
        style={{ minHeight: "300px" }}
      >
        {/* Front of card */}
        <Card
          className={cn(
            "absolute w-full h-full backface-hidden p-6 flex flex-col",
            isFlipped ? "pointer-events-none" : "",
          )}
          onClick={handleFlip}
        >
          <CardContent className="flex-1 flex flex-col justify-center p-0">
            <div className="mb-4 text-sm text-gray-500 uppercase tracking-wide">Question</div>
            {card.hasCode ? (
              <CodeBlock code={card.question} language="javascript" />
            ) : (
              <h3 className="text-xl font-medium text-gray-900">{card.question}</h3>
            )}
          </CardContent>
          <div className="mt-4 text-center">
            <Button
              variant="ghost"
              className="text-robins-600 hover:text-robins-700 hover:bg-robins-50"
              onClick={(e) => {
                e.stopPropagation()
                handleFlip()
              }}
            >
              Show Answer
            </Button>
          </div>
        </Card>

        {/* Back of card */}
        <Card
          className={cn(
            "absolute w-full h-full backface-hidden p-6 rotate-y-180 flex flex-col",
            !isFlipped ? "pointer-events-none" : "",
          )}
        >
          <CardContent className="flex-1 flex flex-col justify-center p-0">
            <div className="mb-4 text-sm text-gray-500 uppercase tracking-wide">Answer</div>
            {card.hasCode ? (
              <CodeBlock code={card.answer} language="javascript" />
            ) : (
              <div className="text-lg text-gray-900">{card.answer}</div>
            )}
          </CardContent>

          {browseMode ? (
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                className="text-robins-600 hover:text-robins-700 hover:bg-robins-50"
                onClick={() => setIsFlipped(false)}
              >
                Back to Question
              </Button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-4 gap-2">
              <Button className="bg-red-100 hover:bg-red-200 text-red-800" onClick={() => handleAnswer("again")}>
                Again
              </Button>
              <Button
                className="bg-orange-100 hover:bg-orange-200 text-orange-800"
                onClick={() => handleAnswer("hard")}
              >
                Hard
              </Button>
              <Button className="bg-green-100 hover:bg-green-200 text-green-800" onClick={() => handleAnswer("good")}>
                Good
              </Button>
              <Button
                className="bg-robins-100 hover:bg-robins-200 text-robins-800"
                onClick={() => handleAnswer("easy")}
              >
                Easy
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
