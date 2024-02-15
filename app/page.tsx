import RecipeThumbnail from '@/features/recipe/components/RecipeThumbnail'
import { fetchAllCategory, fetchRanking } from './api/rakuten/data'
import RecipeTitle from '@/features/recipe/components/RecipeTitle'
import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'

export default async function Home() {
    // const category = await fetchAllCategory()
    // console.log(category)
    const ranking = await fetchRanking()
    console.log(ranking.result[0])
    return (
        <div className="m-[16px]">
            <h1 className="mb-[16px] text-[32px] font-bold text-gray-700">
                今日作る料理は・・・
            </h1>
            <RecipeThumbnail foodImageUrl={ranking.result[0].foodImageUrl} />
            <div className="m-[8px]">
                <RecipeTitle title={ranking.result[0].recipeTitle} />
                <RecipeDetailButton />
            </div>
        </div>
    )
}
