import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HYPIQ - Join the Waitlist',
  description: 'Join the waitlist for early access to HYPIQ prediction markets. predict/earn.',
  icons: {
    icon: '/HYPIQ-logo-white-vector.svg',
    apple: '/HYPIQ-logo-white-vector.svg',
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
        <link rel="icon" href="/HYPIQ-logo-white-vector.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/HYPIQ-logo-white-vector.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
