'use client'
import { useState, useEffect } from 'react'
import { FaLock, FaHandshake, FaGlobe, FaCalculator, FaFileContract } from 'react-icons/fa'
import Link from 'next/link'

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    // زبان لوڈ کریں
    const savedLang = localStorage.getItem('lexbridge-language') || 'en'
    setCurrentLang(savedLang)
  }, [])

  // زبان کے مطابق متن
  const getText = () => {
    if (currentLang === 'ur') {
      return {
        title1: "ہم",
        title2: "فوڈ پانڈا",
        title3: "نہیں ہیں",
        title4: "ایمیزون",
        title5: "ہیں پیشہ ورانہ خدمات کا",
        description: "محفوظ قانونی مشاورت اور ایسکرو ادائیگی کا نظام",
        btn1: "محفوظ ادائیگی شروع کریں",
        btn2: "ہماری خدمات"
      }
    } else if (currentLang === 'ar') {
      return {
        title1: "نحن لسنا",
        title2: "فود باندا",
        title3: "نحن",
        title4: "أمازون",
        title5: "الخدمات المهنية",
        description: "نظام الدفع الآمن والاستشارات القانونية",
        btn1: "بدء الدفع الآمن",
        btn2: "خدماتنا"
      }
    } else {
      return {
        title1: "We Are Not",
        title2: "FoodPanda",
        title3: "We Are",
        title4: "Amazon",
        title5: "of Professional Services",
        description: "Secure legal consultancy and escrow payment system",
        btn1: "Start Secure Payment",
        btn2: "Our Services"
      }
    }
  }

  const text = getText()

  const features = [
    { icon: <FaLock />, title: "Advance Payment Only" },
    { icon: <FaHandshake />, title: "Escrow Protection" },
    { icon: <FaFileContract />, title: "Legal Documentation" },
    { icon: <FaGlobe />, title: "Global Lawyers Network" },
    { icon: <FaCalculator />, title: "Stamp Duty Calculator" },
    { icon: <FaHandshake />, title: "Mediation First" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            {text.title1} <span className="text-yellow-300">{text.title2}</span>
          </h1>
          <h2 className="text-2xl font-bold mb-6">
            {text.title3} <span className="text-green-400">{text.title4}</span> {text.title5}
          </h2>
          <p className="text-lg mb-8">
            {text.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/payment" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold">
              {text.btn1}
            </Link>
            <Link href="#" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold">
              {text.btn2}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Our Core Principles' : 
             currentLang === 'ur' ? 'ہمارے بنیادی اصول' : 
             'مبادئنا الأساسية'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border text-center">
                <div className="text-3xl text-blue-900 mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Language Display */}
      <div className="text-center py-8">
        <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
          <span className="font-medium">
            {currentLang === 'en' ? 'Current Language: ' :
             currentLang === 'ur' ? 'موجودہ زبان: ' :
             'اللغة الحالية: '}
          </span>
          <span className="font-bold text-blue-900">
            {currentLang === 'en' ? 'English' :
             currentLang === 'ur' ? 'اردو' :
             'العربية'}
          </span>
        </div>
      </div>
    </div>
  )
}
