import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card relative overflow-hidden p-6",
                hoverEffect && "hover:shadow-xl hover:shadow-primary/5",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
