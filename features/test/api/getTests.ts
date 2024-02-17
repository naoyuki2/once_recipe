export const getTests = async () => {
    const res = await fetch(`${process.env.API_URL}/test`)
    const tests = await res.json()
    return tests
}
