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
    
    // Health Analysis & Assessment
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
    ayurveda: 'Ayurveda',
    
    // Assessment Questions & Categories
    physicalConstitution: 'Physical Constitution',
    digestion: 'Digestion',
    mentalEmotional: 'Mental & Emotional',
    sleepPatterns: 'Sleep Patterns',
    energyLevels: 'Energy Levels',
    healthTendencies: 'Health Tendencies',
    environmentalPreferences: 'Environmental Preferences',
    physicalCharacteristics: 'Physical Characteristics',
    appetite: 'Appetite',
    learningStyle: 'Learning Style',
    
    // Assessment Questions
    bodyBuildQuestion: 'How would you describe your body build?',
    bodyBuildThin: 'Thin, light frame, hard to gain weight',
    bodyBuildMedium: 'Medium build, moderate weight',
    bodyBuildLarge: 'Large frame, easy to gain weight',
    
    digestionQuestion: 'How is your digestion?',
    digestionIrregular: 'Irregular, sometimes bloated, gas',
    digestionStrong: 'Strong, can eat large meals, gets hungry',
    digestionSlow: 'Slow, feels heavy after eating',
    
    stressQuestion: 'How do you handle stress?',
    stressAnxious: 'Get anxious, worried, mind races',
    stressIrritated: 'Get irritated, angry, impatient',
    stressCalm: 'Remain calm, withdraw, get depressed',
    
    sleepQuestion: 'What is your sleep pattern like?',
    sleepLight: 'Light sleeper, difficulty falling asleep',
    sleepModerate: 'Moderate sleep, wake up refreshed',
    sleepDeep: 'Deep sleeper, hard to wake up',
    
    energyQuestion: 'How is your energy level throughout the day?',
    energyBursts: 'Comes in bursts, then crashes',
    energySteady: 'Steady, high energy, focused',
    energyLow: 'Steady but low, need motivation',
    
    healthIssuesQuestion: 'What health issues do you commonly face?',
    healthVata: 'Anxiety, insomnia, dry skin, constipation',
    healthPitta: 'Acidity, heartburn, skin rashes, anger',
    healthKapha: 'Weight gain, congestion, lethargy, depression',
    
    weatherQuestion: 'How do you prefer the weather?',
    weatherWarm: 'Warm, humid weather, dislike cold',
    weatherCool: 'Cool weather, dislike heat',
    weatherDry: 'Warm, dry weather, dislike cold & damp',
    
    skinQuestion: 'How would you describe your skin?',
    skinDry: 'Dry, rough, thin',
    skinOily: 'Oily, warm, prone to rashes',
    skinThick: 'Thick, oily, smooth',
    
    appetiteQuestion: 'How is your appetite?',
    appetiteVariable: 'Variable, sometimes forget to eat',
    appetiteStrong: 'Strong, get irritable when hungry',
    appetiteSteady: 'Steady, can skip meals easily',
    
    learningQuestion: 'How do you learn best?',
    learningQuick: 'Quick to learn, quick to forget',
    learningSharp: 'Sharp intellect, good retention',
    learningSlow: 'Slow to learn, excellent retention',
    
    // Assessment Progress & Results
    assessmentTitle: 'Ayurvedic Health Assessment',
    questionOf: 'of',
    complete: 'Complete',
    selectOption: 'Select an option to continue',
    clickNext: 'Click Next to continue',
    previous: 'Previous',
    assessmentComplete: 'Assessment Complete!',
    assessmentCompleteDesc: 'Thank you for completing the comprehensive health assessment. We have gathered detailed information about your constitution, lifestyle, and health patterns.',
    whatHappensNext: 'What happens next?',
    aiAnalysis: 'AI analysis of your Ayurvedic constitution',
    personalizedHealth: 'Personalized health recommendations',
    customDiet: 'Custom diet and lifestyle plan',
    wellnessTracking: 'Wellness tracking dashboard',
    generateProfile: 'Generate My Health Profile',
    analyzingConstitution: 'Analyzing Your Constitution...',
    analyzingDesc: 'Our AI is processing your responses using ancient Ayurvedic principles combined with modern analysis techniques.',
    evaluatingPatterns: 'Evaluating dosha patterns',
    calculatingBalance: 'Calculating constitutional balance',
    generatingRecommendations: 'Generating personalized recommendations',
    
    // Dashboard Components
    welcomeBack: 'Welcome back',
    constitutionLooking: 'constitution is looking balanced today',
    wellnessScore: 'Wellness Score',
    lastUpdated: 'Last updated',
    yourDoshaConstitution: 'Your Dosha Constitution',
    assessmentCompleteStatus: 'Assessment Complete',
    confidenceLevel: 'Confidence Level',
    riskLevel: 'Risk Level',
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    
    // Health Metrics
    healthMetrics: 'Health Metrics',
    sleepQuality: 'Sleep Quality',
    digestiveHealth: 'Digestive Health',
    stressLevel: 'Stress Level',
    energyLevel: 'Energy Level',
    moderate: 'Moderate',
    good: 'Good',
    
    // Today's Focus
    todaysFocus: 'Today\'s Focus',
    autumn: 'Autumn',
    focusGrounding: 'Focus on grounding practices',
    dietTab: 'Diet',
    lifestyleTab: 'Lifestyle',
    yogaTab: 'Yoga',
    
    // Diet Recommendations
    startWarmOatmeal: 'Start with warm oatmeal with cinnamon',
    includeTastes: 'Include sweet, sour, and salty tastes',
    avoidColdDrinks: 'Avoid cold drinks and raw foods',
    largestMealLunch: 'Have your largest meal at lunch',
    
    // AI Health Insights
    aiHealthInsights: 'AI Health Insights',
    digestiveFire: 'Digestive Fire',
    sleepPattern: 'Sleep Pattern',
    stressResponse: 'Stress Response',
    highPriority: 'High Priority',
    mediumPriority: 'Medium Priority',
    
    // Progress Tracking
    progressTracking: 'Progress Tracking',
    dayStreak: 'Day Streak',
    goalsCompleted: 'Goals Completed',
    weeklyImprovement: 'Weekly Improvement',
    weeklyGoalsCompleted: 'of weekly goals completed',
    
    // Quick Actions
    quickActions: 'Quick Actions',
    viewFullReport: 'View Full Report',
    todaysTips: 'Today\'s Tips',
    connectDevice: 'Connect Device',
    scheduleFollowup: 'Schedule Follow-up',
    learnAboutDosha: 'Learn About Dosha',
    setNewGoals: 'Set New Goals',
    
    // Today's Tasks
    todaysTasks: 'Today\'s Tasks',
    completeDailyMeditation: 'Complete daily meditation',
    logEveningMeal: 'Log evening meal',
    takeStressAssessment: 'Take stress assessment',
    reviewWeeklyProgress: 'Review weekly progress',
    
    // Auth Pages
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    password: 'Password',
    reenterPassword: 'Re-enter Password',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: 'Don\'t have an account?',
    alreadyHaveAccount: 'Already have an account?',
    signInWithGoogle: 'Sign In with Google',
    signUpWithGoogle: 'Sign Up with Google',
    goBack: 'Go Back',
    
    // Footer
    quickLinks: 'Quick Links',
    resources: 'Resources',
    ayurvedaResearch: 'Ayurveda Research',
    healthGuidelines: 'Health Guidelines',
    privacyPolicy: 'Privacy Policy',
    bridgingAncientWisdom: 'Bridging ancient wisdom with modern technology for personalized wellness.',
    allRightsReserved: 'All rights reserved. For educational purposes only.',
    
    // Contact
    getInTouch: 'Get In Touch',
    questionsAboutHealth: 'Have questions about your health or need guidance from an Ayurvedic practitioner?',
    consultationHours: 'Consultation Hours',
    sendMessage: 'Send Message',
    message: 'Message',
    
    // About
    scienceBehindDoshas: 'The Science Behind Doshas',
    ayurvedaDescription: 'Ayurveda, the ancient Indian system of medicine, recognizes three fundamental energies or doshas that govern all biological, psychological, and physiological functions of the body, mind, and consciousness.',
    aiEnhancedAnalysis: 'AI-Enhanced Analysis',
    aiAnalysisDesc: 'Our platform combines traditional Ayurvedic wisdom with modern AI algorithms to provide personalized insights into your constitution and health tendencies.',
    preventiveCare: 'Preventive Healthcare',
    preventiveCareDesc: 'Through our comprehensive analysis, you can make informed lifestyle choices that support your natural constitution and promote long-term wellness.',
    importantDisclaimer: 'Important Disclaimer',
    disclaimerText: 'This system is for educational purposes only and is not intended to replace professional medical advice. Always consult with qualified healthcare professionals for medical decisions.',
    
    // Features
    aiBased: 'AI-based Dosha Classification',
    aiBasedDesc: 'Uses machine learning models to identify individual Ayurvedic body constitution through questionnaires and real-time wearable data.',
    realTimeMonitoring: 'Real-Time Health Monitoring',
    realTimeDesc: 'Continuously tracks physiological parameters like heart rate, sleep, and stress via IoT and wearable devices.',
    cancerRisk: 'Cancer Risk Prediction',
    cancerRiskDesc: 'Identifies prolonged dosha imbalances associated with inflammatory conditions and early cancer risk indicators.',
    personalizedWellness: 'Personalized Wellness Recommendations',
    personalizedWellnessDesc: 'Provides dynamic, tailored advice on diet, yoga, meditation, and lifestyle practices based on current dosha status.',
    
    // How It Works
    dataCollection: 'Data Collection',
    dataCollectionDesc: 'User completes personalized questionnaire and connects wearable devices for comprehensive data collection.',
    aiAnalysisStep: 'AI Analysis',
    aiAnalysisStepDesc: 'Machine learning models analyze dosha patterns and identify potential health imbalances.',
    riskAssessment: 'Risk Assessment',
    riskAssessmentDesc: 'System identifies potential health risks and imbalances associated with inflammatory conditions.',
    personalizedRecommendationsStep: 'Personalized Recommendations',
    personalizedRecommendationsStepDesc: 'Dynamic suggestions for diet, lifestyle, yoga, and meditation practices based on current dosha status.'
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
    
    // Health Analysis & Assessment
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
    ayurveda: 'ಆಯುರ್ವೇದ',
    
    // Assessment Questions & Categories
    physicalConstitution: 'ಭೌತಿಕ ಸಂವಿಧಾನ',
    digestion: 'ಜೀರ್ಣಕ್ರಿಯೆ',
    mentalEmotional: 'ಮಾನಸಿಕ ಮತ್ತು ಭಾವನಾತ್ಮಕ',
    sleepPatterns: 'ನಿದ್ರೆಯ ಮಾದರಿಗಳು',
    energyLevels: 'ಶಕ್ತಿಯ ಮಟ್ಟಗಳು',
    healthTendencies: 'ಆರೋಗ್ಯ ಪ್ರವೃತ್ತಿಗಳು',
    environmentalPreferences: 'ಪರಿಸರ ಆದ್ಯತೆಗಳು',
    physicalCharacteristics: 'ಭೌತಿಕ ಗುಣಲಕ್ಷಣಗಳು',
    appetite: 'ಹಸಿವು',
    learningStyle: 'ಕಲಿಕೆಯ ಶೈಲಿ',
    
    // Assessment Questions
    bodyBuildQuestion: 'ನಿಮ್ಮ ದೇಹದ ರಚನೆಯನ್ನು ನೀವು ಹೇಗೆ ವರ್ಣಿಸುತ್ತೀರಿ?',
    bodyBuildThin: 'ತೆಳ್ಳಗಿನ, ಹಗುರವಾದ ಚೌಕಟ್ಟು, ತೂಕ ಹೆಚ್ಚಿಸಲು ಕಷ್ಟ',
    bodyBuildMedium: 'ಮಧ್ಯಮ ರಚನೆ, ಮಧ್ಯಮ ತೂಕ',
    bodyBuildLarge: 'ದೊಡ್ಡ ಚೌಕಟ್ಟು, ಸುಲಭವಾಗಿ ತೂಕ ಹೆಚ್ಚಾಗುತ್ತದೆ',
    
    digestionQuestion: 'ನಿಮ್ಮ ಜೀರ್ಣಕ್ರಿಯೆ ಹೇಗಿದೆ?',
    digestionIrregular: 'ಅನಿಯಮಿತ, ಕೆಲವೊಮ್ಮೆ ಉಬ್ಬುವುದು, ಗ್ಯಾಸ್',
    digestionStrong: 'ಬಲವಾದ, ದೊಡ್ಡ ಊಟ ತಿನ್ನಬಹುದು, ಹಸಿವಾಗುತ್ತದೆ',
    digestionSlow: 'ನಿಧಾನ, ತಿಂದ ನಂತರ ಭಾರವಾಗಿ ಅನಿಸುತ್ತದೆ',
    
    stressQuestion: 'ನೀವು ಒತ್ತಡವನ್ನು ಹೇಗೆ ನಿಭಾಯಿಸುತ್ತೀರಿ?',
    stressAnxious: 'ಆತಂಕ, ಚಿಂತೆ, ಮನಸ್ಸು ಓಡುತ್ತದೆ',
    stressIrritated: 'ಕಿರಿಕಿರಿ, ಕೋಪ, ಅಸಹನೆ',
    stressCalm: 'ಶಾಂತವಾಗಿ ಇರುತ್ತೇನೆ, ಹಿಂದೆ ಸರಿಯುತ್ತೇನೆ, ಖಿನ್ನತೆಗೆ ಒಳಗಾಗುತ್ತೇನೆ',
    
    sleepQuestion: 'ನಿಮ್ಮ ನಿದ್ರೆಯ ಮಾದರಿ ಹೇಗಿದೆ?',
    sleepLight: 'ಹಗುರ ನಿದ್ರೆ, ನಿದ್ರಿಸಲು ಕಷ್ಟ',
    sleepModerate: 'ಮಧ್ಯಮ ನಿದ್ರೆ, ತಾಜಾವಾಗಿ ಎಚ್ಚರಾಗುತ್ತೇನೆ',
    sleepDeep: 'ಆಳವಾದ ನಿದ್ರೆ, ಎಚ್ಚರಾಗಲು ಕಷ್ಟ',
    
    energyQuestion: 'ದಿನವಿಡೀ ನಿಮ್ಮ ಶಕ್ತಿಯ ಮಟ್ಟ ಹೇಗಿದೆ?',
    energyBursts: 'ಸ್ಫೋಟಗಳಲ್ಲಿ ಬರುತ್ತದೆ, ನಂತರ ಕುಸಿಯುತ್ತದೆ',
    energySteady: 'ಸ್ಥಿರ, ಹೆಚ್ಚಿನ ಶಕ್ತಿ, ಗಮನ',
    energyLow: 'ಸ್ಥಿರ ಆದರೆ ಕಡಿಮೆ, ಪ್ರೇರಣೆ ಬೇಕು',
    
    healthIssuesQuestion: 'ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ಎದುರಿಸುವ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು ಯಾವುವು?',
    healthVata: 'ಆತಂಕ, ನಿದ್ರಾಹೀನತೆ, ಒಣ ಚರ್ಮ, ಮಲಬದ್ಧತೆ',
    healthPitta: 'ಆಮ್ಲತೆ, ಎದೆಯುರಿ, ಚರ್ಮದ ದದ್ದುಗಳು, ಕೋಪ',
    healthKapha: 'ತೂಕ ಹೆಚ್ಚಳ, ಕಫ, ಆಲಸ್ಯ, ಖಿನ್ನತೆ',
    
    weatherQuestion: 'ನೀವು ಹವಾಮಾನವನ್ನು ಹೇಗೆ ಇಷ್ಟಪಡುತ್ತೀರಿ?',
    weatherWarm: 'ಬೆಚ್ಚಗಿನ, ಆರ್ದ್ರ ಹವಾಮಾನ, ತಣ್ಣನ್ನು ಇಷ್ಟಪಡುವುದಿಲ್ಲ',
    weatherCool: 'ತಂಪಾದ ಹವಾಮಾನ, ಬಿಸಿಯನ್ನು ಇಷ್ಟಪಡುವುದಿಲ್ಲ',
    weatherDry: 'ಬೆಚ್ಚಗಿನ, ಒಣ ಹವಾಮಾನ, ತಣ್ಣ ಮತ್ತು ತೇವವನ್ನು ಇಷ್ಟಪಡುವುದಿಲ್ಲ',
    
    skinQuestion: 'ನಿಮ್ಮ ಚರ್ಮವನ್ನು ನೀವು ಹೇಗೆ ವರ್ಣಿಸುತ್ತೀರಿ?',
    skinDry: 'ಒಣ, ಒರಟು, ತೆಳ್ಳಗಿನ',
    skinOily: 'ಎಣ್ಣೆಯುಕ್ತ, ಬೆಚ್ಚಗಿನ, ದದ್ದುಗಳಿಗೆ ಒಳಗಾಗುವ',
    skinThick: 'ದಪ್ಪ, ಎಣ್ಣೆಯುಕ್ತ, ನಯವಾದ',
    
    appetiteQuestion: 'ನಿಮ್ಮ ಹಸಿವು ಹೇಗಿದೆ?',
    appetiteVariable: 'ಬದಲಾಗುತ್ತಿರುವ, ಕೆಲವೊಮ್ಮೆ ತಿನ್ನಲು ಮರೆಯುತ್ತೇನೆ',
    appetiteStrong: 'ಬಲವಾದ, ಹಸಿವಾದಾಗ ಕಿರಿಕಿರಿಯಾಗುತ್ತೇನೆ',
    appetiteSteady: 'ಸ್ಥಿರ, ಊಟವನ್ನು ಸುಲಭವಾಗಿ ಬಿಟ್ಟುಬಿಡಬಹುದು',
    
    learningQuestion: 'ನೀವು ಹೇಗೆ ಉತ್ತಮವಾಗಿ ಕಲಿಯುತ್ತೀರಿ?',
    learningQuick: 'ಬೇಗ ಕಲಿಯುತ್ತೇನೆ, ಬೇಗ ಮರೆಯುತ್ತೇನೆ',
    learningSharp: 'ತೀಕ್ಷ್ಣ ಬುದ್ಧಿ, ಉತ್ತಮ ಸ್ಮರಣೆ',
    learningSlow: 'ನಿಧಾನವಾಗಿ ಕಲಿಯುತ್ತೇನೆ, ಅತ್ಯುತ್ತಮ ಸ್ಮರಣೆ',
    
    // Assessment Progress & Results
    assessmentTitle: 'ಆಯುರ್ವೇದಿಕ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ',
    questionOf: 'ರ',
    complete: 'ಪೂರ್ಣ',
    selectOption: 'ಮುಂದುವರಿಸಲು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ',
    clickNext: 'ಮುಂದುವರಿಸಲು ಮುಂದೆ ಕ್ಲಿಕ್ ಮಾಡಿ',
    previous: 'ಹಿಂದಿನ',
    assessmentComplete: 'ಮೌಲ್ಯಮಾಪನ ಪೂರ್ಣಗೊಂಡಿದೆ!',
    assessmentCompleteDesc: 'ಸಮಗ್ರ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಸಂವಿಧಾನ, ಜೀವನಶೈಲಿ ಮತ್ತು ಆರೋಗ್ಯ ಮಾದರಿಗಳ ಬಗ್ಗೆ ವಿವರವಾದ ಮಾಹಿತಿಯನ್ನು ನಾವು ಸಂಗ್ರಹಿಸಿದ್ದೇವೆ.',
    whatHappensNext: 'ಮುಂದೆ ಏನಾಗುತ್ತದೆ?',
    aiAnalysis: 'ನಿಮ್ಮ ಆಯುರ್ವೇದಿಕ ಸಂವಿಧಾನದ AI ವಿಶ್ಲೇಷಣೆ',
    personalizedHealth: 'ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಶಿಫಾರಸುಗಳು',
    customDiet: 'ಕಸ್ಟಮ್ ಆಹಾರ ಮತ್ತು ಜೀವನಶೈಲಿ ಯೋಜನೆ',
    wellnessTracking: 'ಆರೋಗ್ಯ ಟ್ರ್ಯಾಕಿಂಗ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    generateProfile: 'ನನ್ನ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ',
    analyzingConstitution: 'ನಿಮ್ಮ ಸಂವಿಧಾನವನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    analyzingDesc: 'ನಮ್ಮ AI ಆಧುನಿಕ ವಿಶ್ಲೇಷಣಾ ತಂತ್ರಗಳೊಂದಿಗೆ ಸಂಯೋಜಿಸಿದ ಪ್ರಾಚೀನ ಆಯುರ್ವೇದಿಕ ತತ್ವಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತಿದೆ.',
    evaluatingPatterns: 'ದೋಷ ಮಾದರಿಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗುತ್ತಿದೆ',
    calculatingBalance: 'ಸಾಂವಿಧಾನಿಕ ಸಮತೋಲನವನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗುತ್ತಿದೆ',
    generatingRecommendations: 'ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತಿದೆ',
    
    // Dashboard Components
    welcomeBack: 'ಮರಳಿ ಸ್ವಾಗತ',
    constitutionLooking: 'ಸಂವಿಧಾನವು ಇಂದು ಸಮತೋಲನದಲ್ಲಿ ಕಾಣುತ್ತಿದೆ',
    wellnessScore: 'ಆರೋಗ್ಯ ಸ್ಕೋರ್',
    lastUpdated: 'ಕೊನೆಯ ಬಾರಿ ನವೀಕರಿಸಲಾಗಿದೆ',
    yourDoshaConstitution: 'ನಿಮ್ಮ ದೋಷ ಸಂವಿಧಾನ',
    assessmentCompleteStatus: 'ಮೌಲ್ಯಮಾಪನ ಪೂರ್ಣಗೊಂಡಿದೆ',
    confidenceLevel: 'ವಿಶ್ವಾಸ ಮಟ್ಟ',
    riskLevel: 'ಅಪಾಯ ಮಟ್ಟ',
    low: 'ಕಡಿಮೆ',
    medium: 'ಮಧ್ಯಮ',
    high: 'ಹೆಚ್ಚು',
    
    // Health Metrics
    healthMetrics: 'ಆರೋಗ್ಯ ಮೆಟ್ರಿಕ್ಸ್',
    sleepQuality: 'ನಿದ್ರೆಯ ಗುಣಮಟ್ಟ',
    digestiveHealth: 'ಜೀರ್ಣಾಂಗ ಆರೋಗ್ಯ',
    stressLevel: 'ಒತ್ತಡದ ಮಟ್ಟ',
    energyLevel: 'ಶಕ್ತಿಯ ಮಟ್ಟ',
    moderate: 'ಮಧ್ಯಮ',
    good: 'ಉತ್ತಮ',
    
    // Today's Focus
    todaysFocus: 'ಇಂದಿನ ಗಮನ',
    autumn: 'ಶರತ್ಕಾಲ',
    focusGrounding: 'ಗ್ರೌಂಡಿಂಗ್ ಅಭ್ಯಾಸಗಳ ಮೇಲೆ ಗಮನ',
    dietTab: 'ಆಹಾರ',
    lifestyleTab: 'ಜೀವನಶೈಲಿ',
    yogaTab: 'ಯೋಗ',
    
    // Diet Recommendations
    startWarmOatmeal: 'ದಾಲ್ಚಿನ್ನಿಯೊಂದಿಗೆ ಬೆಚ್ಚಗಿನ ಓಟ್ಸ್‌ನೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ',
    includeTastes: 'ಸಿಹಿ, ಹುಳಿ ಮತ್ತು ಉಪ್ಪು ರುಚಿಗಳನ್ನು ಸೇರಿಸಿ',
    avoidColdDrinks: 'ತಣ್ಣನೆಯ ಪಾನೀಯಗಳು ಮತ್ತು ಕಚ್ಚಾ ಆಹಾರವನ್ನು ತಪ್ಪಿಸಿ',
    largestMealLunch: 'ಮಧ್ಯಾಹ್ನದ ಊಟವನ್ನು ನಿಮ್ಮ ದೊಡ್ಡ ಊಟವಾಗಿ ಮಾಡಿ',
    
    // AI Health Insights
    aiHealthInsights: 'AI ಆರೋಗ್ಯ ಒಳನೋಟಗಳು',
    digestiveFire: 'ಜೀರ್ಣಾಗ್ನಿ',
    sleepPattern: 'ನಿದ್ರೆಯ ಮಾದರಿ',
    stressResponse: 'ಒತ್ತಡದ ಪ್ರತಿಕ್ರಿಯೆ',
    highPriority: 'ಹೆಚ್ಚಿನ ಆದ್ಯತೆ',
    mediumPriority: 'ಮಧ್ಯಮ ಆದ್ಯತೆ',
    
    // Progress Tracking
    progressTracking: 'ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್',
    dayStreak: 'ದಿನದ ಸರಣಿ',
    goalsCompleted: 'ಗುರಿಗಳು ಪೂರ್ಣಗೊಂಡವು',
    weeklyImprovement: 'ಸಾಪ್ತಾಹಿಕ ಸುಧಾರಣೆ',
    weeklyGoalsCompleted: 'ಸಾಪ್ತಾಹಿಕ ಗುರಿಗಳು ಪೂರ್ಣಗೊಂಡವು',
    
    // Quick Actions
    quickActions: 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು',
    viewFullReport: 'ಪೂರ್ಣ ವರದಿಯನ್ನು ವೀಕ್ಷಿಸಿ',
    todaysTips: 'ಇಂದಿನ ಸಲಹೆಗಳು',
    connectDevice: 'ಸಾಧನವನ್ನು ಸಂಪರ್ಕಿಸಿ',
    scheduleFollowup: 'ಫಾಲೋ-ಅಪ್ ಅನ್ನು ನಿಗದಿಪಡಿಸಿ',
    learnAboutDosha: 'ದೋಷದ ಬಗ್ಗೆ ಕಲಿಯಿರಿ',
    setNewGoals: 'ಹೊಸ ಗುರಿಗಳನ್ನು ಹೊಂದಿಸಿ',
    
    // Today's Tasks
    todaysTasks: 'ಇಂದಿನ ಕಾರ್ಯಗಳು',
    completeDailyMeditation: 'ದೈನಂದಿನ ಧ್ಯಾನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
    logEveningMeal: 'ಸಂಜೆಯ ಊಟವನ್ನು ಲಾಗ್ ಮಾಡಿ',
    takeStressAssessment: 'ಒತ್ತಡದ ಮೌಲ್ಯಮಾಪನವನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ',
    reviewWeeklyProgress: 'ಸಾಪ್ತಾಹಿಕ ಪ್ರಗತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ',
    
    // Auth Pages
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    email: 'ಇಮೇಲ್',
    phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    password: 'ಪಾಸ್‌ವರ್ಡ್',
    reenterPassword: 'ಪಾಸ್‌ವರ್ಡ್ ಮರು-ನಮೂದಿಸಿ',
    forgotPassword: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ?',
    dontHaveAccount: 'ಖಾತೆ ಇಲ್ಲವೇ?',
    alreadyHaveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?',
    signInWithGoogle: 'Google ನೊಂದಿಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ',
    signUpWithGoogle: 'Google ನೊಂದಿಗೆ ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    goBack: 'ಹಿಂತಿರುಗಿ',
    
    // Footer
    quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    resources: 'ಸಂಪನ್ಮೂಲಗಳು',
    ayurvedaResearch: 'ಆಯುರ್ವೇದ ಸಂಶೋಧನೆ',
    healthGuidelines: 'ಆರೋಗ್ಯ ಮಾರ್ಗಸೂಚಿಗಳು',
    privacyPolicy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
    bridgingAncientWisdom: 'ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಪ್ರಾಚೀನ ಜ್ಞಾನವನ್ನು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಸೇತುವೆ ಮಾಡುವುದು.',
    allRightsReserved: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ.',
    
    // Contact
    getInTouch: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    questionsAboutHealth: 'ನಿಮ್ಮ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ ಅಥವಾ ಆಯುರ್ವೇದ ವೈದ್ಯರಿಂದ ಮಾರ್ಗದರ್ಶನ ಬೇಕೇ?',
    consultationHours: 'ಸಮಾಲೋಚನೆ ಸಮಯ',
    sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    message: 'ಸಂದೇಶ',
    
    // About
    scienceBehindDoshas: 'ದೋಷಗಳ ಹಿಂದಿನ ವಿಜ್ಞಾನ',
    ayurvedaDescription: 'ಆಯುರ್ವೇದ, ಪ್ರಾಚೀನ ಭಾರತೀಯ ವೈದ್ಯ ವ್ಯವಸ್ಥೆ, ದೇಹ, ಮನಸ್ಸು ಮತ್ತು ಪ್ರಜ್ಞೆಯ ಎಲ್ಲಾ ಜೈವಿಕ, ಮಾನಸಿಕ ಮತ್ತು ಶಾರೀರಿಕ ಕಾರ್ಯಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಮೂರು ಮೂಲಭೂತ ಶಕ್ತಿಗಳು ಅಥವಾ ದೋಷಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.',
    aiEnhancedAnalysis: 'AI-ವರ್ಧಿತ ವಿಶ್ಲೇಷಣೆ',
    aiAnalysisDesc: 'ನಮ್ಮ ವೇದಿಕೆಯು ನಿಮ್ಮ ಸಂವಿಧಾನ ಮತ್ತು ಆರೋಗ್ಯ ಪ್ರವೃತ್ತಿಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸಲು ಸಾಂಪ್ರದಾಯಿಕ ಆಯುರ್ವೇದಿಕ ಜ್ಞಾನವನ್ನು ಆಧುನಿಕ AI ಅಲ್ಗಾರಿದಮ್‌ಗಳೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ.',
    preventiveCare: 'ತಡೆಗಟ್ಟುವ ಆರೈಕೆ',
    preventiveCareDesc: 'ನಮ್ಮ ಸಮಗ್ರ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ, ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಸಂವಿಧಾನವನ್ನು ಬೆಂಬಲಿಸುವ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಆರೋಗ್ಯವನ್ನು ಉತ್ತೇಜಿಸುವ ತಿಳುವಳಿಕೆಯುಳ್ಳ ಜೀವನಶೈಲಿ ಆಯ್ಕೆಗಳನ್ನು ನೀವು ಮಾಡಬಹುದು.',
    importantDisclaimer: 'ಪ್ರಮುಖ ಹಕ್ಕು ನಿರಾಕರಣೆ',
    disclaimerText: 'ಈ ವ್ಯವಸ್ಥೆಯು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆಯನ್ನು ಬದಲಿಸಲು ಉದ್ದೇಶಿಸಿಲ್ಲ. ವೈದ್ಯಕೀಯ ನಿರ್ಧಾರಗಳಿಗಾಗಿ ಯಾವಾಗಲೂ ಅರ್ಹ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರೊಂದಿಗೆ ಸಮಾಲೋಚಿಸಿ.',
    
    // Features
    aiBased: 'AI-ಆಧಾರಿತ ದೋಷ ವರ್ಗೀಕರಣ',
    aiBasedDesc: 'ಪ್ರಶ್ನಾವಳಿಗಳು ಮತ್ತು ನೈಜ-ಸಮಯದ ಧರಿಸಬಹುದಾದ ಡೇಟಾದ ಮೂಲಕ ವೈಯಕ್ತಿಕ ಆಯುರ್ವೇದಿಕ ದೇಹ ಸಂವಿಧಾನವನ್ನು ಗುರುತಿಸಲು ಯಂತ್ರ ಕಲಿಕೆ ಮಾದರಿಗಳನ್ನು ಬಳಸುತ್ತದೆ.',
    realTimeMonitoring: 'ನೈಜ-ಸಮಯದ ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆ',
    realTimeDesc: 'IoT ಮತ್ತು ಧರಿಸಬಹುದಾದ ಸಾಧನಗಳ ಮೂಲಕ ಹೃದಯ ಬಡಿತ, ನಿದ್ರೆ ಮತ್ತು ಒತ್ತಡದಂತಹ ಶಾರೀರಿಕ ನಿಯತಾಂಕಗಳನ್ನು ನಿರಂತರವಾಗಿ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ.',
    cancerRisk: 'ಕ್ಯಾನ್ಸರ್ ಅಪಾಯ ಮುನ್ಸೂಚನೆ',
    cancerRiskDesc: 'ಉರಿಯೂತದ ಪರಿಸ್ಥಿತಿಗಳು ಮತ್ತು ಆರಂಭಿಕ ಕ್ಯಾನ್ಸರ್ ಅಪಾಯದ ಸೂಚಕಗಳೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದ ದೀರ್ಘಕಾಲದ ದೋಷ ಅಸಮತೋಲನಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.',
    personalizedWellness: 'ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಶಿಫಾರಸುಗಳು',
    personalizedWellnessDesc: 'ಪ್ರಸ್ತುತ ದೋಷ ಸ್ಥಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಆಹಾರ, ಯೋಗ, ಧ್ಯಾನ ಮತ್ತು ಜೀವನಶೈಲಿ ಅಭ್ಯಾಸಗಳ ಕುರಿತು ಕ್ರಿಯಾತ್ಮಕ, ಅನುಕೂಲಿತ ಸಲಹೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.',
    
    // How It Works
    dataCollection: 'ಡೇಟಾ ಸಂಗ್ರಹಣೆ',
    dataCollectionDesc: 'ಬಳಕೆದಾರರು ವೈಯಕ್ತಿಕ ಪ್ರಶ್ನಾವಳಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸುತ್ತಾರೆ ಮತ್ತು ಸಮಗ್ರ ಡೇಟಾ ಸಂಗ್ರಹಣೆಗಾಗಿ ಧರಿಸಬಹುದಾದ ಸಾಧನಗಳನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
    aiAnalysisStep: 'AI ವಿಶ್ಲೇಷಣೆ',
    aiAnalysisStepDesc: 'ಯಂತ್ರ ಕಲಿಕೆ ಮಾದರಿಗಳು ದೋಷ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತವೆ ಮತ್ತು ಸಂಭಾವ್ಯ ಆರೋಗ್ಯ ಅಸಮತೋಲನಗಳನ್ನು ಗುರುತಿಸುತ್ತವೆ.',
    riskAssessment: 'ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ',
    riskAssessmentDesc: 'ವ್ಯವಸ್ಥೆಯು ಉರಿಯೂತದ ಪರಿಸ್ಥಿತಿಗಳೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದ ಸಂಭಾವ್ಯ ಆರೋಗ್ಯ ಅಪಾಯಗಳು ಮತ್ತು ಅಸಮತೋಲನಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.',
    personalizedRecommendationsStep: 'ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳು',
    personalizedRecommendationsStepDesc: 'ಪ್ರಸ್ತುತ ದೋಷ ಸ್ಥಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಆಹಾರ, ಜೀವನಶೈಲಿ, ಯೋಗ ಮತ್ತು ಧ್ಯಾನ ಅಭ್ಯಾಸಗಳಿಗಾಗಿ ಕ್ರಿಯಾತ್ಮಕ ಸಲಹೆಗಳು.'
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
      kannada: 'ಭಾಷೆ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ!'
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