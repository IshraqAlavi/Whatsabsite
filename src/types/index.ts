export interface Product {
    id: string
    name: string
    slug: string
    tagline: string
    description: string
    features: string[]
    pricing: {
        startingPrice: number
        currency: string
        billingCycle: string
    }
    cta: {
        primary: string
        secondary: string
        url: string
    }
    isRecommended?: boolean
    isFlagship?: boolean
}

export interface Integration {
    name: string
    slug: string
    icon: string
    description: string
    status: 'available' | 'coming-soon'
    demoUrl?: string
}

export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    content: string
    rating: number
    date: string
    product: string
    avatar?: string
}

export interface FAQ {
    id: string
    question: string
    answer: string
    category: string
    product?: string
}

export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    author: string
    publishedAt: string
    updatedAt: string
    tags: string[]
    featuredImage?: string
}

export interface Tutorial {
    id: string
    title: string
    slug: string
    description: string
    content: string
    product: string
    integration?: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    duration: string
    publishedAt: string
    videoUrl?: string
}

export interface PricingPlan {
    id: string
    name: string
    price: number
    currency: string
    billingCycle: string
    features: string[]
    limitations?: string[]
    isPopular?: boolean
    isEnterprise?: boolean
    cta: string
    ctaUrl: string
}

export interface DecisionQuestion {
    id: string
    question: string
    options: {
        value: string
        label: string
        description?: string
    }[]
}

export interface DecisionResult {
    product: string
    reason: string
    confidence: number
    nextSteps: string[]
}

export interface NavigationItem {
    title: string
    href: string
    description?: string
    items?: NavigationItem[]
}

export interface SiteConfig {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter: string
        github: string
        linkedin: string
    }
    products: Product[]
    integrations: Integration[]
}

export interface ContactForm {
    name: string
    email: string
    company?: string
    message: string
    product?: string
    phone?: string
}

export interface AnalyticsEvent {
    event: string
    properties?: Record<string, any>
    timestamp?: number
}
