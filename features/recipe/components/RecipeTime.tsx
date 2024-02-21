const recipeIndication = ({
    recipeIndication,
}: {
    recipeIndication: string
}) => {
    return (
        <div className="my-[24px] text-[16px] md:text-[20px] text-gray-700">
            調理時間：
            {recipeIndication}
        </div>
    )
}

export default recipeIndication
