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
    title: "Moderna",
    subtitle: "Social Media Identity",
    category: "Industrial",
    date: "Oct 16, 2024",
    readTime: "5 min",
    image: "/images/projects/moderna/1.png",
    gallery: [
      "/images/projects/moderna/1.png",
      "/images/projects/moderna/2.png",
      "/images/projects/moderna/3.png",
      "/images/projects/moderna/4.png",
      "/images/projects/moderna/5.png",
      "/images/projects/moderna/6.png",
      "/images/projects/moderna/7.png",
      "/images/projects/moderna/8.png",
      "/images/projects/moderna/9.png",
      "/images/projects/moderna/10.png",
      "/images/projects/moderna/11.png",
      "/images/projects/moderna/12.png",
      "/images/projects/moderna/13.png",
      "/images/projects/moderna/14.png",
      "/images/projects/moderna/15.png",
      "/images/projects/moderna/16.png",
      "/images/projects/moderna/17.png",
      "/images/projects/moderna/18.png",
      "/images/projects/moderna/19.png",
      "/images/projects/moderna/20.png",
      "/images/projects/moderna/21.png",
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Financial wellness writer and personal growth advocate",
    },
    content: {
      introduction: "This project showcases the social media identity created for MODERNA, a Tunisian metal construction and fabrication company based in Nabeul specializing in laser cutting, punching, bending, and metal welding for industrial and professional clients. I developed a cohesive Instagram content system that translates the brand's industrial expertise into striking, high-contrast visual storytelling. The approach balances raw factory photography with bold typographic overlays, positioning MODERNA as a modern, technically advanced player in a traditionally rugged sector while keeping the tone credible, precise, and professional throughout the feed.",
      sections: [
        {
          heading: "Concept & Strategy",
          content: "The creative direction centers on communicating industrial precision and technical mastery through visual contrast: dark, textured factory environments paired with sharp, high-impact typography. Each post is built around a single clear message — construction and fabrication capabilities, competitive advantages, technical partnerships, and team culture — making the feed function as a modular showcase rather than a scattered mix of content. Recurring motifs like arrows, underlined keywords, and highlighted phrases guide the viewer's eye and reinforce key selling points such as reliability, flexibility, and quality. The strategy leans on authentic workshop imagery (machinery, welders, technical drawings) to ground the brand in real production capability, while yellow-and-black branding elements tie every post back to MODERNA's identity, creating a system that feels both technical and approachable for a B2B industrial audience.",
        },
        {
          heading: "Visual Execution",
          content: "The palette is anchored in MODERNA's signature yellow against black, white, and desaturated industrial photography, creating strong contrast and instant brand recognition across the grid. Typography is bold, condensed, and uppercase for headlines, paired with highlighted yellow text blocks and rotated banner-style callouts that add energy without cluttering the composition. Photography ranges from wide factory shots to close-up action images of workers and machinery, consistently overlaid with a dark gradient to ensure text legibility. A recurring layout formula — logo top-center, headline mid-frame, tagline or CTA at the bottom with the website URL — gives the feed a disciplined, repeatable structure. Visual hierarchy is clear in every post, with a single dominant message supported by secondary details, keeping the content easy to scan even for a technical, less visually-driven industry.",
        },
        {
          heading: "Deliverables & Impact",
          content: "The deliverables consist of a full set of Instagram feed posts covering service highlights, value propositions, equipment partnerships (such as the AMADA collaboration), motivational/team-culture content, seasonal greetings, and website-driving CTAs. Each visual is tailored to a specific communication goal, from showcasing metal fabrication services to promoting custom sheet-metal design capabilities. Together, these posts form a consistent, recognizable content library that strengthens MODERNA's digital presence and translates its industrial know-how into an accessible, modern social media voice — helping the company stand out in a niche, technically-driven sector and reinforcing its positioning as a reliable, quality-focused industrial partner in Tunisia.",
        },
      ],
      conclusion: "Through this project, I demonstrate the ability to adapt visual identity design to a technical, B2B industrial context without losing creative impact. My role encompassed defining a consistent visual language, applying it across a full social media content set, and ensuring every post reinforced MODERNA's positioning as a modern, quality-driven metal fabrication company — turning an industrial brand into a visually confident digital presence.",
    },
    tags: ["metal fabrication", "industrial design", "social media branding", "B2B marketing"],
  },
  {
    id: "002",
    title: "Il Mercato",
    subtitle: "Social Media Identity",
    category: "Food",
    date: "Oct 23, 2024",
    readTime: "6 min",
    image: "/images/projects/ilmercato/1.jpg",
    gallery: [
      "/images/projects/ilmercato/1.jpg",
      "/images/projects/ilmercato/2.jpg",
      "/images/projects/ilmercato/3.png",
      "/images/projects/ilmercato/4.png",
      "/images/projects/ilmercato/5.jpg",
      "/images/projects/ilmercato/6.png",
      "/images/projects/ilmercato/7.png",
      "/images/projects/ilmercato/8.png",
      "/images/projects/ilmercato/9.png",
      "/images/projects/ilmercato/10.png",
      "/images/projects/ilmercato/11.jpg",
      "/images/projects/ilmercato/12.jpg",
      "/images/projects/ilmercato/13.jpg",
      "/images/projects/ilmercato/14.jpg",
      "/images/projects/ilmercato/15.jpg",
    ],
    author: {
      name: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Creative writer and mindfulness practitioner",
    },
    content: {
      introduction: "This project presents the social media visual identity developed for Il Mercato, a fine grocery store (épicerie fine) in Nabeul, Tunisia, offering a carefully curated selection of gourmet and Mediterranean products. I designed a refined, appetite-driven content system for the brand's Instagram feed, pairing elegant product photography with warm, editorial-style layouts. Each post highlights a specific delicacy — from premium bottarga to frozen quiches and Turkish coffee — using the brand's signature handwritten logotype and a rich, moody aesthetic to convey authenticity, craftsmanship, and gourmet sophistication across every touchpoint of the feed.",
      sections: [
        {
          heading: "Concept & Strategy",
          content: "The creative direction positions Il Mercato as a purveyor of authentic, premium delicacies rather than a conventional grocery store, using close-up, styled product photography to evoke indulgence and craftsmanship. Each post is dedicated to a single hero product — boutargue, quiche, Turkish coffee — allowing the brand to educate and entice its audience one specialty at a time. Contextual props (spices, coffee beans, ornate serving trays, rustic wood, tomatoes, basil) root each product in its culinary tradition, while contrasting dark and light backgrounds are used deliberately to match each item's character: bold black settings for cured delicacies like bottarga, and bright, airy tones for fresh, everyday items like the quiche. A recurring seasonal touch, such as the Ramadan Kareem greeting, shows the brand adapting its content calendar to cultural moments relevant to its Tunisian audience.",
        },
        {
          heading: "Visual Execution",
          content: "The identity relies on the brand's elegant handwritten script logotype paired with clean sans-serif headlines, creating a balance between artisanal warmth and editorial clarity. Color palettes shift per post to complement the food being featured — deep blacks and ambers for boutargue, warm wood tones for pasta dishes, soft greys and greens for the quiche — while a consistent red accent color is used for call-to-action tags and product highlights across the feed. Photography is styled in a top-down or close-cropped format reminiscent of gourmet food editorials, with natural textures (wood, stone, slate) grounding the products. Packaging shots are included alongside prepared-dish imagery, giving followers both an appetite appeal and clear product recognition.",
        },
        {
          heading: "Deliverables & Impact",
          content: "The deliverables include a series of Instagram feed posts each dedicated to showcasing a specific gourmet product line — premium bottarga varieties, frozen quiches, and Turkish ground coffee — along with packaging visuals and a seasonal Ramadan greeting post. Each visual combines product photography, styled food presentation, and branded packaging shots to build trust and desirability around Il Mercato's curated offering. The consistent use of the brand's signature typography and adaptable color treatment across varied product categories results in a cohesive, recognizable feed that reinforces the store's positioning as a premium destination for fine, authentic gourmet products in Tunisia.",
        },
      ],
      conclusion: "Through this project, I demonstrate a refined sensitivity to food and lifestyle branding, adapting visual tone product by product while maintaining a unified brand identity. My role involved styling and structuring each post to highlight the sensory appeal of Il Mercato's gourmet selection, translating the boutique's in-store authenticity and quality into a polished, appetite-driving digital presence.",
    },
    tags: ["food photography", "gourmet branding", "épicerie fine", "social media design"],
  },
  {
    id: "003",
    title: "CBSS",
    subtitle: "Corporate Brochure",
    category: "Corporate",
    date: "Dec 4, 2024",
    readTime: "5 min",
    image: "/images/projects/cbss/1.png",
    gallery: [
      "/images/projects/cbss/1.png",
      "/images/projects/cbss/2.png",
      "/images/projects/cbss/3.png",
      "/images/projects/cbss/4.png",
      "/images/projects/cbss/5.png",
      "/images/projects/cbss/6.png",
      "/images/projects/cbss/7.png",
    ],
    pdfUrl: "/images/projects/cbss/finale.pdf",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Community builder and contemplative writer",
    },
    content: {
      introduction: "This project presents the corporate brochure design created for CBSS (Safety For Business), a Tunisian company specializing in electronic security and fire-safety systems, based in Nabeul and Hammamet since 2016. I designed a multi-page company profile document that presents the brand's expertise, services, certifications, and client portfolio in a structured, professional format. The brochure combines the brand's red-and-white corporate identity with clean grids, numbered sections, and photography from trade events, translating a technical security business into a clear, credible print communication tool for prospective clients and partners.",
      sections: [
        {
          heading: "Concept & Strategy",
          content: "The brochure is structured as a sequential company profile, guiding the reader from an opening presentation of CBSS's mission and strengths through its fields of activity, services, certifications, process, partners, and finally contact information. Each spread pairs a clear section title with numbered content blocks, reflecting the brand's methodical, technical positioning as a security and fire-safety specialist. The strategy emphasizes credibility and trust — key concerns for a B2B security company — by dedicating full spreads to certifications, financial partners, and a documented four-step client process. Visual proof points such as trade fair participation (Security Expo North Africa) and a wall of recognizable partner and client logos (banks, hotels, industrial groups) reinforce the company's established market presence and reliability.",
        },
        {
          heading: "Visual Execution",
          content: "The design uses a consistent grid system across all spreads, with numbered red tabs (01 to 06) guiding the reader through the document in a clear reading order. The palette is built around CBSS's signature red, paired with white space and dark grey text for a clean, corporate feel appropriate to the security industry. Section headers are set above red-underlined dividers, while content is organized into card-style blocks with icons and photography for services such as video surveillance, fire detection, and access control. Numbered circular badges highlight key differentiators and process steps, giving the layout a systematic, easy-to-scan structure. Photography from installations, trade events, and certification documents adds authenticity and grounds the brochure in real business activity.",
        },
        {
          heading: "Deliverables & Impact",
          content: "The deliverable is a complete multi-page corporate brochure (print/PDF format) covering CBSS's company presentation, strengths, fields of activity, services, TBS training school, certifications, business process, financial and technical partners, national client references, trade show participation, and full contact details for its direction, sales, and technical departments. The document functions as a comprehensive sales and credibility tool, suitable for client meetings, tenders, and partner presentations. By consolidating technical services, certifications (SGS, HIKVISION, ZKTeco), and a strong client roster into one cohesive document, the brochure strengthens CBSS's professional image and supports its business development efforts across Tunisia.",
        },
      ],
      conclusion: "Through this project, I demonstrate the ability to structure dense, technical B2B content into a clear, professional print communication tool. My role involved organizing CBSS's services, credentials, and partnerships into a cohesive visual system that reinforces trust and clarity — turning a technical security company's offering into an accessible, business-ready corporate brochure.",
    },
    tags: ["corporate brochure", "print design", "B2B branding", "security industry"],
  },
  {
    id: "004",
    title: "Curvita",
    subtitle: "Educational Content",
    category: "Beauty",
    date: "Apr 21, 2025",
    readTime: "6 min",
    image: "/images/projects/curvita/aloha-gold.jpg",
    gallery: [
      "/images/projects/curvita/11.jpg",
      "/images/projects/curvita/12.jpg",
      "/images/projects/curvita/13.jpg",
      "/images/projects/curvita/14.jpg",
      "/images/projects/curvita/15.jpg",
      "/images/projects/curvita/16.jpg",
      "/images/projects/curvita/19.jpg",
      "/images/projects/curvita/20.jpg",
      "/images/projects/curvita/24.jpg",
      "/images/projects/curvita/25.jpg",
      "/images/projects/curvita/26.jpg",
      "/images/projects/curvita/27.jpg",
      "/images/projects/curvita/29.jpg",
      "/images/projects/curvita/30.jpg",
      "/images/projects/curvita/31.jpg",
      "/images/projects/curvita/34.jpg",
      "/images/projects/curvita/35.jpg",
      "/images/projects/curvita/36.jpg",
      "/images/projects/curvita/37.jpg",
      "/images/projects/curvita/38.jpg",
      "/images/projects/curvita/42.jpg",
      "/images/projects/curvita/43.jpg",
      "/images/projects/curvita/45.jpg",
      "/images/projects/curvita/46.jpg",
      "/images/projects/curvita/47.jpg",
      "/images/projects/curvita/49.jpg",
      "/images/projects/curvita/50.jpg",
      "/images/projects/curvita/51.jpg",
      "/images/projects/curvita/52.jpg",
      "/images/projects/curvita/54.jpg",
      "/images/projects/curvita/55.jpg",
      "/images/projects/curvita/56.jpg",
      "/images/projects/curvita/57.jpg",
      "/images/projects/curvita/58.jpg",
      "/images/projects/curvita/59.jpg",
      "/images/projects/curvita/62.jpg",
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Design strategist and visual storyteller",
    },
    content: {
      introduction: "This project presents the social media content series created for Curvita, a Tunisian parapharmacy (para) offering dermocosmetic and skincare products from leading pharmaceutical brands. I designed an educational Instagram carousel dedicated to skincare routines for combination and oily skin, combining warm, inclusive brand photography with clear, step-by-step product guidance. The series reflects Curvita's positioning as a trusted beauty and wellness advisor, translating dermatological know-how into accessible, visually engaging content that guides customers toward the right products for their skin type.",
      sections: [
        {
          heading: "Concept & Strategy",
          content: "The creative concept centers on skincare education, structuring the carousel as a numbered step-by-step routine (steps 1 through 4) tailored to combination and oily skin types. This format positions Curvita not just as a retailer but as a knowledgeable guide, building trust with an audience seeking reliable skincare advice. The opening slide uses diverse, joyful lifestyle photography of women of different ages and skin tones to create an inclusive, welcoming entry point before transitioning into the more instructional, product-focused steps. Each subsequent slide pairs a clear directive (cleanse, hydrate, protect, cleanse again) with real pharmacy-brand products, reinforcing credibility through recognizable dermocosmetic names like Avène, SVR, Uriage, La Roche-Posay, Eucerin, Vichy, and Fiderma, which are staples of the parapharmacy category.",
        },
        {
          heading: "Visual Execution",
          content: "Each slide follows a consistent split-screen layout: a lifestyle or beauty photograph on one side and a solid color block with bold instructional text on the other, allowing the design to shift color per step (pink, teal, coral, orange, green) while maintaining a unified structural rhythm across the carousel. Numbered circular badges anchor each step visually, guiding the viewer through the routine in sequence. Typography combines a clean bold sans-serif for instructions with a soft handwritten script for secondary messaging, echoing the brand's approachable, feminine tone. Product photography is arranged in clean rows beneath or beside each instructional block, ensuring products remain clearly legible and shoppable within the educational context.",
        },
        {
          heading: "Deliverables & Impact",
          content: "The deliverable is a five-slide Instagram carousel post forming a complete skincare routine guide for combination and oily skin, opening with a brand-awareness cover slide and progressing through cleansing, hydrating, sun protection, and evening cleansing steps, each populated with specific product recommendations from multiple dermocosmetic brands. This format encourages saves and shares by offering genuine educational value while naturally showcasing a wide assortment of the parapharmacy's product catalog. The result is a content piece that strengthens Curvita's authority in skincare guidance while directly supporting product discovery and purchase intent among its audience.",
        },
      ],
      conclusion: "Through this project, I demonstrate the ability to merge educational content with commercial product presentation in a visually cohesive format. My role involved structuring a clear skincare routine into an engaging, color-coded carousel that reflects Curvita's identity as an approachable, expertise-driven parapharmacy, helping the brand build trust while showcasing its extensive dermocosmetic product range.",
    },
    tags: ["skincare content", "dermocosmetics", "educational design", "beauty branding"],
  },
  {
    id: "005",
    title: "Unionfort",
    subtitle: "Social Media & Promotional Identity",
    category: "Retail",
    date: "Apr 21, 2025",
    readTime: "5 min",
    image: "/images/projects/uniconfort/1.jpg",
    gallery: [
      "/images/projects/uniconfort/1.jpg",
      "/images/projects/uniconfort/2.png",
      "/images/projects/uniconfort/3.jpg",
      "/images/projects/uniconfort/4.jpg",
      "/images/projects/uniconfort/5.jpg",
      "/images/projects/uniconfort/6.jpg",
      "/images/projects/uniconfort/7.png",
      "/images/projects/uniconfort/8.jpg",
      "/images/projects/uniconfort/9.jpg",
      "/images/projects/uniconfort/10.jpg",
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Enterprise solutions architect",
    },
    content: {
      introduction: "This project presents the social media and promotional visual identity created for Uniconfort, a Tunisian retailer specializing in sanitary equipment, plumbing fixtures, water heaters, and air conditioning systems. I designed a versatile content system spanning brand-awareness posts and product promotions, built around Uniconfort's industrial yellow-and-black identity. The visuals combine raw, textured hardware imagery with clean, showroom-style product photography, positioning Uniconfort as a reliable, project-oriented partner for home renovation and equipment needs across categories such as bathroom fittings, water heating, and climate control.",
      sections: [
        {
          heading: "Concept & Strategy",
          content: "The creative direction balances two distinct registers: an emotive brand campaign built around the tagline \"Uniconfort ouvre la porte à vos projets,\" using gritty tools-and-hardware flat lays to evoke craftsmanship and DIY project energy, and a catalog of clean, promotional product posts designed to drive direct sales. Each product post is tailored to its category — lifestyle photography for a gas water heater, an interior mockup for an air conditioning unit, and clean studio shots for faucets and flush systems — adapting tone to match how each product is actually experienced by the customer. Partner brand logos (Chaffoteaux, Remer, Grohe, Coala) are prominently featured, reinforcing Uniconfort's role as an authorized distributor of recognized international sanitary and HVAC brands, which builds trust and signals product quality to a Tunisian home-improvement audience.",
        },
        {
          heading: "Visual Execution",
          content: "The identity is anchored in Uniconfort's yellow-and-dark color scheme, applied consistently through bold condensed typography, angular badge shapes, and a red \"PROMO\" ribbon used across pricing posts for instant recognition. Product posts favor a clean, high-contrast layout: product on a neutral or lifestyle background, price displayed in large bold numerals, and category labels set inside yellow and black tag-style banners for quick scanning. Where a brand partner is featured (Remer, Grohe), their own logo and product photography are respectfully integrated alongside Uniconfort branding, maintaining a professional, retail-grade appearance. The brand campaign post takes a more atmospheric approach, using dark, textured tool photography and rough concrete backdrops to convey durability and hands-on work.",
        },
        {
          heading: "Deliverables & Impact",
          content: "The deliverables include a brand campaign visual, multiple promotional product posts for water heaters, split air conditioning units, and bathroom fittings, and dedicated brand-partner spotlights for faucet and flush-system collections from Remer and Grohe. Each post is structured to convert browsing into purchase intent, pairing clear pricing, promotional urgency, and validity dates with strong product imagery. Together, these deliverables give Uniconfort a cohesive, retail-focused digital presence that supports both brand awareness and direct product sales, reinforcing its position as a trusted destination for sanitary and home comfort equipment in Tunisia.",
        },
      ],
      conclusion: "Through this project, I demonstrate versatility in adapting a single brand identity across emotive campaign content and high-converting product promotions. My role involved maintaining Uniconfort's bold, industrial visual language while tailoring each post's tone to its product category, resulting in a social media presence that is both recognizable and commercially effective for a home-improvement and sanitary equipment retailer.",
    },
    tags: ["retail marketing", "product promotion", "home improvement", "brand identity"],
  },
  {
    id: "006",
    title: "Winkler",
    subtitle: "Corporate Brochure",
    category: "Corporate",
    date: "Jun 10, 2025",
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
        title: "First Catalog",
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
        title: "Bifold",
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
        title: "Posters",
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
        title: "Business Card",
        images: [
          "/images/projects/winkler/21.png",
          "/images/projects/winkler/22.png",
          "/images/projects/winkler/23.png",
        ],
      },
      {
        title: "Banner",
        images: [
          "/images/projects/winkler/24.png",
        ],
      },
      {
        title: "Second Catalog",
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
      bio: "Design strategist and visual storyteller",
    },
    content: {
      introduction: "This project presents the complete print and brand collateral system created for Winkler AG, a German company with over 40 years of experience developing and manufacturing flexible electric heating solutions — from laboratory heating mantles to industrial silicone heating elements and explosion-proof (ATEX) heating systems. I designed a comprehensive suite of brochures, product catalogs, business cards, roll-up banners, and packaging tape, translating Winkler's deep technical expertise into a bold, cohesive corporate identity. The system balances rigorous product documentation with a confident visual language, positioning Winkler as a precise, reliable engineering partner for laboratory, industrial, and semiconductor applications worldwide.",
      sections: [
        {
          heading: "Concept & Strategy",
          content: "The strategy centers on presenting Winkler as both a heritage manufacturer and a forward-looking engineering partner, using a segmented brochure system where each product line — PILZ® laboratory heating mantles, silicone heating elements, industrial heating jackets, ATEX solutions — receives its own dedicated catalog cover and internal spread. This modular approach allows Winkler's sales teams to distribute focused, application-specific documents rather than a single generic catalog, better serving its diverse B2B audience across laboratories, semiconductor fabs, and industrial plants. A general company brochure ties everything together, presenting Winkler's 40+ years of in-house development, ISO 9001 quality system, and specialization in explosion protection and sophisticated custom solutions. Supporting collateral — business cards with QR codes, a trade-show roll-up, and branded packaging tape — extends the identity into every physical touchpoint of client interaction."
        },
        {
          heading: "Visual Execution",
          content: "The identity is built on Winkler's signature red, deployed through a distinctive diagonal-cut cover treatment where a red photographic panel bleeds into a clean white background, creating instant shelf and stand-out recognition across the full brochure range. The lowercase \"Winkler\" wordmark in a rounded sans-serif sits consistently in the same position on every document, reinforced by a secondary grey triangular graphic motif that appears throughout the collateral. Typography favors bold, condensed uppercase headlines for cover titles, paired with clean sans-serif body text and dense, well-organized technical tables for specifications, part numbers, and dimensions inside the product catalogs. Photography ranges from moody industrial and refinery imagery to clean studio product shots and technical line illustrations, all unified by the consistent red-grey-white palette across print formats, business cards, and the roll-up banner."
        },
        {
          heading: "Deliverables & Impact",
          content: "The deliverables span a full print identity system: multiple technical product brochures (PILZ® laboratory and industrial heating mantles, silicone heating elements, flexible heating solutions for industrial and semiconductor applications), a general corporate trifold brochure, detailed multi-page product catalogs with specification tables and part numbers, a one-page company fact sheet, business cards with QR-code contact links, a trade-show roll-up banner, and branded packaging tape. Together, these materials equip Winkler's sales and technical teams with a complete, professional toolkit for client meetings, trade fairs, and technical documentation, reinforcing the company's credibility across highly regulated, precision-driven industries."
        }
      ],
      conclusion: "Through this project, I demonstrate the ability to design and maintain a large-scale, multi-format brand identity system for a technical manufacturing company. Her role involved translating Winkler's decades of heating-solution expertise into a consistent, recognizable visual language applied across brochures, catalogs, business cards, and exhibition materials — giving a highly specialized industrial brand a confident, unified presence in print."
    },
    tags: ["corporate brochure", "print design", "brand identity", "industrial branding"],
  },
  {
    id: "W001",
    title: "Finding Balance: How to Create a Sustainable Self-Care Routine",
    subtitle: "Developing practices that actually stick",
    category: "Wellness",
    date: "Mar 19, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=800&q=80",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    ],
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Certified wellness coach and holistic health practitioner",
    },
    content: {
      introduction: "Self-care has become a buzzword, often associated with spa days and indulgent treats. While these have their place, true self-care is about sustainable practices that support your physical, mental, and emotional wellbeing consistently—not just when you're burned out.",
      sections: [
        {
          heading: "Understanding Your Needs",
          content: "Before building a self-care routine, you need to understand what you actually need. Are you lacking physical movement, mental rest, emotional processing, or social connection? Self-care isn't one-size-fits-all. Take time to honestly assess where you're depleted and what would genuinely nourish you."
        },
        {
          heading: "Start Small and Specific",
          content: "The biggest mistake people make with self-care is trying to overhaul everything at once. Instead, start with one small, specific practice. Maybe it's five minutes of stretching each morning, or drinking a glass of water before coffee, or spending ten minutes outside daily. Small, consistent actions create lasting change."
        },
        {
          heading: "The Four Pillars of Wellness",
          content: "A balanced self-care routine addresses four key areas: physical health (movement, nutrition, sleep), mental health (stress management, learning, rest), emotional health (processing feelings, connection, creativity), and spiritual health (meaning, purpose, values alignment). You don't need elaborate practices in each area—just intentional attention."
        },
        {
          heading: "Making It Sustainable",
          content: "Sustainability comes from integration, not addition. Instead of adding more to your already full schedule, look for ways to integrate self-care into existing routines. Take walking meetings, practice mindful eating during meals you already eat, or turn your commute into a time for podcasts that inspire you."
        },
        {
          heading: "When Self-Care Feels Selfish",
          content: "Many people struggle with guilt around self-care, especially caregivers. Remember: you can't pour from an empty cup. Taking care of yourself isn't selfish—it's necessary for showing up as your best self for others. Your wellbeing matters, not just as a means to serve others, but as an end in itself."
        },
      ],
      conclusion: "A sustainable self-care routine isn't about perfection or elaborate practices. It's about consistent, intentional actions that support your wellbeing across all dimensions of health. Start small, be patient with yourself, and remember that self-care is a practice, not a destination."
    },
    tags: ["self-care", "wellness", "mindfulness", "sustainable living"],
  },
  {
    id: "T001",
    title: "The Art of Slow Travel: Embracing Local Experiences",
    subtitle: "Discovering depth over distance in your journeys",
    category: "Travel",
    date: "Mar 15, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      "https://images.unsplash.com/photo-1502003148287-a82ef80a6b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    ],
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Slow travel advocate and cultural immersion specialist",
    },
    content: {
      introduction: "In an age of whirlwind tours and bucket-list chasing, slow travel offers a radical alternative: staying longer, going deeper, and truly experiencing a place rather than just seeing it. It's not about how many countries you've visited, but how deeply you've connected with the places you've been.",
      sections: [
        {
          heading: "What Is Slow Travel?",
          content: "Slow travel is a philosophy that prioritizes depth over breadth, quality over quantity. It means staying in fewer places for longer periods, developing routines in new locations, shopping at local markets, and building relationships with locals. It's about experiencing a destination as a temporary resident rather than a tourist passing through."
        },
        {
          heading: "The Benefits of Slowing Down",
          content: "When you slow down, travel becomes richer and more meaningful. You notice details you'd miss when rushing from sight to sight. You have time for spontaneous conversations, unexpected discoveries, and genuine cultural exchange. You also return home less exhausted and with deeper memories than a photo collection of landmarks."
        },
        {
          heading: "Practical Steps for Slow Travel",
          content: "Start by choosing one place and staying at least a week—two or more is even better. Rent an apartment instead of staying in hotels. Shop at local markets, take local transportation, and establish routines like a regular cafe or morning walk. Say yes to invitations from locals. Allow for unplanned time in your schedule."
        },
        {
          heading: "Overcoming FOMO",
          content: "The biggest challenge of slow travel is overcoming the fear of missing out. You might not see every museum or landmark. That's okay. You're choosing depth over breadth, experience over completion. Remember: the goal isn't to check off a list—it's to truly experience and understand a place."
        },
        {
          heading: "Environmental and Cultural Benefits",
          content: "Slow travel is inherently more sustainable. Fewer flights, more local spending, less overtourism impact. It's also more respectful to local communities. When you stay longer and engage more deeply, you contribute more meaningfully to local economies and build bridges of understanding between cultures."
        },
      ],
      conclusion: "Slow travel isn't just a way of moving through the world—it's a mindset that values presence, connection, and understanding. In slowing down, we paradoxically experience more. The next time you travel, consider going fewer places and staying longer. You might discover that the journey becomes infinitely richer."
    },
    tags: ["slow travel", "sustainable travel", "cultural immersion", "mindful exploration"],
  },
  {
    id: "G001",
    title: "Minimalist Living: Creating Space for What Matters Most",
    subtitle: "The freedom found in letting go",
    category: "Growth",
    date: "Mar 10, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80",
      "https://images.unsplash.com/photo-1518012312832-96aea3c91144?w=800&q=80",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    ],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Minimalism advocate and intentional living coach",
    },
    content: {
      introduction: "Minimalism isn't about having less for the sake of having less—it's about making room for more: more clarity, more freedom, more focus on what truly matters. In our consumer-driven culture, choosing to live with less is a radical act of intentionality.",
      sections: [
        {
          heading: "Beyond the Aesthetic",
          content: "Minimalism has been co-opted by a certain aesthetic—white walls, sparse furniture, perfectly curated spaces. But true minimalism is about values, not visuals. It's about removing excess so you can focus on what adds value to your life. Your minimalist life might look different from someone else's, and that's exactly as it should be."
        },
        {
          heading: "The Process of Letting Go",
          content: "Minimalism is as much psychological as it is physical. As you sort through possessions, you're also examining attachments, identities, and habits. That box of college textbooks isn't just books—it's who you used to be. Learning to let go of physical items helps us practice letting go in other areas of life too."
        },
        {
          heading: "Quality Over Quantity",
          content: "Minimalism isn't about deprivation—it's about being selective. Instead of ten mediocre pairs of shoes, keep three you love. Instead of a closet full of clothes you never wear, maintain a smaller collection of pieces that make you feel great. When you reduce quantity, you can increase quality."
        },
        {
          heading: "Mental and Digital Minimalism",
          content: "Physical clutter is just one dimension. Consider your commitments, your schedule, your digital life. Do you need to be on five social media platforms? Must you say yes to every invitation? Minimalism applies to time and attention too. Protect your mental space as carefully as your physical space."
        },
        {
          heading: "The Freedom of Less",
          content: "Here's what minimalism creates: less time spent cleaning and organizing, fewer decisions to make, less financial pressure, more mental clarity, greater focus on relationships and experiences. In removing what doesn't matter, we make room for what does. That's the true gift of minimalism."
        },
      ],
      conclusion: "Minimalism is a journey, not a destination. You don't need to purge everything or live in an empty room. Start with one drawer, one category, one area of life. As you experience the lightness that comes from letting go, you'll naturally want to continue. What you'll discover isn't just less stuff—it's more freedom, clarity, and space for what truly matters."
    },
    tags: ["minimalism", "intentional living", "simplicity", "personal growth"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  
  // Get articles from the same category, excluding current
  const related = articles.filter(
    article => article.id !== currentId && article.category === currentArticle.category
  );
  
  // If not enough from same category, add others
  if (related.length < limit) {
    const others = articles.filter(
      article => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
