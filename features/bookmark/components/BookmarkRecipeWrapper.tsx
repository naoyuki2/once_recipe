import RecipeThumbnail from '@/features/recipe/components/RecipeThumbnail'
import RecipeTitle from '@/features/recipe/components/RecipeTitle'
import RecipeDescription from '@/features/recipe/components/RecipeDescription'
import RecipeTime from '@/features/recipe/components/RecipeTime'
import RecipeCost from '@/features/recipe/components/RecipeCost'
import RecipeMaterial from '@/features/recipe/components/RecipeMaterial'
import RecipeDetailButton from '@/features/recipe/components/RecipeDetailButton'
import { RecipeNonJsonType } from '@/types/type'
import BookmarkDeleteButton from './BookmarkDeleteButton'

type Props = {
    recipe: RecipeNonJsonType
}

const bookmarkRecipeWrapper = ({ recipe }: Props) => {
    return (
        <div className="xl:flex xl:gap-[25px]">
            <RecipeThumbnail foodImageUrl={recipe.foodImageUrl} />
            <div>
                <RecipeTitle recipeTitle={recipe.recipeTitle} />
                <RecipeDescription
                    recipeDescription={recipe.recipeDescription}
                />
                <RecipeTime recipeIndication={recipe.recipeIndication} />
                <RecipeCost recipeCost={recipe.recipeCost} />
                <RecipeMaterial recipeMaterial={recipe.recipeMaterial} />
                <div className="flex justify-between">
                    <BookmarkDeleteButton recipeId={recipe.Id} />
                    <RecipeDetailButton recipeUrl={recipe.recipeUrl} />
                </div>
            </div>
        </div>
    )
}

export default bookmarkRecipeWrapper
