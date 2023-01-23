import { Space_Grotesk as FontSans } from '@next/font/google'

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" className={`min-h-screen ${fontSans.variable}`}>
      <head />
      <body className='min-h-screen'>{children}</body>
    </html>
  )
}

export default RootLayout
