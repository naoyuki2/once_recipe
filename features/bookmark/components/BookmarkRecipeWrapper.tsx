import RecipeThumbnail from '@/features/recipe/components/RecipeThumbnail'
import RecipeTitle from '@/features/recipe/components/RecipeTitle'
import RecipeDescription from '@/features/recipe/components/RecipeDescription'
import RecipeTime from '@/features/recipe/components/RecipeTime'
import RecipeCost from '@/features/recipe/components/RecipeCost'
import RecipeMaterial from '@/features/recipe/components/RecipeMaterial'
import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import { RecipeNonJsonType } from '@/types/type'

type Props = {
    recipe: RecipeNonJsonType
}

const bookmarkRecipeWrapper = ({ recipe }: Props) => {
    return (
        <>
            <RecipeThumbnail foodImageUrl={recipe.foodImageUrl} />
            <RecipeTitle recipeTitle={recipe.recipeTitle} />
            <RecipeDescription recipeDescription={recipe.recipeDescription} />
            <RecipeTime recipeIndication={recipe.recipeIndication} />
            <RecipeCost recipeCost={recipe.recipeCost} />
            <RecipeMaterial recipeMaterial={recipe.recipeMaterial} />
            <div className="flex justify-end">
                <RecipeDetailButton recipeUrl={recipe.recipeUrl} />
            </div>
        </>
    )
}

export default bookmarkRecipeWrapper
