import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { indianStates, indianUnionTerritories } from '../data/indianRegions';
import { findEligibleSchemes } from '../utils/eligibility';

const screeningQuestions = [
  'ruralResident',
  'farmerLandholder',
  'notifiedCropArea',
  'artisan',
  'streetVendor',
  'streetVendorCertificate',
  'woman',
  'student',
  'governmentSchoolStudent',
  'unorganizedWorker',
  'seekingWorkOrTraining',
  'smallBusinessOwner',
  'startingBusiness',
  'lowIncomeBpl',
  'eligibleHealthHousehold',
  'noPuccaHouse',
  'noBankAccount',
  'childUnderFiveOrPregnant',
  'rooftopHomeowner',
  'girlChildUnderTen',
  'shgMember',
  'priorityDistrict',
  'projectOrganization',
  'willingManualWork',
  'irrigationDeficitVillage',
  'waterCommitteeMember',
  'noLpgConnection',
  'eligibleSchemeDistrict',
  'regularPensionContributions',
  'workerIncomeWithinLimit',
  'underservedArea',
  'meritoriousStudent',
  'eligibleDigitalServiceArea',
  'foodGrainDistrict',
  'registeredMissionShg'
];

const initialFormData = {
  age: '',
  income: '',
  category: '',
  state: '',
  ...Object.fromEntries(screeningQuestions.map((question) => [question, false]))
};

function EligibilityChecker() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(findEligibleSchemes({ ...formData, age: Number(formData.age) }));
  };

  return (
    <div className="eligibility-checker container mx-auto py-12 px-4">
      <button type="button" onClick={() => navigate(-1)} className="border border-blue-600 text-blue-600 px-4 py-2 rounded mb-4 hover:bg-blue-600 hover:text-white transition">{t('navigation.back')}</button>
      <h1 className="text-4xl font-bold mb-8">{t('eligibility.title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white p-6 rounded shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">{t('eligibility.age')}</label>
              <input
                type="number"
                name="age"
                min="0"
                max="120"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">{t('eligibility.income')}</label>
              <input
                type="number"
                name="income"
                min="0"
                value={formData.income}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">{t('eligibility.category')}</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              >
                <option value="">{t('eligibility.selectCategory')}</option>
                <option value="general">{t('eligibility.general')}</option>
                <option value="sc">{t('eligibility.sc')}</option>
                <option value="st">{t('eligibility.st')}</option>
                <option value="obc">{t('eligibility.obc')}</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">{t('eligibility.state')}</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              >
                <option value="">{t('eligibility.selectState')}</option>
                <optgroup label={t('eligibility.states')}>
                  {indianStates.map((state) => <option key={state} value={state}>{state}</option>)}
                </optgroup>
                <optgroup label={t('eligibility.unionTerritories')}>
                  {indianUnionTerritories.map((territory) => <option key={territory} value={territory}>{territory}</option>)}
                </optgroup>
              </select>
            </div>
            <fieldset className="border-t border-gray-200 pt-4">
              <legend className="font-semibold mb-3">{t('eligibility.profilePrompt')}</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {screeningQuestions.map((question) => (
                  <label key={question} className="flex items-start gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name={question}
                      checked={formData[question]}
                      onChange={handleChange}
                      className="mt-1 accent-blue-600"
                    />
                    <span>{t(`eligibility.profile.${question}`)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="text-sm text-gray-600">{t('eligibility.inputDisclaimer')}</p>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold"
            >
              {t('eligibility.checkButton')}
            </button>
          </form>
        </div>

        {results && (
          <section className="space-y-4" aria-live="polite">
            <div className="bg-green-50 p-6 rounded shadow">
              <h2 className="text-xl font-bold text-green-800 mb-3">
                {t('eligibility.matchesTitle', { count: results.length })}
              </h2>
              <p className="text-sm text-gray-700">{t('eligibility.matchesDisclaimer')}</p>
            </div>
            {results.length > 0 ? (
              <ul className="divide-y divide-gray-200 bg-white rounded shadow">
                {results.map((scheme) => (
                  <li key={scheme.id} className="p-4">
                    <Link to={`/schemes/${scheme.id}`} className="font-semibold text-blue-700 hover:underline">
                      {t(`schemeNames.${scheme.id}`, scheme.name)}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{scheme.shortName}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-white p-6 rounded shadow text-gray-700">
                {t('eligibility.noMatches')}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default EligibilityChecker;
