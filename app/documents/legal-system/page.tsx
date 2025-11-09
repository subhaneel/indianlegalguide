import { Scale, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { legalSystemData } from '@/data/legalSystem'

export default function LegalSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/documents" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Documents
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
              <Scale className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                India's Legal System
              </h1>
              <p className="text-gray-600 mt-2">
                Understanding the structure and functioning of the Indian legal system
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {legalSystemData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-purple-700">
                {section.title}
              </h2>
              <div className="prose max-w-none">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx} className="mb-6">
                    {item.subtitle && (
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {item.text}
                    </p>
                    {item.points && (
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        {item.points.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

