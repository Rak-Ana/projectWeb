"use server"

import prisma from "@/utils/db" 
import { getSession } from "@/utils/loginUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addSchema = z.object({
    subject: z.string().min(3).max(20),
    detail: z.string().min(3),
    image: z.string().url().optional(),
})

type fieldErrors = {
    subject?: string[] | undefined;
    detail?: string[] | undefined;
    message?: string | undefined;
    image?: string[] | undefined;
}

export default async function post(prevState: unknown, formData: FormData) : 
    Promise<{
        message?: string;
        data?: string;
        image?:string;
        error?: fieldErrors;
    }> {
 


    const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors);
        return { error: result.error.formErrors.fieldErrors };
    }

    const data = result.data
    const {subject, detail,image} = data
    const User = await getSession()
    const userId = User.id

    try {
        await prisma.post.create({
            data: {
                subject,
                detail,
                userId,
                image,
                like:0,
            },
         })
    }
    catch (error) {
        console.log("error: " + error)
        return { error: {message: "Invalid email address" }}
    }
    revalidatePath("/blog")
    return { message: "Added user successful" }
}