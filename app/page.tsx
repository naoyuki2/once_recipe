import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import { getCategoryName } from '../utils/recipe'
import { Suspense } from 'react'

export default async function Page() {
    const categoryName = getCategoryName()
    return (
        <div className="m-[16px]">
            <h1 className="mb-[16px] text-[32px] font-bold text-gray-700">
                今日作る{categoryName}は・・・
            </h1>
            <Suspense fallback="<p>loading...</p>">
                <RecipeWrapper />
            </Suspense>
            <RecipeDetailButton />
        </div>
    )
}
