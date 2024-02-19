export const getTests = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`)
    if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`)
    }
    const tests = await res.json()
    return tests
}
