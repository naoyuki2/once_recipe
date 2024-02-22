import { Recipe } from '@prisma/client'
import BookmarkThumbnail from './BookmarkThumbnail'
import BookmarkSentenceWrapper from './BookmarkSentenceWrapper'
import Link from 'next/link'

type Props = {
    bookmark: Recipe
}

const BookmarkWrapper = ({ bookmark }: Props) => {
    return (
        <Link
            href={`/bookmark/${bookmark.Id}`}
            className="flex items-center gap-3 hover:bg-gray-200 p-1 rounded-[14px] cursor-pointer"
        >
            <BookmarkThumbnail foodImageUrl={bookmark.foodImageUrl} />
            <BookmarkSentenceWrapper
                recipeTitle={bookmark.recipeTitle}
                recipeDescription={bookmark.recipeDescription}
            />
        </Link>
    )
}

export default BookmarkWrapper
