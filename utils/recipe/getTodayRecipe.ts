import { fetchRakutenRecipe } from '@/utils/rakuten/getRakutenRecipe'
import { getArchive } from '@/features/archive/api/getArchive'
import { getRecipeById } from '@/features/recipe/api/getRecipeById'
import { postRecipe } from '@/features/recipe/api/postRecipe'
import { postArchive } from '@/features/archive/api/postArchive'
import { Recipe } from '@prisma/client'

export const getTodayRecipe = async (): Promise<Recipe> => {
    const archive = await getArchive()
    const todayRecipe = await getRecipeById({ recipeId: archive.RecipeId })
    if (todayRecipe === null) {
        const newTodayRecipe = await fetchRakutenRecipe()
        const recipeId = await postRecipe(newTodayRecipe)
        await postArchive(recipeId)
        return newTodayRecipe
    } else {
        return todayRecipe[0]
    }
}
