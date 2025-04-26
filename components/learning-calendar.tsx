"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStats } from "@/hooks/use-stats"
import { Badge } from "@/components/ui/badge"

export function LearningCalendar() {
  const { stats, isLoading } = useStats()

  if (isLoading) {
    return <div className="animate-pulse h-80 bg-gray-100 rounded-lg"></div>
  }

  // Generate a 7x5 grid for the last 35 days
  const today = new Date()
  const calendarData = Array.from({ length: 35 }, (_, i) => {
    const date = new Date(today)
    date.setDate(date.getDate() - 34 + i)

    // Find if there's activity on this date
    const dateString = date.toISOString().split("T")[0]
    const activity = stats.dailyActivity.find((d) => d.date === dateString)

    return {
      date,
      dateString,
      count: activity?.count || 0,
    }
  })

  // Group by week
  const weeks = []
  for (let i = 0; i < calendarData.length; i += 7) {
    weeks.push(calendarData.slice(i, i + 7))
  }

  // Get intensity level based on count
  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-gray-100"
    if (count < 5) return "bg-robins-100"
    if (count < 15) return "bg-robins-200"
    if (count < 30) return "bg-robins-300"
    if (count < 50) return "bg-robins-400"
    return "bg-robins-500"
  }

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-end space-x-2">
          <div className="text-sm text-gray-500">Less</div>
          {[0, 1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`w-4 h-4 rounded-sm ${level === 0 ? "bg-gray-100" : `bg-robins-${level}00`}`}
            ></div>
          ))}
          <div className="text-sm text-gray-500">More</div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((day) => (
            <div key={day} className="text-xs text-center text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1">
              {week.map((day) => {
                const isToday = day.dateString === today.toISOString().split("T")[0]
                return (
                  <div
                    key={day.dateString}
                    className={`
                      relative w-full pt-[100%] rounded-sm 
                      ${getIntensityClass(day.count)}
                      ${isToday ? "ring-2 ring-robins-600" : ""}
                    `}
                    title={`${day.date.toLocaleDateString()}: ${day.count} cards studied`}
                  >
                    {day.count > 0 && (
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-gray-700">
                        {day.count}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Recent Achievements</h3>
          <div className="space-y-2">
            {stats.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                <Badge className="bg-robins-100 text-robins-800 mr-2">{achievement.date}</Badge>
                <span>{achievement.description}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
