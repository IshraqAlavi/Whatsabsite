"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Star, Smartphone, Bot, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/lib/data"

const productIcons = {
    "notifyer-system": Smartphone,
    "notifier-bot": Bot,
    "whatsable-bot": Zap,
}

export function ProductCards() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                        Choose the right product for your needs
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From simple team notifications to enterprise WhatsApp automation,
                        we have the perfect solution for every business.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {products.map((product, index) => {
                        const Icon = productIcons[product.id as keyof typeof productIcons]
                        const isRecommended = product.isRecommended

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                {isRecommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <div className="flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg">
                                            <Star className="mr-2 h-4 w-4" />
                                            Recommended
                                        </div>
                                    </div>
                                )}

                                <Card className={cn(
                                    "h-full transition-all duration-300 hover:shadow-lg",
                                    isRecommended
                                        ? "border-primary/20 bg-primary/5 scale-105"
                                        : "hover:border-primary/20 hover:bg-primary/5"
                                )}>
                                    <CardHeader className="text-center pb-6">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                                        <CardDescription className="text-lg font-medium">
                                            {product.tagline}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <p className="text-muted-foreground text-center">
                                            {product.description}
                                        </p>

                                        <div className="space-y-3">
                                            <h4 className="font-medium text-center">Key features:</h4>
                                            <ul className="space-y-2">
                                                {product.features.slice(0, 5).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start">
                                                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t">
                                            <div className="text-center mb-4">
                                                <span className="text-2xl font-bold text-foreground">
                                                    ${product.pricing.startingPrice}
                                                </span>
                                                <span className="text-muted-foreground">/{product.pricing.billingCycle}</span>
                                            </div>

                                            <div className="space-y-3">
                                                <Button asChild className="w-full" size="lg">
                                                    <Link href={product.cta.url}>
                                                        {product.cta.primary}
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>

                                                <Button variant="outline" asChild className="w-full">
                                                    <Link href={`/products/${product.slug}`}>
                                                        {product.cta.secondary}
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/products">
                            Compare all products
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}
