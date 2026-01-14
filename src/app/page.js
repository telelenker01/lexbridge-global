'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPhone, FaShieldAlt, FaBalanceScale, FaUsers, FaFileContract, FaCalculator } from 'react-icons/fa'

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('lexbridge-language') || 'en'
    setCurrentLang(lang)
  }, [])

  // Features array
  const features = [
    { icon: <FaShieldAlt />, title: "Advance Payment Protection", desc: "Secure escrow system for all transactions" },
    { icon: <FaBalanceScale />, title: "Legal Consultancy", desc: "Professional legal advice and services" },
    { icon: <FaUsers />, title: "Client Management", desc: "Register and track client cases" },
    { icon: <FaFileContract />, title: "Documentation", desc: "Legal documents and agreements" },
    { icon: <FaCalculator />, title: "Stamp Duty", desc: "Automatic stamp duty calculation" },
    { icon: <FaPhone />, title: "24/7 Support", desc: "Always available for assistance" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block">We Are Not <span className="text-yellow-300">FoodPanda</span></span>
              <span className="block mt-2">We Are <span className="text-green-300">Amazon</span> of Professional Services</span>
            </h1>
            <p className="text-xl mb-10 opacity-90">
              Secure legal consultancy with advance payment protection and professional case management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/client-registration" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <FaUsers />
                Register Client
              </Link>
              <Link 
                href="/case-search" 
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <FaBalanceScale />
                Search Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="text-blue-900 text-4xl mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-4">📞</div>
                <p className="text-2xl font-bold mb-2">Phone & WhatsApp</p>
                <p className="text-3xl font-bold mb-4 tracking-wide">00923152820296</p>
                <p className="text-lg opacity-90">Available 24/7 for calls and legal consultations</p>
              </div>
            </div>
            <div className="bg-yellow-500/20 border-l-4 border-yellow-500 p-4 rounded">
              <p className="font-medium">
                <span className="font-bold">Important:</span> This is a professional paid platform. Advance payment is mandatory for all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Info */}
      <div className="py-8 px-4 bg-gray-100 text-center">
        <p className="text-gray-600">
          {currentLang === 'en' ? 'Website available in: English, Urdu, Arabic' :
           currentLang === 'ur' ? 'ویب سائٹ دستیاب ہے: انگریزی، اردو، عربی' :
           'الموقع متاح بـ: الإنجليزية، الأردية، العربية'}
        </p>
      </div>
    </div>
  )
}
