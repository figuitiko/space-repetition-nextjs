import type { FlashCard } from "./card"

export interface Deck {
  id: string
  name: string
  description: string
  cards: FlashCard[]
  createdAt: string
  updatedAt: string
  category: string
}
