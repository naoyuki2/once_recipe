import BookmarkWrapper from '@/features/bookmark/components/BookmarkWrapper'
import { getBookmarkRecipes } from '@/utils/bookmark/getBookmarkRecipes'
import { Recipe } from '@prisma/client'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '保存したレシピ一覧',
}

export default async function bookmark() {
    const bookmarkRecipes = await getBookmarkRecipes()
    if (bookmarkRecipes.length === 0) {
        return (
            <div className="flex items-center justify-center h-[500px]">
                <p className="text-[16px] md:text-[20px] text-gray-700">
                    保存しているレシピはないようです。
                </p>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-3 h-full">
            {bookmarkRecipes.map((bookmark: Recipe) => (
                <div key={bookmark.Id}>
                    <BookmarkWrapper key={bookmark.Id} bookmark={bookmark} />
                </div>
            ))}
        </div>
    )
}
