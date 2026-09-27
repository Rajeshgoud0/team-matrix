import React from 'react';
import { useTranslation } from 'react-i18next';

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export function getDaysUntilRegistrationEnd(registrationEnd, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(registrationEnd || '')) {
    return null;
  }

  const [year, month, day] = registrationEnd.split('-').map(Number);
  const deadline = Date.UTC(year, month - 1, day);
  const parsedDeadline = new Date(deadline);

  if (
    parsedDeadline.getUTCFullYear() !== year ||
    parsedDeadline.getUTCMonth() !== month - 1 ||
    parsedDeadline.getUTCDate() !== day
  ) {
    return null;
  }

  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((deadline - today) / DAY_IN_MILLISECONDS);
}

function RegistrationDeadlineNotice({ registrationEnd }) {
  const { t } = useTranslation();
  const daysRemaining = getDaysUntilRegistrationEnd(registrationEnd);

  if (daysRemaining === null || daysRemaining < 0 || daysRemaining > 15) {
    return null;
  }

  const messageKey = daysRemaining === 0
    ? 'schemes.closingToday'
    : daysRemaining === 1
      ? 'schemes.closingTomorrow'
      : 'schemes.closingInDays';

  return (
    <p role="status" className="mt-3 inline-block rounded border border-amber-300 bg-amber-50 px-3 py-2 font-semibold text-amber-900">
      {t(messageKey, daysRemaining > 1 ? { count: daysRemaining } : undefined)}
    </p>
  );
}

export default RegistrationDeadlineNotice;