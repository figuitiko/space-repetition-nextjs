"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Award, Zap, Calendar, Clock, BookOpen, TrendingUp, Star, Target, Flame } from "lucide-react"

interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon: React.ReactNode
  unlocked: boolean
}

export function AchievementGrid() {
  // Mock data for achievements
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "First Steps",
      description: "Complete your first study session",
      date: "Jan 15, 2023",
      icon: <BookOpen className="h-6 w-6" />,
      unlocked: true,
    },
    {
      id: "2",
      title: "Streak Master",
      description: "Maintain a 7-day study streak",
      date: "Feb 2, 2023",
      icon: <Flame className="h-6 w-6" />,
      unlocked: true,
    },
    {
      id: "3",
      title: "Knowledge Builder",
      description: "Study 100 cards in total",
      date: "Feb 10, 2023",
      icon: <TrendingUp className="h-6 w-6" />,
      unlocked: true,
    },
    {
      id: "4",
      title: "Perfect Recall",
      description: "Achieve 100% retention in a session",
      date: "Mar 5, 2023",
      icon: <Zap className="h-6 w-6" />,
      unlocked: true,
    },
    {
      id: "5",
      title: "Deck Master",
      description: "Complete all cards in a deck with high retention",
      date: "Mar 20, 2023",
      icon: <Award className="h-6 w-6" />,
      unlocked: true,
    },
    {
      id: "6",
      title: "Time Traveler",
      description: "Study for 24 hours in total",
      date: "Apr 15, 2023",
      icon: <Clock className="h-6 w-6" />,
      unlocked: false,
    },
    {
      id: "7",
      title: "Consistency King",
      description: "Maintain a 30-day study streak",
      date: "Not unlocked",
      icon: <Calendar className="h-6 w-6" />,
      unlocked: false,
    },
    {
      id: "8",
      title: "JavaScript Guru",
      description: "Master all JavaScript decks",
      date: "Not unlocked",
      icon: <Star className="h-6 w-6" />,
      unlocked: false,
    },
    {
      id: "9",
      title: "Goal Crusher",
      description: "Meet your daily goal for 14 consecutive days",
      date: "Not unlocked",
      icon: <Target className="h-6 w-6" />,
      unlocked: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`
            p-4 rounded-lg border flex flex-col items-center text-center
            ${achievement.unlocked ? "bg-white" : "bg-gray-50 opacity-70"}
          `}
        >
          <div
            className={`
              p-3 rounded-full mb-3
              ${achievement.unlocked ? "bg-robins-100 text-robins-600" : "bg-gray-100 text-gray-400"}
            `}
          >
            {achievement.icon}
          </div>
          <h3 className="font-medium mb-1">{achievement.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{achievement.description}</p>
          {achievement.unlocked ? (
            <Badge variant="outline" className="bg-robins-50 text-robins-700">
              Unlocked: {achievement.date}
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-gray-50 text-gray-500">
              Locked
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
