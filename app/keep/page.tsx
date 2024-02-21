'use client'

import { useSession } from '@clerk/nextjs'

export default function Home() {
    const { isLoaded, session, isSignedIn } = useSession()

    console.log(session)

    if (!isLoaded) {
        // handle loading state
        return null
    }
    if (!isSignedIn) {
        // handle not signed in state
        return null
    }

    return (
        <div>
            <p>
                This session has been active since{' '}
                {session.lastActiveAt.toLocaleString()}
            </p>
        </div>
    )
}
