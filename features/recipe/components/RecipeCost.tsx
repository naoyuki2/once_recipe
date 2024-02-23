const recipeCost = ({ recipeCost }: { recipeCost: string }) => {
    return (
        <div className="my-[24px] text-[16px] text-gray-700 md:text-[20px] border-b-[1px]">
            費用目安：{recipeCost}
        </div>
    )
}

export default recipeCost
