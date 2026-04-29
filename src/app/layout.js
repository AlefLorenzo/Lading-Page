import './globals.css';

export const metadata = {
  title: 'Óticas Vida',
  description: 'Preços baixos em óculos de grau e de sol.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
