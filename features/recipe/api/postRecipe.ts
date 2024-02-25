import { Recipe } from '@prisma/client'

type Props = {
    recipe: Recipe
}

export const postRecipe = async ({ recipe }: Props): Promise<Recipe> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                foodImageUrl: recipe.foodImageUrl,
                recipeTitle: recipe.recipeTitle,
                recipeDescription: recipe.recipeDescription,
                recipeIndication: recipe.recipeIndication,
                recipeCost: recipe.recipeCost,
                recipeMaterial: recipe.recipeMaterial,
                recipeUrl: recipe.recipeUrl,
            }),
        })
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to postRecipe API')
    }
}
