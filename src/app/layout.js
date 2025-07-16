import { Inter } from "next/font/google"
import "./globals.css"
import CustomThemeProvider from "../components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ankit Patel - Frontend Developer",
  description:
    "Personal portfolio of Ankit Patel, Frontend Developer specializing in React, Next.js, and modern web technologies.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  )
}
