import React from 'react'
import FeatureCard from '../features/feature-card'
import { BarChart, Code, Database, MessageSquare, Shield } from 'lucide-react'
import { Zap } from 'lucide-react'
const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50 p-responsive">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to interact with your data
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  QueryGPT makes database interaction simple, fast, and accessible to everyone on your team.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={<MessageSquare className="h-6 w-6" />}
                  title="Natural Language Queries"
                  description="Ask questions in plain English and get instant answers from your database without writing SQL."
                />
                <FeatureCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Instant Results"
                  description="Get results in milliseconds with our optimized query engine that works with your existing database."
                />
                <FeatureCard
                  icon={<Database className="h-6 w-6" />}
                  title="Multiple Database Support"
                  description="Works with PostgreSQL, MySQL, SQL Server, MongoDB, and more. No migration required."
                />
                <FeatureCard
                  icon={<Shield className="h-6 w-6" />}
                  title="Enterprise Security"
                  description="Your data never leaves your infrastructure. All queries are executed within your secure environment."
                />
                <FeatureCard
                  icon={<Code className="h-6 w-6" />}
                  title="SQL Translation"
                  description="See the SQL behind each query to learn, audit, or modify for your specific needs."
                />
                <FeatureCard
                  icon={<BarChart className="h-6 w-6" />}
                  title="Data Visualization"
                  description="Automatically generate charts and graphs from your query results for instant insights."
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Features