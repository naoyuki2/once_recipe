const recipeDescription = ({
    recipeDescription,
}: {
    recipeDescription: string
}) => {
    return (
        <div className="my-[24px] text-[16px] md:text-[20px] text-gray-700">
            {recipeDescription}
            <hr />
        </div>
    )
}

export default recipeDescription
