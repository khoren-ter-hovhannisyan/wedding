import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const samplePhotos = [
  'https://lh3.googleusercontent.com/pw/AP1GczOWH9_bfDzsfygbpdKjWT31oHjldwX8CgOppPulzwmRfvoFir_7QIDkzSZO1IGNCRk6_He88Ws3TlvDCXBb0AZv__Y2eZEpWYykO0Qd_PvmyLPe0IdEZ8ZMFv5s4fDMBqFTt4CVHFVH6WVJtvTdkj7h=w1440-h1385-s-no-gm?authuser=0',
'https://lh3.googleusercontent.com/pw/AP1GczOHamzn9VY7GPupnMyAoLgcWi7XJHafJGTN5WjaJ37chPiSitmGt8dqOx8eGPbCOKaXP5H6zYR_DZ6nEb0DhhjC0AvGAVevxftCcdTbv9-7m6q5uXuotPy4fhU2vexGdZNryLQakvr6oiA6esSs6KH2=w1284-h1984-s-no-gm?authuser=0',  'https://lh3.googleusercontent.com/pw/AP1GczOS9qZvjyp5K6on_r5Wfhpd9NPqhCA3NGXbeZDmrdmyDz8WG4xXwSI8B0DRxtQQ5UVMXgpAdio9kGlelGRHsd4e2DPdcRuRYXdUgi_ldVE-N8-PPOTNJwCQLot2fMWihksG6-_k79qUWTnYLs_AhCwn=w1488-h1984-s-no-gm?authuser=0',
'https://lh3.googleusercontent.com/pw/AP1GczPRoItsKvrbKved88AJp3KgQTaIWfIZgtOO0fGWtz8qIjHK5ailLAD_hn5SHsCGnYi1hWCgFSpFmI-SR6T95RU3B8B2ghwiIyT55MZ7kPNmifLmlpTgfMMmr-ewEkYndAPY1BGReBJ_t4Qk-HZf3CoB=w853-h1280-s-no-gm?authuser=0',  
  'https://lh3.googleusercontent.com/pw/AP1GczODAJR6Sim94WZ6itepaolFG4mIlSrldUWv9H6b6NVFFE38cc7u-CeSWPN7YdseJV-JIyCaN3N22fV8xRtPIn5QqW7yT-0QFdsLsMh8uH1ckHN1QpSU2oLW86leWWFFPh8u9FI5G7r3BZsviBqfWAGV=w1138-h1984-s-no-gm?authuser=0',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzA0bjVlaGFmcTNtdzh4c3luYTVsZG8yc2NzZDdkNnkwYTN5aWlmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nf3vA12Ahej18cklao/giphy.gif',
];

export const PhotoGallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="photos" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-navy-900 mb-4">
            {t('photos.title')}
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            {t('photos.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePhotos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >


              <img
                src={photo}
                alt={`Beautiful moment ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-script text-xl">{t('photos.memory')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};