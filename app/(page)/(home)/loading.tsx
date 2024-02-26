const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

const loading = () => {
    return (
        <div className="h-screen">
            <div
                className={`${shimmer} relative rounded-[20px] bg-gray-200 w-full h-[50%] border-[8px] border-neutral-300`}
            ></div>
        </div>
    )
}

export default loading
