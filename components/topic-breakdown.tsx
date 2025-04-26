"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStats } from "@/hooks/use-stats"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function TopicBreakdown() {
  const { stats, isLoading } = useStats()

  if (isLoading) {
    return <div className="animate-pulse h-80 bg-gray-100 rounded-lg"></div>
  }

  const COLORS = [
    "var(--color-robins-500)",
    "var(--color-robins-600)",
    "var(--color-robins-700)",
    "var(--color-robins-400)",
    "var(--color-robins-300)",
    "var(--color-robins-800)",
    "var(--color-robins-200)",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cards by Topic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats.categoryCounts}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={120}
                fill="#8884d8"
                dataKey="count"
                nameKey="category"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {stats.categoryCounts.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} cards`, "Count"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
