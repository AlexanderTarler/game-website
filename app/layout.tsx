import './globals.css'
import Navbar from './Navbar'
import { GlobalContextProvider } from './Context/store'

export const metadata = {
  title: 'Code With Alex',
  description: 'A portfolio website by Alexander Tarler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='global'>
        <Navbar />
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
