"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle, Save, Trash } from "lucide-react"
import type { Deck } from "@/types/deck"
import { CardForm } from "@/components/card-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DeckFormProps {
  deck?: Deck
  onComplete: () => void
}

export function DeckForm({ deck, onComplete }: DeckFormProps) {
  const [name, setName] = useState(deck?.name || "")
  const [description, setDescription] = useState(deck?.description || "")
  const [category, setCategory] = useState(deck?.category || "")
  const [isAddingCard, setIsAddingCard] = useState(false)

  const isEditing = !!deck
  const title = isEditing ? "Edit Deck" : "Create New Deck"
  const buttonText = isEditing ? "Save Changes" : "Create Deck"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save to a database
    console.log("Saving deck:", { name, description, category })
    onComplete()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Deck Details</TabsTrigger>
              <TabsTrigger value="cards">Manage Cards</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Deck Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., JavaScript Basics"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What this deck covers..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g., Basics, Functions, Arrays"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="submit" className="bg-robins-500 hover:bg-robins-600">
                    <Save className="h-4 w-4 mr-2" />
                    {buttonText}
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="cards">
              {isAddingCard ? (
                <CardForm onSave={() => setIsAddingCard(false)} onCancel={() => setIsAddingCard(false)} />
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Cards ({deck.cards.length})</h3>
                    <Button onClick={() => setIsAddingCard(true)} className="bg-robins-500 hover:bg-robins-600">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Card
                    </Button>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {deck.cards.map((card, index) => (
                      <Card key={card.id} className="relative">
                        <CardContent className="pt-6">
                          <div className="absolute top-2 right-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Question:</div>
                          <div className="mb-2">
                            {card.question.substring(0, 100)}
                            {card.question.length > 100 ? "..." : ""}
                          </div>
                          <div className="text-sm text-gray-500 mb-1">Answer:</div>
                          <div className="text-sm text-gray-700">
                            {card.answer.substring(0, 100)}
                            {card.answer.length > 100 ? "..." : ""}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Deck Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., JavaScript Basics"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What this deck covers..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g., Basics, Functions, Arrays"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onComplete}>
                Cancel
              </Button>
              <Button type="submit" className="bg-robins-500 hover:bg-robins-600">
                <Save className="h-4 w-4 mr-2" />
                {buttonText}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
