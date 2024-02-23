import Link from 'next/link'

const RecipeDetailButton = ({ recipeUrl }: { recipeUrl: string }) => {
    return (
        <div className="flex justify-end">
            <Link
                href={recipeUrl}
                className="bg-green-700 px-[24px] py-[8px] text-gray-100 rounded-[12px] text-[16px] md:text-[20px] text-center"
            >
                詳しく見る
            </Link>
        </div>
    )
}

export default RecipeDetailButton
