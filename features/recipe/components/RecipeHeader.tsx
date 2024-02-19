import { getCategoryName } from '@/utils/recipe'

const RecipeHeader = () => {
    const categoryName = getCategoryName()

    return (
        <h1 className="mb-[16px] text-[32px] font-bold text-gray-700">
            今日作る{categoryName}は・・・
        </h1>
    )
}

export default RecipeHeader
