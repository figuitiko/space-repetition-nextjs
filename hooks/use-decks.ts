"use client"

import { useState, useEffect } from "react"
import type { Deck } from "@/types/deck"
import { mockDecks } from "@/data/mock-decks"

export function useDecks() {
  const [decks, setDecks] = useState<Deck[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchDecks = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setDecks(mockDecks)
      } catch (error) {
        console.error("Failed to fetch decks:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDecks()
  }, [])

  return { decks, isLoading }
}
