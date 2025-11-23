"use server";

import { genAI } from "@/lib/gemini";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function generateCourse(formData: FormData) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title") as string;
  const prompt = formData.get("prompt") as string;

  if (!title || !prompt) {
    throw new Error("Missing fields");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `
    You are an expert curriculum designer. 
    Create a comprehensive course outline for a course titled "${title}" based on the following description: "${prompt}".
    
    Output a JSON object with the following structure:
    {
      "description": "A brief summary of the course",
      "modules": [
        {
          "title": "Module Title",
          "lessons": [
            {
              "title": "Lesson Title",
              "description": "Brief lesson description"
            }
          ]
        }
      ]
    }
    
    Ensure the course has at least 3 modules and each module has at least 3 lessons.
    Do not include any markdown formatting, just raw JSON.
  `;

  try {
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    // Clean up markdown if present
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const courseData = JSON.parse(jsonStr);

    // Save to DB
    const course = await prisma.course.create({
      data: {
        title,
        description: courseData.description,
        isPublished: false,
        modules: {
          create: courseData.modules.map((module: any, index: number) => ({
            title: module.title,
            position: index,
            lessons: {
              create: module.lessons.map((lesson: any, lessonIndex: number) => ({
                title: lesson.title,
                description: lesson.description,
                position: lessonIndex,
                isPublished: true, // Auto-publish lessons for now
              })),
            },
          })),
        },
      },
    });

    return { success: true, courseId: course.id };
  } catch (error) {
    console.error("Error generating course:", error);
    return { success: false, error: "Failed to generate course" };
  }
}
