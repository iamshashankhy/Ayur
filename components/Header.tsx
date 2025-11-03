'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useTheme } from '@/lib/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-50 to-emerald-50 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-sm border-b border-green-100 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">🕉</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {t('ayurvedaAI')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-green-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link 
              href="/features" 
              className="text-green-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors font-medium"
            >
              {t('features')}
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-green-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors font-medium"
            >
              {t('howItWorks')}
            </Link>
            <Link 
              href="/about" 
              className="text-green-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors font-medium"
            >
              {t('about')}
            </Link>
            <Link 
              href="/contact" 
              className="text-green-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors font-medium"
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-green-100 dark:bg-gray-800 hover:bg-green-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-green-600" />
              )}
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/auth/signin"
                className="px-4 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors font-medium"
              >
                {t('signIn')}
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {t('getStarted')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-green-100 dark:bg-gray-800 hover:bg-green-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-green-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-green-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100 dark:border-gray-700 bg-green-25">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="px-3 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 hover:bg-green-100 dark:hover:text-green-400 transition-colors rounded-md mx-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                href="/features" 
                className="px-3 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 hover:bg-green-100 dark:hover:text-green-400 transition-colors rounded-md mx-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('features')}
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-3 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 hover:bg-green-100 dark:hover:text-green-400 transition-colors rounded-md mx-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('howItWorks')}
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 hover:bg-green-100 dark:hover:text-green-400 transition-colors rounded-md mx-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 hover:bg-green-100 dark:hover:text-green-400 transition-colors rounded-md mx-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <div className="flex flex-col space-y-2 pt-3 border-t border-green-100 dark:border-gray-700 mx-3">
                <Link
                  href="/auth/signin"
                  className="px-3 py-2 text-green-700 dark:text-gray-300 hover:text-green-800 hover:bg-green-100 dark:hover:text-green-400 transition-colors rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('signIn')}
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('getStarted')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}