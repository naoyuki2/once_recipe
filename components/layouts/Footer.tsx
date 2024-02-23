import Image from 'next/image'
import x_icon from '@/public/x_icon.svg'
import qiita_icon from '@/public/qiita_icon.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="p-5 h-full bg-[#e1e3e4] text-[#40484c] flex flex-col items-center justify-center gap-[24px] mb-[60px]">
            <p className="font-bold text-[16px] md:text-[20px] hover:underline">
                {/* Rakuten Web Services Attribution Snippet FROM HERE */}

                <a href="https://developers.rakuten.com/" target="_blank">
                    Supported by Rakuten Developers
                </a>
                {/* Rakuten Web Services Attribution Snippet TO HERE */}
            </p>
            <p className=" font-bold text-[16px] md:text-[20px]">
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
