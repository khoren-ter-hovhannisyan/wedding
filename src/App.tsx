import { Heart, Calendar } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';
import { PhotoGallery } from './components/PhotoGallery';
import { VenueDetails } from './components/VenueDetails';
import { WeddingCalendar } from './components/WeddingCalendar';
import { LanguageSwitcher } from './components/LanguageSwitcher'; // Import LanguageSwitcher
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const weddingDate = "2025-09-27T00:00:00";
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-navy-900 hover:text-rose-500 transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('details')} className="text-navy-900 hover:text-rose-500 transition-colors">
              {t('nav.details')}
            </button>
            <button onClick={() => scrollToSection('photos')} className="text-navy-900 hover:text-rose-500 transition-colors">
              {t('nav.photos')}
            </button>
          </div>
          <LanguageSwitcher /> {/* Positioned to the right */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://lh3.googleusercontent.com/pw/AP1GczOC5-xcIh-cQd7blKXrBEhgnTAI7mezCJY45bhvYD9UIX5d99vMZdpZtI2ELbNToFPfJnVIlP0__3TOmJkNn4JTOSTI_XeNdCkduaAy9vWn5FZ_2XzVKtv9rwiu6idZaGDQ5Ipi-l2fi-NKMhLPgZnU=w1488-h1984-s-no-gm?authuser=1)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh', // Full viewport height
            '@media (max-width: 640px)': { // Tailwind's sm breakpoint
              backgroundSize: 'contain', // Switch to contain on mobile
              backgroundPosition: 'top', // Adjust position for mobile
            },
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            {/* Floating Hearts Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(60)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-rose-300 opacity-20 animate-bounce"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '1s',
                  }}
                  size={48}
                />
              ))}
            </div>

            <div className="mb-8">
              <p className="text-xl md:text-2xl font-light text-white">
                {t('hero.together')}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-script mb-6 text-white">
                Khoren & Monica
              </h1>
              <p className="text-xl md:text-2xl font-light text-white">
                {t('hero.request')}
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-8 text-lg md:text-xl">
              <Calendar className="text-white" size={24} />
              <span>{t('hero.date')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 bg-gradient-to-r from-rose-100 to-gold-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CountdownTimer targetDate={weddingDate} />
          </div>
        </div>
      </section>
      <WeddingCalendar />
      {/* Venue Details */}
      <VenueDetails />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Heart className="text-rose-400 mx-auto mb-4" size={32} />
          <h3 className="text-2xl font-script mb-4">Khoren & Monica</h3>
          <p className="text-navy-300 mb-4">
            {t('footer.celebrate')}
          </p>
          <p className="text-navy-400 text-sm">
            
             {t('footer.contact')}{" "}
            <a
              href="mailto:khorenterhovhannisyan@gmail.com"
              className="underline hover:text-navy-600 transition-colors"
            >
              khorenterhovhannisyan@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;