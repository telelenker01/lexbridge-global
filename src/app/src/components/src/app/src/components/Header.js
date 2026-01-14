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
        register: "رجسٹر کریں",
        search: "کیس تلاش",
        getHelp: "مدد حاصل کریں"
      }
    } else if (currentLang === 'ar') {
      return {
        home: "الرئيسية",
        services: "الخدمات",
        payment: "الدفع",
        admin: "المشرف",
        register: "تسجيل",
        search: "بحث القضية",
        getHelp: "احصل على مساعدة"
      }
    } else {
      return {
        home: "Home",
        services: "Services",
        payment: "Payment",
        admin: "Admin",
        register: "Register",
        search: "Case Search",
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
          <Link href="/" className="font-medium hover:text-blue-900 transition">
            {navText.home}
          </Link>
          <Link href="/services" className="font-medium hover:text-blue-900 transition">
            {navText.services}
          </Link>
          <Link href="/payment" className="font-medium hover:text-blue-900 transition">
            {navText.payment}
          </Link>
          <Link href="/client-registration" className="font-medium hover:text-blue-900 transition">
            {navText.register}
          </Link>
          <Link href="/case-search" className="font-medium hover:text-blue-900 transition">
            {navText.search}
          </Link>
          <Link href="/admin" className="font-medium hover:text-blue-900 transition">
            {navText.admin}
          </Link>
        </nav>
        
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          {navText.getHelp}
        </button>
      </div>
    </header>
  )
}
