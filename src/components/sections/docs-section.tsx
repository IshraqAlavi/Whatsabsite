"use client"

import { motion } from "framer-motion"
import { Search, Book, Code, Settings, Zap, MessageCircle, FileText, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const docCategories = [
    {
        icon: Book,
        title: "Quick Start",
        description: "Get up and running in minutes",
        articles: 5,
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Integrations",
        description: "Connect with your favorite tools",
        articles: 12,
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Code,
        title: "API Reference",
        description: "Complete API documentation",
        articles: 25,
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Settings,
        title: "Configuration",
        description: "Advanced setup and customization",
        articles: 8,
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: MessageCircle,
        title: "Bot Management",
        description: "Create and manage WhatsApp bots",
        articles: 15,
        color: "from-indigo-500 to-blue-500"
    },
    {
        icon: Database,
        title: "Data & Analytics",
        description: "Track performance and insights",
        articles: 6,
        color: "from-teal-500 to-cyan-500"
    },
    {
        icon: Shield,
        title: "Security",
        description: "Security best practices and compliance",
        articles: 4,
        color: "from-red-500 to-pink-500"
    },
    {
        icon: FileText,
        title: "Troubleshooting",
        description: "Common issues and solutions",
        articles: 10,
        color: "from-yellow-500 to-orange-500"
    }
]

const popularDocs = [
    "Setting up your first WhatsApp bot",
    "Zapier integration guide",
    "API authentication methods",
    "Webhook configuration",
    "Message templates and formatting",
    "Rate limiting and quotas"
]

export function DocsSection() {
    return (
        <section id="docs" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-6">
                        Documentation
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Everything you need to build powerful WhatsApp automations
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                            placeholder="Search documentation..."
                            className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-primary rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                        />
                    </div>
                </motion.div>

                {/* Documentation Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {docCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm cursor-pointer">
                                <CardHeader className="pb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {category.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {category.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">
                                            {category.articles} articles
                                        </span>
                                        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                                            Browse
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Popular Documentation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">Popular Documentation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {popularDocs.map((doc, index) => (
                            <motion.div
                                key={doc}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors cursor-pointer group"
                            >
                                <FileText className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                    {doc}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-12"
                >
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg">
                        Explore Full Documentation
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
