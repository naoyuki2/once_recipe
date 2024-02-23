import { getArchive } from '@/services/archive/getArchive'
import { fetchRakutenRecipe } from '@/services/rakuten/getRakutenRecipe'
import { postRecipe } from '@/services/recipe/postRecipe'
import { postArchive } from '@/services/archive/postArchive'
import { getRecipeById } from '@/services/recipe/getRecipeById'
import { Recipe } from '@prisma/client'

export const getTodayRecipe = async (): Promise<Recipe> => {
    const archiveRecipeId = await getArchive()
    const todayRecipe = await getRecipeById({ recipeId: archiveRecipeId })
    if (todayRecipe === null) {
        const newTodayRecipe = await fetchRakutenRecipe()
        const recipeId = await postRecipe(newTodayRecipe)
        await postArchive(recipeId)
        return newTodayRecipe
    } else {
        return todayRecipe
    }
}
