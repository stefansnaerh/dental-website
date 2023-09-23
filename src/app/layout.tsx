import { Poppins } from 'next/font/google'
import { Merriweather } from 'next/font/google'
import './globals.css'

const merriWeather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  variable: '--font-poppins',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${merriWeather.variable} `}>
      <body className="flex flex-col justify-center">
        <Header />
        <main className="flex flex-col mt-[90px] xs:mt-[100px]  min-h-[calc(100vh-90px)] xs:min-h-[calc(100vh-100px)]   md:min-h-[calc(100vh-120px)] md:mt-120 w-full max-w-screen-xxl mx-auto">
          {children}
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  )
}
