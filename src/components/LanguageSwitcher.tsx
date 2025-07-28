import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'hi' as Language, name: 'हिन्दी', flag: '🇮🇳', short: 'हिं' },
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺', short: 'RU' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <Select value={currentLanguage} onValueChange={(value: Language) => changeLanguage(value)}>
      <SelectTrigger className="w-24 bg-secondary/50 border-border text-foreground">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentLang?.flag}</span>
            <span className="text-sm font-medium">{currentLang?.short}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code} 
            className="text-card-foreground hover:bg-muted cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{language.short}</span>
                <span className="text-xs text-muted-foreground">{language.name}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;