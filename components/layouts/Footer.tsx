import Image from 'next/image'
import x_icon from '@/public/x_icon.svg'
import qiita_icon from '@/public/qiita_icon.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="p-5 h-full bg-stone-500 flex flex-col items-center justify-center gap-[24px]">
            <p className="text-gray-100 font-bold text-[16px]">
                This site uses Rakuten API
            </p>
            <p className="text-gray-100 font-bold text-[16px]">
                Created by naoyuki
            </p>
            <div className="flex gap-[32px]">
                <Link href="https://twitter.com/hols2036">
                    <Image
                        src={x_icon}
                        alt="x_icon"
                        width={40}
                        height={40}
                        className=""
                    />
                </Link>
                <Link href="https://qiita.com/naoyuki2">
                    <Image
                        src={qiita_icon}
                        alt="qiita_icon"
                        width={40}
                        height={40}
                        className=""
                    />
                </Link>
            </div>
        </div>
    )
}

export default Footer
