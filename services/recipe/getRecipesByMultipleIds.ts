import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'

export async function getRecipesByMultipleIds({
    bookmarkRecipeIds,
}: {
    bookmarkRecipeIds: number[]
}): Promise<Recipe[]> {
    try {
        const bookmarkRecipes: Recipe[] = await prisma.recipe.findMany({
            where: {
                Id: {
                    in: bookmarkRecipeIds,
                },
            },
        })
        if (bookmarkRecipes.length === 0) {
            return []
        } else {
            return bookmarkRecipes
        }
    } catch (error) {
        throw new Error('getRecipesByMultipleIds:' + error)
    }
}
