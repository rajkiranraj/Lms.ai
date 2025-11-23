import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] opacity-30 pointer-events-none" />

            <GlassCard className="w-full max-w-md p-8 space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to continue to LMS.ai</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="demo@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 outline-none"
                            disabled
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 outline-none"
                            disabled
                        />
                    </div>

                    <Link href="/student">
                        <GlassButton className="w-full">
                            Sign In (Demo)
                        </GlassButton>
                    </Link>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/sign-up" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </GlassCard>
        </div>
    );
}
