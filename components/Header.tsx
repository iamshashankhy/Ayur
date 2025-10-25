"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTheme } from '@/lib/contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <header className={`px-4 sm:px-6 py-4 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : ''
    }`} style={theme === 'light' ? { backgroundColor: '#A7D5A7' } : {}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm sm:text-lg">🕉</span>
          </div>
          <span className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>AyurInsights</span>
        </div>
        
            {t('home')}
          <Link href="/" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            {t('about')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          <Link href="/features" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            {t('features')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          <Link href="/how-it-works" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            {t('howItWorks')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium transition-colors relative group">
            {t('contact')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <button 
            onClick={() => window.location.href = '/auth/signin'}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {t('signInSignUp')}
          </button>
        </nav>

        <button 
          className={`lg:hidden p-2 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden mt-4 pb-4 rounded-lg mx-4 shadow-lg transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-white'
        }`}>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className={`font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
            }`}>{t('home')}</Link>
            <Link href="/about" className={`font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
            }`}>{t('about')}</Link>
            <Link href="/features" className={`font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
            }`}>{t('features')}</Link>
            <Link href="/how-it-works" className={`font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
            }`}>{t('howItWorks')}</Link>
            <Link href="/contact" className={`font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'
            }`}>{t('contact')}</Link>
            <button 
              onClick={() => window.location.href = '/auth/signin'}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium w-fit"
            >
              {t('signInSignUp')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}