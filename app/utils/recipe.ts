import { allCategory } from '../api/rakuten/categoryData'
import { fetchRankingTop4ByCategoryId } from '../api/rakuten/dataFetch'

// const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
// const randomRecipeNumber = Math.floor(Math.random() * 4)
const randomCategoryNumber = 0
const randomRecipeNumber = 0

export const getTodayRecipe = async () => {
    const ranking = await fetchRankingTop4ByCategoryId(
        allCategory[randomCategoryNumber].categoryId,
    )
    const todayRecipe = ranking.result[randomRecipeNumber]
    return todayRecipe
}

export const getCategoryName = () => {
    const categoryName = allCategory[randomCategoryNumber].categoryName
    return categoryName
}
