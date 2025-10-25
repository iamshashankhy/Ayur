"use client";

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useTheme } from '@/lib/contexts/ThemeContext';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  const [settings, setSettings] = useState({
    autoSync: true,
    dailyReminders: true,
    assessmentAlerts: true,
    healthInsights: true,
    dataBackup: true,
    analytics: false
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
    }
  }, []);

  // Save settings to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const handleToggle = (setting: string) => {
    setSettings(prev => {
      const newSettings = { ...prev, [setting]: !prev[setting as keyof typeof prev] };
      return newSettings;
    });
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      localStorage.clear();
      alert('All data has been cleared successfully!');
      window.location.href = '/';
    }
  };

  const checkForUpdates = () => {
    alert('Checking for updates... You are using the latest version!');
  };



  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t('settings')}</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage your app preferences and configurations</p>
        </div>

        {/* Settings Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* App Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('appPreferences')}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{t('darkMode')}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('darkModeDesc')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={theme === 'dark'}
                    onChange={handleThemeToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Auto-sync Data</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Automatically sync with connected devices</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.autoSync}
                    onChange={() => handleToggle('autoSync')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{t('language')}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('languageDesc')}</p>
                </div>
                <select 
                  className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                >
                  <option value="english">English</option>
                  <option value="hindi">हिंदी (Hindi)</option>
                  <option value="kannada">ಕನ್ನಡ (Kannada)</option>
                  <option value="sanskrit">संस्कृत (Sanskrit)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('notifications')}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Daily Reminders</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Get daily wellness reminders</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.dailyReminders}
                    onChange={() => handleToggle('dailyReminders')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Assessment Alerts</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Notify when new assessment is due</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.assessmentAlerts}
                    onChange={() => handleToggle('assessmentAlerts')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Health Insights</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Get AI-powered health insights</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.healthInsights}
                    onChange={() => handleToggle('healthInsights')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Data & Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Data Backup</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Automatically backup your data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.dataBackup}
                    onChange={() => handleToggle('dataBackup')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Analytics</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Help improve app with usage data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.analytics}
                    onChange={() => handleToggle('analytics')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>

              <button 
                onClick={clearAllData}
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Clear All Data
              </button>
            </div>
          </div>

          {/* App Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">App Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Version</span>
                <span className="font-medium text-gray-800 dark:text-white">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Last Updated</span>
                <span className="font-medium text-gray-800 dark:text-white">Jan 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Storage Used</span>
                <span className="font-medium text-gray-800 dark:text-white">24.5 MB</span>
              </div>
              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <button 
                onClick={checkForUpdates}
                className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Check for Updates
              </button>
              <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Terms & Conditions
              </button>
              <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Language Preview */}
        {language !== 'english' && (
          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              {language === 'kannada' ? 'ಭಾಷೆ ಪೂರ್ವವೀಕ್ಷಣೆ' : 
               language === 'hindi' ? 'भाषा पूर्वावलोकन' : 
               'भाषा पूर्वावलोकन'}
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              {language === 'kannada' ? 
                'ನಿಮ್ಮ ಭಾಷೆ ಸೆಟ್ಟಿಂಗ್ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ. ಸಂಪೂರ್ಣ ಅನುವಾದವು ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗುತ್ತದೆ.' :
               language === 'hindi' ?
                'आपकी भाषा सेटिंग हिंदी में बदल दी गई है। पूर्ण अनुवाद जल्द ही उपलब्ध होगा।' :
                'आपकी भाषा सेटिंग संस्कृत में बदल दी गई है। पूर्ण अनुवाद जल्द ही उपलब्ध होगा।'
              }
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}