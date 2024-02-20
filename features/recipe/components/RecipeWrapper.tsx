import { getTodayRecipe } from '../api/getTodayRecipe'
import RecipeDetailButton from './RecipeDetailButton'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'
import RecipeDescription from './RecipeDescription'
import RecipeTime from './RecipeTime'
import RecipeCost from './RecipeCost'
import RecipeMaterial from './RecipeMaterial'

const RecipeWrapper = async () => {
    const todayRecipe = await getTodayRecipe()
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
            <RecipeDetailButton recipeUrl={todayRecipe.recipeUrl} />
        </>
    )
}

export default RecipeWrapper
