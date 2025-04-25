"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { MessageSquare, ArrowRight } from "lucide-react"

export default function DemoSection() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (query.toLowerCase().includes("sales")) {
        setResult(`
          Based on your sales data for the last quarter:
          
          Total Revenue: $1,245,678
          Growth: +12.3% compared to previous quarter
          Top Product: Enterprise Plan ($458,900)
          Highest Growth Region: West Coast (+18.7%)
          
          Would you like to see a breakdown by month or product category?
        `)
      } else if (query.toLowerCase().includes("customer")) {
        setResult(`
          Customer Analysis:
          
          Total Customers: 1,245
          New Customers This Month: 78
          Churn Rate: 2.1%
          Average Customer Lifetime Value: $4,567
          
          Your customer retention is 15% above industry average.
        `)
      } else {
        setResult(`
          I've analyzed your query about "${query}" and found the following insights:
          
          • 3 related data points in your database
          • Trend shows 15% increase over the last quarter
          • Anomaly detected in March data
          
          Would you like me to generate a detailed report or visualization?
        `)
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="py-20">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Try It Now</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the power of natural language
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Ask a question about your data and see how QueryGPT responds.
            </p>
          </div>

          <div className="w-full max-w-3xl rounded-lg border bg-background p-4 shadow-lg md:p-6">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                placeholder="Try 'Show me sales trends for last quarter' or 'Analyze customer retention'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Ask"}
              </Button>
            </form>

            {isLoading && (
              <div className="mt-6 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            )}

            {result && !isLoading && (
              <div className="mt-6 rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div className="text-sm font-medium">QueryGPT Response</div>
                </div>
                <div className="whitespace-pre-line text-sm">{result}</div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1">
                    See SQL Query <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            This is a demo. In a real implementation, QueryGPT would connect to your actual database.
          </p>
        </div>
      </div>
    </section>
  )
}
