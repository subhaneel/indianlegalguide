import Link from 'next/link'
import { Scale } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="w-6 h-6" />
              <span className="text-lg font-bold">Indian Legal Guide</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Indian citizens with legal knowledge and guidance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/documents" className="hover:text-white transition-colors">
                  Legal Documents
                </Link>
              </li>
              <li>
                <Link href="/ask-ai" className="hover:text-white transition-colors">
                  Ask AI
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="hover:text-white transition-colors">
                  Emergency Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/documents/constitution" className="hover:text-white transition-colors">
                  Constitution
                </Link>
              </li>
              <li>
                <Link href="/documents/laws" className="hover:text-white transition-colors">
                  Indian Laws
                </Link>
              </li>
              <li>
                <Link href="/police-guidance" className="hover:text-white transition-colors">
                  Police Guidance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Important</h3>
            <p className="text-sm text-gray-400 mb-2">
              This app provides general legal information and should not be considered as legal advice. 
              For specific legal matters, please consult a qualified lawyer.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              © 2024 Indian Legal Guide. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

