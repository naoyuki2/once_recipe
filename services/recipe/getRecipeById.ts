import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'

export async function getRecipeById({
    recipeId,
}: {
    recipeId: number
}): Promise<Recipe | null> {
    console.log('getRecipeById')
    try {
        const bookmarkRecipe: Recipe | null = await prisma.recipe.findUnique({
            where: {
                Id: recipeId,
            },
        })

        return bookmarkRecipe
    } catch (error) {
        throw new Error('getRecipeById:' + error)
    }
}
