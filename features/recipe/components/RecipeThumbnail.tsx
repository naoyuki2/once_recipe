import Image from 'next/image'

const RecipeThumbnail = ({ foodImageUrl }: { foodImageUrl: string }) => {
    return (
        <div className="rounded-[20px]">
            <Image
                src={foodImageUrl}
                alt="food image"
                width={300}
                height={200}
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
