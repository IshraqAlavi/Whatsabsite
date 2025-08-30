"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const featuredPosts = [
    {
        title: "10 Ways to Automate Customer Support with WhatsApp",
        excerpt: "Discover how businesses are revolutionizing customer support using WhatsApp automation and AI-powered responses.",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        category: "Customer Support",
        image: "/api/placeholder/400/250",
        featured: true
    },
    {
        title: "The Complete Guide to WhatsApp Business API",
        excerpt: "Everything you need to know about setting up and optimizing your WhatsApp Business API integration.",
        author: "Mike Chen",
        date: "Dec 12, 2024",
        readTime: "12 min read",
        category: "API Guide",
        image: "/api/placeholder/400/250"
    },
    {
        title: "Building Scalable Notification Systems",
        excerpt: "Learn the best practices for building notification systems that can handle millions of messages.",
        author: "Emma Davis",
        date: "Dec 10, 2024",
        readTime: "10 min read",
        category: "Architecture",
        image: "/api/placeholder/400/250"
    }
]

const recentPosts = [
    {
        title: "Zapier vs Make: Which is Better for WhatsApp Automation?",
        excerpt: "A comprehensive comparison of the two leading automation platforms for WhatsApp integration.",
        author: "Alex Thompson",
        date: "Dec 8, 2024",
        readTime: "6 min read",
        category: "Comparison"
    },
    {
        title: "Security Best Practices for WhatsApp Bots",
        excerpt: "Essential security measures to protect your WhatsApp automation and customer data.",
        author: "David Wilson",
        date: "Dec 5, 2024",
        readTime: "7 min read",
        category: "Security"
    },
    {
        title: "How to Increase Customer Engagement with WhatsApp",
        excerpt: "Proven strategies to boost customer engagement and retention through WhatsApp automation.",
        author: "Lisa Rodriguez",
        date: "Dec 3, 2024",
        readTime: "9 min read",
        category: "Engagement"
    },
    {
        title: "Setting Up Webhooks for Real-time Notifications",
        excerpt: "Step-by-step guide to configuring webhooks for instant WhatsApp notifications.",
        author: "Tom Anderson",
        date: "Dec 1, 2024",
        readTime: "5 min read",
        category: "Technical"
    }
]

const categories = [
    "All Posts", "Customer Support", "API Guide", "Architecture", "Comparison", "Security", "Engagement", "Technical"
]

export function BlogSection() {
    return (
        <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-6">
                        Latest Insights
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Stay updated with the latest trends, tips, and best practices in WhatsApp automation
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <Button
                            key={category}
                            variant={index === 0 ? "default" : "outline"}
                            size="sm"
                            className="rounded-full"
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Featured Posts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {featuredPosts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={index === 0 ? "lg:col-span-2" : ""}
                        >
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className={`font-bold group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className={`text-base ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <Button variant="ghost" className="group-hover:bg-primary group-hover:text-white transition-colors p-0 h-auto">
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {recentPosts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                        >
                            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm line-clamp-2">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                            <span>•</span>
                                            {post.date}
                                        </div>
                                        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors p-0 h-auto">
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg">
                        View All Articles
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
