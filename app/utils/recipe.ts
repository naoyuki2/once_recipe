import { allCategory } from '../api/rakuten/categoryData'
import { fetchRankingTop4ByCategoryId } from '../api/rakuten/dataFetch'

const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)

export const getTodayRecipe = async () => {
    const ranking = await fetchRankingTop4ByCategoryId(
        allCategory[randomCategoryNumber].categoryId,
    )
    const randomRecipeNumber = Math.floor(Math.random() * 4)
    const todayRecipe = ranking.result[randomRecipeNumber]
    return todayRecipe
}

export const getCategoryName = () => {
    const categoryName = allCategory[randomCategoryNumber].categoryName
    return categoryName
}
