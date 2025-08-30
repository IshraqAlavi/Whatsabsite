import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date))
}

export function formatDateTime(date: string | Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date))
}

export function truncateText(text: string, length: number) {
    if (text.length <= length) return text
    return text.slice(0, length) + "..."
}

export function generateId() {
    return Math.random().toString(36).substr(2, 9)
}

export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<T>) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function formatPhoneNumber(phone: string) {
    const cleaned = phone.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3]
    }
    return phone
}
