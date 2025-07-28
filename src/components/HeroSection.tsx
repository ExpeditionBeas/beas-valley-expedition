import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
          {t('aboutText')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;