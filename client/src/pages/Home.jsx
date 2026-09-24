import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="hero bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-xl mb-8">{t('home.subtitle')}</p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/schemes"
              className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100"
            >
              {t('home.browseSchemes')}
            </Link>
            <Link
              to="/eligibility"
              className="bg-blue-800 text-white px-8 py-3 rounded font-bold hover:bg-blue-900"
            >
              {t('home.checkEligibility')}
            </Link>
          </div>
        </div>
      </section>

      <section className="features py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.featuresTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-3">🔍 {t('home.feature1Title')}</h3>
              <p>{t('home.feature1Text')}</p>
            </div>
            <div className="feature bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-3">✓ {t('home.feature2Title')}</h3>
              <p>{t('home.feature2Text')}</p>
            </div>
            <div className="feature bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-3">📋 {t('home.feature3Title')}</h3>
              <p>{t('home.feature3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.ctaTitle')}</h2>
          <p className="text-lg mb-6">{t('home.ctaText')}</p>
          <Link
            to="/schemes"
            className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700"
          >
            {t('home.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
