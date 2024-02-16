import RecipeThumbnail from '@/features/recipe/components/RecipeThumbnail'
import {
    fetchAllCategory,
    fetchRankingTop4ByCategoryId,
} from './api/rakuten/dataFetch'
import RecipeTitle from '@/features/recipe/components/RecipeTitle'
import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import { allCategory } from './api/rakuten/categoryData'
import { getTests } from '@/features/test/api/getTests'

export default async function Home() {
    // const tests = await getTests()
    // const category = await fetchAllCategory()
    // console.log(category.result.large)
    const randomCategoryNumber = Math.floor(Math.random() * allCategory.length)
    const ranking = await fetchRankingTop4ByCategoryId(
        allCategory[randomCategoryNumber].categoryId,
    )
    const randomRecipeNumber = Math.floor(Math.random() * 4)
    const todayRecipe = ranking.result[randomRecipeNumber]
    const categoryName = allCategory[randomCategoryNumber].categoryName
    // console.log(todayRecipe)
    return (
        <div className="m-[16px]">
            <h1 className="mb-[16px] text-[32px] font-bold text-gray-700">
                今日作る{categoryName}は・・・
            </h1>
            <RecipeThumbnail foodImageUrl={todayRecipe.foodImageUrl} />
            <div className="m-[8px]">
                <RecipeTitle title={todayRecipe.recipeTitle} />
                <RecipeDetailButton />
            </div>
        </div>
    )
}
