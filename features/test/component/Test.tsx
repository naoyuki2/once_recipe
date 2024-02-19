import { Test } from '@prisma/client'
import { getTests } from '../api/getData'

export default async function Test() {
    const data: Test[] = await getTests()
    console.log(data) // データ全体を表示
    console.log(data[0].text)
    return (
        <>
            <div>{data[0].text}</div>
        </>
    )
}
