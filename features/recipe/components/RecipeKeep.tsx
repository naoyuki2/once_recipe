import { archive_recipe } from '@prisma/client'
import { navigateBookmark } from '@/app/actions'

const RecipeDetailButton = ({
    todayRecipe,
}: {
    todayRecipe: archive_recipe
}) => {
    const navigateBookmarkWithRecipe = navigateBookmark.bind(null, todayRecipe)

    return (
        <form action={navigateBookmarkWithRecipe} className="flex justify-end">
            <button className="bg-yellow-500 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center">
                レシピを保存
            </button>
        </form>
    )
}

export default RecipeDetailButton
