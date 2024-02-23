import Image from 'next/image'
import Link from 'next/link'
import { getUser } from '@/lib/next-auth/getUser'
import once_recipe_text from '@/public/once_recipe_text.png'

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
            </nav>
        </header>
    )
}

export default Header
