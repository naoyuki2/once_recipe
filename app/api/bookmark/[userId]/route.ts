import prisma from '@/lib/prisma/prisma'
import { Bookmark } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(request: Request, params: { userId: string }) {
    console.log('GET /bookmark/:userId')
    const { userId } = params

    try {
        const getBookmarks: Bookmark[] | null = await prisma.bookmark.findMany({
            where: {
                UserId: userId,
            },
        })
        return NextResponse.json(getBookmarks)
    } catch (error) {
        return NextResponse.json(
            'Failed to getBookmarks: ' + userId + ' ' + error,
        )
    }
}
