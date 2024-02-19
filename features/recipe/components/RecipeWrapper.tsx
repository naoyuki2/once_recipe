import { getTodayRecipe } from '@/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRecipe = await getTodayRecipe()
    return (
        <>
            <RecipeThumbnail
                foodImageUrl={todayRecipe!.result[0].foodImageUrl}
            />
            <div className="m-[8px]">
                <RecipeTitle title={todayRecipe!.result[0].recipeTitle} />
            </div>
        </>
    )
}

export default RecipeWrapper
