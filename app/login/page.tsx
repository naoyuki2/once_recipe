'use client'

import { getProviders, signIn } from 'next-auth/react'

export default async function Login() {
    const providers = await getProviders().then((res) => {
        return res
    })
    return (
        <>
            <div>Googleログイン</div>
            {providers &&
                Object.values(providers).map((provider) => {
                    return (
                        <button
                            key={provider.id}
                            className="bg-gray-900 text-white p-5"
                            onClick={() =>
                                signIn(provider.id, { callbackUrl: '/' })
                            }
                        >
                            ログイン
                        </button>
                    )
                })}
        </>
    )
}
