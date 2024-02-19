import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Suspense } from 'react'
import { getTodayRecipe } from '@/utils/recipe'

export default async function Page() {
    const todayRanking = await getTodayRecipe()
    const todayRecipe = todayRanking?.result[0]
    console.log(todayRecipe)
    return (
        <div className="m-[16px]">
            <RecipeHeader />
            <Suspense fallback="<p>loading...</p>">
                <RecipeWrapper />
            </Suspense>
            <RecipeDetailButton />
        </div>
    )
}
