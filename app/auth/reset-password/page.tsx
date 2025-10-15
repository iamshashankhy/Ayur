"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    reenterPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.reenterPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Reset password:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-green-400 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🕉</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">AyurInsights</span>
          </div>
          <Link href="/auth/signin" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft size={20} />
            <span className="font-medium">Go Back</span>
          </Link>
        </div>

        {/* Reset Password Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-8">Reset Password !</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="password"
              placeholder="Enter new Password"
              value={formData.newPassword}
              onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
              required
            />
            
            <input
              type="password"
              placeholder="Re-enter Password"
              value={formData.reenterPassword}
              onChange={(e) => setFormData({...formData, reenterPassword: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}