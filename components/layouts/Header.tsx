import Image from 'next/image'
import Link from 'next/link'
import { getUser } from '@/lib/next-auth/getUser'
import once_recipe_text from '@/public/once_recipe_text.png'
import {
    ArrowRightEndOnRectangleIcon,
    ArrowRightStartOnRectangleIcon,
    BookmarkIcon,
    BookmarkSlashIcon,
    HomeIcon,
} from '@heroicons/react/24/solid'

const Header = async () => {
    const user = await getUser()
    return (
        <header className="bg-[#eaeced] text-[#191c1d] h-[66px] p-2">
            <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        width={150}
                        height={100}
                        alt="once_recipe_text"
                        src={once_recipe_text}
                        className="cursor-pointer"
                    />
                </Link>
                <div className="md:flex md:gap-[40px]">
                    <Link href="/" className="hidden md:block text-center">
                        <HomeIcon className="h-[30px] w-[80px]" />
                        <p>ホーム</p>
                    </Link>
                    {user !== 'guest' ? (
                        <Link
                            href="/bookmark"
                            className="hidden md:block text-center"
                        >
                            <BookmarkIcon className="h-[30px] w-[80px]" />
                            <p>保存</p>
                        </Link>
                    ) : (
                        <div className="hidden md:block text-center">
                            <BookmarkSlashIcon className="h-[30px] w-[80px]" />
                            <p>保存</p>
                        </div>
                    )}
                    {user !== 'guest' ? (
                        <Link
                            href="/api/auth/signout"
                            prefetch={false}
                            className="hidden md:block text-center"
                        >
                            <ArrowRightStartOnRectangleIcon className="h-[30px] w-[80px]" />
                            <p>ログアウト</p>
                        </Link>
                    ) : (
                        <div className="text-center">
                            <Link href="/api/auth/signin" prefetch={false}>
                                <ArrowRightEndOnRectangleIcon className="h-[30px] w-[80px]" />
                                <p>ログイン</p>
                            </Link>
                        </div>
                    )}
                    {user !== 'guest' && user.image ? (
                        <div className="flex items-center">
                            <Image
                                width={50}
                                height={50}
                                alt="profile_icon"
                                src={user.image}
                                className="rounded-full"
                            />
                        </div>
                    ) : (
                        <div className="w-[50px] h-[50px]"></div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header
