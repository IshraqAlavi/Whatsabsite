import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: {
        default: "WhatsAble - WhatsApp Automation Perfected",
        template: "%s | WhatsAble"
    },
    description: "Connect Zapier or Make to WhatsAble and send WhatsApp notifications every time something happens in your organization. Create your WhatsApp bot with Zapier or Make today!",
    keywords: [
        "WhatsApp automation",
        "Zapier WhatsApp",
        "Make WhatsApp",
        "WhatsApp API",
        "WhatsApp bot",
        "business automation",
        "team notifications",
        "WhatsApp Business API"
    ],
    authors: [{ name: "WhatsAble" }],
    creator: "WhatsAble",
    publisher: "WhatsAble",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://whatsable.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://whatsable.app",
        title: "WhatsAble - WhatsApp Automation Perfected",
        description: "Connect Zapier or Make to WhatsAble and send WhatsApp notifications every time something happens in your organization.",
        siteName: "WhatsAble",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "WhatsAble - WhatsApp Automation Perfected",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WhatsAble - WhatsApp Automation Perfected",
        description: "Connect Zapier or Make to WhatsAble and send WhatsApp notifications every time something happens in your organization.",
        images: ["/images/og-image.png"],
        creator: "@whatsable",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
