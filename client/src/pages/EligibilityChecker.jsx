import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function EligibilityChecker() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    category: '',
    state: ''
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults({
      eligible: [
        'Pradhan Mantri Kisan Samman Nidhi',
        'NREGA - Rural Employment'
      ],
      notEligible: ['SC/ST Housing Scheme']
    });
  };

  return (
    <div className="eligibility-checker container mx-auto py-12 px-4">
      <button type="button" onClick={() => navigate(-1)} className="text-blue-600 hover:underline mb-4">{t('navigation.back')}</button>
      <h1 className="text-4xl font-bold mb-8">{t('eligibility.title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">{t('eligibility.age')}</label>
              <input
                type="number"
                name="age"
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
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold"
            >
              {t('eligibility.checkButton')}
            </button>
          </form>
        </div>

        {results && (
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded shadow">
              <h3 className="text-xl font-bold text-green-700 mb-4">{t('eligibility.eligibleTitle')}</h3>
              <ul className="space-y-2">
                {results.eligible.map((scheme, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>{scheme}</span>
                  </li>
                ))}
              </ul>
            </div>
            {results.notEligible.length > 0 && (
              <div className="bg-red-50 p-6 rounded shadow">
                <h3 className="text-xl font-bold text-red-700 mb-4">{t('eligibility.notEligibleTitle')}</h3>
                <ul className="space-y-2">
                  {results.notEligible.map((scheme, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-red-600 font-bold mr-3">✗</span>
                      <span>{scheme}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EligibilityChecker;
