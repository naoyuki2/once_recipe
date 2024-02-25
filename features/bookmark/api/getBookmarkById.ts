type Props = {
    recipeId: number
    userId: string
}

export const getBookmarkById = async ({ recipeId, userId }: Props) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bookmark/${userId}/${recipeId}`,
        )
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('getBookmarkById:' + error)
    }
}
