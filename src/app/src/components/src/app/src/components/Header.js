'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBalanceScale } from 'react-icons/fa'

export default function Header() {
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('lexbridge-language') || 'en'
    setCurrentLang(lang)
  }, [])

  // زبان کے مطابق متن
  const getNavText = () => {
    if (currentLang === 'ur') {
      return {
        home: "ہوم",
        services: "خدمات",
        payment: "ادائیگی",
        admin: "ایڈمن",
        getHelp: "مدد حاصل کریں"
      }
    } else if (currentLang === 'ar') {
      return {
        home: "الرئيسية",
        services: "الخدمات",
        payment: "الدفع",
        admin: "المشرف",
        getHelp: "احصل على مساعدة"
      }
    } else {
      return {
        home: "Home",
        services: "Services",
        payment: "Payment",
        admin: "Admin",
        getHelp: "Get Help"
      }
    }
  }

  const navText = getNavText()

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <FaBalanceScale className="text-blue-900 text-2xl" />
          <div>
            <h1 className="text-xl font-bold text-blue-900">LexBridge</h1>
            <p className="text-sm text-gray-600">Global</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="font-medium">{navText.home}</Link>
          <Link href="/services" className="font-medium">{navText.services}</Link>
          <Link href="/payment" className="font-medium">{navText.payment}</Link>
          <Link href="/admin" className="font-medium">{navText.admin}</Link>
        </nav>
        
        <button className="bg-blue-900 text-white px-4 py-2 rounded">
          {navText.getHelp}
        </button>
      </div>
    </header>
  )
}
