"use server";

import { prisma } from "@/lib/prisma";

export async function getPublishedCourses() {
    return await prisma.course.findMany({
        where: {
            isPublished: true,
        },
        include: {
            modules: {
                include: {
                    lessons: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getCourseById(courseId: string) {
    return await prisma.course.findUnique({
        where: {
            id: courseId,
        },
        include: {
            modules: {
                include: {
                    lessons: {
                        orderBy: {
                            position: "asc",
                        },
                    },
                },
                orderBy: {
                    position: "asc",
                },
            },
        },
    });
}
