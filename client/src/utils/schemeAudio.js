export const LANGUAGE_STORAGE_KEY = 'janyojana-language';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', locale: 'en-IN' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు', locale: 'te-IN' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', locale: 'hi-IN' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', locale: 'kn-IN' }
];

export function normalizeLanguageCode(language) {
  if (!language) return 'en';

  const normalizedLanguage = String(language).trim().toLowerCase();

  if (normalizedLanguage.startsWith('en')) return 'en';
  if (normalizedLanguage.startsWith('te')) return 'te';
  if (normalizedLanguage.startsWith('hi')) return 'hi';
  if (normalizedLanguage.startsWith('kn')) return 'kn';

  return 'en';
}

export function getSupportedLanguages() {
  return SUPPORTED_LANGUAGES;
}

export function getLanguageOption(language) {
  const normalizedLanguage = normalizeLanguageCode(language);
  return SUPPORTED_LANGUAGES.find((option) => option.code === normalizedLanguage) || SUPPORTED_LANGUAGES[0];
}

export function getStoredLanguage(language, fallbackLanguage = 'en') {
  const normalizedLanguage = normalizeLanguageCode(language || fallbackLanguage);
  return SUPPORTED_LANGUAGES.some((option) => option.code === normalizedLanguage)
    ? normalizedLanguage
    : normalizeLanguageCode(fallbackLanguage);
}

const speechLocales = {
  en: 'en-IN',
  hi: 'hi-IN',
  kn: 'kn-IN',
  te: 'te-IN'
};

export function getSpeechLocale(language) {
  const languageCode = normalizeLanguageCode(language);
  return speechLocales[languageCode] || speechLocales.en;
}

export function findPreferredSpeechVoice(voices, language) {
  if (!Array.isArray(voices) || voices.length === 0) {
    return null;
  }

  const locale = getSpeechLocale(language);
  const languageCode = normalizeLanguageCode(language);
  const normalizedLocale = String(locale).toLowerCase();
  const normalizedLanguageCode = String(languageCode).toLowerCase();

  return voices.find((voice) => VoiceSelection.matchesLocale(voice.lang, locale))
    || voices.find((voice) => VoiceSelection.matchesLanguageCode(voice.lang, normalizedLanguageCode))
    || voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith(`${normalizedLocale.split('-')[0]}-`))
    || voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith(normalizedLocale.split('-')[0]))
    || voices[0]
    || null;
}

const VoiceSelection = {
  matchesLocale: (voiceLang, locale) => {
    if (!voiceLang) return false;
    const candidate = String(voiceLang).toLowerCase();
    const normalizedLocale = String(locale).toLowerCase();
    return candidate === normalizedLocale || candidate.startsWith(`${normalizedLocale}-`);
  },
  matchesLanguageCode: (voiceLang, languageCode) => {
    if (!voiceLang || !languageCode) return false;
    const candidate = String(voiceLang).toLowerCase();
    const normalizedLanguageCode = String(languageCode).toLowerCase();
    return candidate === normalizedLanguageCode || candidate.startsWith(`${normalizedLanguageCode}-`);
  }
};

export function buildSchemeAudioText({
  schemeName,
  description,
  benefitLabel,
  benefit,
  eligibilityLabel,
  eligibility,
  howToApplyLabel,
  steps,
  documentsLabel,
  documents,
  applicationFeeLabel,
  applicationFee
}) {
  return [
    schemeName,
    description,
    `${benefitLabel}: ${benefit}`,
    `${eligibilityLabel}: ${eligibility}`,
    `${howToApplyLabel}: ${steps.map((step, index) => `${index + 1}. ${step}`).join(' ')}`,
    `${documentsLabel}: ${documents.join(', ')}`,
    `${applicationFeeLabel}: ${applicationFee}`
  ].join('. ');
}