import Link from 'next/link'
import { BookOpen, MessageCircle, Phone, Shield, FileText, Scale, Users, ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section with Indian Flag */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-green-600 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-7xl">🇮🇳</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Indian Legal Guide
              </span>
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4 font-medium">
              Your Trusted Companion for Legal Knowledge & Protection
            </p>
            <p className="text-lg text-orange-600 font-semibold mb-8">
              🇮🇳 Empowering Every Indian Citizen with Legal Rights & Knowledge 🇮🇳
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/ask-ai"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all shadow-xl font-semibold text-lg flex items-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Ask AI Legal Advisor</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/lawyers"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all shadow-xl font-semibold text-lg flex items-center space-x-2 transform hover:scale-105"
              >
                <Users className="w-6 h-6" />
                <span>Find a Lawyer</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Legal Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal resources at your fingertips
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/documents" className="group">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Legal Documents
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Access The Indian Constitution, Indian Law for Common Man, 
                and comprehensive legal system information
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Documents</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/ask-ai" className="group">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Ask AI Legal Advisor
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Get instant answers to your legal questions and guidance 
                for any legal situation you may encounter
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Chat with AI</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/lawyers" className="group">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Find a Lawyer
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect with qualified lawyers in your area. 
                Location-based search to find legal experts near you
              </p>
              <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Find Lawyers</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/emergency" className="group">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-100">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                Emergency Contacts
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Quick access to police, women's safety helplines, and 
                emergency services with direct calling
              </p>
              <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Emergency Help</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/police-guidance" className="group">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Police Visit Guidance
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Know your rights when police visit, understand relevant 
                laws and sections, and protect yourself legally
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Know Your Rights</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl shadow-xl p-12 mb-12 border-2 border-blue-200">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Why Choose Indian Legal Guide?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free Access</h3>
              <p className="text-gray-600">
                All legal documents, AI advisor, and resources are completely free for all citizens
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted & Reliable</h3>
              <p className="text-gray-600">
                Accurate legal information based on Indian Constitution and laws
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Available</h3>
              <p className="text-gray-600">
                Access legal guidance anytime, anywhere. Emergency contacts always available
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

