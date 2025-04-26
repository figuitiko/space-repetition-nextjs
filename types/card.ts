export interface FlashCard {
  id: string
  question: string
  answer: string
  hasCode: boolean
  ease: number
  interval: number
  repetitions: number
  dueDate: string
  lastReviewed: string | null
  tags: string[]
}
