import BookmarkWrapper from '@/features/bookmark/components/BookmarkWrapper'
import { getBookmarkRecipes } from '@/utils/bookmark/getBookmarkRecipes'
import { Recipe } from '@prisma/client'
import { Suspense } from 'react'

export default async function bookmark() {
    const bookmarkRecipes = await getBookmarkRecipes()
    if (bookmarkRecipes.length === 0) {
        return <p>No bookmarked recipes</p>
    }
    return (
        <div className="flex flex-col gap-3">
            {bookmarkRecipes.map((bookmark: Recipe) => (
                <div key={bookmark.Id}>
                    <Suspense fallback="<p>loading...</p>">
                        <BookmarkWrapper
                            key={bookmark.Id}
                            bookmark={bookmark}
                        />
                    </Suspense>
                </div>
            ))}
        </div>
    )
}
