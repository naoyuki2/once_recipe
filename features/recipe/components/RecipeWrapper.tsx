import { getTodayRanking } from '@/utils/recipe'
import RecipeThumbnail from './RecipeThumbnail'
import RecipeTitle from './RecipeTitle'

const RecipeWrapper = async () => {
    const todayRanking = await getTodayRanking()
    console.log(todayRanking)
    if (typeof todayRanking !== 'undefined') {
        return <div>loading...</div>
    }
    return (
        <>
            <RecipeThumbnail
                foodImageUrl={todayRanking!.result[0].foodImageUrl}
            />
            <div className="m-[8px]">
                <RecipeTitle title={todayRanking!.result[0].recipeTitle} />
            </div>
        </>
    )
}

export default RecipeWrapper
