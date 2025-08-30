import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductCards } from "@/components/sections/product-cards"
import { DecisionAssistant } from "@/components/sections/decision-assistant"
import { IntegrationsShowcase } from "@/components/sections/integrations-showcase"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { StatsSection } from "@/components/sections/stats-section"
import { PricingTeaser } from "@/components/sections/pricing-teaser"
import { CTASection } from "@/components/sections/cta-section"
import { TutorialsSection } from "@/components/sections/tutorials-section"
import { DocsSection } from "@/components/sections/docs-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FeaturesSection } from "@/components/sections/features-section"

export const metadata: Metadata = {
    title: "WhatsAble - WhatsApp Automation Perfected",
    description: "Connect Zapier or Make to WhatsAble and send WhatsApp notifications every time something happens in your organization. Create your WhatsApp bot with Zapier or Make today!",
    openGraph: {
        title: "WhatsAble - WhatsApp Automation Perfected",
        description: "Connect Zapier or Make to WhatsAble and send WhatsApp notifications every time something happens in your organization.",
    },
}

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProductCards />
            <DecisionAssistant />
            <IntegrationsShowcase />
            <FeaturesSection />
            <TestimonialsSection />
            <StatsSection />
            <PricingTeaser />
            <TutorialsSection />
            <DocsSection />
            <BlogSection />
            <ReviewsSection />
            <FAQSection />
            <ContactSection />
            <CTASection />
        </div>
    )
}
