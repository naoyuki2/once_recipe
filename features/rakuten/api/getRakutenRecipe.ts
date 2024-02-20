import { allCategory } from '@/utils/categoryData'

const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
const randomRecipeNumber = Math.floor(Math.random() * 4)

export const fetchRakutenRecipe = async () => {
    console.log('RakutenRecipeをたたく')
    try {
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}
            &categoryId=${allCategory[randomCategoryNumber].categoryId}
            `,
        )
        const data = await res.json()
        return data.result[randomRecipeNumber]
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}
