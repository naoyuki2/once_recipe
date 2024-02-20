const RecipeTitle = ({ recipeCost }: { recipeCost: string }) => {
    return (
        <div className="my-[24px] text-[16px] text-gray-700 md:text-[20px]">
            費用目安：{recipeCost}
            <hr />
        </div>
    )
}

export default RecipeTitle
