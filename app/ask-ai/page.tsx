'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, Bot, User, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAIResponse } from '@/lib/aiService'
import { legalAidOrganizations } from '@/data/lawyers'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Legal Advisor. I can help you understand Indian laws, your rights, and guide you on legal matters. What would you like to know?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await getAIResponse(input)
      const assistantMessage: Message = { role: 'assistant', content: response }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or consult a qualified lawyer for specific legal advice.'
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const quickQuestions = [
    'What are my fundamental rights?',
    'What to do if police come to my house?',
    'How to file a complaint?',
    'What are my rights during arrest?',
    'How to meet someone in jail?',
    'How to get bail?',
    'How to contact a lawyer?'
  ]

  const handleQuickQuestion = async (question: string) => {
    setInput(question)
    // Auto-submit the question
    const userMessage: Message = { role: 'user', content: question }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await getAIResponse(question)
      const assistantMessage: Message = { role: 'assistant', content: response }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or consult a qualified lawyer for specific legal advice.'
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with Indian Flag */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border-2 border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-orange-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-4xl">🇮🇳</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                    AI Legal Advisor
                  </h1>
                  <p className="text-gray-600 mt-2 font-medium">
                    Your trusted guide to Indian laws and legal rights
                  </p>
                  <p className="text-sm text-orange-600 mt-1 font-semibold">
                    🇮🇳 Empowering Indian Citizens with Legal Knowledge 🇮🇳
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Questions */}
          <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl shadow-lg p-6 mb-6 border border-orange-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">⚡</span> Quick Questions - Click to Ask:
            </h2>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(question)}
                  className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all border border-blue-200 text-sm font-medium"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6 min-h-[400px] max-h-[500px] overflow-y-auto border border-gray-200">
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-3 max-w-[80%] ${
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user'
                          ? 'bg-blue-600'
                          : 'bg-green-600'
                      }`}
                    >
                      {message.role === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-4 ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 border-2 border-blue-200">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your legal question here... (e.g., 'if my people is in jail, how to meet them')"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 bg-white"
                disabled={isLoading}
                style={{ color: '#111827' }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 font-semibold shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>
            </div>
          </form>

          {/* Lawyer Contacts Section */}
          <div className="mt-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Phone className="w-6 h-6 mr-2 text-blue-600" />
              Need a Lawyer?
            </h2>
            <p className="text-gray-600 mb-4">
              Find qualified lawyers in your area with our location-based search.
            </p>
            <Link
              href="/lawyers"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg font-semibold"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Lawyers by Location
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-2">Free Legal Aid:</h3>
              {legalAidOrganizations.map((org, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-sm font-medium text-gray-900">{org.name}</p>
                  <p className="text-sm text-gray-600">{org.description}</p>
                  {org.phone && (
                    <a href={`tel:${org.phone}`} className="text-sm text-blue-600 hover:underline">
                      📞 {org.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Disclaimer:</strong> This AI assistant provides general legal information and guidance. 
              It should not be considered as a substitute for professional legal advice. For specific legal matters, 
              please consult a qualified lawyer. The information provided is for educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

