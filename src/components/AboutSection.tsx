import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {t('about')}
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg text-card-foreground leading-relaxed text-center">
              {t('aboutText')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;