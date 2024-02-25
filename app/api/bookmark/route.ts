import prisma from '@/lib/prisma/prisma'
import { Prisma } from '@prisma/client'
import { Bookmark } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    console.log('POST /bookmark')
    const body = await request.json()
    const { recipeId, userId } = body
    console.log('POST /bookmark', recipeId, userId)
    try {
        const postBookmark: Bookmark = await prisma.bookmark.create({
            data: {
                RecipeId: Number(recipeId),
                UserId: userId,
            },
        })
        return NextResponse.json(postBookmark)
    } catch (error) {
        return NextResponse.json('postBookmark:' + error)
    }
}

export async function DELETE(request: Request): Promise<NextResponse> {
    console.log('DELETE /bookmark')
    const body = await request.json()
    const { recipeId, userId } = body
    console.log('DELETE /bookmark', recipeId, userId)
    try {
        const deleteBookmark: Prisma.BatchPayload =
            await prisma.bookmark.deleteMany({
                where: {
                    RecipeId: Number(recipeId),
                    UserId: userId,
                },
            })
        return NextResponse.json(deleteBookmark)
    } catch (error) {
        return NextResponse.json('deleteBookmark:' + error)
    }
}
