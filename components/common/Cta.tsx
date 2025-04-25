import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const Cta = () => {
  return (
    <section className="py-20">
    <div className=" px-4 md:px-6">
      <div className="flex flex-col items-center justify-center gap-4 text-center rounded-lg border bg-background p-8 shadow-lg md:p-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to transform how you work with data?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Join thousands of data professionals who are already using QueryGPT.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg" className="gap-1">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cta