import { getTodayRecipe } from '@/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRecipe = await getTodayRecipe()
    console.log(todayRecipe)
    return (
        <>
            <RecipeThumbnail foodImageUrl={todayRecipe.foodImageUrl} />
            <div className="m-[8px]">
                <RecipeTitle title={todayRecipe.title} />
            </div>
        </>
    )
}

export default RecipeWrapper
