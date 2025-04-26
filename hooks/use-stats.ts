"use client"

import { useState, useEffect } from "react"

interface Stats {
  cardsStudiedToday: number
  cardsStudiedChange: number
  retentionRate: number
  retentionRateChange: number
  streak: number
  totalCardsStudied: number
  dailyProgress: Array<{
    date: string
    cards: number
    retention: number
  }>
  categoryCounts: Array<{
    category: string
    count: number
  }>
  dailyActivity: Array<{
    date: string
    count: number
  }>
  achievements: Array<{
    date: string
    description: string
  }>
}

export function useStats() {
  const [stats, setStats] = useState<Stats>({
    cardsStudiedToday: 0,
    cardsStudiedChange: 0,
    retentionRate: 0,
    retentionRateChange: 0,
    streak: 0,
    totalCardsStudied: 0,
    dailyProgress: [],
    categoryCounts: [],
    dailyActivity: [],
    achievements: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Generate daily activity for the last 35 days
        const dailyActivity = []
        const today = new Date()
        for (let i = 0; i < 35; i++) {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          const dateString = date.toISOString().split("T")[0]

          // Random count between 0 and 60, with higher probability for recent days
          const probability = Math.max(0, 1 - i / 35)
          const count = Math.random() < probability ? Math.floor(Math.random() * 60) : 0

          dailyActivity.push({
            date: dateString,
            count,
          })
        }

        // Mock data
        setStats({
          cardsStudiedToday: 42,
          cardsStudiedChange: 15,
          retentionRate: 87,
          retentionRateChange: 3,
          streak: 7,
          totalCardsStudied: 1248,
          dailyProgress: [
            { date: "Mon", cards: 30, retention: 80 },
            { date: "Tue", cards: 25, retention: 82 },
            { date: "Wed", cards: 35, retention: 85 },
            { date: "Thu", cards: 40, retention: 83 },
            { date: "Fri", cards: 38, retention: 86 },
            { date: "Sat", cards: 45, retention: 84 },
            { date: "Sun", cards: 42, retention: 87 },
          ],
          categoryCounts: [
            { category: "Basics", count: 45 },
            { category: "Functions", count: 38 },
            { category: "Objects", count: 32 },
            { category: "Arrays", count: 28 },
            { category: "DOM", count: 25 },
            { category: "Async", count: 20 },
            { category: "ES6+", count: 18 },
          ],
          dailyActivity: dailyActivity,
          achievements: [
            { date: "Today", description: "Completed 7-day study streak!" },
            { date: "Yesterday", description: "Mastered 'JavaScript Arrays' deck" },
            { date: "3 days ago", description: "Studied 50 cards in one day" },
            { date: "Last week", description: "Created first custom deck" },
          ],
        })
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, isLoading }
}
