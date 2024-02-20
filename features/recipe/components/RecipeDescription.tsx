const RecipeTitle = ({ recipeDescription }: { recipeDescription: string }) => {
    return (
        <div className="my-[24px] text-[24px] text-gray-700">
            {recipeDescription}
            <hr />
        </div>
    )
}

export default RecipeTitle
