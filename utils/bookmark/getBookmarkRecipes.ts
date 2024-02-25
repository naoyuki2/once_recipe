import { getBookmark } from '@/features/bookmark/api/getBookmark'
import { getRecipesByMultipleIds } from '@/features/recipe/api/getRecipesByMultipleIds'
import { Bookmark, Recipe } from '@prisma/client'

export const getBookmarkRecipes = async (): Promise<Recipe[]> => {
    try {
        const bookmarks = await getBookmark()
        if (bookmarks.length === 0) {
            return []
        }
        const bookmarkIds = bookmarks.map(
            (bookmark: Bookmark) => bookmark.RecipeId,
        )

        const bookmarkRecipes = await getRecipesByMultipleIds({
            bookmarkIds: bookmarkIds,
        })
        return bookmarkRecipes
    } catch (error) {
        throw new Error('getBookmarkRecipes:' + error)
    }
}
