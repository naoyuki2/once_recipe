import { Archive } from '@prisma/client'

export const getArchive = async (): Promise<Archive> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`, {
            next: {
                revalidate: 3600,
            },
        })
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch getArchive API')
    }
}
