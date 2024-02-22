import React from 'react'

const BookmarkTitle = ({ recipeTitle }: { recipeTitle: string }) => {
    return (
        <div className="text-[16px] md:text-[20px] font-bold text-gray-700">
            {recipeTitle}
        </div>
    )
}

export default BookmarkTitle
