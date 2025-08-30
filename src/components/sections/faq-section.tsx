"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, MessageCircle, Zap, Shield, CreditCard, Globe, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqCategories = [
    {
        icon: HelpCircle,
        title: "General",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Integration",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Shield,
        title: "Security",
        color: "from-purple-500 to-pink-500"
    }
]

const faqs = [
    {
        question: "What is WhatsAble and how does it work?",
        answer: "WhatsAble is a powerful WhatsApp automation platform that connects your business applications to WhatsApp through integrations like Zapier and Make. It allows you to send automated notifications, create chatbots, and manage customer communications seamlessly.",
        category: "General"
    },
    {
        question: "How do I get started with WhatsAble?",
        answer: "Getting started is easy! Simply sign up for a free account, connect your WhatsApp Business number, and choose your preferred integration platform (Zapier or Make). Our step-by-step tutorials will guide you through the entire setup process.",
        category: "General"
    },
    {
        question: "Which integrations does WhatsAble support?",
        answer: "WhatsAble supports popular automation platforms including Zapier and Make (formerly Integromat). We also provide a comprehensive REST API for custom integrations. All integrations are designed to be simple and require no coding knowledge.",
        category: "Integration"
    },
    {
        question: "Is there a limit on the number of messages I can send?",
        answer: "Message limits depend on your chosen plan. Our free tier includes 100 messages per month, while paid plans offer higher limits starting from 1,000 messages. Enterprise plans provide unlimited messaging with priority support.",
        category: "WhatsApp"
    },
    {
        question: "How secure is my data with WhatsAble?",
        answer: "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. All data is encrypted in transit and at rest, and we never store your WhatsApp credentials.",
        category: "Security"
    },
    {
        question: "Can I use WhatsAble for customer support?",
        answer: "Absolutely! WhatsAble is perfect for customer support automation. You can set up automated responses, create support ticket notifications, send order updates, and even integrate with your existing helpdesk software.",
        category: "WhatsApp"
    },
    {
        question: "What types of messages can I send?",
        answer: "WhatsAble supports text messages, media files (images, documents, videos), location sharing, and interactive buttons. You can also create message templates for consistent branding and compliance with WhatsApp Business API policies.",
        category: "WhatsApp"
    },
    {
        question: "Do you offer support for international numbers?",
        answer: "Yes! WhatsAble supports WhatsApp Business API in all countries where it's available. We provide local phone number support and help you comply with regional messaging regulations and requirements.",
        category: "General"
    },
    {
        question: "Can I integrate with my existing CRM or e-commerce platform?",
        answer: "Yes, you can integrate with virtually any platform through Zapier or Make. Popular integrations include Salesforce, HubSpot, Shopify, WooCommerce, and many more. Our API also allows for custom integrations with any system.",
        category: "Integration"
    },
    {
        question: "What happens if I exceed my message limit?",
        answer: "If you exceed your monthly message limit, you'll receive a notification and can upgrade your plan immediately. Alternatively, you can wait until your next billing cycle when your limit resets. We never charge overage fees without your consent.",
        category: "General"
    },
    {
        question: "How do you handle message delivery and delivery reports?",
        answer: "WhatsAble provides real-time delivery reports for all messages sent through our platform. You can track delivery status, read receipts, and failed deliveries through our dashboard or via webhooks for automated monitoring.",
        category: "WhatsApp"
    },
    {
        question: "Is there a setup fee or long-term contract required?",
        answer: "No setup fees or long-term contracts! We offer month-to-month billing with the flexibility to upgrade, downgrade, or cancel at any time. All plans include a free trial period so you can test our platform before committing.",
        category: "General"
    }
]

export function FAQSection() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    const filteredFaqs = activeCategory === "All"
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory)

    return (
        <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Find answers to common questions about WhatsAble and WhatsApp automation
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <Button
                        variant={activeCategory === "All" ? "default" : "outline"}
                        size="lg"
                        onClick={() => setActiveCategory("All")}
                        className="rounded-full"
                    >
                        All Questions
                    </Button>
                    {faqCategories.map((category) => (
                        <Button
                            key={category.title}
                            variant={activeCategory === category.title ? "default" : "outline"}
                            size="lg"
                            onClick={() => setActiveCategory(category.title)}
                            className="rounded-full"
                        >
                            <category.icon className="w-4 h-4 mr-2" />
                            {category.title}
                        </Button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                <CardHeader
                                    className="pb-4 cursor-pointer"
                                    onClick={() => toggleItem(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors pr-4">
                                            {faq.question}
                                        </CardTitle>
                                        <ChevronDown
                                            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </div>
                                </CardHeader>
                                <AnimatePresence>
                                    {openItems.includes(index) && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CardContent className="pt-0 pb-6">
                                                <div className="text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </CardContent>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Support */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
                        <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-muted-foreground mb-6">
                            Can't find what you're looking for? Our support team is here to help you 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg">
                                Contact Support
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                                Live Chat
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
