import { useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'ru';

export interface Translations {
  en: Record<string, string>;
  hi: Record<string, string>;
  ru: Record<string, string>;
}

export const translations: Translations = {
  en: {
    title: "In Search of Lost Civilizations in the Beas Valley, Himalayas",
    about: "About Project",
    gallery: "Gallery",
    support: "Support",
    contact: "Contact",
    aboutText: "We are a small team planning an expedition to explore the Beas River Valley, Himalayas, to discover lost civilizations. Join us on this journey!",
    supportText: "Support our expedition! Donate via Ko-fi:",
    cryptoText: "or send crypto to Ethereum wallet:",
    contactText: "Get in touch with our expedition team",
    email: "Email",
    social: "Social Media",
    donate: "Donate",
    uploadVideo: "Upload Video",
    uploadPhoto: "Upload Photo",
    language: "Language"
  },
  hi: {
    title: "बीस घाटी, हिमालय में खोई हुई सभ्यताओं की खोज में",
    about: "परियोजना के बारे में",
    gallery: "गैलरी",
    support: "समर्थन",
    contact: "संपर्क",
    aboutText: "हम एक छोटी टीम हैं जो खोई हुई सभ्यताओं की खोज के लिए बीस नदी घाटी, हिमालय का अन्वेषण करने की योजना बना रही है। इस यात्रा में हमारे साथ जुड़ें!",
    supportText: "हमारे अभियान का समर्थन करें! Ko-fi के माध्यम से दान करें:",
    cryptoText: "या Ethereum वॉलेट पर क्रिप्टो भेजें:",
    contactText: "हमारी अभियान टीम से संपर्क करें",
    email: "ईमेल",
    social: "सोशल मीडिया",
    donate: "दान करें",
    uploadVideo: "वीडियो अपलोड करें",
    uploadPhoto: "फ़ोटो अपलोड करें",
    language: "भाषा"
  },
  ru: {
    title: "В поисках утраченных цивилизаций в долине Биас, Гималаи",
    about: "О проекте",
    gallery: "Галерея",
    support: "Поддержать",
    contact: "Контакты",
    aboutText: "Мы небольшая команда, планирующая экспедицию для исследования долины реки Биас, Гималаи, для обнаружения утраченных цивилизаций. Присоединяйтесь к нам в этом путешествии!",
    supportText: "Поддержите нашу экспедицию! Пожертвуйте через Ko-fi:",
    cryptoText: "или отправьте криптовалюту на Ethereum кошелек:",
    contactText: "Свяжитесь с нашей экспедиционной командой",
    email: "Электронная почта",
    social: "Социальные сети",
    donate: "Пожертвовать",
    uploadVideo: "Загрузить видео",
    uploadPhoto: "Загрузить фото",
    language: "Язык"
  }
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'hi', 'ru'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};