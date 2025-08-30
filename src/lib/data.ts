import { Product, Integration, Testimonial, FAQ, PricingPlan, DecisionQuestion } from '@/types'

export const siteConfig = {
    name: "WhatsAble",
    description: "WhatsApp automation for teams and brands",
    url: "https://whatsable.app",
    ogImage: "/images/og-image.png",
    links: {
        twitter: "https://twitter.com/whatsable",
        github: "https://github.com/whatsable",
        linkedin: "https://linkedin.com/company/whatsable",
    },
}

export const products: Product[] = [
    {
        id: "notifyer-system",
        name: "Notifyer System",
        slug: "notifyer-system",
        tagline: "Your brand's complete WhatsApp platform",
        description: "Enterprise platform for unlimited messaging from your own brand/number via WhatsApp Business API (WABA). Includes iOS/Android mobile apps, team management, AI chatbots, advanced analytics, WhatsApp Sequences that auto-stop when a user replies, and Twilio WABA support.",
        features: [
            "Own WABA/Twilio number",
            "iOS & Android mobile apps",
            "Team inbox with roles & permissions",
            "AI chatbots & automation",
            "Advanced analytics & reporting",
            "WhatsApp Sequences (auto-stop on reply)",
            "Bulk messaging campaigns",
            "Conversation labeling",
            "Schedule automatic follow-ups",
            "Real-time chat interface"
        ],
        pricing: {
            startingPrice: 49,
            currency: "USD",
            billingCycle: "month"
        },
        cta: {
            primary: "Start Free",
            secondary: "Book Demo",
            url: "https://console.notifyer-systems.com/"
        },
        isRecommended: true,
        isFlagship: true
    },
    {
        id: "notifier-bot",
        name: "Notifier Bot",
        slug: "notifier-bot",
        tagline: "Simple automation via our verified bot number",
        description: "Send WhatsApp messages to any number via our Notifier Bot. Quick setup with Zapier/Make/n8n, analytics included, customers reply to your existing number. Default limit 10 messages per recipient/month; add-on message packs available.",
        features: [
            "Quick 5-minute setup",
            "Analytics dashboard",
            "Make, Zapier, n8n integration",
            "REST API access",
            "Customer replies to your existing number",
            "Message limit management",
            "Add-on message packs"
        ],
        pricing: {
            startingPrice: 29,
            currency: "USD",
            billingCycle: "month"
        },
        cta: {
            primary: "Start Free",
            secondary: "Learn More",
            url: "https://notifier.whatsable.app/"
        }
    },
    {
        id: "whatsable-bot",
        name: "WhatsAble Bot",
        slug: "whatsable-bot",
        tagline: "Internal alerts and team notifications",
        description: "Create simple AI assistants and send unlimited internal alerts on WhatsApp. Trigger from Zapier/Make; collaborate with teams instantly. Unlimited messages to self/team; acts as a trigger in Zapier/Make.",
        features: [
            "Unlimited internal notifications",
            "Simple AI assistants",
            "3-minute setup",
            "Trigger scenarios from messages",
            "Team collaboration",
            "Zapier/Make/n8n integration",
            "No external messaging limits"
        ],
        pricing: {
            startingPrice: 7.99,
            currency: "USD",
            billingCycle: "month"
        },
        cta: {
            primary: "Start Free",
            secondary: "Learn More",
            url: "https://dashboard.whatsable.app/signin"
        }
    }
]

export const integrations: Integration[] = [
    {
        name: "Zapier",
        slug: "zapier",
        icon: "⚡",
        description: "Connect 5000+ apps with Zapier",
        status: "available",
        demoUrl: "/integrations/zapier"
    },
    {
        name: "Make",
        slug: "make",
        icon: "🔧",
        description: "Automate workflows with Make (Integromat)",
        status: "available",
        demoUrl: "/integrations/make"
    },
    {
        name: "n8n",
        slug: "n8n",
        icon: "🔗",
        description: "Open-source workflow automation",
        status: "available",
        demoUrl: "/integrations/n8n"
    },
    {
        name: "REST API",
        slug: "rest-api",
        icon: "📡",
        description: "Direct API integration",
        status: "available",
        demoUrl: "/integrations/api"
    },
    {
        name: "Pipedrive",
        slug: "pipedrive",
        icon: "📊",
        description: "CRM integration for lead management",
        status: "coming-soon"
    },
    {
        name: "Shopify",
        slug: "shopify",
        icon: "🛒",
        description: "E-commerce automation",
        status: "coming-soon"
    }
]

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Marcel Udo",
        role: "Hotel Manager",
        company: "Hotel Udo",
        content: "I use Whatsable to send reminders to my Hotelguests... very easy to implement. Quick and helpful response while setting up.",
        rating: 5,
        date: "2025-02-07",
        product: "notifyer-system"
    },
    {
        id: "2",
        name: "Jordan Quinlan",
        role: "Business Owner",
        company: "Quinlan Solutions",
        content: "I have tried a number of tools... This tool is great. Not only from a functionality perspective but the support team has been absolutely amazing, 1 minute answer times.",
        rating: 5,
        date: "2025-05-08",
        product: "notifier-bot"
    },
    {
        id: "3",
        name: "Sarah Chen",
        role: "Marketing Director",
        company: "TechFlow Inc",
        content: "The Notifyer System has transformed our customer communication. The mobile apps and team management features are game-changers.",
        rating: 5,
        date: "2025-01-15",
        product: "notifyer-system"
    },
    {
        id: "4",
        name: "David Rodriguez",
        role: "Operations Manager",
        company: "LogiCorp",
        content: "WhatsAble Bot keeps our team connected with instant notifications. Setup was incredibly simple and it works flawlessly.",
        rating: 5,
        date: "2025-03-22",
        product: "whatsable-bot"
    }
]

export const faqs: FAQ[] = [
    {
        id: "1",
        question: "What's the difference between the three products?",
        answer: "Notifyer System is our flagship enterprise platform that lets you send messages from your own WhatsApp number with advanced features. Notifier Bot uses our verified bot number for quick setup and moderate volume. WhatsAble Bot is for internal team notifications only.",
        category: "general"
    },
    {
        id: "2",
        question: "Can I use my own WhatsApp number?",
        answer: "Yes, with Notifyer System you can use your own WhatsApp Business API (WABA) number or Twilio-provisioned number. Notifier Bot and WhatsAble Bot use our verified bot number.",
        category: "technical",
        product: "notifyer-system"
    },
    {
        id: "3",
        question: "Do you have mobile apps?",
        answer: "Yes, Notifyer System includes iOS and Android mobile apps with real-time chat, push notifications, team collaboration, offline support, and synced dashboard.",
        category: "features",
        product: "notifyer-system"
    },
    {
        id: "4",
        question: "What are WhatsApp Sequences?",
        answer: "WhatsApp Sequences in Notifyer System automatically send follow-up messages but stop when a user replies, ensuring you don't spam engaged customers.",
        category: "features",
        product: "notifyer-system"
    },
    {
        id: "5",
        question: "Are there message limits?",
        answer: "Notifier Bot has a default limit of 10 messages per recipient per month, with add-on packs available. Notifyer System and WhatsAble Bot have unlimited messaging.",
        category: "pricing",
        product: "notifier-bot"
    },
    {
        id: "6",
        question: "How does Twilio integration work?",
        answer: "Notifyer System integrates with Twilio-provisioned WABA numbers. We provide a 5-minute verification process to get you set up quickly.",
        category: "technical",
        product: "notifyer-system"
    }
]

export const pricingPlans: PricingPlan[] = [
    {
        id: "notifyer-starter",
        name: "Starter",
        price: 49,
        currency: "USD",
        billingCycle: "month",
        features: [
            "Up to 500 recipients",
            "Own WABA number",
            "Mobile apps (iOS/Android)",
            "Team inbox (2 users)",
            "AI chatbots",
            "Basic analytics",
            "Zapier/Make/n8n integration",
            "Email support"
        ],
        cta: "Start Free Trial",
        ctaUrl: "https://console.notifyer-systems.com/"
    },
    {
        id: "notifyer-professional",
        name: "Professional",
        price: 99,
        currency: "USD",
        billingCycle: "month",
        isPopular: true,
        features: [
            "Up to 2,000 recipients",
            "Own WABA/Twilio number",
            "Mobile apps (iOS/Android)",
            "Team inbox (10 users)",
            "Advanced AI chatbots",
            "Advanced analytics",
            "WhatsApp Sequences",
            "Priority support",
            "Setup assistance"
        ],
        cta: "Start Free Trial",
        ctaUrl: "https://console.notifyer-systems.com/"
    },
    {
        id: "notifyer-enterprise",
        name: "Enterprise",
        price: 199,
        currency: "USD",
        billingCycle: "month",
        isEnterprise: true,
        features: [
            "Unlimited recipients",
            "Multiple WABA numbers",
            "Advanced team management",
            "Custom AI training",
            "Advanced reporting",
            "API access",
            "Dedicated support",
            "Custom integrations"
        ],
        cta: "Contact Sales",
        ctaUrl: "/contact"
    },
    {
        id: "notifier-basic",
        name: "Basic",
        price: 29,
        currency: "USD",
        billingCycle: "month",
        features: [
            "Up to 100 recipients",
            "10 messages/recipient/month",
            "Analytics dashboard",
            "Zapier/Make/n8n integration",
            "Email support"
        ],
        limitations: ["Messages sent from our bot number"],
        cta: "Start Free",
        ctaUrl: "https://notifier.whatsable.app/"
    },
    {
        id: "whatsable-basic",
        name: "Basic",
        price: 7.99,
        currency: "USD",
        billingCycle: "month",
        features: [
            "Unlimited internal messages",
            "Simple AI assistants",
            "Team notifications",
            "Zapier/Make/n8n triggers",
            "Email support"
        ],
        cta: "Start Free",
        ctaUrl: "https://dashboard.whatsable.app/signin"
    }
]

export const decisionQuestions: DecisionQuestion[] = [
    {
        id: "1",
        question: "Do you need to send messages from your own brand/number?",
        options: [
            { value: "yes", label: "Yes, I need my own number", description: "Messages will appear from your business" },
            { value: "no", label: "No, I can use a shared number", description: "Messages from our verified bot" }
        ]
    },
    {
        id: "2",
        question: "What's your primary use case?",
        options: [
            { value: "external", label: "External customer communication", description: "Marketing, support, notifications" },
            { value: "internal", label: "Internal team notifications", description: "Alerts, updates, triggers" }
        ]
    },
    {
        id: "3",
        question: "Do you need mobile apps and team management?",
        options: [
            { value: "yes", label: "Yes, I need mobile apps and team features", description: "iOS/Android apps, team inbox, roles" },
            { value: "no", label: "No, web interface is sufficient", description: "Basic automation and notifications" }
        ]
    },
    {
        id: "4",
        question: "What's your expected message volume?",
        options: [
            { value: "high", label: "High volume (500+ recipients)", description: "Enterprise-scale messaging" },
            { value: "medium", label: "Medium volume (100-500 recipients)", description: "Growing business needs" },
            { value: "low", label: "Low volume (under 100 recipients)", description: "Small business or personal use" }
        ]
    },
    {
        id: "5",
        question: "Do you need advanced features like AI chatbots and sequences?",
        options: [
            { value: "yes", label: "Yes, I need advanced automation", description: "AI chatbots, sequences, advanced analytics" },
            { value: "no", label: "No, basic messaging is enough", description: "Simple notifications and alerts" }
        ]
    }
]

export const stats = {
    deliverability: "99.9%",
    timeToFirstMessage: "< 5 minutes",
    setupTime: "3-30 minutes",
    customerSatisfaction: "4.9/5",
    activeUsers: "10,000+",
    messagesSent: "50M+"
}
