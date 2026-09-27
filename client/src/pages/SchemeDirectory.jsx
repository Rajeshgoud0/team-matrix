import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { governmentSchemes } from '../data/schemes';
import SchemeArtwork from '../components/SchemeArtwork';
import RegistrationDeadlineNotice from '../components/RegistrationDeadlineNotice';

const getSchemeContent = (scheme, t) => {
  return {
    name: t(`schemeNames.${scheme.id}`, scheme.name),
    description: t(`schemeTemplates.${scheme.category}.description`, scheme.description),
    benefit: t(`schemeTemplates.${scheme.category}.benefit`, scheme.benefit),
    eligibility: t(`schemeTemplates.${scheme.category}.eligibility`, scheme.eligibility),
    documents: t('schemeTemplates.documents', { returnObjects: true })
  };
};

function SchemeDirectory() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
    education: t('schemeCategories.education'),
    technology: t('schemeCategories.technology'),
    'women & children': t('schemeCategories.womenChildren'),
    infrastructure: t('schemeCategories.infrastructure')
  };

  const categories = ['all', ...new Set(governmentSchemes.map((scheme) => scheme.category.toLowerCase()))];

  const filteredSchemes = governmentSchemes.filter((scheme) => {
    const content = getSchemeContent(scheme, t);
    const matchesCategory =
      selectedCategory === 'all' || scheme.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      content.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="scheme-directory container mx-auto py-12 px-4">
      <button type="button" onClick={() => navigate(-1)} className="border border-blue-600 text-blue-600 px-4 py-2 rounded mb-4 hover:bg-blue-600 hover:text-white transition">
        {t('navigation.back')}
      </button>
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
          (() => {
            const content = getSchemeContent(scheme, t);
            return (
          <div key={scheme.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <SchemeArtwork scheme={scheme} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{content.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {categoryLookup[scheme.category.toLowerCase()] || scheme.category}
                  </p>
                  <RegistrationDeadlineNotice registrationEnd={scheme.registrationEnd} />
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {t('schemes.open')}
              </span>
            </div>

            <p className="text-gray-700 mt-4 mb-4">{content.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">{t('schemes.benefit')}</p>
                <p>{content.benefit}</p>
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
              <p className="text-gray-700">{content.eligibility}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-2">{t('schemes.requiredDocuments')}</p>
              <div className="flex flex-wrap gap-2">
                {content.documents.map((doc) => (
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
              <Link to={`/schemes/${scheme.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {t('schemes.viewDetails')}
              </Link>
            </div>
          </div>
            );
          })()
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
