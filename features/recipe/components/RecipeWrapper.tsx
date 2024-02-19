import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    return (
        <>
            {/* <RecipeThumbnail
                foodImageUrl={todayRecipe!.result[0].foodImageUrl}
            /> */}
            <div className="m-[8px]">
                <RecipeTitle title="test" />
            </div>
        </>
    )
}

export default RecipeWrapper
