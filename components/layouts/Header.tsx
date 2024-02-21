import { nextAuthOptions } from '@/lib/next-auth/options'
import { UserType } from '@/types/type'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import default_icon from '@/public/default_icon.png'

const Header = async () => {
    const session = await getServerSession(nextAuthOptions)
    const user = session?.user as UserType
    return (
        <header className="bg-gradient-to-r from-orange-500 to-amber-500">
            <nav className="flex items-center justify-between p-2">
                <div>ロゴ</div>
                <div className="flex items-center gap-1">
                    <Link
                        //next-authで用意されている
                        href={user ? '/profile' : '/api/auth/signin'}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        {user ? 'プロフィール' : 'ログイン'}
                    </Link>
                    {user ? (
                        <Link
                            //next-authで用意されている
                            href={'/api/auth/signout'}
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            ログアウト
                        </Link>
                    ) : (
                        ''
                    )}

                    <Link href={user ? '/profile' : '/api/auth/signin'}>
                        <Image
                            width={50}
                            height={50}
                            alt="profile_icon"
                            src={user?.image || default_icon}
                            className="rounded-full"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
