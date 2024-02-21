'use server'

import { postRecipeKeep } from '@/features/recipe/api/postRecipeKeep'
import { archive_recipe } from '@prisma/client'
import { redirect } from 'next/navigation'

export async function navigateBookmark(todayRecipe: archive_recipe) {
    const res = await postRecipeKeep(todayRecipe)
    if (res.ok) {
        // revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}
