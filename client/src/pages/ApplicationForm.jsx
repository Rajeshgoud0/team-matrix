import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { governmentSchemes } from '../data/schemes';

function ApplicationForm() {
  const { t } = useTranslation();
  const { schemeId } = useParams();
  const navigate = useNavigate();
  const scheme = governmentSchemes.find((item) => String(item.id) === schemeId);
  const [submitted, setSubmitted] = useState(false);

  if (!scheme) return <div className="container mx-auto py-12 px-4">{t('details.notFound')}</div>;

  if (submitted) {
    return <div className="container mx-auto py-12 px-4 text-center"><h1 className="text-3xl font-bold mb-4">{t('applicationForm.successTitle')}</h1><p className="mb-6">{t('applicationForm.successText')}</p><Link to="/schemes" className="bg-blue-600 text-white px-5 py-3 rounded">{t('details.backToSchemes')}</Link></div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <button type="button" onClick={() => navigate(-1)} className="border border-blue-600 text-blue-600 px-4 py-2 rounded mb-4 hover:bg-blue-600 hover:text-white transition">{t('navigation.back')}</button>
      <div className="bg-white p-6 md:p-10 rounded shadow max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{t('applicationForm.title')}</h1>
        <p className="text-gray-600 mb-6">{t(`schemeNames.${scheme.id}`, scheme.name)}</p>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <label className="block"><span className="font-semibold">{t('applicationForm.fullName')}</span><input required className="w-full p-3 border rounded mt-1" /></label>
          <label className="block"><span className="font-semibold">{t('applicationForm.mobile')}</span><input required type="tel" className="w-full p-3 border rounded mt-1" /></label>
          <label className="block"><span className="font-semibold">{t('applicationForm.state')}</span><input required className="w-full p-3 border rounded mt-1" /></label>
          <label className="block"><span className="font-semibold">{t('applicationForm.aadhaar')}</span><input required className="w-full p-3 border rounded mt-1" /></label>
          <label className="block"><span className="font-semibold">{t('applicationForm.notes')}</span><textarea className="w-full p-3 border rounded mt-1" rows="4" /></label>
          <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">{t('applicationForm.submit')}</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;