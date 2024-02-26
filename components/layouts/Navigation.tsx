import { BmSlashIcon } from '@/features/navigation/BmSlashIcon'
import { getUser } from '@/lib/next-auth/getUser'
import {
    BookmarkIcon,
    HomeIcon,
    ArrowRightEndOnRectangleIcon,
    ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'

export const Navigation = async () => {
    const user = await getUser()
    return (
        <nav className="fixed inset-x-0 bottom-0 bg-[#eaeced] text-[#40484c] h-[60px] md:hidden">
            <div className="flex items-center justify-between p-2">
                <Link
                    href="/"
                    className="text-center hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out"
                >
                    <HomeIcon className="h-[30px] w-[80px]" />
                    <p>ホーム</p>
                </Link>
                {user !== 'guest' ? (
                    <Link
                        href="/bookmark"
                        className="text-center hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out"
                    >
                        <BookmarkIcon className="h-[30px] w-[80px]" />
                        <p>保存</p>
                    </Link>
                ) : (
                    <div className="hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out">
                        <BmSlashIcon />
                    </div>
                )}
                {user !== 'guest' ? (
                    <Link
                        href="/api/auth/signout"
                        prefetch={false}
                        className="text-center hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out"
                    >
                        <ArrowRightStartOnRectangleIcon className="h-[30px] w-[80px]" />
                        <p>ログアウト</p>
                    </Link>
                ) : (
                    <div className="text-center hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out">
                        <Link href="/api/auth/signin" prefetch={false}>
                            <ArrowRightEndOnRectangleIcon className="h-[30px] w-[80px]" />
                            <p>ログイン</p>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
