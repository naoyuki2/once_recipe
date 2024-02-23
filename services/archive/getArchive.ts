import prisma from '@/lib/prisma/prisma'
import { endOfDay, startOfDay } from '@/utils/date/calcDate'

export async function getArchive(): Promise<number> {
    console.log('getArchive')
    try {
        const result: { RecipeId: number } | null =
            await prisma.archive.findFirst({
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
        if (result === null) {
            return 0
        } else {
            return result.RecipeId
        }
    } catch (error) {
        throw new Error('getArchive:' + error)
    }
}
