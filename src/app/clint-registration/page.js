'use client'
import { useState } from 'react'
import { FaUserPlus, FaPhone, FaUser, FaLock, FaSave } from 'react-icons/fa'

export default function ClientRegistration() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // یہاں آپ API call کریں گے
    const clientData = {
      phone,
      name,
      password
    }
    
    // LocalStorage میں محفوظ کریں (عارضی)
    const clients = JSON.parse(localStorage.getItem('lexbridge-clients') || '[]')
    clients.push({ ...clientData, id: Date.now(), cases: [] })
    localStorage.setItem('lexbridge-clients', JSON.stringify(clients))
    
    setMessage('Client registered successfully!')
    setPhone('')
    setName('')
    setPassword('')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaUserPlus className="text-3xl text-blue-900" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Client Registration</h1>
          <p className="text-gray-600 mt-2">Register new client for case management</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaPhone className="inline mr-2" />
              Phone Number (Required)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="00923152820296"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaUser className="inline mr-2" />
              Client Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaLock className="inline mr-2" />
              Password (For client access)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 flex items-center justify-center gap-2"
          >
            <FaSave />
            Register Client
          </button>

          {message && (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg">
              {message}
            </div>
          )}
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">Important:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Phone number will be used to search client cases</li>
            <li>• Each client gets a secure case folder</li>
            <li>• Payment history and case updates stored</li>
            <li>• Consultancy details recorded automatically</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
