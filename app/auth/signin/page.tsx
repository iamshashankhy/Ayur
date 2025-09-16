"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', formData);
    
    // Simulate authentication
    if (formData.username && formData.password) {
      // Store user session
      localStorage.setItem('userSession', JSON.stringify({
        username: formData.username,
        loginTime: new Date().toISOString()
      }));
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-green-400 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">AyurInsights</span>
          </div>
          <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft size={20} />
            <span className="font-medium">Go Back</span>
          </Link>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username / Email"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
                required
              />
              <div className="text-right mt-2">
                <Link href="/auth/reset-password" className="text-sm text-green-600 hover:text-green-800">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Don't have an account? <Link href="/auth/signup" className="text-green-600 hover:text-green-800 font-medium">Sign Up</Link>
            </p>
            <p className="text-xs text-gray-500 mb-4">Or</p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-medium">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}