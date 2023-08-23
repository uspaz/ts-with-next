import Navbar from '@/components/Navbar/Navbar'
import { Roboto } from 'next/font/google'
import './globals.css'

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal','italic'],
  subsets: ['latin']

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
    </html>
  )
}

