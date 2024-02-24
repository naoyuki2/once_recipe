import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Recipe } from '@prisma/client'
import { convertRecipe } from '@/utils/recipe/convertRecipe'

export default async function Page() {
    const todayRecipe: Recipe = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/archive`,
        {
            next: {
                revalidate: 3600,
            },
        },
    ).then((res) => res.json())
    const convertTodayRecipe = convertRecipe(todayRecipe)
    return (
        <>
            <RecipeHeader />
            <RecipeWrapper convertTodayRecipe={convertTodayRecipe} />
        </>
    )
}
