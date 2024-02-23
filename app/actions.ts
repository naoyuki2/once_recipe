'use server'

import { postBookmark } from '@/services/bookmark/postBookmark'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function navigateBookmark(recipeId: number, userId: string) {
    const res = await postBookmark({ recipeId, userId })
    if (res) {
        revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}
