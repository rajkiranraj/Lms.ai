"use client";

import Link from "next/link";
import { GlassButton } from "./ui/GlassButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    // Mock auth for demo
    const isSignedIn = false;
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.nav
                className={cn(
                    "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-out",
                    isScrolled
                        ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-4xl"
                        : "bg-transparent w-full max-w-6xl"
                )}
            >
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                            <span className="text-primary">L</span>
                        </div>
                        <span>LMS<span className="text-primary">.ai</span></span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
                        <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                        <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {isSignedIn ? (
                        <>
                            <Link href="/student">
                                <GlassButton variant="ghost" size="sm" className="rounded-full">Dashboard</GlassButton>
                            </Link>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 ring-2 ring-white/10" />
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link href="/sign-in">
                                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
                                    Sign In
                                </button>
                            </Link>
                            <Link href="/sign-up">
                                <GlassButton size="sm" className="rounded-full px-6 bg-white text-black hover:bg-white/90 border-0">
                                    Get Started
                                </GlassButton>
                            </Link>
                        </div>
                    )}
                </div>
            </motion.nav>
        </motion.header>
    );
}
