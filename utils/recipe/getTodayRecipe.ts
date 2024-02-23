import { getArchive } from '@/services/archive/getArchive'
import { fetchRakutenRecipe } from '@/services/rakuten/getRakutenRecipe'
import { postRecipe } from '@/services/recipe/postRecipe'
import { postArchive } from '@/services/archive/postArchive'
import { getRecipeById } from '@/services/recipe/getRecipeById'

export const getTodayRecipe = async () => {
    const archiveRecipeId = await getArchive()
    console.log('archive見に行ってきた')

    const todayRecipe = await getRecipeById({ recipeId: archiveRecipeId })
    console.log('archiveを元にrecipe見に行ってきた')

    if (typeof todayRecipe === 'number') {
        console.log('recipeがないので新しいrecipeを取得します')
        const newTodayRecipe = await fetchRakutenRecipe()
        const recipeId = await postRecipe(newTodayRecipe)
        if (recipeId !== 0) {
            await postArchive(recipeId)
            console.log('postしました')
            return newTodayRecipe
        }
    } else {
        return todayRecipe
    }
}
