import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SupportSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [walletAddress] = useState("0xYourWalletAddress");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
    });
  };

  return (
    <section id="support" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {t('support')}
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12 text-center">
            <p className="text-lg text-card-foreground mb-8">
              {t('supportText')}
            </p>
            
            <div className="space-y-6">
              <div>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mb-4"
                  onClick={() => window.open('https://ko-fi.com/yourusername', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('donate')} via Ko-fi
                </Button>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-card-foreground mb-4">
                  {t('cryptoText')}
                </p>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <code className="text-sm font-mono text-muted-foreground break-all">
                    {walletAddress}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(walletAddress)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-4 w-32 h-32 bg-muted rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">QR Code</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SupportSection;