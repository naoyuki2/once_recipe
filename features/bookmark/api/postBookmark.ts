type Props = {
    recipeId: number
    userId: string
}

export const postBookmark = async ({ recipeId, userId }: Props) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            recipeId,
            userId,
        }),
    })
    return res
}
