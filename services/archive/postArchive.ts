import prisma from '@/lib/prisma/prisma'
import { Archive } from '@prisma/client'

export async function postArchive(recipeId: number): Promise<Archive> {
    try {
        const postArchive: Archive = await prisma.archive.create({
            data: {
                RecipeId: recipeId,
            },
        })

        return postArchive
    } catch (error) {
        throw new Error('postArchive:' + error)
    }
}
