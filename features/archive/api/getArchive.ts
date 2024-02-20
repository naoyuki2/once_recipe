export const getArchive = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive`)
        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}
