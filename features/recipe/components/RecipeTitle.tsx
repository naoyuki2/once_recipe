type Props = {
    title: String
}

const RecipeTitle = ({ title }: Props) => {
    return <div className="text-[24px] font-bold text-gray-700">{title}</div>
}

export default RecipeTitle
