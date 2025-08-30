"use client"

import { motion } from "framer-motion"
import { CheckCircle, Smartphone, Bot, Users, Zap, BarChart3, Shield, MessageCircle, Clock, Globe, Settings, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
    {
        id: "notifyer-system",
        name: "Notifyer System",
        tagline: "Enterprise WhatsApp platform",
        description: "Complete platform with your own number, mobile apps, and advanced features",
        icon: Smartphone,
        color: "text-blue-600",
        bgColor: "bg-blue-50/50",
        borderColor: "border-blue-200",
        features: [
            "Own WABA/Twilio number",
            "iOS & Android mobile apps",
            "Team inbox with roles & permissions",
            "AI chatbots & automation",
            "Advanced analytics & reporting",
            "WhatsApp Sequences",
            "Bulk messaging campaigns",
            "Real-time chat interface"
        ],
        pricing: "$49/month",
        cta: "Start Free Trial",
        recommended: true
    },
    {
        id: "notifier-bot",
        name: "Notifier Bot",
        tagline: "Simple automation via bot",
        description: "Quick setup with our verified bot number and essential features",
        icon: Bot,
        color: "text-green-600",
        bgColor: "bg-green-50/50",
        borderColor: "border-green-200",
        features: [
            "Quick 5-minute setup",
            "Analytics dashboard",
            "Make, Zapier, n8n integration",
            "REST API access",
            "Customer replies to your number",
            "Message limit management",
            "Add-on message packs"
        ],
        pricing: "$29/month",
        cta: "Start Free Trial",
        recommended: false
    },
    {
        id: "whatsable-bot",
        name: "WhatsAble Bot",
        tagline: "Internal team notifications",
        description: "Perfect for internal alerts and team collaboration",
        icon: Users,
        color: "text-purple-600",
        bgColor: "bg-purple-50/50",
        borderColor: "border-purple-200",
        features: [
            "Unlimited internal notifications",
            "Simple AI assistants",
            "3-minute setup",
            "Trigger scenarios from messages",
            "Team collaboration",
            "Zapier/Make/n8n integration",
            "No external messaging limits"
        ],
        pricing: "$7.99/month",
        cta: "Start Free Trial",
        recommended: false
    }
]

const commonFeatures = [
    "WhatsApp Business API",
    "Zapier Integration",
    "Make Integration",
    "REST API",
    "24/7 Support"
]

export function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Choose Your Perfect Solution
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Compare our three specialized WhatsApp automation products and find the right fit for your business
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <div className="max-w-7xl mx-auto">
                    {/* Header Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                    >
                        {products.map((product, index) => (
                            <Card key={product.id} className={`relative border-2 ${product.borderColor} bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm ${product.recommended ? 'ring-2 ring-primary/20 shadow-xl' : ''}`}>
                                {product.recommended && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                            <Star className="w-4 h-4" />
                                            Recommended
                                        </div>
                                    </div>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <div className={`w-16 h-16 rounded-xl ${product.bgColor} flex items-center justify-center mx-auto mb-4`}>
                                        <product.icon className={`w-8 h-8 ${product.color}`} />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-foreground">
                                        {product.name}
                                    </CardTitle>
                                    <CardDescription className="text-base font-medium text-muted-foreground">
                                        {product.tagline}
                                    </CardDescription>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {product.description}
                                    </p>
                                    <div className="mt-4">
                                        <span className="text-3xl font-bold text-foreground">{product.pricing}</span>
                                    </div>
                                    <Button className={`w-full mt-4 ${product.recommended ? 'bg-primary hover:bg-primary/90' : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'}`}>
                                        {product.cta}
                                    </Button>
                                </CardHeader>
                            </Card>
                        ))}
                    </motion.div>

                    {/* Features Comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                        {/* Common Features */}
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Common Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {commonFeatures.map((feature, index) => (
                                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product-Specific Features */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-6">Product-Specific Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {products.map((product, productIndex) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 + (productIndex * 0.1) }}
                                        className={`p-6 rounded-xl ${product.bgColor} border ${product.borderColor}`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <product.icon className={`w-5 h-5 ${product.color}`} />
                                            <h4 className="font-semibold text-foreground">{product.name}</h4>
                                        </div>
                                        <div className="space-y-3">
                                            {product.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                                                    <div className={`w-2 h-2 rounded-full ${product.color.replace('text-', 'bg-')} flex-shrink-0`} />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Quick Decision Guide */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg"
                    >
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Quick Decision Guide</h3>
                            <p className="text-muted-foreground">Find your perfect match in seconds</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                className="relative group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <Smartphone className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Choose Notifyer System if:</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You want your own WhatsApp number</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You need mobile apps</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You have a team to manage</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You need advanced features</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-green-600" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Choose Notifier Bot if:</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You want quick setup</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You need moderate volume</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You want customer replies</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You prefer simple automation</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                            <Users className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Choose WhatsAble Bot if:</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You need internal notifications</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You want unlimited messaging</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You need team collaboration</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>You want the lowest cost</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-12"
                >
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Still Not Sure?</h3>
                        <p className="text-muted-foreground mb-6">
                            Get personalized recommendations based on your specific needs and use case.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                                Get Personalized Recommendation
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-3">
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
