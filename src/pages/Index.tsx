import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { useEffect } from "react";
import { articles } from "@/data/articles";
import { useTranslation } from "react-i18next";

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const { t } = useTranslation();

  useEffect(() => {
    // Skill bars
    const skillBars = document.querySelectorAll('.skill-bar .h-full');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          bar.style.width = bar.getAttribute('data-width') + '%';
          skillObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
    skillBars.forEach((bar) => skillObserver.observe(bar));

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px 0px 0px" });

    const animatedElements = document.querySelectorAll('.animate-section, .card-fade');
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
      observer.observe(el);
    });

    return () => {
      skillObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        {/* Hero Section */}
        <section className="py-8 md:py-12 animate-section">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight tracking-tight hero-title">
              Feriel Bouzid
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground leading-relaxed hero-subtitle">
              {t('index.creativeVersatileDesigner')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto hero-description">
              {t('index.heroDescription')}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 md:py-12 animate-section">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 space-y-4">
                <div className="section-divider" />
                <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">{t('index.aboutMe')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    {t('index.aboutIntro1')}
                  </p>
                  <p>
                    {t('index.aboutIntro2')}
                  </p>
                  <p>
                    {t('index.aboutIntro3')}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-card p-4 md:p-6 border card-fade">
                   <h3 className="text-lg font-bold font-sans mb-3">{t('common.contact')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('index.availableForOpportunities')}
                  </p>
                  <a
                    href="mailto:feriel.bouzid@email.com"
                    className="inline-block w-full px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all text-center text-sm"
                  >
                    {t('index.getInTouch')}
                  </a>
                </div>

                <div className="rounded-2xl bg-muted/50 p-4 md:p-6 card-fade" style={{ transitionDelay: '100ms' }}>
                  <h3 className="text-base font-bold font-sans mb-3">{t('index.languagesLocation')}</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>{t('index.arabic')} — {t('index.arabicLevel')}</li>
                    <li>{t('index.french')} — {t('index.frenchLevel')}</li>
                    <li>{t('index.english')} — {t('index.englishLevel')}</li>
                    <li className="mt-2">{t('index.nabeulTunisia')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 md:py-12 animate-section">
          <div className="max-w-4xl mx-auto">
            <div className="section-divider" />
             <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight mb-8 text-center">
               {t('common.experience')}
             </h2>
            <div className="space-y-6">
              {/* Current */}
              <div className="relative pl-6 border-l-2 border-primary animate-section card-fade">
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-primary" />
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Graphic Designer</h3>
                  <p className="text-primary font-medium">Calotex sarl, Nabeul</p>
                  <span className="text-sm text-muted-foreground">Aug 2024 — Present</span>
                </div>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Print materials design (catalogues, flyers, banners, posters) using Adobe InDesign</li>
                  <li>• Product photography and advanced photo retouching</li>
                  <li>• Factory photography (processes, work environment)</li>
                </ul>
              </div>

              {/* Previous */}
              <div className="relative pl-6 border-l-2 border-border animate-section card-fade" style={{ transitionDelay: '150ms' }}>
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-muted-foreground" />
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Graphic Designer & Social Media Manager</h3>
                  <p className="text-primary font-medium">Pixel Com, Nabeul</p>
                  <span className="text-sm text-muted-foreground">2022 — 2024</span>
                </div>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Printed & digital materials (logos, banners, social content)</li>
                  <li>• Photo editing and visual quality enhancement</li>
                  <li>• Visual strategy development</li>
                </ul>
              </div>

              {/* Internship */}
              <div className="relative pl-6 border-l-2 border-border animate-section card-fade" style={{ transitionDelay: '300ms' }}>
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-muted-foreground" />
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Graphic Design Intern</h3>
                  <p className="text-primary font-medium">27 Images, Hammamet</p>
                  <span className="text-sm text-muted-foreground">2022</span>
                </div>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Mock-ups for brochures, menus, documents</li>
                  <li>• Logos, banners, posters, flyers design</li>
                  <li>• File preparation for print and online</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 md:py-12 animate-section">
          <div className="max-w-5xl mx-auto">
            <div className="section-divider" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight mb-8 text-center">
              {t('index.skillsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Technical */}
              <div className="rounded-2xl bg-card p-4 md:p-6 border animate-section card-fade">
                <h3 className="text-lg font-bold font-sans mb-4">{t('index.toolsSoftware')}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Photoshop", "Illustrator", "InDesign", "XD", "CorelDRAW"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 text-sm">
                  <div className="skill-bar">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{t('index.branding')}</span>
                      <span className="text-muted-foreground">95%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: "0%" }} data-width="95%" />
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{t('index.printDesign')}</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: "0%" }} data-width="90%" />
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{t('index.socialMedia')}</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: "0%" }} data-width="90%" />
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{t('index.photoEditing')}</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: "0%" }} data-width="85%" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Behavioral */}
              <div className="rounded-2xl bg-card p-4 md:p-6 border animate-section card-fade">
                <h3 className="text-lg font-bold font-sans mb-4">{t('index.qualities')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm">🤝</div>
                    <div><h4 className="font-semibold text-sm mb-0.5">{t('index.collaborative')}</h4><p className="text-xs text-muted-foreground">{t('index.collaborativeDesc')}</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm">💬</div>
                    <div><h4 className="font-semibold text-sm mb-0.5">{t('index.communicative')}</h4><p className="text-xs text-muted-foreground">{t('index.communicativeDesc')}</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm">⏱️</div>
                    <div><h4 className="font-semibold text-sm mb-0.5">{t('index.timeManagement')}</h4><p className="text-xs text-muted-foreground">{t('index.timeManagementDesc')}</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm">✅</div>
                    <div><h4 className="font-semibold text-sm mb-0.5">{t('index.autonomous')}</h4><p className="text-xs text-muted-foreground">{t('index.autonomousDesc')}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="py-8 md:py-12 animate-section">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">{t('index.featuredProjects')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <div
                key={article.id}
                className={`animate-section card-fade`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 animate-section card-fade">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('index.letsCreateTogether')} <span className="text-primary">together</span></h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {t('index.openToOpportunities')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:feriel.bouzid@email.com"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                {t('index.contactMe')}
              </a>
              <a
                href="/images/projects/CV Feriel Bouzid (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-border hover:bg-muted/50 transition-all"
              >
                {t('index.viewResume')}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="font-sans font-semibold mb-3 text-primary text-sm">{t('index.portfolio')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="/#projects" className="hover:text-accent transition-colors">{t('common.projects')}</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">{t('common.about')}</a></li>
                <li><a href="#experience" className="hover:text-accent transition-colors">{t('index.experience')}</a></li>
                <li><a href="#skills" className="hover:text-accent transition-colors">{t('common.skills')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-semibold mb-3 text-secondary text-sm">{t('index.connect')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="mailto:feriel.bouzid@email.com" className="hover:text-accent transition-colors">Email</a></li>
                <li><a href="https://linkedin.com/in/ferielbouzid" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="https://behance.net/ferielbouzid" className="hover:text-accent transition-colors">Behance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-semibold mb-3 text-primary text-sm">{t('index.resources')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="/images/projects/CV Feriel Bouzid (1).pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{t('index.downloadCV')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-semibold mb-3 text-secondary text-sm">{t('index.legal')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">{t('common.privacy')}</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">{t('common.terms')}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
            <p>© 2025 Feriel Bouzid. {t('index.allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
