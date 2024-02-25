import prisma from '@/lib/prisma/prisma'
import { Bookmark } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { userId: string; recipeId: string } },
) {
    console.log('GET /bookmark/:userId/:recipeId')
    const { userId, recipeId } = params
    try {
        const getBookmark: Bookmark | null = await prisma.bookmark.findFirst({
            where: {
                UserId: userId,
                RecipeId: Number(recipeId),
            },
        })
        return NextResponse.json(getBookmark)
    } catch (error) {
        return NextResponse.json(
            'Failed to getBookmark: u' + userId + ' r' + recipeId + ' ' + error,
        )
    }
}
