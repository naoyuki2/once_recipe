import { allCategory } from './categoryData'

// const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
// const randomRecipeNumber = Math.floor(Math.random() * 4)
const randomCategoryNumber = 0 // OK
const randomRecipeNumber = 2

export const getTodayRanking = async () => {
    try {
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}`,
        )
        const data = await res.json()
        if (!data || !data.result) {
            throw new Error(data.result)
        }
        return data.result
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}

export const getCategoryName = () => {
    const categoryName = allCategory[randomCategoryNumber].categoryName
    return categoryName
}
