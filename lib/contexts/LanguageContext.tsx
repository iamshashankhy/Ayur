"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'english' | 'kannada';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  english: {
    // Navigation
    home: 'Home',
    about: 'About',
    features: 'Features',
    howItWorks: 'How it works',
    contact: 'Contact',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    getStarted: 'Get Started',
    ayurvedaAI: 'AyurInsights',
    
    // Hero Section
    heroTitle: 'Revolutionize your Health',
    heroSubtitle: 'with wellness & intelligence',
    heroDescription: 'Personalized diet, lifestyle and wellness powered by Artificial intelligence',
    startAnalysis: 'Start with Health Analysis',
    
    // Dashboard
    dashboard: 'Dashboard',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    notifications: 'Notifications',
    
    // Dosha Section
    understandDosha: 'Understand Your Dosha',
    doshaDescription: 'Discover the three fundamental energies that govern your body, mind, and consciousness.',
    vata: 'Vata',
    pitta: 'Pitta',
    kapha: 'Kapha',
    
    // Constitution Section
    discoverConstitution: 'Discover Your Ayurvedic Constitution',
    constitutionDescription: 'Unlock the secrets of your unique body-mind constitution through AI-powered dosha analysis.',
    
    // Settings
    appPreferences: 'App Preferences',
    darkMode: 'Dark Mode',
    darkModeDesc: 'Switch to dark theme',
    language: 'Language',
    languageDesc: 'Choose your preferred language',
    
    // Common
    welcome: 'Welcome',
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    continue: 'Continue',
    back: 'Back',
    next: 'Next',
    
    // Additional translations
    healthAnalysis: 'Health Analysis',
    doshaAnalysis: 'Dosha Analysis',
    personalizedRecommendations: 'Personalized Recommendations',
    wellnessJourney: 'Wellness Journey',
    constitution: 'Constitution',
    balance: 'Balance',
    assessment: 'Assessment',
    results: 'Results',
    recommendations: 'Recommendations',
    diet: 'Diet',
    lifestyle: 'Lifestyle',
    yoga: 'Yoga',
    meditation: 'Meditation',
    wellness: 'Wellness',
    health: 'Health',
    ayurveda: 'Ayurveda'
  },
  
  kannada: {
    // Navigation
    home: 'ಮನೆ',
    about: 'ಬಗ್ಗೆ',
    features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
    howItWorks: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    contact: 'ಸಂಪರ್ಕ',
    signIn: 'ಸೈನ್ ಇನ್',
    signUp: 'ಸೈನ್ ಅಪ್',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    ayurvedaAI: 'ಆಯುರ್‌ಇನ್‌ಸೈಟ್ಸ್',
    
    // Hero Section
    heroTitle: 'ನಿಮ್ಮ ಆರೋಗ್ಯದಲ್ಲಿ ಕ್ರಾಂತಿ ತನ್ನಿ',
    heroSubtitle: 'ಆರೋಗ್ಯ ಮತ್ತು ಬುದ್ಧಿವಂತಿಕೆಯೊಂದಿಗೆ',
    heroDescription: 'ಕೃತ್ರಿಮ ಬುದ್ಧಿಮತ್ತೆಯಿಂದ ನಡೆಸಲ್ಪಡುವ ವೈಯಕ್ತಿಕ ಆಹಾರ, ಜೀವನಶೈಲಿ ಮತ್ತು ಆರೋಗ್ಯ',
    startAnalysis: 'ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ',
    
    // Dashboard
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    profile: 'ಪ್ರೊಫೈಲ್',
    settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    logout: 'ಲಾಗ್ ಔಟ್',
    notifications: 'ಅಧಿಸೂಚನೆಗಳು',
    
    // Dosha Section
    understandDosha: 'ನಿಮ್ಮ ದೋಷವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ',
    doshaDescription: 'ನಿಮ್ಮ ದೇಹ, ಮನಸ್ಸು ಮತ್ತು ಪ್ರಜ್ಞೆಯನ್ನು ನಿಯಂತ್ರಿಸುವ ಮೂರು ಮೂಲಭೂತ ಶಕ್ತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    vata: 'ವಾತ',
    pitta: 'ಪಿತ್ತ',
    kapha: 'ಕಫ',
    
    // Constitution Section
    discoverConstitution: 'ನಿಮ್ಮ ಆಯುರ್ವೇದ ಸಂವಿಧಾನವನ್ನು ಅನ್ವೇಷಿಸಿ',
    constitutionDescription: 'AI-ಚಾಲಿತ ದೋಷ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ನಿಮ್ಮ ಅನನ್ಯ ದೇಹ-ಮನಸ್ಸಿನ ಸಂವಿಧಾನದ ರಹಸ್ಯಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ.',
    
    // Settings
    appPreferences: 'ಅಪ್ಲಿಕೇಶನ್ ಆದ್ಯತೆಗಳು',
    darkMode: 'ಡಾರ್ಕ್ ಮೋಡ್',
    darkModeDesc: 'ಡಾರ್ಕ್ ಥೀಮ್‌ಗೆ ಬದಲಿಸಿ',
    language: 'ಭಾಷೆ',
    languageDesc: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆರಿಸಿ',
    
    // Common
    welcome: 'ಸ್ವಾಗತ',
    loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    save: 'ಉಳಿಸಿ',
    cancel: 'ರದ್ದುಮಾಡಿ',
    continue: 'ಮುಂದುವರಿಸಿ',
    back: 'ಹಿಂದೆ',
    next: 'ಮುಂದೆ',
    
    // Additional translations
    healthAnalysis: 'ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ',
    doshaAnalysis: 'ದೋಷ ವಿಶ್ಲೇಷಣೆ',
    personalizedRecommendations: 'ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳು',
    wellnessJourney: 'ಆರೋಗ್ಯ ಪ್ರಯಾಣ',
    constitution: 'ಸಂವಿಧಾನ',
    balance: 'ಸಮತೋಲನ',
    assessment: 'ಮೌಲ್ಯಮಾಪನ',
    results: 'ಫಲಿತಾಂಶಗಳು',
    recommendations: 'ಶಿಫಾರಸುಗಳು',
    diet: 'ಆಹಾರ',
    lifestyle: 'ಜೀವನಶೈಲಿ',
    yoga: 'ಯೋಗ',
    meditation: 'ಧ್ಯಾನ',
    wellness: 'ಆರೋಗ್ಯ',
    health: 'ಆರೋಗ್ಯ',
    ayurveda: 'ಆಯುರ್ವೇದ'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('english');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Show language change confirmation
    const confirmations = {
      english: 'Language changed to English!',
      hindi: 'भाषा हिंदी में बदल दी गई!',
      kannada: 'ಭಾಷೆ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ!',
      sanskrit: 'भाषा संस्कृते परिवर्तिता!'
    };
    
    // Small delay to ensure state is updated
    setTimeout(() => {
      // Show a subtle notification instead of alert
      console.log(confirmations[newLanguage]);
    }, 100);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}