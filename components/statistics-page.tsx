"use client"

import { Layout } from "@/components/layout"
import { ProgressStats } from "@/components/progress-stats"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStats } from "@/hooks/use-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TopicBreakdown } from "@/components/topic-breakdown"
import { LearningCalendar } from "@/components/learning-calendar"

export function StatisticsPage() {
  const { stats, isLoading } = useStats()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Learning Statistics</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Cards Studied</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalCardsStudied || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Average Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.retentionRate || 0}%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Study Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.streak || 0} days</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="progress">
          <TabsList className="mb-4">
            <TabsTrigger value="progress">Progress Over Time</TabsTrigger>
            <TabsTrigger value="topics">Topic Breakdown</TabsTrigger>
            <TabsTrigger value="calendar">Study Calendar</TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <ProgressStats />
          </TabsContent>
          <TabsContent value="topics">
            <TopicBreakdown />
          </TabsContent>
          <TabsContent value="calendar">
            <LearningCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
