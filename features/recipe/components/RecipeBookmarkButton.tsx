import { actionDeleteBookmark, actionPostBookmark } from '@/app/actions'
import { getUserId } from '@/lib/next-auth/getUser'
import { getIsBookmarked } from '@/services/bookmark/getIsBookmarked'

const RecipeDetailButton = async ({ recipeId }: { recipeId: number }) => {
    const userId = await getUserId()
    const isBookmarked = await getIsBookmarked({ recipeId, userId })

    const actionPostBookmarkWithRecipe = actionPostBookmark.bind(
        null,
        recipeId,
        userId,
    )

    const actionDeleteBookmarkWithId = actionDeleteBookmark.bind(
        null,
        recipeId,
        userId,
    )
    return (
        <>
            {userId !== 'guest' ? (
                isBookmarked ? (
                    <form
                        action={actionDeleteBookmarkWithId}
                        className="flex justify-end"
                    >
                        <button className="bg-red-500 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center">
                            保存から削除
                        </button>
                    </form>
                ) : (
                    <form
                        action={actionPostBookmarkWithRecipe}
                        className="flex justify-end"
                    >
                        <button className="bg-yellow-500 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center">
                            レシピを保存
                        </button>
                    </form>
                )
            ) : (
                <div></div>
            )}
        </>
    )
}

export default RecipeDetailButton
