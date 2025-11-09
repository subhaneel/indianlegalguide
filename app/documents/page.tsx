import Link from 'next/link'
import { BookOpen, FileText, Scale, ArrowRight } from 'lucide-react'

export default function DocumentsPage() {
  const documents = [
    {
      id: 'constitution',
      title: 'The Indian Constitution',
      description: 'Complete text of the Constitution of India with all articles, schedules, and amendments',
      icon: FileText,
      color: 'blue',
      sections: ['Preamble', 'Fundamental Rights', 'Directive Principles', 'Fundamental Duties', 'Union Executive', 'Parliament', 'Judiciary']
    },
    {
      id: 'laws',
      title: 'Indian Law for Common Man',
      description: 'Simplified explanation of important Indian laws that every citizen should know',
      icon: BookOpen,
      color: 'green',
      sections: ['Criminal Law', 'Civil Law', 'Property Law', 'Family Law', 'Labor Law', 'Consumer Law', 'Cyber Law']
    },
    {
      id: 'legal-system',
      title: "India's Legal System",
      description: 'Understanding the structure and functioning of the Indian legal system',
      icon: Scale,
      color: 'purple',
      sections: ['Court Structure', 'Legal Procedures', 'Rights and Remedies', 'Legal Aid', 'Alternative Dispute Resolution']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Documents & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access comprehensive legal documents, laws, and resources to understand your rights and responsibilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc) => {
            const Icon = doc.icon
            const colorClasses = {
              blue: {
                bg: 'bg-blue-100',
                bgHover: 'group-hover:bg-blue-200',
                text: 'text-blue-600'
              },
              green: {
                bg: 'bg-green-100',
                bgHover: 'group-hover:bg-green-200',
                text: 'text-green-600'
              },
              purple: {
                bg: 'bg-purple-100',
                bgHover: 'group-hover:bg-purple-200',
                text: 'text-purple-600'
              }
            }
            const colors = colorClasses[doc.color as keyof typeof colorClasses]
            return (
              <Link
                key={doc.id}
                href={`/documents/${doc.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`${colors.bg} ${colors.bgHover} w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {doc.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {doc.description}
                  </p>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Sections:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {doc.sections.map((section, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {section}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Read More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}

