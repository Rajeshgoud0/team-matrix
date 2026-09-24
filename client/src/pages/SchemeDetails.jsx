import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { governmentSchemes } from '../data/schemes';

function SchemeDetails() {
  const { t } = useTranslation();
  const { schemeId } = useParams();
  const scheme = governmentSchemes.find((item) => String(item.id) === schemeId);
  const categoryKeys = {
    Agriculture: 'agriculture',
    Housing: 'housing',
    Health: 'health',
    Employment: 'employment',
    Energy: 'energy',
    Banking: 'banking',
    'Skill Development': 'skillDevelopment',
    Business: 'business',
    Pension: 'pension',
    Education: 'education'
  };

  if (!scheme) {
    return <div className="container mx-auto py-12 px-4">{t('details.notFound')}</div>;
  }

  const content = {
    name: t(`schemeNames.${scheme.id}`, scheme.name),
    description: t(`schemeTemplates.${scheme.category}.description`, scheme.description),
    benefit: t(`schemeTemplates.${scheme.category}.benefit`, scheme.benefit),
    eligibility: t(`schemeTemplates.${scheme.category}.eligibility`, scheme.eligibility),
    documents: t('schemeTemplates.documents', { returnObjects: true }),
    howToApply: t('schemeTemplates.howToApply', { returnObjects: true })
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Link to="/schemes" className="text-blue-600 hover:underline">{t('details.backToSchemes')}</Link>
      <div className="bg-white p-6 md:p-10 rounded shadow mt-4">
        <div className="flex items-start gap-4">
          <div className={`w-16 h-16 rounded-lg ${scheme.logoBg} text-white font-bold text-2xl flex items-center justify-center`}>{scheme.logo}</div>
          <div>
            <h1 className="text-3xl font-bold">{content.name}</h1>
            <p className="text-blue-600 font-semibold mt-1">{t(`schemeCategories.${categoryKeys[scheme.category]}`, scheme.category)}</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6">{content.description}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.benefit')}</h2>
            <p>{content.benefit}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.eligibility')}</h2>
            <p>{content.eligibility}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.howToApply')}</h2>
            <ol className="list-decimal pl-5 space-y-2">{content.howToApply.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.documents')}</h2>
            <ul className="list-disc pl-5 space-y-2">{content.documents.map((document) => <li key={document}>{document}</li>)}</ul>
          </section>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link to={`/apply/${scheme.id}`} className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">{t('details.applyNow')}</Link>
          <a href={scheme.officialWebsite} target="_blank" rel="noreferrer" className="border border-blue-600 text-blue-600 px-5 py-3 rounded hover:bg-blue-50">{t('schemes.officialWebsite')}</a>
        </div>
      </div>
    </div>
  );
}

export default SchemeDetails;