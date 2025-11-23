import { getPublishedCourses } from "@/actions/courses";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PlayCircle, Clock, Award } from "lucide-react";
import Link from "next/link";

export default async function StudentDashboard() {
    const courses = await getPublishedCourses();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, Student</h1>
                <p className="text-muted-foreground mt-2">Continue where you left off</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Hours Learned</p>
                        <p className="text-2xl font-bold">12.5</p>
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Certificates</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <PlayCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Courses in Progress</p>
                        <p className="text-2xl font-bold">3</p>
                    </div>
                </GlassCard>
            </div>

            {/* Courses Grid */}
            <div>
                <h2 className="text-xl font-semibold mb-6">Your Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course: any) => (
                        <Link key={course.id} href={`/course/${course.id}`}>
                            <GlassCard className="h-full flex flex-col group cursor-pointer">
                                <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden relative">
                                    {/* Placeholder for course image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <span className="text-white font-medium flex items-center gap-2">
                                            <PlayCircle className="w-5 h-5" /> Continue Learning
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                                    {course.description || "No description available"}
                                </p>

                                <div className="mt-auto space-y-2">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Progress</span>
                                        <span>35%</span>
                                    </div>
                                    <ProgressBar value={35} />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}

                    {courses.length === 0 && (
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            No courses found. Check back later!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
