import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const VenueDetails: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-navy-900 mb-4">
            {t('details.title')}
          </h2>
          {/* <p className="text-lg text-navy-600">
          
          </p> */}
        </div>

        {/* Ceremony & Reception Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Church Ceremony */}
          <div
            className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-cover bg-center text-white drop-shadow-md"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/pw/AP1GczOc01C3YcByq7j81XPA2FyOaWA2sSgFVJLsFYxtPtl_rVp--uvghXuaC8ZbFWSHLMvDfg2jezlHcPeuWnSPou41J7k0zlTKeIYOTpORS_rcJ77U6w0bjsmZBgZ_x6IsNRxp-Rto71jz5fWnPeYGkCjh=w1582-h1782-s-no-gm?authuser=1')",
            }}
          >
            <div className="backdrop-brightness-90 rounded-2xl p-6 bg-black/30">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-script mb-2">{t('details.ceremony')}</h3>
                <div className="w-16 h-1 bg-white/60 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      <a
                        href="https://yandex.com/maps/-/CHHPUS-l"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t('details.ceremony_venue')}
                      </a>
                    </h4>
                    <p>
                      <a
                        href="https://yandex.com/maps/-/CHHPUS-l"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t('details.ceremony_address')}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-white mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">{t('details.ceremony_time')}</h4>
                    <div className="whitespace-pre-line">{t('details.ceremony_datetime')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div
            className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-cover bg-center text-white drop-shadow-md"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/pw/AP1GczPuY-61AelR_X-MRdsXiYSaXkIixF4FDAumphYuG2vmxJ9mVan6N-Mg2nfQ1XnjqFW5AFqa-IPw9ukihDr5WS-vwyAzBJ1gqmguzSclsLYsJiKkF7RJyMCRuIwBJ-_rkdkPn0W19f0knVuqbIKK7cn2=w828-h1354-s-no-gm?authuser=1')",
            }}
          >
            <div className="backdrop-brightness-90 rounded-2xl p-6 bg-black/30">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-script mb-2">{t('details.reception')}</h3>
                <div className="w-16 h-1 bg-white/60 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      <a
                        href="https://yandex.com/maps/-/CHHPUXMA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t('details.reception_venue')}
                      </a>
                    </h4>
                    <p>
                      <a
                        href="https://yandex.com/maps/-/CHHPUXMA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t('details.reception_address')}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-white mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">{t('details.reception_time')}</h4>
                    <div className="whitespace-pre-line">{t('details.reception_datetime')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Reception */}
        </div>
      </div>
    </section>
  );
};
