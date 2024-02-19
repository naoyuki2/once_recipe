import { getTodayRecipe } from '@/app/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRecipe = await getTodayRecipe()
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
