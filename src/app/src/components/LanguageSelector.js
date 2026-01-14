'use client'
import { useState, useEffect } from 'react'
import { FaGlobe, FaTimes } from 'react-icons/fa'

export default function LanguageSelector() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedLang, setSelectedLang] = useState('en')

  useEffect(() => {
    // پہلے سے سلیکٹ شدہ زبان چیک کریں
    const savedLang = localStorage.getItem('lexbridge-language')
    if (savedLang) {
      setSelectedLang(savedLang)
    } else {
      // پہلی بار آنے پر پاپ اپ دکھائیں
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ur', name: 'Urdu', native: 'اردو' },
    { code: 'ar', name: 'Arabic', native: 'العربية' }
  ]

  const handleLanguageSelect = (langCode) => {
    setSelectedLang(langCode)
    localStorage.setItem('lexbridge-language', langCode)
    setShowPopup(false)
    alert(`Language set to: ${languages.find(l => l.code === langCode)?.name}`)
  }

  return (
    <>
      {/* اوپر دائیں طرف زبان کا بٹن */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-full p-3 flex items-center gap-2"
        title="Change Language"
      >
        <FaGlobe className="text-blue-900" />
        <span className="hidden sm:inline font-medium">
          {selectedLang.toUpperCase()}
        </span>
      </button>

      {/* زبان سلیکشن پاپ اپ */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {/* ہیڈر */}
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-3">
                <FaGlobe className="text-2xl text-blue-900" />
                <div>
                  <h2 className="text-xl font-bold">Select Language</h2>
                  <p className="text-gray-600 text-sm">Please choose your preferred language</p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            {/* زبان کے آپشنز */}
            <div className="p-6 space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full p-4 rounded-xl border-2 flex items-center justify-between ${selectedLang === lang.code ? 'border-blue-900 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="text-left">
                    <div className="font-bold text-lg">{lang.name}</div>
                    <div className="text-gray-600">{lang.native}</div>
                  </div>
                  {selectedLang === lang.code && (
                    <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                  )}
                </button>
              ))}
            </div>

            {/* فوٹر */}
            <div className="p-6 border-t">
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
              >
                Skip for now
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">
                You can change language anytime from top-right button
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
