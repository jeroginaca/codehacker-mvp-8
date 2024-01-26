import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CodeHacker Academy',
  description: 'Full Stack Developer Bootcamp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-primary'>{children}</body>
    </html>
  )
}