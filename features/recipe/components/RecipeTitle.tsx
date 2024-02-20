const RecipeTitle = ({ recipeTitle }: { recipeTitle: string }) => {
    return (
        <div className="my-[24px] text-[16px] md:text-[20px] font-bold text-gray-700">
            {recipeTitle}
            <hr />
        </div>
    )
}

export default RecipeTitle
