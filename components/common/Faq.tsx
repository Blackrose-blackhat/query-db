import React from 'react'
import FaqAccordion from '../features/faq-accordion'

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-muted/50">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently asked questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you need to know about QueryGPT.
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Faq