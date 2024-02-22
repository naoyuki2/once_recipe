import Image from 'next/image'

const BookmarkThumbnail = ({ foodImageUrl }: { foodImageUrl: string }) => {
    return (
        <div className="rounded-[12px] bg-neutral-300 w-full h-[156px] relative">
            <Image
                src={foodImageUrl}
                alt="food image"
                fill
                priority
                className="border-[4px] border-neutral-300 rounded-[8px]"
            />
        </div>
    )
}

export default BookmarkThumbnail
