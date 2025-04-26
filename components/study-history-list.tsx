"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, BarChart } from "lucide-react"

interface StudySession {
  id: string
  date: string
  deck: string
  cardsStudied: number
  duration: string
  retention: number
}

export function StudyHistoryList() {
  // Mock data for study history
  const studyHistory: StudySession[] = [
    {
      id: "1",
      date: "Today, 3:45 PM",
      deck: "JavaScript Basics",
      cardsStudied: 25,
      duration: "18 min",
      retention: 92,
    },
    {
      id: "2",
      date: "Today, 10:15 AM",
      deck: "JavaScript Arrays",
      cardsStudied: 15,
      duration: "12 min",
      retention: 87,
    },
    {
      id: "3",
      date: "Yesterday, 7:30 PM",
      deck: "JavaScript Functions",
      cardsStudied: 30,
      duration: "22 min",
      retention: 85,
    },
    {
      id: "4",
      date: "Yesterday, 2:15 PM",
      deck: "JavaScript Basics",
      cardsStudied: 20,
      duration: "15 min",
      retention: 90,
    },
    {
      id: "5",
      date: "2 days ago, 9:00 AM",
      deck: "JavaScript Async",
      cardsStudied: 18,
      duration: "20 min",
      retention: 78,
    },
  ]

  return (
    <div className="space-y-4">
      {studyHistory.map((session) => (
        <Card key={session.id} className="p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-2 md:mb-0">
              <h3 className="font-medium">{session.deck}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="h-3.5 w-3.5 mr-1" />
                {session.date}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              <Badge variant="outline" className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {session.duration}
              </Badge>
              <Badge variant="outline" className="flex items-center">
                {session.cardsStudied} cards
              </Badge>
              <Badge
                className={`flex items-center ${
                  session.retention >= 90
                    ? "bg-green-100 text-green-800"
                    : session.retention >= 80
                      ? "bg-robins-100 text-robins-800"
                      : "bg-orange-100 text-orange-800"
                }`}
              >
                <BarChart className="h-3 w-3 mr-1" />
                {session.retention}% retention
              </Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
