"use client"

import { motion } from "framer-motion"
import { Star, Quote, ThumbsUp, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reviews = [
    {
        name: "Sarah Chen",
        role: "Marketing Director",
        company: "TechFlow Inc.",
        rating: 5,
        review: "WhatsAble transformed our customer support. We've seen a 300% increase in response times and our customers love the instant notifications.",
        avatar: "/api/placeholder/60/60",
        verified: true
    },
    {
        name: "Michael Rodriguez",
        role: "Operations Manager",
        company: "E-commerce Plus",
        rating: 5,
        review: "The Zapier integration is seamless. We automated our entire order notification system in just one day. Highly recommended!",
        avatar: "/api/placeholder/60/60",
        verified: true
    },
    {
        name: "Emma Thompson",
        role: "CEO",
        company: "StartupXYZ",
        rating: 5,
        review: "Best investment we made this year. The API is powerful and the support team is incredibly helpful. Game changer for our business.",
        avatar: "/api/placeholder/60/60",
        verified: true
    },
    {
        name: "David Kim",
        role: "CTO",
        company: "InnovateCorp",
        rating: 5,
        review: "Reliable, scalable, and easy to implement. We handle thousands of notifications daily without any issues. Excellent platform.",
        avatar: "/api/placeholder/60/60",
        verified: true
    },
    {
        name: "Lisa Wang",
        role: "Customer Success",
        company: "ServicePro",
        rating: 5,
        review: "The automation features are incredible. We've reduced manual work by 80% and our team can focus on what matters most.",
        avatar: "/api/placeholder/60/60",
        verified: true
    },
    {
        name: "Alex Johnson",
        role: "Product Manager",
        company: "GrowthTech",
        rating: 5,
        review: "Clean interface, powerful features, and excellent documentation. WhatsAble exceeded all our expectations.",
        avatar: "/api/placeholder/60/60",
        verified: true
    }
]

const stats = [
    { label: "Customer Rating", value: "4.9/5", icon: Star },
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Success Rate", value: "99.9%", icon: CheckCircle },
    { label: "Trust Score", value: "A+", icon: Award }
]

const platforms = [
    { name: "G2", rating: 4.8, reviews: 245 },
    { name: "Capterra", rating: 4.9, reviews: 189 },
    { name: "Trustpilot", rating: 4.7, reviews: 312 }
]

export function ReviewsSection() {
    return (
        <section id="reviews" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-6">
                        Loved by 10,000+ Customers
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join thousands of businesses that trust WhatsAble for their WhatsApp automation needs
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-600">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Platform Ratings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-8 mb-16"
                >
                    {platforms.map((platform) => (
                        <Card key={platform.name} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                            <CardContent className="p-6 text-center">
                                <div className="text-2xl font-bold mb-2">{platform.name}</div>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(platform.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-lg font-semibold text-foreground mb-1">{platform.rating}</div>
                                <div className="text-sm text-muted-foreground">{platform.reviews} reviews</div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />
                                            <div>
                                                <div className="font-semibold text-foreground">{review.name}</div>
                                                <div className="text-sm text-muted-foreground">{review.role}</div>
                                                <div className="text-xs text-muted-foreground">{review.company}</div>
                                            </div>
                                        </div>
                                        {review.verified && (
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <Quote className="w-6 h-6 text-primary mb-3 opacity-50" />
                                    <blockquote className="text-sm text-muted-foreground italic">
                                        "{review.review}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Ready to join thousands of satisfied customers?</h3>
                        <p className="text-muted-foreground mb-6">
                            Start your free trial today and see why businesses choose WhatsAble for WhatsApp automation
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg">
                                Start Free Trial
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                                Read More Reviews
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
