import { Metadata } from "next"
import { PricingTeaser } from "@/components/sections/pricing-teaser"

export const metadata: Metadata = {
    title: "Pricing - WhatsAble",
    description: "Simple, transparent pricing for WhatsAble WhatsApp automation",
}

export default function PricingPage() {
    return (
        <div className="min-h-screen">
            <PricingTeaser />
        </div>
    )
}
