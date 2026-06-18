import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Aspire REIT',
  description: 'Quality homes for Ghanaians. Real returns for investors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
