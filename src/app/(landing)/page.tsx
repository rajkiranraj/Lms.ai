"use client";

import { Navbar } from "@/components/Navbar";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { ArrowRight, Sparkles, BookOpen, BrainCircuit, Zap, Globe, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
                {/* Dynamic Background */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "10s" }} />
                    <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "12s" }} />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <AnimatedSection delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
                            <Sparkles className="w-4 h-4" />
                            <span>Reimagining Education with AI</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1]">
                            Master Any Skill <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                                at Light Speed
                            </span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            The world's most advanced LMS. Generate comprehensive courses instantly, track progress with precision, and learn with an AI tutor that never sleeps.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link href="/student">
                                <GlassButton size="lg" className="group min-w-[180px]">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </GlassButton>
                            </Link>
                            <Link href="#features">
                                <GlassButton variant="secondary" size="lg" className="min-w-[180px]">
                                    View Demo
                                </GlassButton>
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* Floating UI Elements Mockup */}
                    <motion.div style={{ y }} className="pt-16 relative hidden md:block">
                        <GlassCard className="max-w-4xl mx-auto p-2 bg-white/5 border-white/10 backdrop-blur-sm">
                            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black/50 relative border border-white/10 shadow-2xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20">
                                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-white fill-current" />
                                            </div>
                                        </div>
                                        <p className="text-lg font-medium text-white/80">Generating Course: "Advanced System Design"</p>
                                        <div className="w-64 h-2 bg-white/10 rounded-full mx-auto overflow-hidden">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="h-full bg-primary rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-32 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Everything you need to learn faster.</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Our platform combines cutting-edge AI with proven learning methodologies to deliver an unmatched educational experience.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatedSection delay={0.1}>
                            <GlassCard className="h-full space-y-6 p-8 hover:bg-white/10 transition-colors duration-500">
                                <div className="w-14 h-14 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-inner shadow-blue-500/20">
                                    <BrainCircuit className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">AI Course Generation</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Turn any topic into a comprehensive course with modules, quizzes, and assignments in seconds. Just type a prompt.
                                    </p>
                                </div>
                            </GlassCard>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <GlassCard className="h-full space-y-6 p-8 hover:bg-white/10 transition-colors duration-500">
                                <div className="w-14 h-14 rounded-3xl bg-purple-500/10 flex items-center justify-center text-purple-500 shadow-inner shadow-purple-500/20">
                                    <BookOpen className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Smart Learning Paths</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Adaptive curriculum that evolves with your progress. The AI identifies your weak spots and tailors content accordingly.
                                    </p>
                                </div>
                            </GlassCard>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <GlassCard className="h-full space-y-6 p-8 hover:bg-white/10 transition-colors duration-500">
                                <div className="w-14 h-14 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-500 shadow-inner shadow-green-500/20">
                                    <Sparkles className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Real-time AI Tutor</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Stuck on a concept? Ask your personal AI tutor for instant explanations, code examples, and analogies.
                                    </p>
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Stats / Social Proof */}
            <section className="py-24 px-6 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <AnimatedSection delay={0.1}>
                        <div className="space-y-2">
                            <h4 className="text-4xl md:text-5xl font-bold text-primary">10k+</h4>
                            <p className="text-muted-foreground font-medium">Active Learners</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-2">
                            <h4 className="text-4xl md:text-5xl font-bold text-purple-500">500+</h4>
                            <p className="text-muted-foreground font-medium">AI Courses Generated</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div className="space-y-2">
                            <h4 className="text-4xl md:text-5xl font-bold text-blue-500">98%</h4>
                            <p className="text-muted-foreground font-medium">Completion Rate</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                        <div className="space-y-2">
                            <h4 className="text-4xl md:text-5xl font-bold text-green-500">24/7</h4>
                            <p className="text-muted-foreground font-medium">AI Availability</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How it works</h2>
                        <p className="text-xl text-muted-foreground">Start learning in three simple steps.</p>
                    </AnimatedSection>

                    <div className="space-y-24">
                        {[
                            {
                                title: "1. Describe your goal",
                                desc: "Tell the AI what you want to learn. Be as specific or general as you like. 'I want to learn Python for Data Science' or 'Teach me how to bake sourdough bread'.",
                                icon: Globe,
                                color: "text-blue-500",
                                bg: "bg-blue-500/10",
                                image: "/ai-prompt.png"
                            },
                            {
                                title: "2. Get a personalized curriculum",
                                desc: "Within seconds, our AI generates a structured course with modules, video suggestions, reading materials, and quizzes tailored to your skill level.",
                                icon: BrainCircuit,
                                color: "text-purple-500",
                                bg: "bg-purple-500/10",
                                image: "/course-curriculum.png"
                            },
                            {
                                title: "3. Learn and track progress",
                                desc: "Dive into the content. Track your completion, earn certificates, and ask the AI tutor questions whenever you get stuck.",
                                icon: CheckCircle2,
                                color: "text-green-500",
                                bg: "bg-green-500/10",
                                image: "/learning-dashboard.png"
                            }
                        ].map((step, i) => (
                            <AnimatedSection key={i} direction={i % 2 === 0 ? "left" : "right"}>
                                <div className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="flex-1 space-y-6">
                                        <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center ${step.color}`}>
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-bold">{step.title}</h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <GlassCard className="aspect-video flex items-center justify-center bg-white/5 overflow-hidden p-0 relative group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </GlassCard>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10" />
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <AnimatedSection>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Ready to start learning?</h2>
                        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                            Join thousands of students who are mastering new skills faster than ever before.
                        </p>
                        <div className="mt-10">
                            <Link href="/student">
                                <GlassButton size="lg" className="px-12 py-6 text-lg">
                                    Start Learning Now
                                </GlassButton>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
