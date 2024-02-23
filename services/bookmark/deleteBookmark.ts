import prisma from '@/lib/prisma/prisma'
import { Prisma } from '@prisma/client'

type Props = {
    recipeId: number
    userId: string
}

export async function deleteBookmark({
    recipeId,
    userId,
}: Props): Promise<Prisma.BatchPayload> {
    try {
        const deleteBookmark: Prisma.BatchPayload =
            await prisma.bookmark.deleteMany({
                where: {
                    RecipeId: recipeId,
                    UserId: userId,
                },
            })
        return deleteBookmark
    } catch (error) {
        throw new Error('deleteBookmark:' + error)
    }
}
