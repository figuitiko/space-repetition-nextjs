"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
  }

  return (
    <div className="relative rounded-md bg-gray-900 text-white font-mono text-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-xs text-gray-400">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white focus:outline-none"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">{code}</pre>
    </div>
  )
}
