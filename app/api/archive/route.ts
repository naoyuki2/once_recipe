import { Archive, Recipe } from '@prisma/client'
import prisma from '@/lib/prisma/prisma'
import { NextResponse } from 'next/server'
import { endOfDay, startOfDay } from '@/utils/calcDate'

export async function GET() {
    try {
        const [archive_today_recipe]: { RecipeId: number }[] =
            await prisma.archive.findMany({
                select: {
                    RecipeId: true,
                },
                where: {
                    CreatedAt: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                },
            })
        const todayRecipe: Recipe | null = await prisma.recipe.findUnique({
            where: {
                Id: archive_today_recipe.RecipeId,
            },
        })
        return NextResponse.json(todayRecipe)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(request: Request) {
    const body = await request.json()
    try {
        const postRecipeId: { Id: number } = await prisma.recipe.create({
            select: {
                Id: true,
            },
            data: {
                foodImageUrl: body.foodImageUrl,
                recipeTitle: body.recipeTitle,
                recipeDescription: body.recipeDescription,
                recipeIndication: body.recipeIndication,
                recipeCost: body.recipeCost,
                recipeMaterial: body.recipeMaterial,
                recipeUrl: body.recipeUrl,
            },
        })

        const postArchive: Archive = await prisma.archive.create({
            data: {
                RecipeId: postRecipeId.Id,
            },
        })

        return NextResponse.json(postArchive)
    } catch (error) {
        return NextResponse.json(error)
    }
}
