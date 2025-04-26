import type { FlashCard } from "@/types/card"
import type { Deck } from "@/types/deck"
import type { Difficulty } from "@/types/difficulty"

// SM-2 algorithm constants
const INITIAL_EASE = 2.5
const MINIMUM_EASE = 1.3
const EASE_MODIFIER = {
  again: -0.2,
  hard: -0.15,
  good: 0,
  easy: 0.15,
}

const INTERVAL_MODIFIER = {
  again: 0, // Reset to 1 day
  hard: 0.7, // Reduce interval
  good: 1, // Keep interval
  easy: 1.3, // Increase interval
}

export function updateCardSchedule(card: FlashCard, difficulty: Difficulty): FlashCard {
  const now = new Date()
  let { ease, interval, repetitions } = card

  // Update ease factor
  ease = Math.max(MINIMUM_EASE, ease + EASE_MODIFIER[difficulty])

  // Update interval based on difficulty
  if (difficulty === "again") {
    interval = 1 // Reset to 1 day
    repetitions = 0
  } else {
    if (repetitions === 0) {
      interval = 1 // First successful review
    } else if (repetitions === 1) {
      interval = 3 // Second successful review
    } else {
      interval = Math.round(interval * ease * INTERVAL_MODIFIER[difficulty])
    }
    repetitions += 1
  }

  // Calculate new due date
  const dueDate = new Date(now)
  dueDate.setDate(dueDate.getDate() + interval)

  return {
    ...card,
    ease,
    interval,
    repetitions,
    dueDate: dueDate.toISOString(),
    lastReviewed: now.toISOString(),
  }
}

export function calculateDueCards(deck: Deck): number {
  const now = new Date()
  return deck.cards.filter((card) => new Date(card.dueDate) <= now).length
}
