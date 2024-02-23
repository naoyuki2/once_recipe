import prisma from '@/lib/prisma/prisma'
import { endOfDay, startOfDay } from '@/utils/date/calcDate'

export async function getArchive(): Promise<number> {
    console.log('getArchive')
    await new Promise((resolve) => setTimeout(resolve, 3000))

    console.log('Data fetch completed after 3 seconds.')
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
