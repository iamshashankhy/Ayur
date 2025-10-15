"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
    };
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData({...formData, password});
    
    if (password) {
      const validation = validatePassword(password);
      if (!validation.isValid) {
        setErrors({...errors, password: 'Password must meet all requirements'});
      } else {
        setErrors({...errors, password: ''});
      }
    } else {
      setErrors({...errors, password: ''});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      username: !formData.username ? 'Username/Email is required' : '',
      password: !formData.password ? 'Password is required' : ''
    };
    
    if (formData.password) {
      const validation = validatePassword(formData.password);
      if (!validation.isValid) {
        newErrors.password = 'Password must meet all requirements';
      }
    }
    
    setErrors(newErrors);
    
    if (!newErrors.username && !newErrors.password) {
      // Store user session
      localStorage.setItem('userSession', JSON.stringify({
        username: formData.username,
        loginTime: new Date().toISOString()
      }));
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }
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
                className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1 text-center">{errors.username}</p>
              )}
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handlePasswordChange}
                className={`w-full px-4 py-3 pr-12 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 text-center">{errors.password}</p>
              )}
              
              {formData.password && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <p className="text-xs text-gray-600 mb-2">Password Requirements:</p>
                  {(() => {
                    const validation = validatePassword(formData.password);
                    return (
                      <div className="space-y-1 text-xs">
                        <div className={`flex items-center ${validation.minLength ? 'text-green-600' : 'text-red-500'}`}>
                          <span className="mr-2">{validation.minLength ? '✓' : '×'}</span>
                          At least 8 characters
                        </div>
                        <div className={`flex items-center ${validation.hasUpperCase ? 'text-green-600' : 'text-red-500'}`}>
                          <span className="mr-2">{validation.hasUpperCase ? '✓' : '×'}</span>
                          One uppercase letter
                        </div>
                        <div className={`flex items-center ${validation.hasLowerCase ? 'text-green-600' : 'text-red-500'}`}>
                          <span className="mr-2">{validation.hasLowerCase ? '✓' : '×'}</span>
                          One lowercase letter
                        </div>
                        <div className={`flex items-center ${validation.hasNumbers ? 'text-green-600' : 'text-red-500'}`}>
                          <span className="mr-2">{validation.hasNumbers ? '✓' : '×'}</span>
                          One number
                        </div>
                        <div className={`flex items-center ${validation.hasSpecialChar ? 'text-green-600' : 'text-red-500'}`}>
                          <span className="mr-2">{validation.hasSpecialChar ? '✓' : '×'}</span>
                          One special character
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
              
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