"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Bell, Settings, Shield, Download, Upload, Moon, Sun, Laptop, Camera } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SettingsPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSave = (section: string) => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Settings saved",
        description: `Your ${section} settings have been updated successfully.`,
      })
    }, 1000)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="account" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Account</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Data</span>
            </TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information and profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                      <AvatarFallback className="text-4xl bg-robins-100 text-robins-800">AJ</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="mb-2">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Alex" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="alex@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="alexjs" />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave("account")}
                    className="bg-robins-500 hover:bg-robins-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Control how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Reminders</p>
                      <p className="text-sm text-gray-500">Receive a daily reminder to study</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Progress Report</p>
                      <p className="text-sm text-gray-500">Get a summary of your weekly progress</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Achievement Alerts</p>
                      <p className="text-sm text-gray-500">Be notified when you earn achievements</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Content Available</p>
                      <p className="text-sm text-gray-500">Get notified when new decks are available</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-lg font-medium">Study Reminders</h3>

                  <div className="space-y-2">
                    <Label>Preferred Reminder Time</Label>
                    <Select defaultValue="evening">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (2:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (7:00 PM)</SelectItem>
                        <SelectItem value="custom">Custom Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekend Reminders</p>
                      <p className="text-sm text-gray-500">Receive reminders on weekends</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave("notification")}
                    className="bg-robins-500 hover:bg-robins-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Settings */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Study Preferences</CardTitle>
                <CardDescription>Customize your learning experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Appearance</h3>

                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 justify-start">
                        <Sun className="h-4 w-4 mr-2" />
                        Light
                      </Button>
                      <Button variant="outline" className="flex-1 justify-start">
                        <Moon className="h-4 w-4 mr-2" />
                        Dark
                      </Button>
                      <Button variant="outline" className="flex-1 justify-start bg-gray-100">
                        <Laptop className="h-4 w-4 mr-2" />
                        System
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Accent Color</Label>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-robins-500 ring-2 ring-offset-2 ring-robins-500 cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer"></div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-lg font-medium">Study Settings</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Daily Study Goal</Label>
                      <span className="text-sm font-medium">50 cards</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={5} />
                  </div>

                  <div className="space-y-2">
                    <Label>New Cards Per Day</Label>
                    <Select defaultValue="10">
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 cards</SelectItem>
                        <SelectItem value="10">10 cards</SelectItem>
                        <SelectItem value="20">20 cards</SelectItem>
                        <SelectItem value="30">30 cards</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Code Syntax Highlighting</p>
                      <p className="text-sm text-gray-500">Highlight JavaScript syntax in code examples</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-advance Cards</p>
                      <p className="text-sm text-gray-500">Automatically move to next card after answering</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave("preferences")}
                    className="bg-robins-500 hover:bg-robins-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Privacy Controls</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Public Profile</p>
                      <p className="text-sm text-gray-500">Allow others to view your profile</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Progress on Leaderboards</p>
                      <p className="text-sm text-gray-500">Display your progress on public leaderboards</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share Study Statistics</p>
                      <p className="text-sm text-gray-500">
                        Allow anonymous usage of your study data for platform improvements
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-lg font-medium">Security</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <Label>Session Management</Label>
                    <Button variant="outline" className="w-full justify-start">
                      Sign out of all devices
                    </Button>
                  </div>

                  <div className="pt-4">
                    <Button variant="destructive" className="w-full justify-start">
                      Delete Account
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      This will permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave("privacy")}
                    className="bg-robins-500 hover:bg-robins-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Management */}
          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>Export, import, and manage your learning data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Export Data</h3>
                  <p className="text-sm text-gray-500">
                    Download your data in various formats. This includes your decks, cards, and study history.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export All Data (JSON)
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Decks Only (JSON)
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Study History (CSV)
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Statistics (CSV)
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-lg font-medium">Import Data</h3>
                  <p className="text-sm text-gray-500">
                    Import decks and cards from external sources. Supported formats: JSON, CSV, Anki packages.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Import Decks (JSON)
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Import Cards (CSV)
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Import from Anki (.apkg)
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-lg font-medium">Data Storage</h3>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Storage Used</span>
                      <span>2.3 MB / 100 MB</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-robins-500 h-2 rounded-full" style={{ width: "2.3%" }}></div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full justify-start">
                    Clear Cached Data
                  </Button>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave("data")}
                    className="bg-robins-500 hover:bg-robins-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
