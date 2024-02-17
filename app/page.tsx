import RecipeThumbnail from '@/features/recipe/components/RecipeThumbnail'
import RecipeTitle from '@/features/recipe/components/RecipeTitle'
import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import { getTests } from '@/features/test/api/getTests'
import { getCategoryName, getTodayRecipe } from './utils/recipe'

export default async function Home() {
    const tests = await getTests()
    const todayRecipe = await getTodayRecipe()
    const categoryName = getCategoryName()
    // console.log(todayRecipe)
    return (
        <div className="m-[16px]">
            <div>{tests && <p>{tests[0].text}</p>}</div>
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
