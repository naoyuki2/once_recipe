const RecipeTitle = ({ recipeIndication }: { recipeIndication: string }) => {
    return (
        <div className="my-[24px] text-[24px] text-gray-700">
            調理時間：
            {recipeIndication}
        </div>
    )
}

export default RecipeTitle
