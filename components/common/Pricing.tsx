import React from 'react'
import PricingCard from '../features/pricing-card'

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/50">
              <div className=" px-4 md:px-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Choose the plan that's right for your team. All plans include a 14-day free trial.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                    <PricingCard
                      title="Starter"
                      price="$49"
                      description="Perfect for individuals and small teams just getting started."
                      features={[
                        "Up to 1,000 queries per month",
                        "Connect to 1 database",
                        "Basic visualizations",
                        "Email support",
                        "7-day data history",
                      ]}
                      buttonText="Start Free Trial"
                      popular={false}
                    />
                    <PricingCard
                      title="Professional"
                      price="$149"
                      description="Ideal for growing teams that need more power and flexibility."
                      features={[
                        "Up to 10,000 queries per month",
                        "Connect to 5 databases",
                        "Advanced visualizations",
                        "Priority support",
                        "30-day data history",
                        "Team collaboration",
                      ]}
                      buttonText="Start Free Trial"
                      popular={true}
                    />
                    <PricingCard
                      title="Enterprise"
                      price="Custom"
                      description="For organizations with advanced needs and security requirements."
                      features={[
                        "Unlimited queries",
                        "Unlimited database connections",
                        "Custom integrations",
                        "Dedicated support",
                        "Unlimited data history",
                        "SSO & advanced security",
                        "On-premise deployment option",
                      ]}
                      buttonText="Contact Sales"
                      popular={false}
                    />
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Pricing