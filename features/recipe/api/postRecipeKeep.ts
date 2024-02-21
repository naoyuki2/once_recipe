import { Archive } from '@prisma/client'

export const postRecipeKeep = async (todayRecipe: Archive) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookmark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipe: todayRecipe }),
    })
    return res
}
