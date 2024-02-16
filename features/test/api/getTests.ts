export const getTests = async () => {
    const res = await fetch('http://localhost:3000/api/test')
    const tests = await res.json()
    return tests
}
