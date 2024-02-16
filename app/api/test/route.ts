import { Test } from '@prisma/client'
import prisma from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    // todoテーブルから全件取得
    try {
        const tests: Test[] = await prisma.test.findMany()
        return NextResponse.json(tests)
    } catch (error) {
        return NextResponse.json(error)
    }
}
