'use client'
import Link from 'next/link'
import { FaBalanceScale } from 'react-icons/fa'

export default function Header() {
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
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/client-registration" className="font-medium">Register</Link>
          <Link href="/case-search" className="font-medium">Search</Link>
          <Link href="/admin" className="font-medium">Admin</Link>
        </nav>
        
        <button className="bg-blue-900 text-white px-4 py-2 rounded">
          Get Help
        </button>
      </div>
    </header>
  )
}
