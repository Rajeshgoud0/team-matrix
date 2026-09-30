import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { governmentSchemes } from '../data/schemes';
import SchemeArtwork from '../components/SchemeArtwork';
import RegistrationDeadlineNotice from '../components/RegistrationDeadlineNotice';
import SchemeAudioGuide from '../components/SchemeAudioGuide';
import { buildSchemeAudioText } from '../utils/schemeAudio';

function SchemeDetails() {
  const { t, i18n } = useTranslation();
  const { schemeId } = useParams();
  const navigate = useNavigate();
  const scheme = governmentSchemes.find((item) => String(item.id) === schemeId);

  if (!scheme) {
    return <div className="container mx-auto py-12 px-4">{t('details.notFound')}</div>;
  }

  const schemeContent = scheme.id === 1
    ? t('schemeContent.pmKisan', { returnObjects: true })
    : {};
  const categoryContent = t(`schemeTemplates.${scheme.category}`, { returnObjects: true });
  const schemeName = t(`schemeNames.${scheme.id}`, scheme.name);
  const description = schemeContent.description || categoryContent.description || scheme.description;
  const benefit = schemeContent.benefit || categoryContent.benefit || scheme.benefit;
  const eligibility = schemeContent.eligibility || categoryContent.eligibility || scheme.eligibility;
  const steps = schemeContent.howToApply || t('schemeTemplates.howToApply', { returnObjects: true });
  const documents = schemeContent.documents || t('schemeTemplates.documents', { returnObjects: true });
  const applicationMode = t(`applicationForm.applicationModes.${scheme.id}`, scheme.applicationMode);
  const applicationFee = t('details.feeNotListed');
  const audioText = buildSchemeAudioText({
    schemeName,
    description,
    benefitLabel: t('details.benefit'),
    benefit,
    eligibilityLabel: t('details.eligibility'),
    eligibility,
    howToApplyLabel: t('details.howToApply'),
    steps,
    documentsLabel: t('details.documents'),
    documents,
    applicationFeeLabel: t('details.applicationFee'),
    applicationFee
  });
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
    Education: 'education',
    Technology: 'technology',
    'Women & Children': 'womenChildren',
    Infrastructure: 'infrastructure'
  };
  const localizedCategory = t(`schemeCategories.${categoryKeys[scheme.category]}`, scheme.category);

  return (
    <div className="container mx-auto py-12 px-4">
      <button type="button" onClick={() => navigate(-1)} className="border border-blue-600 text-blue-600 px-4 py-2 rounded mr-4 mb-4 hover:bg-blue-600 hover:text-white transition">{t('navigation.back')}</button>
      <Link to="/schemes" className="text-blue-600 hover:underline">{t('details.backToSchemes')}</Link>
      <div className="bg-white p-6 md:p-10 rounded shadow mt-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <SchemeArtwork scheme={scheme} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{schemeName}</h1>
            <p className="text-blue-600 font-semibold mt-1">{localizedCategory}</p>
            <RegistrationDeadlineNotice registrationEnd={scheme.registrationEnd} />
          </div>
        </div>
        <div className="mt-5">
          <SchemeAudioGuide text={audioText} language={i18n.language} />
        </div>
        <p className="text-lg text-gray-700 mt-6">
          {description}
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.benefit')}</h2>
            <p>{benefit}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.eligibility')}</h2>
            <p>{eligibility}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.howToApply')}</h2>
            <ol className="list-decimal pl-5 space-y-2">{steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">{t('details.documents')}</h2>
            <ul className="list-disc pl-5 space-y-2">{documents.map((document) => <li key={document}>{document}</li>)}</ul>
          </section>
        </div>
        <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
          <p className="font-semibold text-gray-800 mb-1">{t('details.applicationMode')}</p>
          <p className="text-gray-700">{applicationMode}</p>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200">
          <p className="font-semibold text-gray-800 mb-1">{t('details.applicationFee')}</p>
          <p className="text-gray-700">{applicationFee}</p>
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