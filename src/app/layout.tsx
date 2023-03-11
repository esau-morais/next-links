import { Space_Grotesk as FontSans } from 'next/font/google'

import { title, description, url, ogImage } from '@/utils/metadata'

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 630,
      },
    ],
  },
  twitter: {
    title,
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 630,
      },
    ],
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`min-h-screen ${fontSans.variable}`}>
      <head />
      <body className="no-repeat relative min-h-screen w-full bg-[#161616] bg-[url(/bg.svg)] bg-cover bg-fixed text-white">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
