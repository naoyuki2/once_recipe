import { getRecipeById } from '@/services/recipe/getRecipeById'
import BookmarkRecipeWrapper from '@/features/bookmark/components/BookmarkRecipeWrapper'
import { Suspense } from 'react'
import { convertRecipe } from '@/utils/recipe/convertRecipe'

export default async function bookmarkRecipe({
    params,
}: {
    params: { recipeId: string }
}) {
    const recipeId = Number(params.recipeId)
    const recipe = await getRecipeById({ recipeId })
    if (recipe === null) {
        throw new Error('recipeが取得できませんでした')
    }
    const convertedRecipe = convertRecipe(recipe)

    return (
        <>
            <Suspense fallback="<p>loading...</p>">
                <BookmarkRecipeWrapper recipe={convertedRecipe} />
            </Suspense>
        </>
    )
}
