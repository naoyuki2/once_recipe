import RecipeThumbnail from '@/features/recipe/components/RecipeThumbnail'
import RecipeTitle from '@/features/recipe/components/RecipeTitle'
import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import { getCategoryName, getTodayRecipe } from './utils/recipe'

export default async function Home() {
    const todayRecipe = await getTodayRecipe()
    const categoryName = getCategoryName()
    if (!todayRecipe) return <div>loading...</div>
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
