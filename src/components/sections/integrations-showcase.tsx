"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { integrations } from "@/lib/data"

const integrationExamples = {
    zapier: {
        title: "Zapier Integration",
        description: "Connect 5000+ apps with Zapier",
        code: `{
  "trigger": "new_lead",
  "action": "send_whatsapp",
  "message": "New lead: {{lead.name}}",
  "phone": "{{lead.phone}}"
}`,
        demoUrl: "https://zapier.com/apps/whatsable"
    },
    make: {
        title: "Make Integration",
        description: "Automate workflows with Make",
        code: `{
  "webhook": "https://api.whatsable.app/send",
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY"
  },
  "body": {
    "to": "{{contact.phone}}",
    "message": "Order confirmed: {{order.id}}"
  }
}`,
        demoUrl: "https://make.com/en/help/apps/communications/whatsable"
    },
    n8n: {
        title: "n8n Integration",
        description: "Open-source workflow automation",
        code: `{
  "resource": "message",
  "operation": "send",
  "to": "{{$json.phone}}",
  "text": "{{$json.message}}",
  "apiKey": "{{$env.WHATSABLE_API_KEY}}"
}`,
        demoUrl: "https://n8n.io/integrations/whatsable"
    },
    api: {
        title: "REST API",
        description: "Direct API integration",
        code: `curl -X POST https://api.whatsable.app/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "message": "Hello from WhatsAble!"
  }'`,
        demoUrl: "/docs/api"
    }
}

export function IntegrationsShowcase() {
    const [activeTab, setActiveTab] = useState("zapier")
    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = async (text: string, key: string) => {
        await navigator.clipboard.writeText(text)
        setCopied(key)
        setTimeout(() => setCopied(null), 2000)
    }

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
                        Works with your favorite tools
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Connect WhatsAble to Zapier, Make, n8n, or use our REST API.
                        More integrations coming soon.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Integration tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {integrations.map((integration, index) => (
                            <motion.button
                                key={integration.slug}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => setActiveTab(integration.slug)}
                                className={`w-full p-4 rounded-lg border transition-all ${activeTab === integration.slug
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/20"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{integration.icon}</span>
                                        <div className="text-left">
                                            <div className="font-medium">{integration.name}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {integration.description}
                                            </div>
                                        </div>
                                    </div>
                                    {integration.status === "coming-soon" && (
                                        <span className="text-xs bg-muted px-2 py-1 rounded">
                                            Coming soon
                                        </span>
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Code example */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    {integrationExamples[activeTab as keyof typeof integrationExamples]?.title}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyToClipboard(
                                            integrationExamples[activeTab as keyof typeof integrationExamples]?.code || "",
                                            activeTab
                                        )}
                                    >
                                        {copied === activeTab ? (
                                            <Check className="h-4 w-4" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </CardTitle>
                                <CardDescription>
                                    {integrationExamples[activeTab as keyof typeof integrationExamples]?.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                                    <code>
                                        {integrationExamples[activeTab as keyof typeof integrationExamples]?.code}
                                    </code>
                                </pre>

                                {integrationExamples[activeTab as keyof typeof integrationExamples]?.demoUrl && (
                                    <div className="mt-4">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={integrationExamples[activeTab as keyof typeof integrationExamples]?.demoUrl || "#"}>
                                                View documentation
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/integrations">
                            View all integrations
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
