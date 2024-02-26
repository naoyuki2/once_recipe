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
            className="grid grid-cols-2 gap-3 hover:bg-gray-200 p-1 rounded-[14px] cursor-pointer"
        >
            <div className="flex justify-center">
                <BookmarkThumbnail foodImageUrl={bookmark.foodImageUrl} />
            </div>
            <div className="flex items-center">
                <BookmarkSentenceWrapper
                    recipeTitle={bookmark.recipeTitle}
                    recipeDescription={bookmark.recipeDescription}
                />
            </div>
        </Link>
    )
}

export default BookmarkWrapper
