import RecipeWrapper from '@/features/recipe/components/RecipeWrapper'
import RecipeHeader from '@/features/recipe/components/RecipeHeader'
import { getTodayRecipe } from '@/utils/recipe/getTodayRecipe'
import { convertRecipe } from '@/utils/recipe/convertRecipe'

export default async function Page() {
    const todayRecipe = await getTodayRecipe()
    const convertTodayRecipe = convertRecipe(todayRecipe)
    return (
        <>
            <RecipeHeader />
            <RecipeWrapper todayRecipe={convertTodayRecipe} />
        </>
    )
}
