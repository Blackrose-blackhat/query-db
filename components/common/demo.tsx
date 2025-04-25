import React from 'react'

const WorkingDemo = () => {
  return (
    <section id="how-it-works" className="py-20 p-responsive">
              <div className=" px-4 md:px-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Simple setup, powerful results
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Get up and running in minutes, not days.
                    </p>
                  </div>
                  <div className="grid gap-8 md:grid-cols-3 w-full max-w-5xl">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        1
                      </div>
                      <h3 className="text-xl font-bold">Connect your database</h3>
                      <p className="text-muted-foreground">
                        Securely connect to your existing database with our simple connection wizard.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        2
                      </div>
                      <h3 className="text-xl font-bold">Ask questions</h3>
                      <p className="text-muted-foreground">
                        Type your questions in natural language just like you're chatting with a colleague.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        3
                      </div>
                      <h3 className="text-xl font-bold">Get instant insights</h3>
                      <p className="text-muted-foreground">
                        Receive answers, visualizations, and actionable insights from your data immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default WorkingDemo