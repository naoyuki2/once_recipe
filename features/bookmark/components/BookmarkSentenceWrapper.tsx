import BookmarkDescription from './BookmarkDescription'
import BookmarkTitle from './BookmarkTitle'

type Props = {
    recipeTitle: string
    recipeDescription: string
}

const BookmarkSentenceWrapper = ({ recipeTitle, recipeDescription }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <BookmarkTitle recipeTitle={recipeTitle} />
            <BookmarkDescription recipeDescription={recipeDescription} />
        </div>
    )
}

export default BookmarkSentenceWrapper
