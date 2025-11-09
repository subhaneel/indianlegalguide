import { Shield, AlertTriangle, FileText, CheckCircle } from 'lucide-react'
import { policeGuidanceData } from '@/data/policeGuidance'

export default function PoliceGuidancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Police Visit Guidance
              </h1>
              <p className="text-gray-600 mt-2">
                Know your rights and what to do when police visit your home
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {policeGuidanceData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {section.type === 'warning' && (
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                )}
                {section.type === 'info' && (
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                )}
                {section.type === 'right' && (
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                )}
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.description}
                </p>

                {section.steps && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Steps to Follow:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      {section.steps.map((step, stepIdx) => (
                        <li key={stepIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {section.laws && (
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Relevant Laws & Sections:</h3>
                    <ul className="space-y-2">
                      {section.laws.map((law, lawIdx) => (
                        <li key={lawIdx} className="text-gray-700">
                          <span className="font-semibold">{law.name}:</span>
                          <span className="ml-2">{law.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.importantPoints && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Points:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      {section.importantPoints.map((point, pointIdx) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            Remember
          </h3>
          <p className="text-gray-700 text-sm">
            Always remain calm and respectful when dealing with police. Know your rights, 
            but also cooperate with legitimate police procedures. If you feel your rights 
            are being violated, note down the officer's name, badge number, and contact 
            a lawyer immediately.
          </p>
        </div>
      </div>
    </div>
  )
}

