"use client";

import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t('features')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{t('aiBased')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('aiBasedDesc')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{t('realTimeMonitoring')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('realTimeDesc')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{t('cancerRisk')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('cancerRiskDesc')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{t('personalizedWellness')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('personalizedWellnessDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}