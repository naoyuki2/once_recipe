import { allCategory } from '../app/api/rakuten/categoryData'
import { fetchRankingTop4ByCategoryId } from '../app/api/rakuten/dataFetch'

// const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
// const randomRecipeNumber = Math.floor(Math.random() * 4)
const randomCategoryNumber = 0 // OK
const randomRecipeNumber = 2

export const getTodayRanking = async () => {
    const ranking = await fetchRankingTop4ByCategoryId(
        allCategory[randomCategoryNumber].categoryId,
    )
    return ranking
}

// export const getTodayRecipe = (ranking: any) => {
//     return ranking.result[randomRecipeNumber]
// }

export const getCategoryName = () => {
    const categoryName = allCategory[randomCategoryNumber].categoryName
    return categoryName
}
