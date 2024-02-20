const RecipeTitle = ({ recipeCost }: { recipeCost: string }) => {
    return (
        <div className="my-[24px] text-[24px] text-gray-700">
            費用目安：{recipeCost}
            <hr />
        </div>
    )
}

export default RecipeTitle
