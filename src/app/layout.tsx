import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CADBackground from '@/components/CADBackground'
import Loader from '@/components/Loader'
import CursorHalo from '@/components/CursorHalo'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Hyder Electrical | Electrical Contractor South Africa',
  description: 'A electrical contractor, specializing in high-end commercial, industrial, and infrastructure projects across South Africa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <Loader />
        <CursorHalo />
        <CADBackground />
        <Navigation />
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}