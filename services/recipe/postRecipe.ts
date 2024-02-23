import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'

export async function postRecipe(todayRecipe: Recipe): Promise<number> {
    try {
        const { Id }: { Id: number } = await prisma.recipe.create({
            select: {
                Id: true,
            },
            data: {
                foodImageUrl: todayRecipe.foodImageUrl,
                recipeTitle: todayRecipe.recipeTitle,
                recipeDescription: todayRecipe.recipeDescription,
                recipeIndication: todayRecipe.recipeIndication,
                recipeCost: todayRecipe.recipeCost,
                recipeMaterial: todayRecipe.recipeMaterial || {},
                recipeUrl: todayRecipe.recipeUrl,
            },
        })

        return Id
    } catch (error) {
        throw new Error('postRecipe:' + error)
    }
}
