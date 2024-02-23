import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Recipe } from '@prisma/client'
import { convertRecipe } from '@/utils/recipe/convertRecipe'
import { getTodayRecipe } from '@/utils/recipe/getTodayRecipe'

export const runtime = 'nodejs'

export const revalidate = 3600

export default async function Page() {
    const todayRecipe: Recipe = await getTodayRecipe()
    const convertTodayRecipe = convertRecipe(todayRecipe)
    return (
        <>
            <RecipeHeader />
            <RecipeWrapper convertTodayRecipe={convertTodayRecipe} />
        </>
    )
}
