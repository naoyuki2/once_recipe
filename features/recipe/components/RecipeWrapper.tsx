import { getTodayRanking } from '@/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRanking = await getTodayRanking()
    return (
        <>
            {/* <RecipeThumbnail
                foodImageUrl={todayRanking.result[2].foodImageUrl}
            /> */}
            {/* <div className="m-[8px]">
                <RecipeTitle title={todayRanking.result[2].recipeTitle} />
            </div> */}
        </>
    )
}

export default RecipeWrapper
