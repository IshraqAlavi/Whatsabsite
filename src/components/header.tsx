"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { HelpMeChoose } from "@/components/help-me-choose"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/data"

const navigation = [
    {
        name: "Products",
        href: "/products",
        items: [
            { name: "Notifyer System", href: "/products/notifyer-system", description: "Enterprise WhatsApp platform" },
            { name: "Notifier Bot", href: "/products/notifier-bot", description: "Simple automation via bot" },
            { name: "WhatsAble Bot", href: "/products/whatsable-bot", description: "Internal team notifications" },
        ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Solutions", href: "/solutions" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-8 w-8">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-primary-600" />
                        <div className="absolute inset-1 rounded-md bg-white" />
                        <div className="absolute inset-2 rounded-sm bg-gradient-to-br from-primary to-primary-600" />
                    </div>
                    <span className="text-xl font-bold text-foreground">WhatsAble</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative">
                            {item.items ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                                        <span>{item.name}</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </button>

                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-0 top-full z-50 mt-2 w-80 rounded-lg border bg-popover p-2 shadow-lg"
                                            >
                                                {item.items?.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="flex flex-col rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
                                                    >
                                                        <span className="font-medium text-foreground">{subItem.name}</span>
                                                        <span className="text-xs text-muted-foreground">{subItem.description}</span>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                                        pathname === item.href ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                    {/* Help Me Choose Button */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="hidden sm:flex">
                                Help me choose
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                            <HelpMeChoose />
                        </DialogContent>
                    </Dialog>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* CTA Buttons */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/start-free">Start Free</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden"
                    >
                        <div className="border-t bg-background px-4 py-4">
                            <div className="space-y-4">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.items ? (
                                            <div>
                                                <div className="text-sm font-medium text-muted-foreground mb-2">
                                                    {item.name}
                                                </div>
                                                <div className="ml-4 space-y-2">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            <div className="font-medium">{subItem.name}</div>
                                                            <div className="text-xs">{subItem.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                                                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-4 border-t">
                                    <div className="space-y-2">
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link href="/login">Login</Link>
                                        </Button>
                                        <Button size="sm" className="w-full" asChild>
                                            <Link href="/start-free">Start Free</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
