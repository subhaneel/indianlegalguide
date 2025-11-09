import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { lawsData } from '@/data/laws'

export default function LawsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/documents" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Documents
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Indian Law for Common Man
              </h1>
              <p className="text-gray-600 mt-2">
                Simplified explanation of important Indian laws
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {lawsData.map((law, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-green-700">
                {law.title}
              </h2>
              <p className="text-gray-600 mb-4">{law.description}</p>
              
              {law.sections && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Sections:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {law.sections.map((section, secIdx) => (
                      <div key={secIdx} className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-900">{section.name}:</span>
                        <span className="text-gray-700 ml-2">{section.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {law.rights && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Rights:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    {law.rights.map((right, rightIdx) => (
                      <li key={rightIdx}>{right}</li>
                    ))}
                  </ul>
                </div>
              )}

              {law.importantPoints && (
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Points:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    {law.importantPoints.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

