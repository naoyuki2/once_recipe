import prisma from '@/lib/prisma/prisma'
import { Recipe } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    console.log('POST /recipe')
    const body = await request.json()
    const {
        foodImageUrl,
        recipeTitle,
        recipeDescription,
        recipeIndication,
        recipeCost,
        recipeMaterial,
        recipeUrl,
    } = body
    try {
        const postRecipe: Recipe = await prisma.recipe.create({
            data: {
                foodImageUrl: foodImageUrl,
                recipeTitle: recipeTitle,
                recipeDescription: recipeDescription,
                recipeIndication: recipeIndication,
                recipeCost: recipeCost,
                recipeMaterial: recipeMaterial,
                recipeUrl: recipeUrl,
            },
        })

        return NextResponse.json(postRecipe)
    } catch (error) {
        return NextResponse.json('postArchive:' + error)
    }
}
