'use client'
import { useState } from 'react'
import { FaSearch, FaPhone, FaUser, FaFileAlt, FaMoneyBill } from 'react-icons/fa'

export default function CaseSearch() {
  const [searchPhone, setSearchPhone] = useState('')
  const [client, setClient] = useState(null)
  const [cases, setCases] = useState([])

  const handleSearch = () => {
    // LocalStorage سے ڈیٹا لوڈ کریں
    const clients = JSON.parse(localStorage.getItem('lexbridge-clients') || '[]')
    const foundClient = clients.find(c => c.phone === searchPhone)
    
    if (foundClient) {
      setClient(foundClient)
      setCases(foundClient.cases || [])
    } else {
      setClient(null)
      setCases([])
      alert('Client not found!')
    }
  }

  const addNewCase = () => {
    const caseName = prompt('Enter case name:')
    if (caseName) {
      const newCase = {
        id: Date.now(),
        name: caseName,
        status: 'Active',
        payments: [],
        consultations: [],
        createdAt: new Date().toLocaleDateString()
      }
      
      setCases([...cases, newCase])
      
      // LocalStorage میں اپڈیٹ کریں
      const clients = JSON.parse(localStorage.getItem('lexbridge-clients') || '[]')
      const updatedClients = clients.map(c => {
        if (c.phone === searchPhone) {
          return { ...c, cases: [...(c.cases || []), newCase] }
        }
        return c
      })
      localStorage.setItem('lexbridge-clients', JSON.stringify(updatedClients))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Client Case Search</h1>
          <p className="text-gray-600">Search client cases by phone number</p>
        </div>

        {/* سرچ بار */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline mr-2" />
                Enter Client Phone Number
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-lg"
                  placeholder="00923152820296"
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-900 text-white px-6 rounded-lg flex items-center gap-2"
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* کلائنٹ انفارمیشن */}
        {client && (
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FaUser className="text-blue-900" />
                  <span className="font-semibold">Name:</span>
                </div>
                <p className="text-lg">{client.name || 'Not provided'}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FaPhone className="text-blue-900" />
                  <span className="font-semibold">Phone:</span>
                </div>
                <p className="text-lg">{client.phone}</p>
              </div>
            </div>
          </div>
        )}

        {/* کیسز */}
        {client && (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Cases</h2>
              <button
                onClick={addNewCase}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaFileAlt />
                Add New Case
              </button>
            </div>

            {cases.length > 0 ? (
              <div className="space-y-4">
                {cases.map((caseItem) => (
                  <div key={caseItem.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{caseItem.name}</h3>
                        <p className="text-gray-600">Status: {caseItem.status}</p>
                        <p className="text-sm text-gray-500">Created: {caseItem.createdAt}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-900 rounded text-sm">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-green-100 text-green-900 rounded text-sm">
                          Add Payment
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FaFileAlt className="text-4xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No cases found for this client.</p>
                <button
                  onClick={addNewCase}
                  className="mt-4 text-blue-900 font-semibold"
                >
                  Add first case
                </button>
              </div>
            )}
          </div>
        )}

        {/* رابط نمبر */}
        <div className="mt-8 p-6 bg-blue-900 text-white rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Contact Support</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhone />
              <span className="text-lg">Phone/WhatsApp: 00923152820296</span>
            </div>
            <div className="text-sm">
              Available for calls and consultations
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
