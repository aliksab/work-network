import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Viewport } from 'next'
import LayoutClient from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Work Network',
    description: 'Your Work Network',
    icons: '/crossplane-icon.svg'
}

export const viewport: Viewport = {
    themeColor: '#0E0b18',
    colorScheme: 'dark'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LayoutClient>{children}</LayoutClient>
            </body>
        </html>
    )
}
