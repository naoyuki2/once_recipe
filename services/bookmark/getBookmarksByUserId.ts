import prisma from '@/lib/prisma/prisma'

export async function getBookmarkRecipeIdsByUseId({
    userId,
}: {
    userId: string
}): Promise<number[]> {
    try {
        const bookmarks = await prisma.bookmark.findMany({
            select: {
                RecipeId: true,
            },
            where: {
                UserId: userId,
            },
        })
        const bookmarkIds: number[] = bookmarks.map(
            (bookmark) => bookmark.RecipeId,
        )

        return bookmarkIds
    } catch (error) {
        throw new Error('getBookmarkRecipeIdsByUseId:' + error)
    }
}
