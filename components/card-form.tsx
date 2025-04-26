"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Save, X } from "lucide-react"
import type { FlashCard } from "@/types/card"

interface CardFormProps {
  card?: FlashCard
  onSave: (card: Partial<FlashCard>) => void
  onCancel: () => void
}

export function CardForm({ card, onSave, onCancel }: CardFormProps) {
  const [question, setQuestion] = useState(card?.question || "")
  const [answer, setAnswer] = useState(card?.answer || "")
  const [hasCode, setHasCode] = useState(card?.hasCode || false)
  const [tags, setTags] = useState(card?.tags?.join(", ") || "")

  const isEditing = !!card
  const title = isEditing ? "Edit Card" : "Add New Card"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)

    onSave({
      question,
      answer,
      hasCode,
      tags: tagArray,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="answer">Answer</Label>
            <Textarea
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter the answer here..."
              rows={5}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="hasCode" checked={hasCode} onCheckedChange={setHasCode} />
            <Label htmlFor="hasCode">Contains code</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., arrays, methods, ES6"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="bg-robins-500 hover:bg-robins-600">
          <Save className="h-4 w-4 mr-2" />
          Save Card
        </Button>
      </CardFooter>
    </Card>
  )
}
