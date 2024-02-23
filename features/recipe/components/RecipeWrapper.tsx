import { getTodayRecipe } from '@/utils/recipe/getTodayRecipe'
import RecipeDetailButton from './RecipeDetailButton'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'
import RecipeDescription from './RecipeDescription'
import RecipeTime from './RecipeTime'
import RecipeCost from './RecipeCost'
import RecipeMaterial from './RecipeMaterial'
import RecipeKeep from './RecipeBookmarkButton'
import { convertRecipe } from '@/utils/recipe/convertRecipe'
import { Recipe } from '@prisma/client'

const RecipeWrapper = async () => {
    const todayRecipe: Recipe = await getTodayRecipe()
    const convertTodayRecipe = convertRecipe(todayRecipe)

    return (
        <>
            <RecipeThumbnail foodImageUrl={convertTodayRecipe.foodImageUrl} />
            <RecipeTitle recipeTitle={convertTodayRecipe.recipeTitle} />
            <RecipeDescription
                recipeDescription={convertTodayRecipe.recipeDescription}
            />
            <RecipeTime
                recipeIndication={convertTodayRecipe.recipeIndication}
            />
            <RecipeCost recipeCost={convertTodayRecipe.recipeCost} />
            <RecipeMaterial
                recipeMaterial={convertTodayRecipe.recipeMaterial}
            />
            <div className="flex justify-between">
                <RecipeKeep recipeId={convertTodayRecipe.Id} />
                <RecipeDetailButton recipeUrl={convertTodayRecipe.recipeUrl} />
            </div>
        </>
    )
}

export default RecipeWrapper
