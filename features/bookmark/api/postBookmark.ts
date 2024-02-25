type Props = {
    recipeId: number
    userId: string
}

export const postBookmark = async ({ recipeId, userId }: Props) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmark`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipeId: recipeId,
                userId: userId,
            }),
        })
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to postBookmark API' + error)
    }
}
