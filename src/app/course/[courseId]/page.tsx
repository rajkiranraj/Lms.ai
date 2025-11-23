import { getCourseById } from "@/actions/courses";
import { completeLesson } from "@/actions/progress";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle, PlayCircle, Lock } from "lucide-react";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

export default async function CoursePlayerPage({ params }: { params: { courseId: string } }) {
    const course = await getCourseById(params.courseId);

    if (!course) {
        notFound();
    }

    // Default to first lesson of first module
    const activeLesson = course.modules[0]?.lessons[0];

    return (
        <div className="h-screen flex bg-background">
            {/* Sidebar */}
            <div className="w-80 glass border-r border-white/10 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h2 className="font-bold text-lg leading-tight">{course.title}</h2>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[0%] bg-primary" />
                        </div>
                        <span>0% Complete</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {course.modules.map((module: any, index: number) => (
                        <div key={module.id}>
                            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                                Module {index + 1}: {module.title}
                            </h3>
                            <div className="space-y-1">
                                {module.lessons.map((lesson: any) => (
                                    <button
                                        key={lesson.id}
                                        className={cn(
                                            "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors",
                                            lesson.id === activeLesson?.id
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {lesson.isPublished ? (
                                            <PlayCircle className="w-4 h-4 shrink-0" />
                                        ) : (
                                            <Lock className="w-4 h-4 shrink-0" />
                                        )}
                                        <span className="line-clamp-1">{lesson.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Video Player */}
                        <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
                            {activeLesson?.videoUrl ? (
                                <iframe
                                    src={activeLesson.videoUrl}
                                    className="w-full h-full"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                                    <p className="text-zinc-500">No video available for this lesson</p>
                                </div>
                            )}
                        </div>

                        <div className="flex items-start justify-between gap-8">
                            <div>
                                <h1 className="text-2xl font-bold mb-2">{activeLesson?.title}</h1>
                                <p className="text-muted-foreground">
                                    {activeLesson?.description || "No description available."}
                                </p>
                            </div>

                            <form action={async () => {
                                "use server";
                                if (activeLesson) {
                                    await completeLesson(activeLesson.id);
                                }
                            }}>
                                <GlassButton size="lg" className="shrink-0">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Mark Complete
                                </GlassButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
