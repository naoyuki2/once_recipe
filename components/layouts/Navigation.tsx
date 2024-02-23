import { getUser } from '@/lib/next-auth/getUser'
import {
    BookmarkIcon,
    BookmarkSlashIcon,
    HomeIcon,
    ArrowRightEndOnRectangleIcon,
    ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'

export const Navigation = async () => {
    const user = await getUser()
    return (
        <nav className="fixed inset-x-0 bottom-0 bg-[#eaeced] text-[#40484c] h-[60px]">
            <div className="flex items-center justify-between p-2">
                <Link href="/" className="text-center">
                    <HomeIcon className="h-[30px] w-[80px]" />
                    <p>ホーム</p>
                </Link>
                {user !== 'guest' ? (
                    <Link href="/bookmark" className="text-center">
                        <BookmarkIcon className="h-[30px] w-[80px]" />
                        <p>保存</p>
                    </Link>
                ) : (
                    <div className="text-center">
                        <BookmarkSlashIcon className="h-[30px] w-[80px]" />
                        <p>保存</p>
                    </div>
                )}
                {user !== 'guest' ? (
                    <Link
                        href="/api/auth/signout"
                        prefetch={false}
                        className="text-center"
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
            </div>
        </nav>
    )
}
