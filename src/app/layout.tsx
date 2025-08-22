import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HYPIQ - Join the Waitlist',
  description: 'Join the waitlist for early access to HYPIQ prediction markets. predict/earn.',
  icons: {
    icon: '/whale-tail.png',
    apple: '/whale-tail.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>HYPIQ - Join the Waitlist</title>
        <meta name="description" content="Join the waitlist for early access to HYPIQ prediction markets. predict/earn." />
        <link rel="icon" href="/whale-tail.png" type="image/png" />
        <link rel="apple-touch-icon" href="/whale-tail.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
