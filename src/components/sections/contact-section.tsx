"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactMethods = [
    {
        icon: Mail,
        title: "Email Support",
        description: "Get help via email",
        contact: "support@whatsable.com",
        response: "Response within 2 hours",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak with our team",
        contact: "+1 (555) 123-4567",
        response: "Available 24/7",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Instant messaging support",
        contact: "Chat with us now",
        response: "Real-time responses",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Globe,
        title: "Documentation",
        description: "Self-service help",
        contact: "docs.whatsable.com",
        response: "Always available",
        color: "from-orange-500 to-red-500"
    }
]

const officeLocations = [
    {
        city: "San Francisco",
        country: "United States",
        address: "123 Innovation Drive, Suite 100",
        phone: "+1 (555) 123-4567",
        email: "sf@whatsable.com",
        hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
        city: "London",
        country: "United Kingdom",
        address: "456 Tech Square, Floor 3",
        phone: "+44 20 1234 5678",
        email: "london@whatsable.com",
        hours: "Mon-Fri: 9AM-6PM GMT"
    },
    {
        city: "Singapore",
        country: "Singapore",
        address: "789 Digital Hub, Level 5",
        phone: "+65 6123 4567",
        email: "sg@whatsable.com",
        hours: "Mon-Fri: 9AM-6PM SGT"
    }
]

const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Emergency support only" }
]

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Have questions? We're here to help. Reach out to our team through any of the channels below.
                    </p>
                </motion.div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center">
                                <CardHeader className="pb-4">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <method.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        {method.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {method.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="text-sm font-medium text-foreground mb-2">
                                        {method.contact}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {method.response}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">First Name</label>
                                        <Input placeholder="John" className="bg-white/50 dark:bg-slate-700/50" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                                        <Input placeholder="Doe" className="bg-white/50 dark:bg-slate-700/50" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Email</label>
                                    <Input placeholder="john@example.com" type="email" className="bg-white/50 dark:bg-slate-700/50" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Company</label>
                                    <Input placeholder="Your Company" className="bg-white/50 dark:bg-slate-700/50" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Subject</label>
                                    <Input placeholder="How can we help?" className="bg-white/50 dark:bg-slate-700/50" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Message</label>
                                    <Textarea
                                        placeholder="Tell us more about your inquiry..."
                                        rows={4}
                                        className="bg-white/50 dark:bg-slate-700/50 resize-none"
                                    />
                                </div>
                                <Button className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Office Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                            <div className="space-y-4">
                                {officeLocations.map((office, index) => (
                                    <Card key={office.city} className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-foreground">{office.city}</h4>
                                                    <p className="text-sm text-muted-foreground mb-2">{office.country}</p>
                                                    <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                                                    <div className="space-y-1 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="w-3 h-3" />
                                                            {office.phone}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Mail className="w-3 h-3" />
                                                            {office.email}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Clock className="w-3 h-3" />
                                                            {office.hours}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Support Hours */}
                        <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Support Hours</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {supportHours.map((schedule) => (
                                        <div key={schedule.day} className="flex justify-between items-center">
                                            <span className="text-sm font-medium">{schedule.day}</span>
                                            <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Emergency Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
                        <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                        <p className="text-muted-foreground mb-6">
                            For urgent matters or technical emergencies, our dedicated support team is available 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg">
                                Emergency Support
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                                Schedule a Call
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
