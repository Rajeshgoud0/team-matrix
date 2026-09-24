import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar({ isLoggedIn, onLanguageChange, currentLanguage }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold">
          {t('nav.brand')}
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-200">
            {t('nav.home')}
          </Link>
          <Link to="/schemes" className="hover:text-blue-200">
            {t('nav.schemes')}
          </Link>
          <Link to="/eligibility" className="hover:text-blue-200">
            {t('nav.eligibility')}
          </Link>
          {isLoggedIn && (
            <Link to="/my-applications" className="hover:text-blue-200">
              {t('nav.myApplications')}
            </Link>
          )}
          <select
            aria-label="Select language"
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-blue-700 text-white px-2 py-1 rounded border border-blue-400 outline-none"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="te">తెలుగు</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
