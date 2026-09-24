import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { governmentSchemes } from '../data/schemes';

function SchemeDirectory() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryLookup = {
    agriculture: t('schemeCategories.agriculture'),
    housing: t('schemeCategories.housing'),
    health: t('schemeCategories.health'),
    employment: t('schemeCategories.employment'),
    energy: t('schemeCategories.energy'),
    banking: t('schemeCategories.banking'),
    'skill development': t('schemeCategories.skillDevelopment'),
    business: t('schemeCategories.business'),
    pension: t('schemeCategories.pension'),
    education: t('schemeCategories.education')
  };

  const categories = ['all', ...new Set(governmentSchemes.map((scheme) => scheme.category.toLowerCase()))];

  const filteredSchemes = governmentSchemes.filter((scheme) => {
    const matchesCategory =
      selectedCategory === 'all' || scheme.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="scheme-directory container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">{t('schemes.title')}</h1>

      <div className="bg-white p-6 rounded shadow mb-8">
        <input
          type="text"
          placeholder={t('schemes.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-3 border rounded"
        >
          <option value="all">{t('schemes.allCategories')}</option>
          {categories.slice(1).map((category) => (
            <option key={category} value={category}>
              {categoryLookup[category] || category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-5">
        {filteredSchemes.map((scheme) => (
          <div key={scheme.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${scheme.logoBg} text-white font-bold text-lg flex items-center justify-center`}>
                  {scheme.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{scheme.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {categoryLookup[scheme.category.toLowerCase()] || scheme.category}
                  </p>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {t('schemes.open')}
              </span>
            </div>

            <p className="text-gray-700 mt-4 mb-4">{scheme.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">{t('schemes.benefit')}</p>
                <p>{scheme.benefit}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">{t('schemes.registration')}</p>
                <p>{scheme.registrationStart} {t('schemes.to')} {scheme.registrationEnd}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">{t('schemes.lastDate')}</p>
                <p>{scheme.lastDate}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-1">{t('schemes.eligibility')}</p>
              <p className="text-gray-700">{scheme.eligibility}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">{t('schemes.requiredDocuments')}</p>
              <div className="flex flex-wrap gap-2">
                {scheme.requiredDocuments.map((doc) => (
                  <span key={doc} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={scheme.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                {t('schemes.officialWebsite')}
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {t('schemes.viewDetails')}
              </button>
            </div>
          </div>
        ))}

        {filteredSchemes.length === 0 && (
          <div className="bg-white p-8 rounded shadow text-center text-gray-600">
            {t('schemes.noResults')}
          </div>
        )}
      </div>
    </div>
  );
}

export default SchemeDirectory;
