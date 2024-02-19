export const fetchAllCategory = async () => {
    try {
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}`,
        )
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}

export const fetchRankingTop4ByCategoryId = async (categoryId: number) => {
    try {
        // const res = await fetch(
        //     `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}
        //     &categoryId=${categoryId}
        //     `,
        // )
        const res = await fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${process.env.RAKUTEN_APP_ID}`,
        )
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch API')
    }
}
