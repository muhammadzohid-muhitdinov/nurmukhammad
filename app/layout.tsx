import type React from "react"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Owais Iqbal - Generative AI & Full-Stack Engineer",
  description:
    "I architect intelligent solutions in full-stack development and more than 2 years of experience in AI/ML Engineering.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
