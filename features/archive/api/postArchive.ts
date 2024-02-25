export const postArchive = async (recipeId: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipeId: recipeId,
            }),
        })
        return res
    } catch (error) {
        console.error(error)
        throw new Error('Failed to post Archive API')
    }
}
