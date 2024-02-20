const RecipeTitle = ({ recipeMaterial }: { recipeMaterial: string[] }) => {
    return (
        <div className="my-[24px] text-[24px] text-gray-700">
            <p className="font-bold mb-[8px]">材料</p>
            {recipeMaterial.map((material) => (
                <>
                    <p key={material}>・{material}</p>
                    <hr />
                </>
            ))}
        </div>
    )
}

export default RecipeTitle
