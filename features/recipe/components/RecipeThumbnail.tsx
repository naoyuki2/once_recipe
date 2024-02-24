import Image from 'next/image'

const RecipeThumbnail = ({ foodImageUrl }: { foodImageUrl: string }) => {
    return (
        <div className="shrink-0 rounded-[20px] w-full md:w-[50%] xl:h-[200px]">
            <Image
                src={foodImageUrl}
                alt="food image"
                width={300}
                height={200}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                priority
                className="border-[8px] border-neutral-300 rounded-[12px]"
            />
        </div>
    )
}

export default RecipeThumbnail
