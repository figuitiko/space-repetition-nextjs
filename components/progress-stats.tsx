"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStats } from "@/hooks/use-stats"
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

interface ProgressStatsProps {
  compact?: boolean
}

export function ProgressStats({ compact = false }: ProgressStatsProps) {
  const { stats, isLoading } = useStats()

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: compact ? 3 : 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (compact) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Cards Studied Today"
          value={stats.cardsStudiedToday}
          change={stats.cardsStudiedChange}
          changeLabel="vs. yesterday"
        />
        <StatCard
          title="Retention Rate"
          value={`${stats.retentionRate}%`}
          change={stats.retentionRateChange}
          changeLabel="vs. last week"
          changeType={stats.retentionRateChange >= 0 ? "positive" : "negative"}
        />
        <StatCard
          title="Study Streak"
          value={`${stats.streak} days`}
          change={0}
          changeLabel="Keep it up!"
          showChange={false}
        />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Cards Studied Today"
          value={stats.cardsStudiedToday}
          change={stats.cardsStudiedChange}
          changeLabel="vs. yesterday"
        />
        <StatCard
          title="Retention Rate"
          value={`${stats.retentionRate}%`}
          change={stats.retentionRateChange}
          changeLabel="vs. last week"
          changeType={stats.retentionRateChange >= 0 ? "positive" : "negative"}
        />
        <StatCard
          title="Study Streak"
          value={`${stats.streak} days`}
          change={0}
          changeLabel="Keep it up!"
          showChange={false}
        />
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList>
          <TabsTrigger value="daily">Daily Progress</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cards Studied Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer
                  config={{
                    cards: {
                      label: "Cards Studied",
                      color: "hsl(var(--chart-1))",
                    },
                    retention: {
                      label: "Retention Rate",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stats.dailyProgress}>
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="cards"
                        stroke="var(--color-cards)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="retention"
                        stroke="var(--color-retention)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="categories" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cards by JavaScript Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ChartContainer
                  config={{
                    count: {
                      label: "Card Count",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stats.categoryCounts}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="count" fill="var(--color-count)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  change: number
  changeLabel: string
  changeType?: "positive" | "negative"
  showChange?: boolean
}

function StatCard({ title, value, change, changeLabel, changeType = "positive", showChange = true }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{value}</div>
          {showChange && (
            <div className={`text-sm mt-1 ${changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
              {change > 0 ? "+" : ""}
              {change}% {changeLabel}
            </div>
          )}
          {!showChange && <div className="text-sm mt-1 text-gray-500">{changeLabel}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
