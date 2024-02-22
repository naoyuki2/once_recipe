import { getBookmark } from '@/features/bookmark/api/getBookmark'
import BookmarkWrapper from '@/features/bookmark/components/BookmarkWrapper'
import { Recipe } from '@prisma/client'
import { Suspense } from 'react'

export default async function bookmark() {
    const bookmarks = await getBookmark()
    return (
        <div className="flex flex-col gap-3">
            {bookmarks.map((bookmark: Recipe) => (
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
