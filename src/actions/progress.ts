"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function completeLesson(lessonId: string) {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
        throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
        where: { clerkId },
    });

    if (!user) {
        throw new Error("User not found");
    }

    await prisma.userProgress.upsert({
        where: {
            userId_lessonId: {
                userId: user.id,
                lessonId,
            },
        },
        update: {
            isCompleted: true,
        },
        create: {
            userId: user.id,
            lessonId,
            isCompleted: true,
        },
    });

    revalidatePath(`/course/[courseId]`);
}
