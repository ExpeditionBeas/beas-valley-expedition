import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage, Language } from "@/hooks/useLanguage";

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'EN', flag: '🇺🇸' },
    { code: 'hi' as Language, name: 'हिं', flag: '🇮🇳' },
    { code: 'ru' as Language, name: 'RU', flag: '🇷🇺' }
  ];

  return (
    <Select value={currentLanguage} onValueChange={(value: Language) => changeLanguage(value)}>
      <SelectTrigger className="w-20 bg-secondary/50 border-border text-foreground">
        <SelectValue>
          {languages.find(lang => lang.code === currentLanguage)?.flag} {languages.find(lang => lang.code === currentLanguage)?.name}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code} className="text-card-foreground hover:bg-muted">
            <span className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;