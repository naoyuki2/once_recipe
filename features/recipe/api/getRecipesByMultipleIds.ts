type Props = {
    bookmarkIds: number
}

export const getRecipesByMultipleIds = async ({ bookmarkIds }: Props) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/recipe/${bookmarkIds}`,
        )
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error('Failed to getRecipesByMultipleIds API' + error)
    }
}
