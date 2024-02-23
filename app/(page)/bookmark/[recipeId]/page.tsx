import { getRecipeById } from '@/features/recipe/api/getRecipeById'
import BookmarkRecipeWrapper from '@/features/bookmark/components/BookmarkRecipeWrapper'
import { Suspense } from 'react'

export default async function bookmarkRecipe({
    params,
}: {
    params: { recipeId: number }
}) {
    const { recipeId } = params
    const recipe = await getRecipeById({ recipeId })

    if (typeof recipe === 'number') {
        // recipeが見つからなかった場合の処理をここに書く
        return null
    }

    return (
        <>
            <Suspense fallback="<p>loading...</p>">
                <BookmarkRecipeWrapper recipe={recipe} />
            </Suspense>
        </>
    )
}
