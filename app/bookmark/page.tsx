import { getBookmark } from '@/features/bookmark/api/getBookmark'
import { Suspense } from 'react'

export default async function bookmark() {
    const bookmarks = await getBookmark()
    console.log(bookmarks)
    return <Suspense fallback="<p>loading...</p>"></Suspense>
}
