'use client'
import { useState, useEffect } from 'react'
import { FaGlobe, FaTimes, FaInfoCircle } from 'react-icons/fa'

export default function LanguageSelector() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ur', name: 'Urdu', native: 'اردو' },
    { code: 'ar', name: 'Arabic', native: 'العربية' }
  ]

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-full p-3"
        title="Change Language"
      >
        <FaGlobe className="text-blue-900" />
      </button>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-3">
                <FaGlobe className="text-2xl text-blue-900" />
                <div>
                  <h2 className="text-xl font-bold">Select Language</h2>
                  <p className="text-gray-600 text-sm">Please choose your preferred language</p>
                </div>
              </div>
              <button onClick={() => setShowPopup(false)} className="p-2">
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            <div className="mx-6 mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <div className="flex items-start">
                <FaInfoCircle className="text-yellow-600 mt-1 mr-2" />
                <div>
                  <p className="text-yellow-800 font-medium">Important Notice:</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    This is a professional paid platform. Advance payment is mandatory for all services.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setShowPopup(false)}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-blue-900 flex items-center justify-between"
                >
                  <div className="text-left">
                    <div className="font-bold text-lg">{lang.name}</div>
                    <div className="text-gray-600">{lang.native}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 border-t">
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
              >
                Skip for now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
