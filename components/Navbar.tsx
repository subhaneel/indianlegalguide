'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Scale, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")

  // 🔄 Update state when route changes
  useEffect(() => {
    const r = localStorage.getItem("role")
    const e = localStorage.getItem("email")

    setRole(r || "")
    setEmail(e || "")
  }, [pathname])

  // 🚪 LOGOUT FUNCTION (FIXED)
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear()

    // Clear cookies (IMPORTANT for middleware)
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "subscribed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"

    // Update UI instantly
    setRole("")
    setEmail("")

    router.push("/")
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/documents', label: 'Documents' },
    { href: '/ask-ai', label: 'Ask AI' },
    { href: '/lawyers', label: 'Find Lawyer' },
    { href: '/emergency', label: 'Emergency' },
    { href: '/police-guidance', label: 'Police Guidance' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Indian Legal Guide
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-3">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* 🔐 AUTH UI */}
            {!role ? (
              <>
                <Link href="/login">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Login
                  </button>
                </Link>

                <Link href="/signup">
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <>
                {/* 👤 EMAIL DISPLAY */}
                <span className="text-sm font-medium text-gray-700">
                  👤 {email.split("@")[0]}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-4">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700"
              >
                {item.label}
              </Link>
            ))}

            {!role ? (
              <>
                <Link href="/login">
                  <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded">
                    Login
                  </button>
                </Link>

                <Link href="/signup">
                  <button className="w-full mt-2 border border-blue-600 text-blue-600 py-2 rounded">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="px-4 py-2 text-gray-700">
                  👤 {email}
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-red-500 text-white py-2 rounded"
                >
                  Logout
                </button>
              </>
            )}

          </div>
        )}

      </div>
    </nav>
  )
}