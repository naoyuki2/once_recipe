'use server'

import { deleteBookmark } from '@/features/bookmark/api/deleteBookmark'
import { postBookmark } from '@/features/bookmark/api/postBookmark'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function actionPostBookmark(recipeId: number, userId: string) {
    const res = await postBookmark({ recipeId, userId })
    if (res) {
        revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}

export async function actionDeleteBookmark(recipeId: number, userId: string) {
    const res = await deleteBookmark({ recipeId, userId })
    if (res) {
        revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}
