"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    reenterPassword: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    reenterPassword: ''
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

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
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
      fullName: !formData.fullName ? 'Full name is required' : '',
      email: !formData.email ? 'Email is required' : !validateEmail(formData.email) ? 'Please enter a valid email' : '',
      phone: !formData.phone ? 'Phone number is required' : !validatePhone(formData.phone) ? 'Please enter a valid phone number' : '',
      password: !formData.password ? 'Password is required' : '',
      reenterPassword: !formData.reenterPassword ? 'Please confirm your password' : formData.password !== formData.reenterPassword ? 'Passwords do not match' : ''
    };
    
    if (formData.password) {
      const validation = validatePassword(formData.password);
      if (!validation.isValid) {
        newErrors.password = 'Password must meet all requirements';
      }
    }
    
    setErrors(newErrors);
    
    if (!Object.values(newErrors).some(error => error)) {
      // Store user data
      localStorage.setItem('userProfile', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        registrationDate: new Date().toISOString()
      }));
      
      localStorage.setItem('userSession', JSON.stringify({
        username: formData.email,
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

        {/* Sign Up Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm text-center">{errors.fullName}</p>}
            
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm text-center">{errors.email}</p>}
            
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm text-center">{errors.phone}</p>}
            
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
            </div>
            {errors.password && <p className="text-red-500 text-sm text-center">{errors.password}</p>}
            
            {formData.password && (
              <div className="p-3 bg-gray-50 rounded-md">
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
            
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter Password"
                value={formData.reenterPassword}
                onChange={(e) => setFormData({...formData, reenterPassword: e.target.value})}
                className={`w-full px-4 py-3 pr-12 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-center ${
                  errors.reenterPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.reenterPassword && <p className="text-red-500 text-sm text-center">{errors.reenterPassword}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium mt-6"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Already have an account? <Link href="/auth/signin" className="text-green-600 hover:text-green-800 font-medium">Sign In</Link>
            </p>
            <p className="text-xs text-gray-500 mb-4">Sign In with Google</p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors font-medium">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}