import exp from 'constants'
import { allCategory } from './categoryData'

// const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
// const randomRecipeNumber = Math.floor(Math.random() * 4)
const randomCategoryNumber = 1 // OK
const randomRecipeNumber = 0

export const getTodayRecipe = async () => {
    let todayRecipe = await fetchDatabase()
    console.log('archive見に行く')
    if (!todayRecipe) {
        todayRecipe = await fetchRakutenRecipe()
    }
    return todayRecipe
}

export const fetchDatabase = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`)
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}

export const fetchRakutenRecipe = async () => {
    console.log('RakutenRecipeをたたく')
    try {
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}`,
        )
        const data = await res.json()
        return data.result[0]
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}

export const getCategoryName = () => {
    const categoryName = allCategory[randomCategoryNumber].categoryName
    return categoryName
}
