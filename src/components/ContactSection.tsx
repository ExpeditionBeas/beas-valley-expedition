import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Twitter, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {t('contact')}
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg text-card-foreground text-center mb-8">
              {t('contactText')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold text-card-foreground">{t('email')}:</span>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto"
                  onClick={() => window.open('mailto:expedition@beasvalley.org')}
                >
                  expedition@beasvalley.org
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Twitter className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold text-card-foreground">{t('social')}:</span>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto"
                  onClick={() => window.open('https://twitter.com/BeasExpedition', '_blank')}
                >
                  @BeasExpedition
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;