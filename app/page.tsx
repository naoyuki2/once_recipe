import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { Recipe } from '@prisma/client'
import { convertRecipe } from '@/utils/recipe/convertRecipe'
import { getTodayRecipe } from '@/utils/recipe/getTodayRecipe'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        template: '%s | 今日の一皿',
        default: '今日の一皿',
    },
    description:
        '「今日の一皿」は、一日に一度更新されるレシピを提供するサービスです。たくさんのレシピとの出会いを提供します。',
    applicationName: '今日の一皿',
    keywords: ['今日の一皿', 'レシピ', '料理', '食材', '一皿', '献立'],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export const revalidate = 3600

export default async function Page() {
    const todayRecipe: Recipe = await getTodayRecipe()
    const convertTodayRecipe = convertRecipe(todayRecipe)
    return (
        <>
            <RecipeHeader />
            <RecipeWrapper convertTodayRecipe={convertTodayRecipe} />
        </>
    )
}
