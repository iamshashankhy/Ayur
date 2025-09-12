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
          <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-gray-800 font-semibold text-lg">AyurInsights</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium">About</Link>
          <Link href="/features" className="text-gray-800 hover:text-gray-600 font-medium">Features</Link>
          <Link href="/how-it-works" className="text-gray-800 hover:text-gray-600 font-medium">How it works</Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium">Contact</Link>
          <Link href="/auth/signin" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium">
            SignIn/SignUp
          </Link>
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
            <Link href="/auth/signin" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium w-fit">
              SignIn/SignUp
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}