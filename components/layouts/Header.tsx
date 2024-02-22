import Image from 'next/image'
import Link from 'next/link'
import default_icon from '@/public/default_icon.png'
import { getUser } from '@/utils/getUser'

const Header = async () => {
    const user = await getUser()
    return (
        <header className="bg-gradient-to-r from-orange-500 to-amber-500">
            <nav className="flex items-center justify-between p-2">
                <div>ロゴ</div>
                <div className="flex items-center gap-1">
                    <Link
                        //next-authで用意されている
                        href={
                            user !== 'guest' ? '/bookmark' : '/api/auth/signin'
                        }
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        {user !== 'guest' ? 'ブックマーク' : 'ログイン'}
                    </Link>
                    {user !== 'guest' ? (
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
                            src={
                                user === 'guest' || !user?.image
                                    ? default_icon
                                    : user.image
                            }
                            className="rounded-full"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
