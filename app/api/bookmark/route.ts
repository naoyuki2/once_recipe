import prisma from '@/lib/prisma/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    // bookmarkRecipiテーブルにレシピを保存
    try {
        // const archive_today_recipe: archive_recipe =
        //     await prisma.archive_recipe.create({
        //         data: {
        //             foodImageUrl: body.foodImageUrl,
        //             recipeTitle: body.recipeTitle,
        //             recipeDescription: body.recipeDescription,
        //             recipeIndication: body.recipeIndication,
        //             recipeCost: body.recipeCost,
        //             recipeMaterial: body.recipeMaterial,
        //             recipeUrl: body.recipeUrl,
        //         },
        //     })
        console.log('bookmark')
        return NextResponse.json({ message: 'bookmark' })
    } catch (error) {
        return NextResponse.json(error)
    }
}
