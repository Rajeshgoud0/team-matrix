import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { findPreferredSpeechVoice, getLanguageOption, getSpeechLocale } from '../utils/schemeAudio';

function SchemeAudioGuide({ text, language }) {
  const { t } = useTranslation();
  const [playbackState, setPlaybackState] = useState('idle');
  const [voiceWarning, setVoiceWarning] = useState('');
  const utteranceRef = useRef(null);
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    setPlaybackState('idle');
    setVoiceWarning('');
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      utteranceRef.current = null;
    };
  }, [language, text]);

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    setPlaybackState('idle');
  };

  const getVoicesWithFallback = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return Promise.resolve([]);
    }

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    if (voices.length > 0) {
      return Promise.resolve(voices);
    }

    return new Promise((resolve) => {
      const handleVoicesChanged = () => {
        const readyVoices = synth.getVoices();
        if (readyVoices.length > 0) {
          synth.onvoiceschanged = null;
          resolve(readyVoices);
        }
      };

      synth.onvoiceschanged = handleVoicesChanged;
      handleVoicesChanged();
    });
  };

  const toggleAudio = async () => {
    if (playbackState === 'paused') {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.resume();
      }
      setPlaybackState('speaking');
      return;
    }

    if (playbackState === 'speaking') {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.pause();
      }
      setPlaybackState('paused');
      return;
    }

    const locale = getSpeechLocale(language);
    const voices = await getVoicesWithFallback();
    const utterance = new SpeechSynthesisUtterance(text);
    const preferredVoice = findPreferredSpeechVoice(voices, language);

    if (preferredVoice) {
      setVoiceWarning('');
      utterance.lang = locale;
      utterance.voice = preferredVoice;
    } else {
      setVoiceWarning('');
      utterance.lang = locale;
    }
    utterance.onend = () => {
      if (utteranceRef.current === utterance) {
        utteranceRef.current = null;
        setPlaybackState('idle');
      }
    };
    utterance.onerror = utterance.onend;
    utteranceRef.current = utterance;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setPlaybackState('speaking');
  };

  return (
    <div className="flex flex-wrap items-center gap-2" aria-live="polite">
      <button
        type="button"
        onClick={toggleAudio}
        disabled={!isSupported}
        className="border border-blue-700 text-blue-800 px-4 py-2 rounded hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {playbackState === 'idle'
          ? t('details.listenAudio')
          : playbackState === 'paused'
            ? t('details.resumeAudio')
            : t('details.pauseAudio')}
      </button>
      {playbackState !== 'idle' && (
        <button
          type="button"
          onClick={stopAudio}
          className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
        >
          {t('details.stopAudio')}
        </button>
      )}
      {!isSupported && <span className="text-sm text-gray-600">{t('details.audioUnsupported')}</span>}
      {voiceWarning && <span className="text-xs text-amber-700">{voiceWarning}</span>}
    </div>
  );
}

export default SchemeAudioGuide;