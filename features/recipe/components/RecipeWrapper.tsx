import { getTodayRanking } from '@/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRanking = await getTodayRanking()
    return (
        <>
            <RecipeThumbnail foodImageUrl={todayRanking[0].foodImageUrl} />
            <div className="m-[8px]">
                <RecipeTitle title={todayRanking[0].recipeTitle} />
            </div>
        </>
    )
}

export default RecipeWrapper
