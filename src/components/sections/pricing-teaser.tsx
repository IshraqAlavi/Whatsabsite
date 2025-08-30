"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingTeaser() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Start free and scale as you grow. No hidden fees, no surprises.
                    </p>

                    <div className="bg-background rounded-2xl p-8 border shadow-lg">
                        <div className="text-4xl font-bold text-foreground mb-2">
                            Starting from $7.99
                        </div>
                        <div className="text-muted-foreground mb-6">
                            per month • Free trial included
                        </div>

                        <div className="grid gap-4 md:grid-cols-3 mb-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">$7.99</div>
                                <div className="text-sm text-muted-foreground">WhatsAble Bot</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">$29</div>
                                <div className="text-sm text-muted-foreground">Notifier Bot</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">$49</div>
                                <div className="text-sm text-muted-foreground">Notifyer System</div>
                            </div>
                        </div>

                        <Button size="lg" asChild>
                            <Link href="/pricing">
                                View full pricing
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
