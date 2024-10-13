"use server"


import { db } from "@/prisma/client"
import { Prisma } from "@prisma/client"



export async function createFeedback(feedback: Prisma.FeedbackCreateInput) {
    await db.feedback.create({ data: feedback })
    return { success: true }
}