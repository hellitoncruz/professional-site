import { Outfit } from 'next/font/google';

const mainFontFamily = Outfit({
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: 'Tamires Aguiar Psi',
  description: 'Website profissional de Psicóloga',
}

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFontFamily.className}>{children}</body>
    </html>
  )
}
