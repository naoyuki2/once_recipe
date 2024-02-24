import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { NextAuthProvider } from '@/lib/next-auth/provider'
import { Navigation } from '@/components/layouts/Navigation'
import { Metadata } from 'next'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
    title: {
        template: '%s | 今日の一皿',
        default: '今日の一皿',
    },
    description:
        '「今日の一皿」は、一日に一度更新されるレシピを提供するサービスです。たくさんのレシピとの出会いを提供します。',
    applicationName: '今日の一皿',
    keywords: ['今日の一皿', 'レシピ', '料理', '食材', '一皿', '献立'],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body
                className={`${notoSansJP.className} flex flex-col min-h-screen`}
            >
                <NextAuthProvider>
                    <Header />
                    <div className="flex-grow m-[16px] md:px-[200px]">
                        {children}
                    </div>
                    <Navigation />
                    <Footer />
                </NextAuthProvider>
            </body>
        </html>
    )
}
