"use client";
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Settings, User, Chrome as Home, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('assessmentResults');
    window.location.href = '/';
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f9f0' }}>
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-600">Discover your Ayurvedic body constitution</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" title="Home" className="group relative">
              <Home className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Home
              </div>
            </Link>
            <div className="group relative">
              <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Notifications
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">3</span>
              </div>
            </div>
            <Link href="/dashboard/settings" title="Settings" className="group relative">
              <Settings className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Settings
              </div>
            </Link>
            <Link href="/dashboard/profile" title="Profile" className="group relative">
              <User className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Profile
              </div>
            </Link>
            <button onClick={handleLogout} title="Logout" className="group relative">
              <LogOut className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer transition-colors" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Logout
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen" style={{ backgroundColor: '#2d5a3d' }}>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-white font-semibold">AyurInsight</span>
            </div>
          </div>
          <nav className="py-6">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/dashboard" 
                  className={`flex items-center px-6 py-3 text-white font-medium transition-colors ${
                    isActive('/dashboard') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">📊</span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/health-analysis/assessment" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/health-analysis/assessment') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">⚖️</span>
                  Dosha Analysis
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/health-reports" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/dashboard/health-reports') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">📋</span>
                  Health Reports
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/diet-plan" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/dashboard/diet-plan') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">🍽️</span>
                  Diet Plan
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/yoga-wellness" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/dashboard/yoga-wellness') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">🧘</span>
                  Yoga & Wellness
                </Link>
              </li>
              <li>
                <Link 
                  href="/health-analysis/history" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/health-analysis/history') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">📈</span>
                  History
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/profile" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/dashboard/profile') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">👤</span>
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/settings" 
                  className={`flex items-center px-6 py-3 text-white transition-colors ${
                    isActive('/dashboard/settings') ? 'bg-green-600 border-r-4 border-green-400' : 'hover:bg-green-600 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">⚙️</span>
                  Settings
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center px-6 py-3 text-white hover:bg-red-600 hover:bg-opacity-50 transition-colors"
                >
                  <span className="mr-3">🚪</span>
                  Log Out
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}