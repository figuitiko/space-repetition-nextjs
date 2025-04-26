"use client"

import { useState } from "react"

interface Toast {
  id: string
  title: string
  description?: string
  type?: "default" | "success" | "error" | "warning" | "info"
}

interface ToastOptions {
  title: string
  description?: string
  type?: "default" | "success" | "error" | "warning" | "info"
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (options: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      title: options.title,
      description: options.description,
      type: options.type || "default",
    }

    setToasts((prevToasts) => [...prevToasts, newToast])

    // Auto dismiss
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, options.duration || 3000)

    return id
  }

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return { toast, toasts, dismissToast }
}
