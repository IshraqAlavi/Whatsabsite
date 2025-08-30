"use client"

import { motion } from "framer-motion"
import { HelpMeChoose } from "@/components/help-me-choose"

export function DecisionAssistant() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <HelpMeChoose />
                </motion.div>
            </div>
        </section>
    )
}
