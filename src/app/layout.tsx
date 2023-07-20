import { PrismicPreview } from '@prismicio/next'
import './globals.css'

import { repositoryName } from '../../prismicio'





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <main className="flex flex-col min-h-screen mt-80 md:mt-120 w-full max-w-screen-xxl mx-auto">
          {children}
        </main>
        </body>
        <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
