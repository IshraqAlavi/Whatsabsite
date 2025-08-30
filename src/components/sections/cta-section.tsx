"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                        Ready to automate your WhatsApp messaging?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of businesses using WhatsAble to streamline their communication.
                        Start your free trial today.
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/products/notifyer-system">
                                Start free trial
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button variant="outline" size="lg" asChild>
                            <Link href="/book-demo">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book a demo
                            </Link>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mt-6">
                        No credit card required • 7-day free trial • Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
