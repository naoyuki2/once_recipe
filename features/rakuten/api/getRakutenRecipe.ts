import { allCategory } from '@/utils/categoryData'

export const fetchRakutenRecipe = async () => {
    console.log('RakutenRecipeをたたく')
    const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
    const randomRecipeNumber = Math.floor(Math.random() * 4)

    const categoryId = allCategory[randomCategoryNumber].categoryId
    try {
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}
            &categoryId=${categoryId}
            `,
        )
        const data = await res.json()
        return data.result[randomRecipeNumber]
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch RAKUTEN API')
    }
}
