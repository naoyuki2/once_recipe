import BookmarkWrapper from '@/features/bookmark/components/BookmarkWrapper'
import { getBookmarkRecipes } from '@/utils/bookmark/getBookmarkRecipes'
import { Recipe } from '@prisma/client'

export default async function bookmark() {
    const bookmarkRecipes = await getBookmarkRecipes()
    if (bookmarkRecipes.length === 0) {
        return <p>ブックマークしているレシピはないようです。</p>
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
