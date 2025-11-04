"use client";

import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-16 px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t('howItWorks')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('dataCollection')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('dataCollectionDesc')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('aiAnalysisStep')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('aiAnalysisStepDesc')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('riskAssessment')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('riskAssessmentDesc')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('personalizedRecommendationsStep')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('personalizedRecommendationsStepDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}