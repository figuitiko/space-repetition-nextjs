"use client"

import { Layout } from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Award, Clock, Calendar, BookOpen } from "lucide-react"
import { useStats } from "@/hooks/use-stats"
import { StudyHistoryList } from "@/components/study-history-list"
import { AchievementGrid } from "@/components/achievement-grid"
import Link from "next/link"

export function ProfilePage() {
  const { stats, isLoading } = useStats()
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    joinDate: "January 2023",
    profileImage: "/placeholder.svg?height=100&width=100",
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-2xl bg-robins-100 text-robins-800">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-500 mb-2">{user.email}</p>
                  <p className="text-sm text-gray-400 mb-4">Member since {user.joinDate}</p>

                  <Link href="/settings">
                    <Button variant="outline" size="sm" className="mb-6">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>

                  <div className="w-full border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-robins-600">{stats.streak}</p>
                        <p className="text-xs text-gray-500">Day Streak</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-robins-600">{stats.totalCardsStudied}</p>
                        <p className="text-xs text-gray-500">Cards Studied</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-robins-600">{stats.achievements?.length || 0}</p>
                        <p className="text-xs text-gray-500">Achievements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Current Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Daily study goal</span>
                      <span className="font-medium">{stats.cardsStudiedToday} / 50 cards</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-robins-500 h-2 rounded-full"
                        style={{ width: `${Math.min(100, (stats.cardsStudiedToday / 50) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Weekly retention</span>
                      <span className="font-medium">{stats.retentionRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-robins-500 h-2 rounded-full"
                        style={{ width: `${stats.retentionRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="history">
              <TabsList className="mb-6">
                <TabsTrigger value="history" className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Study History
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Achievements
                </TabsTrigger>
                <TabsTrigger value="stats" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learning Stats
                </TabsTrigger>
              </TabsList>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Recent Study Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <StudyHistoryList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Your Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AchievementGrid />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stats">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Learning Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Average Session Length</h3>
                        <p className="text-2xl font-bold">18 minutes</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Best Time of Day</h3>
                        <p className="text-2xl font-bold">Evening (7-9 PM)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Most Studied Topic</h3>
                        <p className="text-2xl font-bold">JavaScript Arrays</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Retention Rate</h3>
                        <p className="text-2xl font-bold">{stats.retentionRate}%</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Link href="/statistics">
                        <Button className="w-full bg-robins-500 hover:bg-robins-600">View Detailed Statistics</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}
