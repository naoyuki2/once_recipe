const BookmarkDescription = ({
    recipeDescription,
}: {
    recipeDescription: string
}) => {
    return (
        <div className="text-[12px] md:text-[16px] text-gray-500 w-[160px] overflow-hidden overflow-ellipsis line-clamp-2">
            {recipeDescription}
        </div>
    )
}

export default BookmarkDescription
