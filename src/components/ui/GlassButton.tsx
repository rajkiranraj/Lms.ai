import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-full font-medium transition-all duration-300 active:scale-95",
                    "disabled:opacity-50 disabled:pointer-events-none",

                    // Variants
                    variant === "primary" &&
                    "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110",
                    variant === "secondary" &&
                    "glass text-foreground hover:bg-white/80 dark:hover:bg-white/20",
                    variant === "ghost" &&
                    "bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/10",

                    // Sizes
                    size === "sm" && "px-4 py-2 text-sm",
                    size === "md" && "px-6 py-3 text-base",
                    size === "lg" && "px-8 py-4 text-lg",

                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);

GlassButton.displayName = "GlassButton";
