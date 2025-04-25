import Link from "next/link"
import { ArrowRight, Database, MessageSquare, Zap, Shield, Code, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import DemoSection from "@/components/features/demo-section"
import FeatureCard from "@/components/features/feature-card"
import PricingCard from "@/components/features/pricing-card"
import TestimonialCard from "@/components/features/testimonial-card"
import FaqAccordion from "@/components/features/faq-accordion"
import Header from "@/components/common/Header"
import Brand from "@/components/common/Brand"
import Hero from "@/components/common/Hero"
import WorkingDemo from "@/components/common/demo"
import Features from "@/components/common/Features"
import Pricing from "@/components/common/Pricing"
import Testimonials from "@/components/common/Testimonials"
import Faq from "@/components/common/Faq"
import Cta from "@/components/common/Cta"
import Footer from "@/components/common/Footer"

export default function Home() {
  return (
    <div className=" ">
     

      <main className="p-responsive">
        {/* Hero Section */}
        <Hero />

        {/* Brands Section */}
        <Brand />

        {/* Demo Section */}
        <DemoSection />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <WorkingDemo />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <Cta />
      </main>

     
    </div>
  )
}
