import Image from 'next/image'

type Props = {
    foodImageUrl: string
}

const RecipeThumbnail = ({ foodImageUrl }: Props) => {
    return (
        <div className="rounded-[20px] bg-neutral-300 w-full relative h-[300px]">
            <Image
                src={foodImageUrl}
                alt="food image"
                fill
                priority
                className="border-[8px] border-neutral-300 rounded-[12px]"
            />
        </div>
    )
}

export default RecipeThumbnail
