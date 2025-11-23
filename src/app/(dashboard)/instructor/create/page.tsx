export const runtime = 'nodejs';

import { CreateCourseForm } from "@/components/CreateCourseForm";

export default function CreateCoursePage() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Create New Course</h1>
                <p className="text-muted-foreground">
                    Describe your course and let our AI generate the curriculum for you.
                </p>
            </div>

            <CreateCourseForm />
        </div>
    );
}
