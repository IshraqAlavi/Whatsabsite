"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight, Sparkles, Bot, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { decisionQuestions, products } from "@/lib/data"
import { cn } from "@/lib/utils"

export function HelpMeChoose() {
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [showResult, setShowResult] = useState(false)

    const currentQuestion = decisionQuestions[currentStep]
    const isLastStep = currentStep === decisionQuestions.length - 1

    const handleAnswer = (value: string) => {
        const newAnswers = { ...answers, [currentQuestion.id]: value }
        setAnswers(newAnswers)

        if (isLastStep) {
            // Calculate recommendation
            const recommendation = calculateRecommendation(newAnswers)
            setAnswers({ ...newAnswers, recommendation })
            setShowResult(true)
        } else {
            setCurrentStep(currentStep + 1)
        }
    }

    const calculateRecommendation = (allAnswers: Record<string, string>) => {
        // Decision logic based on the requirements
        const needsOwnNumber = allAnswers["1"] === "yes"
        const isExternal = allAnswers["2"] === "external"
        const needsMobileApps = allAnswers["3"] === "yes"
        const isHighVolume = allAnswers["4"] === "high"
        const needsAdvancedFeatures = allAnswers["5"] === "yes"

        // If internal use only
        if (allAnswers["2"] === "internal") {
            return "whatsable-bot"
        }

        // If needs own number OR needs mobile apps/teams OR needs advanced features OR high volume
        if (needsOwnNumber || needsMobileApps || needsAdvancedFeatures || isHighVolume) {
            return "notifyer-system"
        }

        // Default to Notifier Bot for moderate external use
        return "notifier-bot"
    }

    const getRecommendationData = (productId: string) => {
        return products.find(p => p.id === productId)
    }

    const resetQuiz = () => {
        setCurrentStep(0)
        setAnswers({})
        setShowResult(false)
    }

    if (showResult) {
        const recommendedProduct = getRecommendationData(answers.recommendation)
        const otherProducts = products.filter(p => p.id !== answers.recommendation)

        return (
            <div className="space-y-6">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                    >
                        <Sparkles className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold">We recommend</h2>
                    <p className="text-muted-foreground">Based on your needs, here&apos;s what we suggest:</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="border-primary/20 bg-primary/5">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl">{recommendedProduct?.name}</CardTitle>
                                    <CardDescription>{recommendedProduct?.tagline}</CardDescription>
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                    <Check className="h-4 w-4" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-sm text-muted-foreground">
                                {recommendedProduct?.description}
                            </p>
                            <div className="space-y-2">
                                <h4 className="font-medium">Key features:</h4>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    {recommendedProduct?.features.slice(0, 4).map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <Check className="mr-2 h-3 w-3 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                                <Button asChild className="flex-1">
                                    <Link href={recommendedProduct?.cta.url || "#"}>
                                        {recommendedProduct?.cta.primary}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href={`/products/${recommendedProduct?.slug}`}>
                                        Learn More
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="text-center">
                    <Button variant="ghost" onClick={resetQuiz}>
                        Start Over
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Help me choose the right product</h2>
                <p className="text-muted-foreground">
                    Answer a few questions to find the perfect WhatsApp automation solution
                </p>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentStep + 1} of {decisionQuestions.length}</span>
                    <span>{Math.round(((currentStep + 1) / decisionQuestions.length) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                    <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / decisionQuestions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Question */}
            <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
            >
                <div>
                    <h3 className="text-lg font-semibold">{currentQuestion.question}</h3>
                </div>

                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <motion.button
                            key={option.value}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleAnswer(option.value)}
                            className="w-full rounded-lg border p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="font-medium">{option.label}</div>
                                    {option.description && (
                                        <div className="mt-1 text-sm text-muted-foreground">
                                            {option.description}
                                        </div>
                                    )}
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Back button */}
            {currentStep > 0 && (
                <div className="text-center">
                    <Button variant="ghost" onClick={() => setCurrentStep(currentStep - 1)}>
                        Back
                    </Button>
                </div>
            )}
        </div>
    )
}
