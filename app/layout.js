
import '@styles/globals.css'



export const metadata = {
  title: 'Clean Eyes',
  description: 'Clean your eyes mahn, you deserve it',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
