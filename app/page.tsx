import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Suspense } from 'react'

export default async function Page() {
    return (
        <>
            <RecipeHeader />
            <Suspense fallback="<p>loading...</p>">
                <RecipeWrapper />
            </Suspense>
        </>
    )
}
