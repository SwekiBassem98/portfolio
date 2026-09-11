import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-primary/20 my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden animate-scale-in">
          <img
            src="/images/projects/moderna/1.png"
            alt="Graphic Design Project"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans leading-[1.3] tracking-tight animate-slide-down">
              {t('hero.designThatSpeaks')} <span className="text-primary">{t('hero.designThatSpeaksHighlight')}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              {t('hero.turningIdeasIntoVisuals')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <a
              href="mailto:feriel.bouzid@email.com"
              className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all w-full sm:w-auto text-center"
            >
              {t('hero.letsWorkTogether')}
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/ferielbouzid"
                className="w-12 h-12 rounded-full border-2 border-secondary/40 hover:border-secondary hover:bg-secondary/10 transition-all flex items-center justify-center hover:scale-110"
                aria-label={t('hero.linkedinAria')}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://behance.net/ferielbouzid"
                className="w-12 h-12 rounded-full border-2 border-secondary/40 hover:border-secondary hover:bg-secondary/10 transition-all flex items-center justify-center hover:scale-110"
                aria-label={t('hero.behanceAria')}
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
