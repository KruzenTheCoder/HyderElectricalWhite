import type { Metadata } from 'next'
import { Work_Sans, Cinzel } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CADBackground from '@/components/CADBackground'
import Loader from '@/components/Loader'
import CursorHalo from '@/components/CursorHalo'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans'
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel'
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
      <body className={`${workSans.variable} ${cinzel.variable}`}>
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