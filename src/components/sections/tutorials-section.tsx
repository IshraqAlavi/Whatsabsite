"use client"

import { motion } from "framer-motion"
import { Play, BookOpen, Code, Zap, MessageCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const tutorials = [
    {
        icon: Play,
        title: "Getting Started",
        description: "Learn the basics of WhatsAble and set up your first automation",
        duration: "5 min read",
        difficulty: "Beginner",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Zapier Integration",
        description: "Connect your favorite apps with WhatsApp notifications",
        duration: "8 min read",
        difficulty: "Intermediate",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Code,
        title: "API Tutorials",
        description: "Build custom integrations using our powerful API",
        duration: "12 min read",
        difficulty: "Advanced",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: MessageCircle,
        title: "Bot Configuration",
        description: "Create intelligent WhatsApp bots for your business",
        duration: "10 min read",
        difficulty: "Intermediate",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Settings,
        title: "Advanced Features",
        description: "Master advanced automation and workflow features",
        duration: "15 min read",
        difficulty: "Advanced",
        color: "from-indigo-500 to-blue-500"
    },
    {
        icon: BookOpen,
        title: "Best Practices",
        description: "Learn industry best practices for WhatsApp automation",
        duration: "7 min read",
        difficulty: "All Levels",
        color: "from-teal-500 to-cyan-500"
    }
]

export function TutorialsSection() {
    return (
        <section id="tutorials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-6">
                        Learn WhatsAble
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Master WhatsApp automation with our comprehensive tutorials, guides, and best practices
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {tutorials.map((tutorial, index) => (
                        <motion.div
                            key={tutorial.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tutorial.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <tutorial.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {tutorial.title}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {tutorial.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                        <span>{tutorial.duration}</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                            {tutorial.difficulty}
                                        </span>
                                    </div>
                                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        Start Learning
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg">
                        View All Tutorials
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
