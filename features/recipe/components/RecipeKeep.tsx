'use client'

import { archive_recipe } from '@prisma/client'
import Link from 'next/link'

const RecipeDetailButton = ({
    todayRecipe,
}: {
    todayRecipe: archive_recipe
}) => {
    return (
        <div className="flex justify-end">
            <Link
                href="/login"
                className="bg-yellow-500 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center"
            >
                レシピを保存
            </Link>
        </div>
    )
}

export default RecipeDetailButton
