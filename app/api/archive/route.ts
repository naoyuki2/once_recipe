import { archive_recipe } from '@prisma/client'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const today = new Date()
        const startOfDay = new Date(
            Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()),
        )
        const endOfDay = new Date(
            Date.UTC(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                23,
                59,
                59,
                999,
            ),
        )
        console.log(startOfDay)
        console.log(endOfDay)
        const archive_today_recipe: archive_recipe[] =
            await prisma.archive_recipe.findMany({
                where: {
                    createdAt: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                },
            })
        return NextResponse.json(archive_today_recipe[0])
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(request: Request) {
    const body = await request.json()
    console.log(body)
    // archive_recipeテーブルに今日のレシピを保存
    try {
        const archive_today_recipe: archive_recipe =
            await prisma.archive_recipe.create({
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

        return NextResponse.json(archive_today_recipe)
    } catch (error) {
        return NextResponse.json(error)
    }
}
