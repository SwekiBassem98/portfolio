export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  gallery: string[];
  gallerySections?: {
    title: string;
    images: string[];
  }[];
  pdfUrl?: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "MODERNA",
    subtitle: "Identité sur les réseaux sociaux",
    category: "Industriel",
    date: "16 Oct 2024",
    readTime: "5 min",
    image: "/images/projects/moderna/1.png",
    gallery: [
      "/images/projects/moderna/1.png","/images/projects/moderna/2.png","/images/projects/moderna/3.png","/images/projects/moderna/4.png","/images/projects/moderna/5.png","/images/projects/moderna/6.png","/images/projects/moderna/7.png","/images/projects/moderna/8.png","/images/projects/moderna/9.png","/images/projects/moderna/10.png","/images/projects/moderna/11.png","/images/projects/moderna/12.png","/images/projects/moderna/13.png","/images/projects/moderna/14.png","/images/projects/moderna/15.png","/images/projects/moderna/16.png","/images/projects/moderna/17.png","/images/projects/moderna/18.png","/images/projects/moderna/19.png","/images/projects/moderna/20.png","/images/projects/moderna/21.png"
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Rédacteur spécialisé dans le bien-être financier et défenseur du développement personnel",
    },
    content: {
      introduction: "Ce projet présente l'identité sur les réseaux sociaux créée pour MODERNA, une entreprise tunisienne de construction et fabrication métallique basée à Nabeul, spécialisée dans la découpe laser, le poinçonnage, le pliage et la soudure métallique pour des clients industriels et professionnels. J'ai développé un système de contenu Instagram cohérent qui traduit l'expertise industrielle de la marque en un storytelling visuel percutant à fort contraste.",
      sections: [
        {
          heading: "Concept & Stratégie",
          content: "La direction créative vise à communiquer la précision industrielle et la maîtrise technique à travers le contraste visuel : des environnements d'usine sombres et texturés associés à une typographie nette et à fort impact. Chaque publication est construite autour d'un message clair unique, faisant du feed une vitrine modulaire plutôt qu'un mélange dispersé de contenu. La stratégie s'appuie sur des images authentiques d'atelier pour ancrer la marque dans une capacité de production réelle.",
        },
        {
          heading: "Exécution visuelle",
          content: "La palette est ancrée dans le jaune signature de MODERNA contrasté avec le noir, le blanc et la photographie industrielle désaturée. La typographie est bold et condensée pour les titres. Une formule de mise en page récurrente confère au feed une structure disciplinée et répétable, rendant le contenu facile à scanner même pour un secteur technique.",
        },
        {
          heading: "Livrables & Impact",
          content: "Les livrables consistent en un ensemble complet de publications Instagram couvrant les points forts des services, les propositions de valeur, les partenariats d'équipements, le contenu motivationnel et culture d'équipe, les vœux saisonniers et les CTA vers le site web. Ensemble, ces publications forment une bibliothèque de contenu cohérente qui renforce la présence digitale de MODERNA.",
        },
      ],
      conclusion: "À travers ce projet, je démontre ma capacité à adapter le design d'identité visuelle à un contexte industriel B2B technique sans perdre l'impact créatif. Mon rôle a consisté à définir un langage visuel cohérent et à l'appliquer sur l'ensemble d'un set de contenu réseaux sociaux.",
    },
    tags: ["fabrication métallique", "design industriel", "branding réseaux sociaux", "marketing B2B"],
  },
  {
    id: "002",
    title: "Il Mercato",
    subtitle: "Identité sur les réseaux sociaux",
    category: "Alimentation",
    date: "23 Oct 2024",
    readTime: "6 min",
    image: "/images/projects/ilmercato/1.jpg",
    gallery: [
      "/images/projects/ilmercato/1.jpg","/images/projects/ilmercato/2.jpg","/images/projects/ilmercato/3.png","/images/projects/ilmercato/4.png","/images/projects/ilmercato/5.jpg","/images/projects/ilmercato/6.png","/images/projects/ilmercato/7.png","/images/projects/ilmercato/8.png","/images/projects/ilmercato/9.png","/images/projects/ilmercato/10.png","/images/projects/ilmercato/11.jpg","/images/projects/ilmercato/12.jpg","/images/projects/ilmercato/13.jpg","/images/projects/ilmercato/14.jpg","/images/projects/ilmercato/15.jpg"
    ],
    author: {
      name: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Rédactrice créative et praticienne de la pleine conscience",
    },
    content: {
      introduction: "Ce projet présente l'identité visuelle sur les réseaux sociaux développée pour Il Mercato, une épicerie fine à Nabeul, en Tunisie, offrant une sélection soignée de produits gourmets et méditerranéens. J'ai conçu un système de contenu raffiné pour le feed Instagram de la marque, associant une photographie de produits élégante à des mises en page chaleureuses de style éditorial.",
      sections: [
        {
          heading: "Concept & Stratégie",
          content: "La direction créative positionne Il Mercato comme un fournisseur de délicatesses authentiques et premium, utilisant une photographie de produits rapprochés et stylisés pour évoquer l'indulgence et le savoir-faire artisanal. Chaque publication est dédiée à un produit vedette unique, permettant à la marque d'éduquer et d'attirer son audience une spécialité à la fois.",
        },
        {
          heading: "Exécution visuelle",
          content: "L'identité repose sur la logotype manuscrite élégante signature de la marque associée à des titres en sans-serif épuré. Les palettes de couleurs varient selon la publication pour compléter l'aliment présenté, tandis qu'une couleur d'accent rouge constante est utilisée pour les tags d'appel à l'action. La photographie est stylisée dans un format plongée rappelant les éditoriaux gastronomiques.",
        },
        {
          heading: "Livrables & Impact",
          content: "Les livrables incluent une série de publications Instagram dédiées chacune à la présentation d'une ligne de produits gourmets spécifique, ainsi que des visuels d'emballage et une publication saisonnière de vœux Ramadan. L'utilisation constante de la typographie signature donne un feed cohérent et reconnaissable qui renforce le positionnement de la boutique comme destination premium.",
        },
      ],
      conclusion: "À travers ce projet, je démontre une sensibilité raffinée pour le branding alimentaire et lifestyle, adaptant le ton visuel produit par produit tout en maintenant une identité de marque unifiée. Mon rôle a consisté à structurer chaque publication pour mettre en valeur l'attrait sensoriel de la sélection gourmet d'Il Mercato.",
    },
    tags: ["photographie alimentaire", "branding gourmet", "épicerie fine", "design réseaux sociaux"],
  },
  {
    id: "003",
    title: "CBSS",
    subtitle: "Brochure corporate",
    category: "Corporate",
    date: "4 Déc 2024",
    readTime: "5 min",
    image: "/images/projects/cbss/1.png",
    gallery: [
      "/images/projects/cbss/1.png","/images/projects/cbss/2.png","/images/projects/cbss/3.png","/images/projects/cbss/4.png","/images/projects/cbss/5.png","/images/projects/cbss/6.png","/images/projects/cbss/7.png"
    ],
    pdfUrl: "/images/projects/cbss/finale.pdf",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Constructeur communautaire et écrivain contemplatif",
    },
    content: {
      introduction: "Ce projet présente la conception de la brochure corporate créée pour CBSS (Safety For Business), une entreprise tunisienne spécialisée dans les systèmes de sécurité électronique et de protection incendie, basée à Nabeul et Hammamet depuis 2016. J'ai conçu un document de profil d'entreprise multipages qui présente l'expertise, les services et les certifications de la marque dans un format structuré et professionnel.",
      sections: [
        {
          heading: "Concept & Stratégie",
          content: "La brochure est structurée comme un profil d'entreprise séquentiel, guidant le lecteur depuis la mission de CBSS à travers ses champs d'activité, ses services, ses certifications, son processus et ses partenaires. La stratégie met l'accent sur la crédibilité et la confiance, consacrant des doubles pages entières aux certifications et aux partenaires financiers.",
        },
        {
          heading: "Exécution visuelle",
          content: "Le design utilise un système de grille cohérent sur l'ensemble des spreads, avec des onglets rouges numérotés guidant le lecteur dans un ordre de lecture clair. La palette est construite autour du rouge signature de CBSS, associé à des espaces blancs et à un texte gris foncé pour un rendu épuré et corporate.",
        },
        {
          heading: "Livrables & Impact",
          content: "Le livrable est une brochure corporate multipages complète couvrant la présentation de CBSS, ses services, ses certifications, son processus commercial, ses partenaires et ses références clients. Le document fonctionne comme un outil commercial et de crédibilité complet, adapté aux réunions clients et aux présentations partenaires.",
        },
      ],
      conclusion: "À travers ce projet, je démontre ma capacité à structurer un contenu B2B dense et technique en un outil de communication print clair et professionnel, transformant l'offre d'une entreprise de sécurité technique en une brochure corporate accessible et prête pour les affaires.",
    },
    tags: ["brochure corporate", "design print", "branding B2B", "industrie de la sécurité"],
  },
  {
    id: "004",
    title: "Curvita",
    subtitle: "Contenu éducatif",
    category: "Beauté",
    date: "21 Avr 2025",
    readTime: "6 min",
    image: "/images/projects/curvita/aloha-gold.jpg",
    gallery: [
      "/images/projects/curvita/11.jpg","/images/projects/curvita/12.jpg","/images/projects/curvita/13.jpg","/images/projects/curvita/14.jpg","/images/projects/curvita/15.jpg","/images/projects/curvita/16.jpg","/images/projects/curvita/19.jpg","/images/projects/curvita/20.jpg","/images/projects/curvita/24.jpg","/images/projects/curvita/25.jpg","/images/projects/curvita/26.jpg","/images/projects/curvita/27.jpg","/images/projects/curvita/29.jpg","/images/projects/curvita/30.jpg","/images/projects/curvita/31.jpg","/images/projects/curvita/34.jpg","/images/projects/curvita/35.jpg","/images/projects/curvita/36.jpg","/images/projects/curvita/37.jpg","/images/projects/curvita/38.jpg","/images/projects/curvita/42.jpg","/images/projects/curvita/43.jpg","/images/projects/curvita/45.jpg","/images/projects/curvita/46.jpg","/images/projects/curvita/47.jpg","/images/projects/curvita/49.jpg","/images/projects/curvita/50.jpg","/images/projects/curvita/51.jpg","/images/projects/curvita/52.jpg","/images/projects/curvita/54.jpg","/images/projects/curvita/55.jpg","/images/projects/curvita/56.jpg","/images/projects/curvita/57.jpg","/images/projects/curvita/58.jpg","/images/projects/curvita/59.jpg","/images/projects/curvita/62.jpg"
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Stratège en design et conteur visuel",
    },
    content: {
      introduction: "Ce projet présente la série de contenu sur les réseaux sociaux créée pour Curvita, une parapharmacie tunisienne proposant des produits dermocosmétiques et de soin de la peau des principales marques pharmaceutiques. J'ai conçu un carrousel éducatif Instagram dédié aux routines de soin pour peaux mixtes à grasses.",
      sections: [
        {
          heading: "Concept & Stratégie",
          content: "Le concept créatif est centré sur l'éducation skincare, structurant le carrousel comme une routine numérotée étape par étape adaptée aux peaux mixtes et grasses. Ce format positionne Curvita comme un guide knowledgeable, établissant la confiance auprès d'un audience à la recherche de conseils skincare fiables.",
        },
        {
          heading: "Exécution visuelle",
          content: "Chaque diapositive suit une mise en page split-screen cohérente, permettant au design de changer de couleur par étape tout en maintenant un rythme structurel unifié. Des badges circulaires numérotés guident le spectateur à travers la routine en séquence. La typographie combine un sans-serif bold pour les instructions avec un script doux pour la messagerie secondaire.",
        },
        {
          heading: "Livrables & Impact",
          content: "Le livrable est un post carrousel Instagram formant un guide complet de routine skincare pour peaux mixtes et grasses. Ce format encourage les sauvegardes et les partages en offrant une valeur éducative authentique tout en présentant un large assortiment du catalogue de la parapharmacie.",
        },
      ],
      conclusion: "À travers ce projet, je démontre ma capacité à fusionner contenu éducatif et présentation commerciale de produits dans un format visuellement cohérent, aidant la marque à établir la confiance tout en présentant sa vaste gamme de produits dermocosmétiques.",
    },
    tags: ["contenu skincare", "dermocosmétique", "design éducatif", "branding beauté"],
  },
  {
    id: "005",
    title: "Uniconfort",
    subtitle: "Identité sur les réseaux sociaux et promotionnelle",
    category: "Retail",
    date: "21 Avr 2025",
    readTime: "5 min",
    image: "/images/projects/uniconfort/1.jpg",
    gallery: [
      "/images/projects/uniconfort/1.jpg","/images/projects/uniconfort/2.png","/images/projects/uniconfort/3.jpg","/images/projects/uniconfort/4.jpg","/images/projects/uniconfort/5.jpg","/images/projects/uniconfort/6.jpg","/images/projects/uniconfort/7.png","/images/projects/uniconfort/8.jpg","/images/projects/uniconfort/9.jpg","/images/projects/uniconfort/10.jpg"
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Architecte solutions entreprise",
    },
    content: {
      introduction: "Ce projet présente l'identité visuelle sur les réseaux sociaux et promotionnelle créée pour Uniconfort, un détaillant tunisien spécialisé dans les équipements sanitaires, les robinetteries, les chauffe-eau et les systèmes de climatisation. J'ai conçu un système de contenu polyvalent construit autour de l'identité industrielle jaune et noir d'Uniconfort.",
      sections: [
        {
          heading: "Concept & Stratégie",
          content: "La direction créative équilibre deux registres distincts : une campagne de marque émotionnelle et un catalogue de publications promotionnelles produits propres conçues pour générer des ventes directes. Chaque publication est adaptée à sa catégorie pour correspondre à la façon dont chaque produit est vécu par le client.",
        },
        {
          heading: "Exécution visuelle",
          content: "L'identité est ancrée dans le schéma jaune et sombre d'Uniconfort, avec une typographie bold et condensée et un ruban rouge PROMO utilisé pour une reconnaissance instantanée. Les publications produits privilégient une mise en page clean et à fort contraste avec prix affiché en grands chiffres.",
        },
        {
          heading: "Livrables & Impact",
          content: "Les livrables incluent un visuel de campagne de marque, plusieurs publications promotionnelles produits et des mises en avant de marques partenaires. Chaque publication est structurée pour convertir la navigation en intention d'achat, donnant à Uniconfort une présence digitale cohérente et orientée retail.",
        },
      ],
      conclusion: "À travers ce projet, je démontre ma polyvalence à adapter une identité de marque unique à travers du contenu de campagne émotionnel et des promotions produits à fort taux de conversion.",
    },
    tags: ["marketing retail", "promotion produits", "amélioration domiciliaire", "identité de marque"],
  },
  {
    id: "006",
    title: "Winkler",
    subtitle: "Brochure corporate",
    category: "Corporate",
    date: "10 Juin 2025",
    readTime: "5 min",
    image: "/images/projects/winkler/0.png",
    gallery: [
      "/images/projects/winkler/2.png",
      "/images/projects/winkler/3.png",
      "/images/projects/winkler/4.png",
      "/images/projects/winkler/5.png",
      "/images/projects/winkler/6.png",
      "/images/projects/winkler/7.png",
      "/images/projects/winkler/8.png",
      "/images/projects/winkler/9.png",
      "/images/projects/winkler/10.png",
      "/images/projects/winkler/11.jpg",
      "/images/projects/winkler/12.jpg",
      "/images/projects/winkler/13.jpg",
      "/images/projects/winkler/14.png",
      "/images/projects/winkler/15.png",
      "/images/projects/winkler/16.jpg",
      "/images/projects/winkler/17.jpg",
      "/images/projects/winkler/18.jpg",
      "/images/projects/winkler/19.jpg",
      "/images/projects/winkler/20.jpg",
      "/images/projects/winkler/21.png",
      "/images/projects/winkler/22.png",
      "/images/projects/winkler/23.png",
      "/images/projects/winkler/24.png",
      "/images/projects/winkler/25.png",
      "/images/projects/winkler/26.png",
      "/images/projects/winkler/27.png",
      "/images/projects/winkler/28.png",
      "/images/projects/winkler/29.png",
    ],
    gallerySections: [
      {
        title: "Premier catalogue",
        images: [
          "/images/projects/winkler/2.png",
          "/images/projects/winkler/3.png",
          "/images/projects/winkler/4.png",
          "/images/projects/winkler/5.png",
          "/images/projects/winkler/6.png",
          "/images/projects/winkler/7.png",
        ],
      },
      {
        title: "Dépliant bifold",
        images: [
          "/images/projects/winkler/8.png",
          "/images/projects/winkler/9.png",
          "/images/projects/winkler/10.png",
        ],
      },
      {
        title: "Flyer",
        images: [
          "/images/projects/winkler/11.jpg",
          "/images/projects/winkler/12.jpg",
          "/images/projects/winkler/13.jpg",
        ],
      },
      {
        title: "Affiches",
        images: [
          "/images/projects/winkler/14.png",
          "/images/projects/winkler/15.png",
          "/images/projects/winkler/16.jpg",
          "/images/projects/winkler/17.jpg",
          "/images/projects/winkler/18.jpg",
          "/images/projects/winkler/19.jpg",
          "/images/projects/winkler/20.jpg",
        ],
      },
      {
        title: "Carte de visite",
        images: [
          "/images/projects/winkler/21.png",
          "/images/projects/winkler/22.png",
          "/images/projects/winkler/23.png",
        ],
      },
      {
        title: "Bannière",
        images: [
          "/images/projects/winkler/24.png",
        ],
      },
      {
        title: "Deuxième catalogue",
        images: [
          "/images/projects/winkler/25.png",
          "/images/projects/winkler/26.png",
          "/images/projects/winkler/27.png",
          "/images/projects/winkler/28.png",
          "/images/projects/winkler/29.png",
        ],
      },
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Stratège en design et conteur visuel",
    },
    content: {
      introduction: "Ce projet présente le système complet d'outils print et d'identité de marque créé pour Winkler AG, une entreprise allemande possédant plus de 40 ans d'expérience dans le développement et la fabrication de solutions de chauffage électrique flexibles — des creusets chauffants de laboratoire aux éléments chauffants en silicone industriels et aux systèmes de chauffage antidéflagrants (ATEX). J'ai conçu une gamme complète de brochures, catalogues produits, cartes de visite, roll-ups et bandes de conditionnement, traduisant l'expertise technique approfondie de Winkler en une identité corporate audacieuse et cohérente. Le système équilibre une documentation produit rigoureuse avec un langage visuel affirmé, positionnant Winkler comme un partenaire d'ingénierie précis et fiable pour des applications de laboratoire, industrielles et de semi-conducteurs dans le monde entier.",
      sections: [
        {
          heading: "Concept & Stratégie",
          content: "La stratégie vise à présenter Winkler à la fois comme un fabricant historique et un partenaire d'ingénierie tourné vers l'avenir, grâce à un système de brochures segmenté où chaque gamme de produits — creusets chauffants PILZ® de laboratoire, éléments chauffants en silicone, vestes chauffantes industrielles, solutions ATEX — bénéficie de sa propre couverture de catalogue et de ses pages intérieures dédiées. Cette approche modulaire permet aux équipes commerciales de Winkler de distribuer des documents ciblés et spécifiques à chaque application plutôt qu'un catalogue générique unique, servant mieux son audience B2B diversifiée across laboratoires, usines de semi-conducteurs et sites industriels. Une brochure générale d'entreprise relie l'ensemble, présentant les plus de 40 ans de développement interne de Winkler, son système qualité ISO 9001 et sa spécialisation dans la protection antidéflagrante et les solutions personnalisées sophistiquées. Des supports complémentaires — cartes de visite avec codes QR, un roll-up pour salons professionnels et une bande de conditionnement personnalisée — étendent l'identité à chaque point de contact physique de l'interaction client."
        },
        {
          heading: "Exécution visuelle",
          content: "L'identité est construite autour du rouge signature de Winkler, déployé à travers un traitement de couverture à découpe diagonale distinctif où un panneau photographique rouge se fond dans un fond blanc épuré, créant une reconnaissance immédiate et une mise en valeur sur l'ensemble de la gamme de brochures. Le logotype « Winkler » en minuscules dans une police sans-serif arrondie occupe systématiquement la même position sur chaque document, renforcé par un motif graphique triangulaire gris secondaire qui apparaît sur l'ensemble des supports. La typographie privilégie des titres en majuscules bold et condensés pour les couvertures, associés à un texte corporel en sans-serif épuré et à des tableaux techniques denses et bien organisés pour les spécifications, numéros de pièces et dimensions à l'intérieur des catalogues produits. La photographie varie de l'ambiance industrielle et de raffinerie aux shots studio produits épurés et illustrations techniques linéaires, le tout unifié par la palette rouge-gris-blanc cohérente across formats print, cartes de visite et roll-up."
        },
        {
          heading: "Livrables & Impact",
          content: "Les livrables couvrent un système d'identité print complet : plusieurs brochures techniques produits (creusets chauffants PILZ® de laboratoire et industriels, éléments chauffants en silicone, solutions de chauffage flexibles pour applications industrielles et de semi-conducteurs), une brochure générale corporate pliée en trois, des catalogues produits multipages détaillés avec tableaux de spécifications et numéros de pièces, une fiche entreprise d'une page, des cartes de visite avec liens de contact par code QR, un roll-up pour salons professionnels et une bande de conditionnement personnalisée. Ensemble, ces materials équipent les équipes commerciales et techniques de Winkler avec une toolkit professionnelle complète pour les réunions clients, les salons professionnels et la documentation technique, renforçant la crédibilité de l'entreprise across industries hautement réglementées et axées sur la précision."
        }
      ],
      conclusion: "À travers ce projet, je démontre ma capacité à concevoir et maintenir un système d'identité de marque à grande échelle et multi-format pour une entreprise de fabrication technique. Mon rôle a consisté à traduire l'expertise de Winkler accumulée pendant des décennies dans les solutions de chauffage en un langage visuel cohérent et reconnaissable appliqué across brochures, catalogues, cartes de visite et matériaux d'exposition — offrant à une marque industrielle hautement spécialisée une présence print confiante et unifiée."
    },
    tags: ["brochure corporate", "design print", "identité de marque", "branding industriel"],
  },
  {
    id: "W001",
    title: "Trouver l'équilibre : Comment créer une routine de soins personnels durable",
    subtitle: "Développer des pratiques qui fonctionnent réellement",
    category: "Bien-être",
    date: "19 Mar 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80","https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80","https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80","https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80","https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=800&q=80","https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
    ],
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Coach en bien-être certifiée et praticienne de santé holistique",
    },
    content: {
      introduction: "Le self-care est devenu un terme à la mode, souvent associé à des jours de spa et des plaisirs indulgents. Bien que ceux-ci aient leur place, les véritables soins personnels concernent des pratiques durables qui soutiennent votre bien-être physique, mental et émotionnel de manière constante.",
      sections: [
        {
          heading: "Comprendre vos besoins",
          content: "Avant d'établir une routine de soins personnels, vous devez comprendre ce dont vous avez réellement besoin. Prenez le temps d'évaluer honnêtement où vous êtes épuisé et ce qui vous nourrirait véritablement.",
        },
        {
          heading: "Commencez petit et précis",
          content: "La plus grande erreur est d'essayer de tout changer d'un coup. Commencez par une petite pratique spécifique. De petites actions constantes créent un changement durable.",
        },
        {
          heading: "Les quatre piliers du bien-être",
          content: "Une routine équilibrée aborde quatre domaines clés : la santé physique, la santé mentale, la santé émotionnelle et la santé spirituelle. Vous n'avez pas besoin de pratiques élaborées dans chaque domaine — juste une attention intentionnelle.",
        },
        {
          heading: "Rendre cela durable",
          content: "La durabilité vient de l'intégration, pas de l'addition. Cherchez des moyens d'intégrer le self-care dans les routines existantes.",
        },
        {
          heading: "Quand le self-care semble égoïste",
          content: "Beaucoup de personnes luttent avec la culpabilité autour du self-care. Rappelez-vous : vous ne pouvez pas verser d'un vase vide. Prendre soin de vous n'est pas égoïste — c'est nécessaire.",
        },
      ],
      conclusion: "Une routine durable ne consiste pas en la perfection. Il s'agit d'actions constantes et intentionnelles qui soutiennent votre bien-être. Commencez petit, soyez patient avec vous-même et rappelez-vous que le self-care est une pratique, pas une destination.",
    },
    tags: ["self-care", "bien-être", "pleine conscience", "vie durable"],
  },
  {
    id: "T001",
    title: "L'art du voyage lent : Adopter les expériences locales",
    subtitle: "Découvrir la profondeur plutôt que la distance",
    category: "Voyage",
    date: "15 Mar 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1502003148287-a82ef80a6b2c?w=800&q=80","https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80","https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=800&q=80","https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80","https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
    ],
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Défenseur du voyage lent et spécialiste de l'immersion culturelle",
    },
    content: {
      introduction: "À l'ère des circuits éclair et de la chasse à la bucket-list, le voyage lent offre une alternative radicale : rester plus longtemps, aller plus profondément, et véritablement vivre un lieu plutôt que de le voir simplement.",
      sections: [
        {
          heading: "Qu'est-ce que le voyage lent ?",
          content: "Le voyage lent est une philosophie qui privilégie la profondeur à la largeur, la qualité à la quantité. Cela signifie rester dans moins d'endroits pendant des périodes plus longues, développer des routines dans de nouveaux lieux et établir des relations avec les habitants.",
        },
        {
          heading: "Les avantages de ralentir",
          content: "Lorsque vous ralentissez, le voyage devient plus riche et plus significatif. Vous remarquez des détails que vous auriez manqués en allant d'un site à l'autre. Vous avez le temps pour des conversations spontanées et des échanges culturels authentiques.",
        },
        {
          heading: "Étapes pratiques pour le voyage lent",
          content: "Commencez par choisir un endroit et y rester au moins une semaine — deux ou plus c'est encore mieux. Louez un appartement au lieu de séjourner dans des hôtels. Faites vos courses sur les marchés locaux et prenez les transports en commun.",
        },
        {
          heading: "Surmonter le FOMO",
          content: "Le plus grand défi du voyage lent est de surmonter la peur de manquer quelque chose. Vous pourriez ne pas voir tous les musées ou monuments. Ce n'est pas grave. Vous choisissez la profondeur plutôt que la largeur.",
        },
        {
          heading: "Avantages environnementaux et culturels",
          content: "Le voyage lent est intrinsèquement plus durable. Moins de vols, plus de dépenses locales, moins d'impact sur le surtourisme. Il est aussi plus respectueux des communautés locales.",
        },
      ],
      conclusion: "Le voyage lent n'est pas seulement une façon de se déplacer dans le monde — c'est un état d'esprit qui valorise la présence, la connexion et la compréhension. En ralentissant, nous vivons paradoxalement plus.",
    },
    tags: ["voyage lent", "voyage durable", "immersion culturelle", "exploration consciente"],
  },
  {
    id: "G001",
    title: "Vivre minimaliste : Créer de l'espace pour ce qui compte le plus",
    subtitle: "La liberté trouvée dans le fait de laisser aller",
    category: "Développement",
    date: "10 Mar 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80","https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80","https://images.unsplash.com/photo-1518012312832-96aea3c91144?w=800&q=80","https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80","https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Défenseur du minimalisme et coach de vie intentionnelle",
    },
    content: {
      introduction: "Le minimalisme ne consiste pas à avoir moins pour le plaisir d'avoir moins — il s'agit de faire de la place pour plus : plus de clarté, plus de liberté, plus de concentration sur ce qui compte vraiment. Dans notre culture de consommation, choisir de vivre avec moins est un acte radical d'intentionnalité.",
      sections: [
        {
          heading: "Au-delà de l'esthétique",
          content: "Le minimalisme a été récupéré par une certaine esthétique — murs blancs, meubles clairsemés, espaces parfaitement curated. Mais le vrai minimalisme concerne les valeurs, pas les visuels. Il s'agit de supprimer l'excès pour se concentrer sur ce qui ajoute de la valeur à votre vie.",
        },
        {
          heading: "Le processus de lâcher prise",
          content: "Le minimalisme est aussi psychologique que physique. En triant les possessions, vous examinez également les attachements, les identités et les habitudes. Apprendre à lâcher des objets physiques nous aide à pratiquer le lâcher prise dans d'autres domaines de la vie.",
        },
        {
          heading: "La qualité plutôt que la quantité",
          content: "Le minimalisme ne consiste pas en la privation — il s'agit d'être sélectif. Au lieu de dix paires de chaussures médiocres, gardez-en trois que vous aimez. Lorsque vous réduisez la quantité, vous pouvez augmenter la qualité.",
        },
        {
          heading: "Minimalisme mental et digital",
          content: "L'encombrement physique n'est qu'une dimension. Considérez vos engagements, votre emploi du temps, votre vie numérique. Le minimalisme s'applique aussi au temps et à l'attention. Protégez votre espace mental aussi soigneusement que votre espace physique.",
        },
        {
          heading: "La liberté du moins",
          content: "Voici ce que le minimalisme crée : moins de temps passé à nettoyer et à organiser, moins de décisions à prendre, moins de pression financière, plus de clarté mentale, une plus grande concentration sur les relations et les expériences.",
        },
      ],
      conclusion: "Le minimalisme est un voyage, pas une destination. Commencez avec un tiroir, une catégorie, un domaine de la vie. En expérimentant la légèreté qui vient du lâcher prise, vous voudrez naturellement continuer. Ce que vous découvrirez n'est pas seulement moins de choses — c'est plus de liberté, de clarté et d'espace pour ce qui compte vraiment.",
    },
    tags: ["minimalisme", "vie intentionnelle", "simplicité", "développement personnel"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  const related = articles.filter(article => article.id !== currentId && article.category === currentArticle.category);
  if (related.length < limit) {
    const others = articles.filter(article => article.id !== currentId && article.category !== currentArticle.category);
    return [...related, ...others].slice(0, limit);
  }
  return related.slice(0, limit);
}
