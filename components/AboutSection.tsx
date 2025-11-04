"use client";

import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('scienceBehindDoshas')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('ayurvedaDescription')}
          </p>
        </div>

        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t('aiEnhancedAnalysis')}
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-center leading-relaxed mb-8">
            {t('aiAnalysisDesc')}
          </p>
        </div>

        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t('preventiveCare')}
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            {t('preventiveCareDesc')}
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-red-800 mb-2">{t('importantDisclaimer')}</h4>
          <p className="text-red-700 text-sm leading-relaxed">
            {t('disclaimerText')}
          </p>
        </div>
      </div>
    </section>
  );
}