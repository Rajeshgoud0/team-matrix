import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { governmentSchemes } from '../data/schemes';

function ApplicationForm() {
  const { t } = useTranslation();
  const { schemeId } = useParams();
  const navigate = useNavigate();
  const scheme = governmentSchemes.find((item) => String(item.id) === schemeId);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const fields = useMemo(() => {
    if (!scheme || !Array.isArray(scheme.formFields) || scheme.formFields.length === 0) {
      return [
        { name: 'fullName', label: t('applicationForm.fullName'), type: 'text', required: true },
        { name: 'mobile', label: t('applicationForm.mobile'), type: 'tel', required: true },
        { name: 'state', label: t('applicationForm.state'), type: 'text', required: true },
        { name: 'aadhaar', label: t('applicationForm.aadhaar'), type: 'text', required: true },
        { name: 'notes', label: t('applicationForm.notes'), type: 'textarea', required: false }
      ];
    }

    return scheme.formFields.map((field) => ({
      ...field,
      label: t(`applicationForm.fields.${field.name}`, field.label),
      options: field.options?.map((option) => ({
        value: option,
        label: t(`applicationForm.options.${option.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`, option)
      }))
    }));
  }, [scheme, t]);

  if (!scheme) return <div className="container mx-auto py-12 px-4">{t('details.notFound')}</div>;

  if (submitted) {
    return <div className="container mx-auto py-12 px-4 text-center"><h1 className="text-3xl font-bold mb-4">{t('applicationForm.successTitle')}</h1><p className="mb-6">{t('applicationForm.successText')}</p><Link to="/schemes" className="bg-blue-600 text-white px-5 py-3 rounded">{t('details.backToSchemes')}</Link></div>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <button type="button" onClick={() => navigate(-1)} className="border border-blue-600 text-blue-600 px-4 py-2 rounded mb-4 hover:bg-blue-600 hover:text-white transition">{t('navigation.back')}</button>
      <div className="bg-white p-6 md:p-10 rounded shadow max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{t('applicationForm.title')}</h1>
        <p className="text-gray-600 mb-6">{t(`schemeNames.${scheme.id}`, scheme.name)}</p>
        <div className="mb-6 rounded border border-blue-100 bg-blue-50 p-4">
          <p className="font-semibold text-blue-700">{t('details.applicationMode')}</p>
          <p className="text-gray-700">{t(`applicationForm.applicationModes.${scheme.id}`, scheme.applicationMode)}</p>
          <a href={scheme.officialFormUrl || scheme.officialWebsite} target="_blank" rel="noreferrer" className="text-blue-600 underline mt-2 inline-block">{t('applicationForm.officialForm')}</a>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-4">
          {fields.map((field) => {
            const baseClassName = 'w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200';
            if (field.type === 'select') {
              return (
                <label key={field.name} className="block">
                  <span className="font-semibold">{field.label}</span>
                  <select name={field.name} required={field.required} value={formData[field.name] || ''} onChange={handleChange} className={baseClassName}>
                    <option value="">{t('applicationForm.select')}</option>
                    {(field.options || []).map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </label>
              );
            }

            if (field.type === 'textarea') {
              return (
                <label key={field.name} className="block">
                  <span className="font-semibold">{field.label}</span>
                  <textarea name={field.name} value={formData[field.name] || ''} onChange={handleChange} rows="4" className={baseClassName} />
                </label>
              );
            }

            return (
              <label key={field.name} className="block">
                <span className="font-semibold">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type || 'text'}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className={baseClassName}
                />
              </label>
            );
          })}
          <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">{t('applicationForm.submit')}</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;