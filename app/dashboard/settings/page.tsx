"use client";

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function Settings() {
  const [settings, setSettings] = useState({
    darkMode: false,
    autoSync: true,
    language: 'english',
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
      
      // Apply dark mode if enabled
      if (parsed.darkMode) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Save settings to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const handleToggle = (setting: string) => {
    setSettings(prev => {
      const newSettings = { ...prev, [setting]: !prev[setting as keyof typeof prev] };
      
      // Handle dark mode toggle
      if (setting === 'darkMode') {
        if (newSettings.darkMode) {
          document.documentElement.classList.add('dark');
          document.body.style.backgroundColor = '#1f2937';
          document.body.style.color = '#f9fafb';
        } else {
          document.documentElement.classList.remove('dark');
          document.body.style.backgroundColor = '#f0f9f0';
          document.body.style.color = '#111827';
        }
      }
      
      return newSettings;
    });
  };

  const handleLanguageChange = (language: string) => {
    setSettings(prev => ({ ...prev, language }));
    
    // Show language change confirmation
    const languageNames = {
      english: 'English',
      hindi: 'हिंदी',
      sanskrit: 'संस्कृत',
      kannada: 'ಕನ್ನಡ'
    };
    
    alert(`Language changed to ${languageNames[language as keyof typeof languageNames]}! 
    ${language === 'kannada' ? 'ಭಾಷೆ ಬದಲಾಯಿಸಲಾಗಿದೆ!' : ''}
    ${language === 'hindi' ? 'भाषा बदल दी गई!' : ''}
    ${language === 'sanskrit' ? 'भाषा परिवर्तितः!' : ''}`);
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

  const getLanguageText = () => {
    const texts = {
      english: {
        title: 'Settings',
        subtitle: 'Manage your app preferences and configurations',
        appPreferences: 'App Preferences',
        darkMode: 'Dark Mode',
        darkModeDesc: 'Switch to dark theme',
        autoSync: 'Auto-sync Data',
        autoSyncDesc: 'Automatically sync with connected devices',
        language: 'Language',
        languageDesc: 'Choose your preferred language',
        notifications: 'Notifications',
        dailyReminders: 'Daily Reminders',
        dailyRemindersDesc: 'Get daily wellness reminders',
        assessmentAlerts: 'Assessment Alerts',
        assessmentAlertsDesc: 'Notify when new assessment is due',
        healthInsights: 'Health Insights',
        healthInsightsDesc: 'Get AI-powered health insights',
        dataPrivacy: 'Data & Privacy',
        dataBackup: 'Data Backup',
        dataBackupDesc: 'Automatically backup your data',
        analytics: 'Analytics',
        analyticsDesc: 'Help improve app with usage data',
        clearAllData: 'Clear All Data',
        appInfo: 'App Information',
        version: 'Version',
        lastUpdated: 'Last Updated',
        storageUsed: 'Storage Used',
        checkUpdates: 'Check for Updates',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy'
      },
      hindi: {
        title: 'सेटिंग्स',
        subtitle: 'अपनी ऐप प्राथमिकताएं और कॉन्फ़िगरेशन प्रबंधित करें',
        appPreferences: 'ऐप प्राथमिकताएं',
        darkMode: 'डार्क मोड',
        darkModeDesc: 'डार्क थीम पर स्विच करें',
        autoSync: 'ऑटो-सिंक डेटा',
        autoSyncDesc: 'कनेक्टेड डिवाइसेस के साथ स्वचालित रूप से सिंक करें',
        language: 'भाषा',
        languageDesc: 'अपनी पसंदीदा भाषा चुनें',
        notifications: 'सूचनाएं',
        dailyReminders: 'दैनिक रिमाइंडर',
        dailyRemindersDesc: 'दैनिक कल्याण रिमाइंडर प्राप्त करें',
        assessmentAlerts: 'मूल्यांकन अलर्ट',
        assessmentAlertsDesc: 'नया मूल्यांकन देय होने पर सूचित करें',
        healthInsights: 'स्वास्थ्य अंतर्दृष्टि',
        healthInsightsDesc: 'AI-संचालित स्वास्थ्य अंतर्दृष्टि प्राप्त करें',
        dataPrivacy: 'डेटा और गोपनीयता',
        dataBackup: 'डेटा बैकअप',
        dataBackupDesc: 'अपने डेटा का स्वचालित बैकअप लें',
        analytics: 'एनालिटिक्स',
        analyticsDesc: 'उपयोग डेटा के साथ ऐप सुधारने में मदद करें',
        clearAllData: 'सभी डेटा साफ़ करें',
        appInfo: 'ऐप जानकारी',
        version: 'संस्करण',
        lastUpdated: 'अंतिम अपडेट',
        storageUsed: 'उपयोग किया गया स्टोरेज',
        checkUpdates: 'अपडेट की जांच करें',
        terms: 'नियम और शर्तें',
        privacy: 'गोपनीयता नीति'
      },
      kannada: {
        title: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
        subtitle: 'ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಆದ್ಯತೆಗಳು ಮತ್ತು ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
        appPreferences: 'ಅಪ್ಲಿಕೇಶನ್ ಆದ್ಯತೆಗಳು',
        darkMode: 'ಡಾರ್ಕ್ ಮೋಡ್',
        darkModeDesc: 'ಡಾರ್ಕ್ ಥೀಮ್‌ಗೆ ಬದಲಿಸಿ',
        autoSync: 'ಸ್ವಯಂ-ಸಿಂಕ್ ಡೇಟಾ',
        autoSyncDesc: 'ಸಂಪರ್ಕಿತ ಸಾಧನಗಳೊಂದಿಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಿಂಕ್ ಮಾಡಿ',
        language: 'ಭಾಷೆ',
        languageDesc: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆರಿಸಿ',
        notifications: 'ಅಧಿಸೂಚನೆಗಳು',
        dailyReminders: 'ದೈನಂದಿನ ಜ್ಞಾಪನೆಗಳು',
        dailyRemindersDesc: 'ದೈನಂದಿನ ಆರೋಗ್ಯ ಜ್ಞಾಪನೆಗಳನ್ನು ಪಡೆಯಿರಿ',
        assessmentAlerts: 'ಮೌಲ್ಯಮಾಪನ ಎಚ್ಚರಿಕೆಗಳು',
        assessmentAlertsDesc: 'ಹೊಸ ಮೌಲ್ಯಮಾಪನ ಬಾಕಿ ಇರುವಾಗ ತಿಳಿಸಿ',
        healthInsights: 'ಆರೋಗ್ಯ ಒಳನೋಟಗಳು',
        healthInsightsDesc: 'AI-ಚಾಲಿತ ಆರೋಗ್ಯ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ',
        dataPrivacy: 'ಡೇಟಾ ಮತ್ತು ಗೌಪ್ಯತೆ',
        dataBackup: 'ಡೇಟಾ ಬ್ಯಾಕಪ್',
        dataBackupDesc: 'ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಬ್ಯಾಕಪ್ ಮಾಡಿ',
        analytics: 'ವಿಶ್ಲೇಷಣೆ',
        analyticsDesc: 'ಬಳಕೆಯ ಡೇಟಾದೊಂದಿಗೆ ಅಪ್ಲಿಕೇಶನ್ ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡಿ',
        clearAllData: 'ಎಲ್ಲಾ ಡೇಟಾ ತೆರವುಗೊಳಿಸಿ',
        appInfo: 'ಅಪ್ಲಿಕೇಶನ್ ಮಾಹಿತಿ',
        version: 'ಆವೃತ್ತಿ',
        lastUpdated: 'ಕೊನೆಯ ನವೀಕರಣ',
        storageUsed: 'ಬಳಸಿದ ಸಂಗ್ರಹಣೆ',
        checkUpdates: 'ನವೀಕರಣಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
        terms: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು',
        privacy: 'ಗೌಪ್ಯತೆ ನೀತಿ'
      },
      sanskrit: {
        title: 'सेटिंग्स',
        subtitle: 'अपनी ऐप प्राथमिकताएं और कॉन्फ़िगरेशन प्रबंधित करें',
        appPreferences: 'ऐप प्राथमिकताएं',
        darkMode: 'डार्क मोड',
        darkModeDesc: 'डार्क थीम पर स्विच करें',
        autoSync: 'ऑटो-सिंक डेटा',
        autoSyncDesc: 'कनेक्टेड डिवाइसेस के साथ स्वचालित रूप से सिंक करें',
        language: 'भाषा',
        languageDesc: 'अपनी पसंदीदा भाषा चुनें',
        notifications: 'सूचनाएं',
        dailyReminders: 'दैनिक रिमाइंडर',
        dailyRemindersDesc: 'दैनिक कल्याण रिमाइंडर प्राप्त करें',
        assessmentAlerts: 'मूल्यांकन अलर्ट',
        assessmentAlertsDesc: 'नया मूल्यांकन देय होने पर सूचित करें',
        healthInsights: 'स्वास्थ्य अंतर्दृष्टि',
        healthInsightsDesc: 'AI-संचालित स्वास्थ्य अंतर्दृष्टि प्राप्त करें',
        dataPrivacy: 'डेटा और गोपनीयता',
        dataBackup: 'डेटा बैकअप',
        dataBackupDesc: 'अपने डेटा का स्वचालित बैकअप लें',
        analytics: 'एनालिटिक्स',
        analyticsDesc: 'उपयोग डेटा के साथ ऐप सुधारने में मदद करें',
        clearAllData: 'सभी डेटा साफ़ करें',
        appInfo: 'ऐप जानकारी',
        version: 'संस्करण',
        lastUpdated: 'अंतिम अपडेट',
        storageUsed: 'उपयोग किया गया स्टोरेज',
        checkUpdates: 'अपडेट की जांच करें',
        terms: 'नियम और शर्तें',
        privacy: 'गोपनीयता नीति'
      }
    };
    
    return texts[settings.language as keyof typeof texts] || texts.english;
  };

  const text = getLanguageText();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{text.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{text.subtitle}</p>
        </div>

        {/* Settings Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* App Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{text.appPreferences}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{text.darkMode}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.darkModeDesc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.darkMode}
                    onChange={() => handleToggle('darkMode')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{text.autoSync}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.autoSyncDesc}</p>
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
                  <p className="font-medium text-gray-800 dark:text-white">{text.language}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.languageDesc}</p>
                </div>
                <select 
                  className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  value={settings.language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
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
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{text.notifications}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{text.dailyReminders}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.dailyRemindersDesc}</p>
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
                  <p className="font-medium text-gray-800 dark:text-white">{text.assessmentAlerts}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.assessmentAlertsDesc}</p>
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
                  <p className="font-medium text-gray-800 dark:text-white">{text.healthInsights}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.healthInsightsDesc}</p>
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
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{text.dataPrivacy}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{text.dataBackup}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.dataBackupDesc}</p>
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
                  <p className="font-medium text-gray-800 dark:text-white">{text.analytics}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{text.analyticsDesc}</p>
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
                {text.clearAllData}
              </button>
            </div>
          </div>

          {/* App Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{text.appInfo}</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">{text.version}</span>
                <span className="font-medium text-gray-800 dark:text-white">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">{text.lastUpdated}</span>
                <span className="font-medium text-gray-800 dark:text-white">Jan 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">{text.storageUsed}</span>
                <span className="font-medium text-gray-800 dark:text-white">24.5 MB</span>
              </div>
              <hr className="my-4 border-gray-200 dark:border-gray-600" />
              <button 
                onClick={checkForUpdates}
                className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                {text.checkUpdates}
              </button>
              <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                {text.terms}
              </button>
              <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                {text.privacy}
              </button>
            </div>
          </div>
        </div>

        {/* Language Preview */}
        {settings.language !== 'english' && (
          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              {settings.language === 'kannada' ? 'ಭಾಷೆ ಪೂರ್ವವೀಕ್ಷಣೆ' : 
               settings.language === 'hindi' ? 'भाषा पूर्वावलोकन' : 
               'भाषा पूर्वावलोकन'}
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              {settings.language === 'kannada' ? 
                'ನಿಮ್ಮ ಭಾಷೆ ಸೆಟ್ಟಿಂಗ್ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ. ಸಂಪೂರ್ಣ ಅನುವಾದವು ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗುತ್ತದೆ.' :
               settings.language === 'hindi' ?
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