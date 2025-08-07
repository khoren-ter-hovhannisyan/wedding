import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const WeddingCalendar: React.FC = () => {
  const { t } = useLanguage();
  // Wedding date: September 27, 2025
  const weddingDate = new Date(2025, 8, 27); // Month is 0-indexed
  const currentMonth = 8; // September
  const currentYear = 2025;
  
  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Create array of days
  const days = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-script text-navy-900 mb-2">{t('calendar.title')}</h3>
        <div className="w-16 h-1 bg-rose-400 mx-auto rounded-full"></div>
      </div>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={20} className="text-navy-600" />
        </button>
        <h4 className="text-xl font-semibold text-navy-900">
          {t('calendar.september')} {currentYear}
        </h4>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronRight size={20} className="text-navy-600" />
        </button>
      </div>
      
      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((dayName) => (
          <div key={dayName} className="text-center text-sm font-medium text-navy-500 py-2">
            {dayName}
          </div>
        ))}
      </div>
      
      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="aspect-square flex items-center justify-center">
            {day && (
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  day === 27
                    ? 'bg-rose-500 text-white shadow-lg transform scale-110 ring-4 ring-rose-200'
                    : 'text-navy-700 hover:bg-rose-100 hover:text-rose-600'
                }`}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>
      
      {/* Wedding Date Highlight */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-rose-50 px-4 py-2 rounded-full">
          <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
          <span className="text-rose-700 font-medium">{t('calendar.wedding_day')}</span>
        </div>
      </div>
    </div>
  );
};