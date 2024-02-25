import Image from 'next/image'

const BookmarkThumbnail = ({ foodImageUrl }: { foodImageUrl: string }) => {
    return (
        <div className="shrink-0 rounded-[12px] bg-neutral-300 w-[50%]">
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
                className="border-[4px] border-neutral-300 rounded-[8px]"
            />
        </div>
    )
}

export default BookmarkThumbnail
