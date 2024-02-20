export const postArchive = async (todayRecipe: any) => {
    console.log('post')
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipeTitle: todayRecipe.recipeTitle,
                foodImageUrl: todayRecipe.foodImageUrl,
            }),
        })
        return res
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}
