"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Settings, User } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
            <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            <Settings className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            <User className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
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
                <Link href="/dashboard" className="flex items-center px-6 py-3 text-white font-medium" style={{ backgroundColor: '#4a7c59' }}>
                  <span className="mr-3">📊</span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/health-analysis" className="flex items-center px-6 py-3 text-white hover:bg-green-600">
                  <span className="mr-3">⚖️</span>
                  Dosha Analysis
                </Link>
              </li>
              <li>
                <Link href="/dashboard/health-reports" className="flex items-center px-6 py-3 text-white hover:bg-green-600">
                  <span className="mr-3">📋</span>
                  Health Reports
                </Link>
              </li>
              <li>
                <Link href="/dashboard/diet-plan" className="flex items-center px-6 py-3 text-white hover:bg-green-600">
                  <span className="mr-3">🍽️</span>
                  Diet Plan
                </Link>
              </li>
              <li>
                <Link href="/dashboard/yoga-wellness" className="flex items-center px-6 py-3 text-white hover:bg-green-600">
                  <span className="mr-3">🧘</span>
                  Yoga & Wellness
                </Link>
              </li>
              <li>
                <Link href="/health-analysis/history" className="flex items-center px-6 py-3 text-white hover:bg-green-600">
                  <span className="mr-3">📈</span>
                  History
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings" className="flex items-center px-6 py-3 text-white hover:bg-green-600">
                  <span className="mr-3">⚙️</span>
                  Settings
                </Link>
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