"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/data"

export function StatsSection() {
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
                        Trusted by thousands of businesses
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {Object.entries(stats).map(([key, value], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-primary mb-2">
                                {value}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
