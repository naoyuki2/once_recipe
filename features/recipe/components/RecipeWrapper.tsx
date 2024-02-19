import { getTodayRanking } from '@/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRecipe = await getTodayRanking()
    return (
        <>
            {/* <RecipeThumbnail foodImageUrl={todayRecipe.foodImageUrl} /> */}
            <div className="m-[8px]">
                {/* <RecipeTitle title={todayRecipe.recipeTitle} /> */}
                <RecipeTitle title="test" />
            </div>
        </>
    )
}

export default RecipeWrapper
