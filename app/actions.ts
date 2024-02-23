'use server'

import { deleteBookmark } from '@/services/bookmark/deleteBookmark'
import { postBookmark } from '@/services/bookmark/postBookmark'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function actionPostBookmark(recipeId: number, userId: string) {
    console.log('recipeId:', recipeId, 'userId:', userId)
    const res = await postBookmark({ recipeId, userId })
    if (res) {
        revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}

export async function actionDeleteBookmark(recipeId: number, userId: string) {
    console.log('recipeId:', recipeId, 'userId:', userId)
    const res = await deleteBookmark({ recipeId, userId })
    if (res) {
        revalidatePath('/bookmark')
        redirect('/bookmark')
    } else {
        alert('エラーが発生しました')
    }
}
