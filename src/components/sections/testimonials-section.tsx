"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                        Trusted by businesses worldwide
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        See what our customers say about WhatsAble
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                    <p className="text-muted-foreground mb-4">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {testimonial.role} at {testimonial.company}
                                            </div>
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {new Date(testimonial.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
