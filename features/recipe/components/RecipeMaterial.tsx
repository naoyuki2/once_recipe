const recipeMaterial = ({ recipeMaterial }: { recipeMaterial: string[] }) => {
    return (
        <div className="my-[24px] text-[16px] md:text-[20px] text-gray-700">
            <p className="font-bold mb-[8px]">材料</p>
            {recipeMaterial.map((material) => (
                <div key={material}>
                    <p>・{material}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default recipeMaterial
