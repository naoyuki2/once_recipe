import { allCategory } from './categoryData'

// const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
// const randomRecipeNumber = Math.floor(Math.random() * 4)
const randomCategoryNumber = 1 // OK
const randomRecipeNumber = 0

export const getTodayRecipe = async () => {
    try {
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}`,
        )
        const data = await res.json()
        if (!data) {
            throw new Error('invalid data')
        }
        return data.result[randomRecipeNumber]
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}

export const getCategoryName = () => {
    const categoryName = allCategory[randomCategoryNumber].categoryName
    return categoryName
}
