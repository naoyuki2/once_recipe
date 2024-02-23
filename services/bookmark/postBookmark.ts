import prisma from '@/lib/prisma/prisma'
import { Bookmark } from '@prisma/client'

type Props = {
    recipeId: number
    userId: string
}

export async function postBookmark({
    recipeId,
    userId,
}: Props): Promise<Bookmark> {
    try {
        const postBookmark: Bookmark = await prisma.bookmark.create({
            data: {
                RecipeId: recipeId,
                UserId: userId,
            },
        })
        return postBookmark
    } catch (error) {
        throw new Error('postBookmark:' + error)
    }
}
