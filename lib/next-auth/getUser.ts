import { nextAuthOptions } from '@/lib/next-auth/options'
import { UserType } from '@/types/type'
import { getServerSession } from 'next-auth'

export const getUser = async () => {
    const session = await getServerSession(nextAuthOptions)
    const user = session?.user as UserType
    if (user) {
        return user
    } else {
        return 'guest'
    }
}

export const getUserId = async () => {
    const user = await getUser()
    if (user !== 'guest') {
        return user.id
    } else {
        return 'guest'
    }
}
