import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for getting started",
        features: [
            "Access to 3 free courses",
            "Basic AI tutoring",
            "Community support",
            "Mobile access",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For serious learners",
        features: [
            "Unlimited course access",
            "Advanced AI course generation",
            "Priority AI tutoring",
            "Certificates of completion",
            "Offline downloads",
        ],
        cta: "Upgrade to Pro",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For teams and organizations",
        features: [
            "Everything in Pro",
            "Team analytics",
            "Custom learning paths",
            "SSO Authentication",
            "Dedicated support",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function SubscriptionPage() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Choose the plan that fits your learning goals. Cancel anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {plans.map((plan) => (
                    <GlassCard
                        key={plan.name}
                        className={`relative flex flex-col ${plan.popular ? 'border-primary/50 shadow-primary/10' : ''}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-lg">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                        </div>

                        <div className="flex-1 space-y-4 mb-8">
                            {plan.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <GlassButton
                            variant={plan.popular ? "primary" : "secondary"}
                            className="w-full"
                        >
                            {plan.cta}
                        </GlassButton>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
