"use client";
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Settings, User, Home, LogOut } from 'lucide-react';

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
            <Link href="/">
              <Home className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </Link>
            <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            <Link href="/dashboard/settings">
              <Settings className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </Link>
            <Link href="/dashboard/profile">
              <User className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </Link>
            <button onClick={handleLogout}>
              <LogOut className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
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
                  className={`flex items-center px-6 py-3 text-white font-medium ${
                    isActive('/dashboard') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">📊</span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/health-analysis/assessment" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/health-analysis/assessment') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">⚖️</span>
                  Dosha Analysis
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/health-reports" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/dashboard/health-reports') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">📋</span>
                  Health Reports
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/diet-plan" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/dashboard/diet-plan') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">🍽️</span>
                  Diet Plan
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/yoga-wellness" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/dashboard/yoga-wellness') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">🧘</span>
                  Yoga & Wellness
                </Link>
              </li>
              <li>
                <Link 
                  href="/health-analysis/history" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/health-analysis/history') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">📈</span>
                  History
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/profile" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/dashboard/profile') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">👤</span>
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/settings" 
                  className={`flex items-center px-6 py-3 text-white ${
                    isActive('/dashboard/settings') ? 'bg-green-600' : 'hover:bg-green-600'
                  }`}
                >
                  <span className="mr-3">⚙️</span>
                  Settings
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center px-6 py-3 text-white hover:bg-red-600"
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