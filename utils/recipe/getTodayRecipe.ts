import { fetchRakutenRecipe } from '@/utils/rakuten/getRakutenRecipe'
import { getArchive } from '@/features/archive/api/getArchive'
import { getRecipeById } from '@/features/recipe/api/getRecipeById'
import { postRecipe } from '@/features/recipe/api/postRecipe'
import { postArchive } from '@/features/archive/api/postArchive'
import { Recipe } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const getTodayRecipe = async (): Promise<Recipe> => {
    const archive = await getArchive()
    console.log(archive)
    if (archive.RecipeId === 0) {
        console.log('archiveはなかった')
        const newTodayRecipe = await fetchRakutenRecipe()
        const recipeId = await postRecipe({ recipe: newTodayRecipe })
        await postArchive(recipeId.Id)
        revalidatePath('/', 'layout')
        return newTodayRecipe
    }
    const todayRecipe = await getRecipeById({ recipeId: archive.RecipeId })
    return todayRecipe[0]
}
