import { getUserId } from '@/utils/getUser'

export const getBookmark = async () => {
    const userId = await getUserId()
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bookmark/${userId}`,
        )
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch Archive API')
    }
}
