import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { constitutionData } from '@/data/constitution'

export default function ConstitutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/documents" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Documents
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                The Indian Constitution
              </h1>
              <p className="text-gray-600 mt-2">
                The supreme law of India, adopted on 26th January 1950
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {constitutionData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-blue-700">
                {section.title}
              </h2>
              <div className="prose max-w-none">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx} className="mb-6">
                    {item.article && (
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.article}
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

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
          <p className="text-gray-700 text-sm">
            This is a simplified version of the Constitution for general understanding. 
            For official and complete text, please refer to the official government publications. 
            This information is for educational purposes only and should not be considered as legal advice.
          </p>
        </div>
      </div>
    </div>
  )
}

