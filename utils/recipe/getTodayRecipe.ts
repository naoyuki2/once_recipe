import { getArchive } from '@/services/archive/getArchive'
import { fetchRakutenRecipe } from '@/services/rakuten/getRakutenRecipe'
import { postRecipe } from '@/services/recipe/postRecipe'
import { postArchive } from '@/services/archive/postArchive'
import { getRecipeById } from '@/services/recipe/getRecipeById'
import { Recipe } from '@prisma/client'
import { RecipeNonJsonType } from '@/types/type'

export const getTodayRecipe = async (): Promise<Recipe> => {
    const archiveRecipeId = await getArchive()
    console.log('archive見に行ってきた')

    const todayRecipe = await getRecipeById({ recipeId: archiveRecipeId })
    console.log('archiveを元にrecipe見に行ってきた')

    if (todayRecipe === null) {
        console.log('recipeがないので新しいrecipeを取得します')
        const newTodayRecipe = await fetchRakutenRecipe()
        const recipeId = await postRecipe(newTodayRecipe)
        await postArchive(recipeId)
        console.log('postしました')
        return newTodayRecipe
    } else {
        return todayRecipe
    }
}
