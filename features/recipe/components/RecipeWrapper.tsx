import { getTodayRecipe } from '../api/getTodayRecipe'
import RecipeDetailButton from './RecipeDetailButton'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'
import RecipeDescription from './RecipeDescription'
import RecipeTime from './RecipeTime'
import RecipeCost from './RecipeCost'
import RecipeMaterial from './RecipeMaterial'
import RecipeKeep from './RecipeKeep'
import { RecipeNonJsonType } from '@/types/type'

const RecipeWrapper = async () => {
    const todayRecipe: RecipeNonJsonType = await getTodayRecipe()
    return (
        <>
            <RecipeThumbnail foodImageUrl={todayRecipe.foodImageUrl} />
            <RecipeTitle recipeTitle={todayRecipe.recipeTitle} />
            <RecipeDescription
                recipeDescription={todayRecipe.recipeDescription}
            />
            <RecipeTime recipeIndication={todayRecipe.recipeIndication} />
            <RecipeCost recipeCost={todayRecipe.recipeCost} />
            <RecipeMaterial recipeMaterial={todayRecipe.recipeMaterial} />
            <div className="flex justify-between">
                <RecipeKeep recipeId={todayRecipe.Id} />
                <RecipeDetailButton recipeUrl={todayRecipe.recipeUrl} />
            </div>
        </>
    )
}

export default RecipeWrapper
