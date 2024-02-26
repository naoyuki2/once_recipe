import RecipeDetailButton from './RecipeDetailButton'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'
import RecipeDescription from './RecipeDescription'
import RecipeTime from './RecipeTime'
import RecipeCost from './RecipeCost'
import RecipeMaterial from './RecipeMaterial'
import RecipeKeep from './RecipeBookmarkButton'
import { RecipeNonJsonType } from '@/types/type'

type Props = {
    todayRecipe: RecipeNonJsonType
}

const RecipeWrapper = async ({ todayRecipe }: Props) => {
    const {
        foodImageUrl,
        recipeTitle,
        recipeDescription,
        recipeIndication,
        recipeCost,
        recipeMaterial,
        recipeUrl,
        Id,
    } = todayRecipe
    return (
        <div className="xl:grid xl:grid-cols-2 xl:gap-4">
            <RecipeThumbnail foodImageUrl={foodImageUrl} />
            <div className="">
                <RecipeTitle recipeTitle={recipeTitle} />
                <RecipeDescription recipeDescription={recipeDescription} />
                <RecipeTime recipeIndication={recipeIndication} />
                <RecipeCost recipeCost={recipeCost} />
                <RecipeMaterial recipeMaterial={recipeMaterial} />
                <div className="flex justify-between">
                    <RecipeKeep recipeId={Id} />
                    <RecipeDetailButton recipeUrl={recipeUrl} />
                </div>
            </div>
        </div>
    )
}

export default RecipeWrapper
