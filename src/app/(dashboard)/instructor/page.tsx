import { getPublishedCourses } from "@/actions/courses";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Plus, Users, BarChart3, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function InstructorDashboard() {
    const courses = await getPublishedCourses();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Instructor Dashboard</h1>
                    <p className="text-muted-foreground mt-2">Manage your courses and students</p>
                </div>
                <Link href="/instructor/create">
                    <GlassButton>
                        <Plus className="w-4 h-4" />
                        New Course
                    </GlassButton>
                </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Total Students</p>
                        <p className="text-2xl font-bold">1,234</p>
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Total Revenue</p>
                        <p className="text-2xl font-bold">$12,450</p>
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Active Courses</p>
                        <p className="text-2xl font-bold">{courses.length}</p>
                    </div>
                </GlassCard>
            </div>

            {/* Courses Grid */}
            <div>
                <h2 className="text-xl font-semibold mb-6">Your Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course: any) => (
                        <GlassCard key={course.id} className="h-full flex flex-col">
                            <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden relative">
                                {/* Placeholder for course image */}
                                <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-xs text-white">
                                    {course.isPublished ? "Published" : "Draft"}
                                </div>
                            </div>

                            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                                {course.description || "No description available"}
                            </p>

                            <div className="mt-auto flex gap-2">
                                <Link href={`/instructor/courses/${course.id}`} className="flex-1">
                                    <GlassButton variant="secondary" size="sm" className="w-full">
                                        Edit
                                    </GlassButton>
                                </Link>
                                <Link href={`/course/${course.id}`} className="flex-1">
                                    <GlassButton variant="ghost" size="sm" className="w-full">
                                        Preview
                                    </GlassButton>
                                </Link>
                            </div>
                        </GlassCard>
                    ))}

                    {courses.length === 0 && (
                        <div className="col-span-full py-12 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-white/20 rounded-3xl">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Plus className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">No courses yet</h3>
                                <p className="text-muted-foreground max-w-sm mx-auto mt-1">
                                    Get started by creating your first AI-powered course.
                                </p>
                            </div>
                            <Link href="/instructor/create">
                                <GlassButton>Create Course</GlassButton>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
