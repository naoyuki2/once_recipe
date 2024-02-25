import BookmarkRecipeWrapper from '@/features/bookmark/components/BookmarkRecipeWrapper'
import { Suspense } from 'react'
import { convertRecipe } from '@/utils/recipe/convertRecipe'
import { getRecipeById } from '@/features/recipe/api/getRecipeById'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '保存したレシピ',
}

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
    const convertedRecipe = convertRecipe(recipe[0])

    return (
        <>
            <Suspense fallback="<div>loading</div>">
                <BookmarkRecipeWrapper recipe={convertedRecipe} />
            </Suspense>
        </>
    )
}
