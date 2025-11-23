import { cn } from "@/lib/utils";

interface ProgressBarProps {
    value: number;
    max?: number;
    className?: string;
    color?: string;
}

export function ProgressBar({
    value,
    max = 100,
    className,
    color = "bg-primary"
}: ProgressBarProps) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={cn("h-2 w-full bg-secondary/20 rounded-full overflow-hidden", className)}>
            <div
                className={cn("h-full transition-all duration-500 ease-out rounded-full", color)}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
