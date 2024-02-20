export const postArchive = async (todayRecipe: any) => {
    console.log('post')
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                foodImageUrl: todayRecipe.foodImageUrl,
                recipeTitle: todayRecipe.recipeTitle,
                recipeDescription: todayRecipe.recipeDescription,
                recipeIndication: todayRecipe.recipeIndication,
                recipeCost: todayRecipe.recipeCost,
                recipeMaterial: todayRecipe.recipeMaterial,
                recipeUrl: todayRecipe.recipeUrl,
            }),
        })
        return res
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}
