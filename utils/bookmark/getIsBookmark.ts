import { getBookmarkById } from '@/features/bookmark/api/getBookmarkById'

type Props = {
    recipeId: number
    userId: string
}

export const getIsBookmark = async ({
    recipeId,
    userId,
}: Props): Promise<boolean> => {
    try {
        const isBookmark = await getBookmarkById({
            recipeId: recipeId,
            userId: userId,
        })
        if (isBookmark === null) {
            return false
        }
        return true
    } catch (error) {
        throw new Error('getBookmarkRecipes:' + error)
    }
}
