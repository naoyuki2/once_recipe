import { getArchive } from '@/services/archive/getArchive'
import { fetchRakutenRecipe } from '@/services/rakuten/getRakutenRecipe'
import { postRecipe } from '@/services/recipe/postRecipe'
import { postArchive } from '@/services/archive/postArchive'
import { getRecipeById } from '@/services/recipe/getRecipeById'
import { NextResponse } from 'next/server'

export async function GET() {
    console.log('GET /archive')
    const archiveRecipeId = await getArchive()
    const todayRecipe = await getRecipeById({ recipeId: archiveRecipeId })
    if (todayRecipe === null) {
        const newTodayRecipe = await fetchRakutenRecipe()
        const recipeId = await postRecipe(newTodayRecipe)
        await postArchive(recipeId)
        return NextResponse.json(newTodayRecipe)
    } else {
        return NextResponse.json(todayRecipe)
    }
}
