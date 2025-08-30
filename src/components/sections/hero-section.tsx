"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, ArrowRight, Sparkles, Zap, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { HelpMeChoose } from "@/components/help-me-choose"

export function HeroSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <div className="container relative mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                            >
                                <Sparkles className="mr-2 h-4 w-4" />
                                WhatsApp automation for teams and brands
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                            >
                                Automate WhatsApp{" "}
                                <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                                    messaging
                                </span>{" "}
                                with ease
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl text-muted-foreground"
                            >
                                Connect Zapier, Make, or n8n to send WhatsApp notifications every time
                                something happens in your organization. Three powerful products for every need.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                        >
                            <Button size="lg" asChild>
                                <Link href="/products/notifyer-system">
                                    Try Notifyer System
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="lg">
                                        Help me choose
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                    <HelpMeChoose />
                                </DialogContent>
                            </Dialog>

                            <Button variant="ghost" size="lg" asChild>
                                <Link href="/products">
                                    See all products
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Features preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-4 text-sm text-muted-foreground"
                        >
                            <div className="flex items-center">
                                <Zap className="mr-2 h-4 w-4 text-primary" />
                                Works with Zapier & Make
                            </div>
                            <div className="flex items-center">
                                <Bot className="mr-2 h-4 w-4 text-primary" />
                                AI chatbots included
                            </div>
                            <div className="flex items-center">
                                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                                Mobile apps available
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Video/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 backdrop-blur-sm">
                            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                                <div className="flex h-full items-center justify-center">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                size="lg"
                                                className="h-16 w-16 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90"
                                                onClick={() => setIsVideoPlaying(true)}
                                            >
                                                <Play className="ml-1 h-8 w-8" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl">
                                            <div className="aspect-video">
                                                <iframe
                                                    src="https://www.youtube.com/embed/TnxoYjb0pVE?autoplay=1"
                                                    title="WhatsAble Demo"
                                                    className="h-full w-full rounded-lg"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 rounded-lg bg-white/10 backdrop-blur-sm p-3 border border-white/20"
                            >
                                <div className="text-xs font-medium text-white">99.9% deliverability</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 rounded-lg bg-white/10 backdrop-blur-sm p-3 border border-white/20"
                            >
                                <div className="text-xs font-medium text-white">5-min setup</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
