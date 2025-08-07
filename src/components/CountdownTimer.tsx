import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-serif text-navy-900 text-center mb-6">
        {t('countdown.title')}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-rose-50 rounded-xl p-4">
          <div className="text-3xl font-bold text-rose-600">{timeLeft.days}</div>
          <div className="text-sm text-rose-500 uppercase tracking-wide">{t('countdown.days')}</div>
        </div>
        <div className="bg-rose-50 rounded-xl p-4">
          <div className="text-3xl font-bold text-rose-600">{timeLeft.hours}</div>
          <div className="text-sm text-rose-500 uppercase tracking-wide">{t('countdown.hours')}</div>
        </div>
        <div className="bg-rose-50 rounded-xl p-4">
          <div className="text-3xl font-bold text-rose-600">{timeLeft.minutes}</div>
          <div className="text-sm text-rose-500 uppercase tracking-wide">{t('countdown.minutes')}</div>
        </div>
        <div className="bg-rose-50 rounded-xl p-4">
          <div className="text-3xl font-bold text-rose-600">{timeLeft.seconds}</div>
          <div className="text-sm text-rose-500 uppercase tracking-wide">{t('countdown.seconds')}</div>
        </div>
      </div>
    </div>
  );
};