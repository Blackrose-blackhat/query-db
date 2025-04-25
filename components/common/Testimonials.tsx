import React from 'react'
import TestimonialCard from '../features/testimonial-card'

const Testimonials = () => {
  return (
    <section className="py-20">
              <div className=" px-4 md:px-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Loved by data teams everywhere
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      See what our customers are saying about QueryGPT.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                    <TestimonialCard
                      quote="QueryGPT has completely transformed how our non-technical team interacts with our data. What used to take days now takes seconds."
                      author="Sarah Johnson"
                      role="Data Analyst, Acme Corp"
                    />
                    <TestimonialCard
                      quote="The natural language interface is incredibly intuitive. Our entire team can now get insights without bothering the data team."
                      author="Michael Chen"
                      role="CTO, TechStart"
                    />
                    <TestimonialCard
                      quote="We've reduced our reporting time by 80% since implementing QueryGPT. The ROI was immediate and substantial."
                      author="Jessica Williams"
                      role="VP of Analytics, Enterprise Co"
                    />
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Testimonials