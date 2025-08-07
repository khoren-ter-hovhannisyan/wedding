import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hy' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.details': 'Details',
    'nav.photos': 'Photos',
    'nav.rsvp': 'RSVP',
    
    // Hero Section
    'hero.together': 'Together with our families',
    'hero.request': 'request the honor of your presence',
    'hero.date': 'Saturday, September 27th, 2025',
    'hero.names': 'Khoren & Monica',
    
    // Countdown
    'countdown.title': 'Until We Say "I Do"',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    
    // Calendar
    'calendar.title': 'Save the Date',
    'calendar.wedding_day': 'Our Wedding Day',
    'calendar.september': 'September',
    
    // Details
    'details.title': 'Celebration Details',
    'details.subtitle': 'Join us as we begin our forever',
    'details.ceremony': 'Ceremony',
    'details.reception': 'Reception',
    'details.ceremony_time': 'Ceremony Time',
    'details.reception_time': 'Reception Time',
    'details.ceremony_venue': 'Holy Mother of God Cathedral Church',
    'details.ceremony_address': 'Village of Jrvezh, Melkonyan Street, 94',
    'details.reception_venue': 'Hatis Hall',
    'details.reception_address': 'Kotayk Region, Aramus village',
    'details.ceremony_datetime': 'September 27th, 2025\n15:00',
    'details.reception_datetime': 'September 27th, 2025\n17:30 – 23:00',
    
    // Photos
    'photos.title': 'Our Journey Together',
    'photos.subtitle': 'Every picture tells our story of love, laughter, and the moments that brought us here',
    'photos.memory': 'Beautiful Memory',
    
    // Footer
    'footer.celebrate': 'We can\'t wait to celebrate with you!',
    'footer.contact': 'For questions, please contact us at',
  },
  hy: {
    // Navigation
    'nav.home': 'Գլխավոր',
    'nav.details': 'Մանրամասներ',
    'nav.photos': 'Նկարներ',
    'nav.rsvp': 'Հաստատում',
    
    // Hero Section
    'hero.together': 'Մեր ընտանիքների հետ միասին',
    'hero.request': 'հրավիրում ենք Ձեզ մեր հարսանիքին',
    'hero.date': 'Շաբաթ, 27 Սեպտեմբերի, 2025',
    'hero.names': 'Խորեն և Մոնիկա',
    
    // Countdown
    'countdown.title': 'Մինչև «Այո» ասելը',
    'countdown.days': 'Օր',
    'countdown.hours': 'Ժամ',
    'countdown.minutes': 'Րոպե',
    'countdown.seconds': 'Վայրկյան',
    
    // Calendar
    'calendar.title': 'Պահպանեք ամսաթիվը',
    'calendar.wedding_day': 'Մեր հարսանիքի օրը',
    'calendar.september': 'Սեպտեմբեր',
    
    // Details
    'details.title': 'Տոնակատարության մանրամասներ',
    'details.subtitle': 'Միացեք մեզ, երբ սկսում ենք մեր հավերժությունը',
    'details.ceremony': 'Պսակադրություն',
    'details.reception': 'Ընդունելություն',
    'details.ceremony_time': 'Պսակադրության ժամը',
    'details.reception_time': 'Ընդունելության ժամը',
    'details.ceremony_venue': 'Սուրբ Աստվածածին Եկեղեցի',
    'details.ceremony_address': 'Ջրվեժ գյուղ, Մելքոնյան փողոց, 94',
    'details.reception_venue': 'Հատիս Հոլ',
    'details.reception_address': 'Կոտայքի մարզ, Արամուս գյուղ',
    'details.ceremony_datetime': '27 Սեպտեմբերի 2025 15:00',
    'details.reception_datetime': '27 Սեպտեմբերի 2025\n 17:30 – 23:00',
    
    // Photos
    'photos.title': 'Մեր գեղեցիկ ակնթարթները',
    'photos.subtitle': 'Յուրաքանչյուր նկար պատմում է մեր սիրո և գեղեցիկ պահերի մասին, որոնք բերեցին մեզ այստեղ',
    'photos.memory': 'Գեղեցիկ հիշողություն',
    
    // Footer
    'footer.celebrate': 'Անհամբեր սպասում ենք Ձեզ հետ միասին տոնելու',
    'footer.contact': 'Հարցերի համար դիմեք մեզ',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.details': 'Детали',
    'nav.photos': 'Фото',
    'nav.rsvp': 'Подтверждение',
    
    // Hero Section
    'hero.together': 'Вместе с нашими семьями',
    'hero.request': 'приглашаем вас на нашу свадьбу',
    'hero.date': 'Суббота, 27 сентября 2025',
    
    // Countdown
    'countdown.title': 'До нашего «Да»',
    'countdown.days': 'Дней',
    'countdown.hours': 'Часов',
    'countdown.minutes': 'Минут',
    'countdown.seconds': 'Секунд',
    
    // Calendar
    'calendar.title': 'Сохраните дату',
    'calendar.wedding_day': 'День нашей свадьбы',
    'calendar.september': 'Сентябрь',
    
    // Details
    'details.title': 'Детали торжества',
    'details.subtitle': 'Присоединяйтесь к нам, когда мы начинаем нашу вечность',
    'details.ceremony': 'Венчание',
    'details.reception': 'Банкет',
    'details.ceremony_time': 'Время венчания',
    'details.reception_time': 'Время банкета',
    'details.ceremony_venue': 'Собор Святой Богородицы',
    'details.ceremony_address': 'Село Джрвеж, улица Мелконяна, 94',
    'details.reception_venue': 'Хатис Холл',
    'details.reception_address': 'Котайкская область, село Арамус',
    'details.ceremony_datetime': 'Суббота, 27 сентября 2025\n15:00',
    'details.reception_datetime': 'Суббота, 27 сентября 2025\n17:30 – 23:00',
    
    // Photos
    'photos.title': 'Наш путь вместе',
    'photos.subtitle': 'Каждая фотография рассказывает нашу историю любви, смеха и моментов, которые привели нас сюда',
    'photos.memory': 'Прекрасное воспоминание',
    
    // Footer
    'footer.celebrate': 'Мы не можем дождаться празднования с вами!',
    'footer.contact': 'По вопросам обращайтесь к нам по адресу',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};