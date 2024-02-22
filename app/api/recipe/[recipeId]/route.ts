import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { recipeId: string } },
) {
    console.log('api/bookmark/[userId]')
    const { recipeId } = params
    try {
        const bookmarks: Recipe | null = await prisma.recipe.findUnique({
            where: {
                Id: parseInt(recipeId),
            },
        })
        return NextResponse.json(bookmarks)
    } catch (error) {
        return NextResponse.json(error)
    }
}
