import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { userId: string } },
) {
    console.log('api/bookmark/[userId]')
    const userId = params.userId
    try {
        const bookmarks = await prisma.bookmark.findMany({
            select: {
                RecipeId: true,
            },
            where: {
                UserId: userId,
            },
        })
        const bookmarkIds: number[] = bookmarks.map(
            (bookmark) => bookmark.RecipeId,
        )

        const bookmarkRecipes: Recipe[] | null = await prisma.recipe.findMany({
            where: {
                Id: {
                    in: bookmarkIds,
                },
            },
        })
        return NextResponse.json(bookmarkRecipes)
    } catch (error) {
        return NextResponse.json(error)
    }
}
