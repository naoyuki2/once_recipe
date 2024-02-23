import { getUserId } from '@/lib/next-auth/getUser'
import { getBookmarkRecipeIdsByUseId } from '@/services/bookmark/getBookmarksByUserId'
import { getRecipesByMultipleIds } from '@/services/recipe/getRecipesByMultipleIds'
import { Recipe } from '@prisma/client'

export const getBookmarkRecipes = async (): Promise<Recipe[]> => {
    try {
        const userId = await getUserId()
        const bookmarkRecipeIds = await getBookmarkRecipeIdsByUseId({ userId })
        const bookmarkRecipes = await getRecipesByMultipleIds({
            bookmarkRecipeIds,
        })
        return bookmarkRecipes
    } catch (error) {
        throw new Error('getBookmarkRecipes:' + error)
    }
}
