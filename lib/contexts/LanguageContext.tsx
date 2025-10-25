"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'english' | 'hindi' | 'kannada' | 'sanskrit';

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
    signInSignUp: 'SignIn/SignUp',
    
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
    next: 'Next'
  },
  
  hindi: {
    // Navigation
    home: 'होम',
    about: 'के बारे में',
    features: 'विशेषताएं',
    howItWorks: 'यह कैसे काम करता है',
    contact: 'संपर्क',
    signInSignUp: 'साइन इन/साइन अप',
    
    // Hero Section
    heroTitle: 'अपने स्वास्थ्य में क्रांति लाएं',
    heroSubtitle: 'कल्याण और बुद्धिमत्ता के साथ',
    heroDescription: 'कृत्रिम बुद्धिमत्ता द्वारा संचालित व्यक्तिगत आहार, जीवनशैली और कल्याण',
    startAnalysis: 'स्वास्थ्य विश्लेषण शुरू करें',
    
    // Dashboard
    dashboard: 'डैशबोर्ड',
    profile: 'प्रोफ़ाइल',
    settings: 'सेटिंग्स',
    logout: 'लॉग आउट',
    notifications: 'सूचनाएं',
    
    // Dosha Section
    understandDosha: 'अपने दोष को समझें',
    doshaDescription: 'उन तीन मौलिक ऊर्जाओं की खोज करें जो आपके शरीर, मन और चेतना को नियंत्रित करती हैं।',
    vata: 'वात',
    pitta: 'पित्त',
    kapha: 'कफ',
    
    // Constitution Section
    discoverConstitution: 'अपने आयुर्वेदिक संविधान की खोज करें',
    constitutionDescription: 'AI-संचालित दोष विश्लेषण के माध्यम से अपने अनूठे शरीर-मन संविधान के रहस्यों को अनलॉक करें।',
    
    // Settings
    appPreferences: 'ऐप प्राथमिकताएं',
    darkMode: 'डार्क मोड',
    darkModeDesc: 'डार्क थीम पर स्विच करें',
    language: 'भाषा',
    languageDesc: 'अपनी पसंदीदा भाषा चुनें',
    
    // Common
    welcome: 'स्वागत है',
    loading: 'लोड हो रहा है...',
    save: 'सेव करें',
    cancel: 'रद्द करें',
    continue: 'जारी रखें',
    back: 'वापस',
    next: 'अगला'
  },
  
  kannada: {
    // Navigation
    home: 'ಮನೆ',
    about: 'ಬಗ್ಗೆ',
    features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
    howItWorks: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    contact: 'ಸಂಪರ್ಕ',
    signInSignUp: 'ಸೈನ್ ಇನ್/ಸೈನ್ ಅಪ್',
    
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
    next: 'ಮುಂದೆ'
  },
  
  sanskrit: {
    // Navigation
    home: 'गृहम्',
    about: 'विषये',
    features: 'विशेषताः',
    howItWorks: 'कथं कार्यं करोति',
    contact: 'सम्पर्कः',
    signInSignUp: 'प्रवेशः/पञ्जीकरणम्',
    
    // Hero Section
    heroTitle: 'स्वास्थ्ये क्रान्तिं कुरुत',
    heroSubtitle: 'कल्याणेन बुद्ध्या च',
    heroDescription: 'कृत्रिमबुद्ध्या संचालितं व्यक्तिगतं भोजनं, जीवनशैली कल्याणं च',
    startAnalysis: 'स्वास्थ्यविश्लेषणं प्रारभत',
    
    // Dashboard
    dashboard: 'नियन्त्रणपट्टिका',
    profile: 'व्यक्तिचित्रम्',
    settings: 'व्यवस्थाः',
    logout: 'निर्गमः',
    notifications: 'सूचनाः',
    
    // Dosha Section
    understandDosha: 'स्वदोषं बोधत',
    doshaDescription: 'त्रीणि मूलभूतानि शक्तीनि यानि भवतः शरीरं मनः चेतना च नियन्त्रयन्ति तानि अन्वेषयत।',
    vata: 'वातः',
    pitta: 'पित्तम्',
    kapha: 'कफः',
    
    // Constitution Section
    discoverConstitution: 'स्वायुर्वेदिकसंविधानं अन्वेषयत',
    constitutionDescription: 'AI-संचालितदोषविश्लेषणेन स्वस्य अनुपमस्य शरीरमनःसंविधानस्य रहस्यानि उद्घाटयत।',
    
    // Settings
    appPreferences: 'अनुप्रयोगप्राथमिकताः',
    darkMode: 'तमोमोडः',
    darkModeDesc: 'तमोविषयकं रूपं स्वीकुरुत',
    language: 'भाषा',
    languageDesc: 'स्वप्रियभाषां चिनुत',
    
    // Common
    welcome: 'स्वागतम्',
    loading: 'लोड्यते...',
    save: 'रक्षत',
    cancel: 'रद्दं करोतु',
    continue: 'अग्रे गच्छत',
    back: 'पश्चात्',
    next: 'अग्रिमम्'
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
      alert(confirmations[newLanguage]);
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