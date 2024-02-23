import prisma from '@/lib/prisma/prisma'
import { Bookmark } from '@prisma/client'

type Props = {
    userId: string
    recipeId: number
}

export async function getIsBookmarked({
    userId,
    recipeId,
}: Props): Promise<boolean> {
    try {
        const bookmark: Bookmark | null = await prisma.bookmark.findFirst({
            where: {
                UserId: userId,
                RecipeId: recipeId,
            },
        })

        return bookmark ? true : false
    } catch (error) {
        throw new Error('getIsBookmarked:' + error)
    }
}
