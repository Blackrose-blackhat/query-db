import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { MessageSquare } from 'lucide-react'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className="py-20 md:py-28 p-responsive">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Introducing QueryGPT
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Chat With Your Database Using Natural Language
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Stop writing complex SQL queries. Simply ask questions in plain English and get instant insights from
                  your database.
                </p>
                <Link href="/dashboard" className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gray-100 border border-background flex items-center justify-center">
                      <span className="text-xs">🧑‍💻</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gray-100 border border-background flex items-center justify-center">
                      <span className="text-xs">👩‍💼</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gray-100 border border-background flex items-center justify-center">
                      <span className="text-xs">👨‍💻</span>
                    </div>
                  </div>
                  <span>Join 1,000+ data professionals</span>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">QueryGPT</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                          👤
                        </div>
                        <div className="rounded-lg bg-muted-foreground/10 p-3 text-sm">
                          Show me the top 5 customers by total purchase amount
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                          🤖
                        </div>
                        <div className="rounded-lg bg-primary/10 p-3 text-sm">
                          <p className="mb-2">Here are the top 5 customers by total purchase amount:</p>
                          <div className="rounded-md bg-background p-2 font-mono text-xs">
                            <pre>{`1. John Smith - $12,450
2. Acme Corp - $9,870
3. Sarah Johnson - $7,650
4. Tech Solutions - $6,320
5. David Williams - $5,980`}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero