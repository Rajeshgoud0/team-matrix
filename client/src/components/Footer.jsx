import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-3">{t('footer.about')}</h4>
            <p className="text-gray-400">
              JanYojana Portal helps rural citizens access government schemes.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">{t('footer.quickLinks')}</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">{t('footer.home')}</a></li>
              <li><a href="/schemes" className="hover:text-white">{t('footer.schemes')}</a></li>
              <li><a href="/eligibility" className="hover:text-white">{t('footer.support')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">{t('footer.contact')}</h4>
            <p className="text-gray-400">Email: support@janyojana.gov.in</p>
            <p className="text-gray-400">Phone: 1800-SCHEMES</p>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-gray-400">
          © 2026 JanYojana Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
