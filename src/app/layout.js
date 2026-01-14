import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LexBridge Global - Bridging Trust in Law & Technology',
  description: 'Secure legal consultancy, escrow services, and technology solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageSelector />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
