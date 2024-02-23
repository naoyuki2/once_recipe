import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Recipe } from '@prisma/client'
import { convertRecipe } from '@/utils/recipe/convertRecipe'
import { getTodayRecipe } from '@/utils/recipe/getTodayRecipe'

export const revalidate = 18000

export default async function Page() {
    const todayRecipe: Recipe = await getTodayRecipe()
    const convertTodayRecipe = convertRecipe(todayRecipe)
    return (
        <>
            <RecipeHeader />
            {/* <Suspense fallback={<Skeleton />}> */}
            <RecipeWrapper convertTodayRecipe={convertTodayRecipe} />
            {/* </Suspense> */}
        </>
    )
}
