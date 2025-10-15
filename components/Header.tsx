"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-6 py-4" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">🕉</span>
          </div>
          <span className="text-gray-800 font-semibold text-lg">AyurInsights</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/features" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/how-it-works" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            How it works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <button 
            onClick={() => window.location.href = '/auth/signin'}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            SignIn/SignUp
          </button>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium">About</Link>
            <Link href="/features" className="text-gray-800 hover:text-gray-600 font-medium">Features</Link>
            <Link href="/how-it-works" className="text-gray-800 hover:text-gray-600 font-medium">How it works</Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium">Contact</Link>
            <button 
              onClick={() => window.location.href = '/auth/signin'}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium w-fit"
            >
              SignIn/SignUp
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}