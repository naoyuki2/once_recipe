import { RecipeNonJsonType } from '@/types/type'
import { Recipe } from '@prisma/client'

export function convertRecipe(recipe: Recipe): RecipeNonJsonType {
    // Check if recipeMaterial is an array of strings
    if (
        !Array.isArray(recipe.recipeMaterial) ||
        !recipe.recipeMaterial.every((item) => typeof item === 'string')
    ) {
        throw new Error('Invalid recipeMaterial format')
    }

    return {
        Id: recipe.Id,
        recipeTitle: recipe.recipeTitle,
        recipeDescription: recipe.recipeDescription,
        recipeIndication: recipe.recipeIndication,
        recipeCost: recipe.recipeCost,
        recipeMaterial: recipe.recipeMaterial as string[],
        recipeUrl: recipe.recipeUrl,
        foodImageUrl: recipe.foodImageUrl,
    }
}
