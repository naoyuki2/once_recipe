import prisma from '@/lib/prisma/prisma'
import { endOfDay, startOfDay } from '@/utils/date/calcDate'
import { Archive } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
    console.log('GET /archive')
    try {
        const archive: Archive | null = await prisma.archive.findFirst({
            where: {
                CreatedAt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        })
        if (archive === null) {
            return NextResponse.json({ RecipeId: 0 })
        } else {
            return NextResponse.json({ RecipeId: archive.RecipeId })
        }
    } catch (error) {
        return NextResponse.json('getArchive:' + error)
    }
}

export async function POST(request: Request) {
    console.log('POST /archive')
    const body = await request.json()
    const { recipeId } = body

    try {
        const postArchive: Archive = await prisma.archive.create({
            data: {
                RecipeId: recipeId,
            },
        })

        return NextResponse.json(postArchive)
    } catch (error) {
        return NextResponse.json('postArchive:' + error)
    }
}
