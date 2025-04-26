"use client"

import { useState, useEffect } from "react"
import type { FlashCard } from "@/types/card"
import type { Difficulty } from "@/types/difficulty"
import { mockDecks } from "@/data/mock-decks"
import { updateCardSchedule } from "@/lib/spaced-repetition"

export function useStudySession(deckId: string) {
  const [cards, setCards] = useState<FlashCard[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [totalDueCards, setTotalDueCards] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isSessionComplete, setIsSessionComplete] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Find the deck and get due cards
        const deck = mockDecks.find((d) => d.id === deckId)
        if (deck) {
          const now = new Date()
          const dueCards = deck.cards.filter((card) => {
            return new Date(card.dueDate) <= now
          })

          setCards(dueCards)
          setTotalDueCards(dueCards.length)
          setIsSessionComplete(dueCards.length === 0)
        }
      } catch (error) {
        console.error("Failed to fetch cards:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCards()
  }, [deckId])

  const answerCard = (cardId: string, difficulty: Difficulty) => {
    // Update the card's schedule based on the difficulty
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) => {
        if (card.id === cardId) {
          return updateCardSchedule(card, difficulty)
        }
        return card
      })
      return updatedCards
    })

    // Move to the next card
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1)
    } else {
      setIsSessionComplete(true)
    }
  }

  return {
    cards,
    currentCardIndex,
    totalDueCards,
    isLoading,
    answerCard,
    isSessionComplete,
  }
}
