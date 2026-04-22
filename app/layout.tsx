import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from "next/script"   // ✅ ADD THIS

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indian Legal Guide - Your Legal Companion',
  description:
    'AI-powered legal guidance app for Indian citizens with access to Constitution, laws, emergency contacts, and legal advice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* ✅ ADD RAZORPAY SCRIPT HERE */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}