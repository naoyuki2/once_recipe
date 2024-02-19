import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Suspense } from 'react'
import Test from '@/features/test/component/Test'

export default async function Page() {
    return (
        <div className="m-[16px]">
            <Suspense fallback="<p>tests loading...</p>">
                <Test />
            </Suspense>
            <RecipeHeader />
            <Suspense fallback="<p>loading...</p>">
                <RecipeWrapper />
            </Suspense>
            <RecipeDetailButton />
        </div>
    )
}
