import Image from 'next/image'

const RecipeThumbnail = ({ foodImageUrl }: { foodImageUrl: string }) => {
    return (
        <div className="shrink-0 rounded-[20px] bg-neutral-300 w-full md:w-[50%] xl:h-[200px]">
            <Image
                src={foodImageUrl}
                alt="food image"
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
                priority
                className="border-[8px] border-neutral-300 rounded-[12px]"
            />
        </div>
    )
}

export default RecipeThumbnail
