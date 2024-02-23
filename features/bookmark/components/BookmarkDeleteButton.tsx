import { actionDeleteBookmark } from '@/app/actions'
import { getUserId } from '@/lib/next-auth/getUser'

const BookmarkDeleteButton = async ({ recipeId }: { recipeId: number }) => {
    const userId = await getUserId()

    const actionDeleteBookmarkWithId = actionDeleteBookmark.bind(
        null,
        recipeId,
        userId,
    )
    return (
        <>
            {userId !== 'guest' ? (
                <form
                    action={actionDeleteBookmarkWithId}
                    className="flex justify-end"
                >
                    <button className="bg-red-500 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center">
                        保存から削除
                    </button>
                </form>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default BookmarkDeleteButton
