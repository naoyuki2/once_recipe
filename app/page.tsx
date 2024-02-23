import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Suspense } from 'react'
import Skeleton from '@/features/recipe/components/Skeleton'

export default async function Page() {
    return (
        <>
            <RecipeHeader />
            <Suspense fallback={<Skeleton />}>
                <RecipeWrapper />
            </Suspense>
        </>
    )
}
