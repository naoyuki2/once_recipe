'use server'

import { postBookmark } from '@/features/bookmark/api/postBookmark'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function navigateBookmark(recipeId: number, userId: string) {
    const res = await postBookmark({ recipeId, userId })
    if (res.ok) {
        revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}
