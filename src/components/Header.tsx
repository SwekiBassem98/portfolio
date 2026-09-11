import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 rounded-2xl pill-nav px-4 sm:px-6 bg-background/80 backdrop-blur-sm border">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">F</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-sans truncate">Feriel Bouzid</span>
            </a>
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <a href="/" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
                {t('common.home')}
              </a>
              <a
                href="/#projects"
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('common.projects')}
              </a>
            <a href="/skills" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              {t('common.skills')}
            </a>
            <a href="/travel" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              {t('common.experience')}
            </a>
            <a href="/about" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              {t('common.about')}
            </a>
            {/* Store link hidden for now
            <a href="/store" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              {t('common.store')}
            </a>
            */}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleLanguage}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all text-xs font-bold uppercase tracking-wider"
              aria-label={t('header.toggleLanguage')}
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label={t('header.toggleTheme')}
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('header.toggleMenu')}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
             <nav className="flex flex-col gap-4">
                <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
                  {t('common.home')}
                </a>
                <a
                  href="/#projects"
                  className="text-sm font-medium hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('common.projects')}
                </a>
              <a href="/skills" className="text-sm font-medium hover:text-accent transition-colors">
                {t('common.skills')}
              </a>
              <a href="/travel" className="text-sm font-medium hover:text-accent transition-colors">
                {t('common.experience')}
              </a>
               <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                 {t('common.about')}
               </a>
               {/* Store link hidden for now
               <a href="/store" className="text-sm font-medium hover:text-accent transition-colors">
                 {t('common.store')}
               </a>
               */}
             </nav>
           </div>
         )}
       </div>
     </header>
   );
 };

 export default Header;
