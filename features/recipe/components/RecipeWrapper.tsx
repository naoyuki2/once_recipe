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
    convertTodayRecipe: RecipeNonJsonType
}

const RecipeWrapper = async ({ convertTodayRecipe }: Props) => {
    return (
        <div className="xl:flex xl:gap-[25px]">
            <RecipeThumbnail foodImageUrl={convertTodayRecipe.foodImageUrl} />
            <div className="">
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
                    <RecipeDetailButton
                        recipeUrl={convertTodayRecipe.recipeUrl}
                    />
                </div>
            </div>
        </div>
    )
}

export default RecipeWrapper
