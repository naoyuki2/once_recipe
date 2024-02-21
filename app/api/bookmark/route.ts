import prisma from '@/lib/prisma/prisma'
import { Bookmark } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    console.log('BookMark')
    try {
        const postBookmark: Bookmark = await prisma.bookmark.create({
            data: {
                RecipeId: body.recipeId,
                UserId: body.userId,
            },
        })
        return NextResponse.json(postBookmark)
    } catch (error) {
        return NextResponse.json(error)
    }
}
