
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clean Eyes',
  description: 'Clean your eyes mahn, you deserve it',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
