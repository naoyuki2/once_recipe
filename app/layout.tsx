import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { NextAuthProvider } from '@/lib/next-auth/provider'
import { Navigation } from '@/components/layouts/Navigation'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] })

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
                    <div className="m-[16px] md:px-[200px]">{children}</div>
                    <Navigation />
                    <Footer />
                </NextAuthProvider>
            </body>
        </html>
    )
}
