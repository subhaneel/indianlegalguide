'use client'

import { Phone, Shield, AlertCircle, Users } from 'lucide-react'
import { emergencyContacts } from '@/data/emergencyContacts'

export default function EmergencyPage() {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  const categories = [
    {
      title: 'Police & Emergency',
      icon: Shield,
      color: 'red',
      contacts: emergencyContacts.filter(c => c.category === 'police')
    },
    {
      title: 'Women Safety',
      icon: Users,
      color: 'pink',
      contacts: emergencyContacts.filter(c => c.category === 'women')
    },
    {
      title: 'Other Emergency Services',
      icon: AlertCircle,
      color: 'orange',
      contacts: emergencyContacts.filter(c => c.category === 'other')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Contacts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick access to emergency services, police, and women's safety helplines
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, idx) => {
            const Icon = category.icon
            const colorClasses = {
              red: {
                bg: 'bg-red-100',
                text: 'text-red-600'
              },
              pink: {
                bg: 'bg-pink-100',
                text: 'text-pink-600'
              },
              orange: {
                bg: 'bg-orange-100',
                text: 'text-orange-600'
              }
            }
            const colors = colorClasses[category.color as keyof typeof colorClasses]
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className={`${colors.bg} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.contacts.map((contact, contactIdx) => (
                    <div
                      key={contactIdx}
                      className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {contact.description}
                      </p>
                      <button
                        onClick={() => handleCall(contact.number)}
                        className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{contact.number}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Safety Tips */}
        <div className="mt-12 bg-blue-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">In Emergency:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                <li>Stay calm and call the emergency number immediately</li>
                <li>Provide your exact location and situation</li>
                <li>Follow the instructions given by the operator</li>
                <li>Keep emergency numbers saved in your phone</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">For Women's Safety:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                <li>Save women's helpline numbers on speed dial</li>
                <li>Share your location with trusted contacts</li>
                <li>Use safety apps that can alert emergency contacts</li>
                <li>Be aware of your surroundings at all times</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

