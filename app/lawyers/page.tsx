'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Search, Briefcase, Clock } from 'lucide-react'
import { lawyers, legalAidOrganizations, locations } from '@/data/lawyers'

export default function LawyersPage() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesLocation = selectedLocation === 'All Locations' || lawyer.location === selectedLocation
    const matchesSearch = searchTerm === '' || 
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesLocation && matchesSearch
  })

  const locationCounts = locations.slice(1).map(loc => ({
    location: loc,
    count: lawyers.filter(l => l.location === loc).length
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-green-600 w-24 h-24 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-5xl">🇮🇳</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Find a Lawyer Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with qualified lawyers in your area. Select your location to find legal experts nearby.
          </p>
          <p className="text-sm text-orange-600 mt-2 font-semibold">
            🇮🇳 Trusted Legal Professionals Across India 🇮🇳
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border-2 border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Location Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Select Your Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location} {location !== 'All Locations' && `(${lawyers.filter(l => l.location === location).length} lawyers)`}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Search className="w-4 h-4 inline mr-1" />
                Search by Name or Specialization
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search lawyers..."
                  className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 bg-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Location Quick Filters */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Quick Location Filters:</p>
            <div className="flex flex-wrap gap-2">
              {locationCounts.map(({ location, count }) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedLocation === location
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {location} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-700">
              Found <span className="text-blue-600">{filteredLawyers.length}</span> lawyer{filteredLawyers.length !== 1 ? 's' : ''} 
              {selectedLocation !== 'All Locations' && ` in ${selectedLocation}`}
            </p>
          </div>
        </div>

        {/* Lawyers Grid */}
        {filteredLawyers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredLawyers.map((lawyer, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{lawyer.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                      <span className="font-medium">{lawyer.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-semibold">Specialization:</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{lawyer.specialization}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-orange-600" />
                    <span className="font-semibold">Experience:</span>
                    <span className="ml-2 text-gray-600">{lawyer.experience}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <a
                    href={`tel:${lawyer.phone}`}
                    className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  {lawyer.email && (
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Lawyers Found</h3>
            <p className="text-gray-600 mb-4">
              Try selecting a different location or adjusting your search terms.
            </p>
            <button
              onClick={() => {
                setSelectedLocation('All Locations')
                setSearchTerm('')
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Free Legal Aid Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">⚖️</span>
            Free Legal Aid Services
          </h2>
          <p className="text-gray-700 mb-6">
            If you cannot afford a lawyer, you may be eligible for free legal aid. Contact these organizations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {legalAidOrganizations.map((org, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-md border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{org.description}</p>
                {org.phone && (
                  <a
                    href={`tel:${org.phone}`}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    {org.phone}
                  </a>
                )}
                {org.website && (
                  <a
                    href={`https://${org.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline mt-2 block"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Important Information:</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Always verify a lawyer's enrollment number with the Bar Council of India</li>
            <li>Discuss fees and charges upfront before hiring</li>
            <li>Get all agreements in writing</li>
            <li>Check the lawyer's experience in your specific legal matter</li>
            <li>For free legal aid, contact your nearest District Legal Services Authority (DLSA)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

