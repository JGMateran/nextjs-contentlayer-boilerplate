import '../styles/globals.css'
import type { AppProps } from 'next/app'

import clsx from 'clsx'

import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(inter.variable, 'font-inter')}>
      <Component {...pageProps} />
    </main>
  )
}
