import { navigateBookmark } from '@/app/actions'
import { getUserId } from '@/lib/next-auth/getUser'

const RecipeDetailButton = async ({ recipeId }: { recipeId: number }) => {
    const userId = await getUserId()

    const navigateBookmarkWithRecipe = navigateBookmark.bind(
        null,
        recipeId,
        userId,
    )
    return (
        <>
            {userId !== 'guest' ? (
                <form
                    action={navigateBookmarkWithRecipe}
                    className="flex justify-end"
                >
                    <button className="bg-yellow-500 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center">
                        レシピを保存
                    </button>
                </form>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default RecipeDetailButton
