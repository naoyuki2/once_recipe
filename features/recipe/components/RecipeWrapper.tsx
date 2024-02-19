import { getTodayRanking, getTodayRecipe } from '@/app/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRanking = await getTodayRanking()
    const todayRecipe = getTodayRecipe(todayRanking)
    return (
        <>
            <RecipeThumbnail foodImageUrl={todayRecipe.foodImageUrl} />
            <div className="m-[8px]">
                <RecipeTitle title={todayRecipe.recipeTitle} />
            </div>
        </>
    )
}

export default RecipeWrapper
