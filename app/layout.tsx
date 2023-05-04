import '@/styles/globals.css'

import { Header } from '@/components'

import { jetbrainsMono, roboto } from '@/lib/fonts'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${jetbrainsMono.variable} font-sans`}>
      <body><Header/>{children}</body>
    </html>
  )
}
