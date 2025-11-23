"use client";

import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { generateCourse } from "@/actions/generate-course";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Sparkles } from "lucide-react";

export function CreateCourseForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        try {
            const result = await generateCourse(formData);
            if (result.success) {
                router.push(`/instructor/courses/${result.courseId}`);
            } else {
                alert("Failed to generate course");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <GlassCard className="max-w-2xl mx-auto">
            <form action={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                        Course Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        required
                        placeholder="e.g. Advanced React Patterns"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="prompt" className="text-sm font-medium">
                        What should this course cover?
                    </label>
                    <textarea
                        id="prompt"
                        name="prompt"
                        required
                        rows={4}
                        placeholder="e.g. A deep dive into React hooks, state management, and performance optimization..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                </div>

                <GlassButton
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Generating Course...
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate with AI
                        </>
                    )}
                </GlassButton>
            </form>
        </GlassCard>
    );
}
