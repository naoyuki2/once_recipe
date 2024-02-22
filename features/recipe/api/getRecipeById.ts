export const getRecipeById = async ({ recipeId }: { recipeId: number }) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/recipe/${recipeId}`,
        )
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch Recipe API')
    }
}
