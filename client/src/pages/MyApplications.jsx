import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MyApplications({ isLoggedIn }) {
  const { t } = useTranslation();

  const applications = [
    {
      id: 1,
      scheme: 'Pradhan Mantri Kisan Samman Nidhi',
      status: 'Approved',
      submittedDate: '2026-02-15',
      statusColor: 'green'
    },
    {
      id: 2,
      scheme: 'NREGA',
      status: 'Pending',
      submittedDate: '2026-03-01',
      statusColor: 'yellow'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="my-applications container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">{t('applications.title')}</h1>
        <p className="text-xl mb-6">{t('applications.loginMessage')}</p>
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
          {t('applications.backHome')}
        </Link>
      </div>
    );
  }

  return (
    <div className="my-applications container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">{t('applications.title')}</h1>

      <div className="space-y-4">
        {applications.map((app) => {
          const statusClassName =
            app.statusColor === 'green'
              ? 'bg-green-100 text-green-800'
              : app.statusColor === 'yellow'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-100 text-gray-800';

          return (
            <div key={app.id} className="bg-white p-6 rounded shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{app.scheme}</h3>
                  <p className="text-gray-600 mb-2">
                    {t('applications.submitted')}: {new Date(app.submittedDate).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded font-semibold ${statusClassName}`}>
                  {app.status}
                </span>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {t('applications.viewDetails')}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyApplications;
