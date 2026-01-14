'use client'
import { useState } from 'react'
import { FaLock, FaVideo, FaImage, FaFileAlt } from 'react-icons/fa'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'kgf292900') {
      setAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800"
            >
              <FaLock className="inline mr-2" />
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Videos */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaVideo className="text-blue-900 text-2xl" />
              <h2 className="text-xl font-bold">Videos</h2>
            </div>
            <p className="text-gray-600 mb-4">Upload interview and promotional videos</p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded">
              Manage Videos
            </button>
          </div>

          {/* Images */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaImage className="text-blue-900 text-2xl" />
              <h2 className="text-xl font-bold">Images</h2>
            </div>
            <p className="text-gray-600 mb-4">Upload gallery and profile images</p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded">
              Manage Images
            </button>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaFileAlt className="text-blue-900 text-2xl" />
              <h2 className="text-xl font-bold">Content</h2>
            </div>
            <p className="text-gray-600 mb-4">Update website text and information</p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded">
              Manage Content
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setAuthenticated(false)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
