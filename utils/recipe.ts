import { unstable_noStore } from 'next/cache'
import { allCategory } from './categoryData'
import { isEmpty } from './isEmpty'

const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
const randomRecipeNumber = Math.floor(Math.random() * 4)

export const getTodayRecipe = async () => {
    let todayRecipe = await fetchDatabase()
    console.log('archive見に行く')
    console.log(todayRecipe)
    if (isEmpty(todayRecipe)) {
        todayRecipe = await fetchRakutenRecipe()
        await postArchive(todayRecipe)
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

export const postArchive = async (todayRecipe: any) => {
    console.log('post')
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipeTitle: todayRecipe.recipeTitle,
                foodImageUrl: todayRecipe.foodImageUrl,
            }),
        })
        return res
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}
