import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { recipeId: string } },
) {
    console.log('GET /recipe/:recipeId')
    const recipeIds = params.recipeId.split(',').map(Number)
    try {
        const recipes: Recipe[] | null = await prisma.recipe.findMany({
            where: {
                Id: {
                    in: recipeIds,
                },
            },
        })
        return NextResponse.json(recipes)
    } catch (error) {
        return NextResponse.json(
            'Failed to fetch recipes by recipeIds: ' + recipeIds + ' ' + error,
        )
    }
}
