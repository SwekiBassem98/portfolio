import { useParams, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { getArticleById, getRelatedArticles, getArticles } from "@/data/articles";
import { Facebook, Twitter, Link2, ArrowLeft, FileText, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageContext";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const articles = useMemo(() => getArticles(language), [language]);
  const article = id ? getArticleById(id, language) : undefined;
  const relatedArticles = article ? getRelatedArticles(article.id, 3, language) : [];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(t('article.linkCopied'));
  };

  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("financ")) return "tag-financing";
    if (normalized.includes("lifestyle")) return "tag-lifestyle";
    if (normalized.includes("community")) return "tag-community";
    if (normalized.includes("wellness")) return "tag-wellness";
    if (normalized.includes("travel")) return "tag-travel";
    if (normalized.includes("creativ")) return "tag-creativity";
    if (normalized.includes("growth")) return "tag-growth";
    return "tag-lifestyle";
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % article.gallery.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + article.gallery.length) % article.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('article.backToProjects')}
          </a>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          {/* Article Header */}
          <div className="mb-12 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryClass(article.category)}`}>
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">{article.date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{article.readTime} {t('article.read')}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {article.subtitle}
            </p>

          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 animate-slide-up stagger-2">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {article.content.introduction}
            </p>

             {article.content.sections.map((section, index) => (
               <div key={index} className="mb-10">
                 <h2 className="text-3xl font-bold font-sans mb-4">{section.heading}</h2>
                 <p className="text-lg leading-relaxed text-muted-foreground">
                   {section.content}
                 </p>
               </div>
             ))}

            <div className="mt-12 p-6 rounded-2xl bg-muted border-l-4 border-accent">
              <p className="text-mdleading-relaxed text-foreground">
                {article.content.conclusion}
              </p>
            </div>
          </div>

           {/* Project Gallery */}
           {article.gallery.length > 0 && (
             <div className="mb-16 animate-slide-up">
               <h2 className="text-3xl font-bold font-sans mb-6">{t('article.projectGallery')}</h2>
              
              {article.gallerySections && article.gallerySections.length > 0 ? (
                <div className="space-y-10">
                  {article.gallerySections.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h3 className="text-xl font-bold font-sans mb-4 text-primary">{section.title}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {section.images.map((img, imgIndex) => {
                          const flatIndex = article.gallery.indexOf(img);
                          return (
                            <button
                              key={imgIndex}
                              onClick={() => openLightbox(flatIndex)}
                              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                            >
                              <img
                                src={img}
                                alt={`${article.title} — ${section.title} — image ${imgIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                                  {t('article.view')}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {article.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${article.title} — project image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                          {t('article.view')}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

           {/* PDF Download Section */}
           {article.pdfUrl ? (
             <div className="mb-16 p-6 md:p-8 rounded-2xl border border-border bg-card animate-slide-up">
               <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0">
                   <FileText className="w-7 h-7 text-primary" />
                 </div>
                 <div className="flex-1">
                   <h3 className="text-lg font-bold font-sans">{t('article.projectFile')}</h3>
                   <p className="text-sm text-muted-foreground">{t('article.viewProjectFile')}</p>
                 </div>
                 <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">
                   <Button className="rounded-full gap-2">
                     <Eye className="w-4 h-4" />
                     {t('article.view')}
                   </Button>
                 </a>
               </div>
             </div>
          ) : (
             <div className="mb-16 p-6 md:p-8 rounded-2xl border border-dashed border-border bg-muted/50 animate-slide-up">
               <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0">
                   <FileText className="w-7 h-7 text-muted-foreground" />
                 </div>
                 <div className="flex-1">
                   <h3 className="text-lg font-bold font-sans">{t('article.projectFile')}</h3>
                   <p className="text-sm text-muted-foreground">{t('article.pdfComingSoon')}</p>
                 </div>
               </div>
             </div>
          )}

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm bg-muted text-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="md:hidden mb-12 pb-12 border-b border-border">
            <p className="text-sm font-semibold mb-4">{t('article.shareThisProject')}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="flex-1 py-3 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center gap-2"
              >
                <Link2 className="w-4 h-4" />
                <span className="text-sm">{t('article.copyLink')}</span>
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mb-16 rounded-2xl bg-card p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('article.enjoyedThisProject')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('article.subscribeDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('article.yourEmail')}
                className="flex-1 px-4 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                {t('article.subscribe')}
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-muted py-16 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 animate-slide-up">{t('article.youMightAlsoLike')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <div key={relatedArticle.id} className={`animate-slide-up stagger-${Math.min(index + 1, 3)}`}>
                  <ArticleCard {...relatedArticle} size="small" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label={t('article.closeLightbox')}
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label={t('article.previousImage')}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={article.gallery[lightboxIndex]}
            alt={`${article.title} — image ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label={t('article.nextImage')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {article.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;