import { PrismicPreview } from '@prismicio/next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

import { repositoryName } from '../../prismicio'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} `}>
      <body className="">
        <Header />
        <main className="flex flex-col mt-[90px] xs:mt-[100px]  min-h-[calc(100vh-90px)] xs:min-h-[calc(100vh-100px)]   md:min-h-[calc(100vh-120px)] md:mt-120 w-full max-w-screen-xxl mx-auto">
          {children}
        </main>

        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
