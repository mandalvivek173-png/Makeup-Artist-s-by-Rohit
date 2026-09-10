import { ServiceItem, CourseItem, PortfolioItem, BlogPost, Review } from './types';

export const MAKEUP_SERVICES: ServiceItem[] = [
  {
    id: 'm1',
    name: 'Bridal Makeup',
    category: 'makeup',
    description: 'High-definition, airbrush or premium traditional makeup crafted to stay flawless throughout your wedding day. Includes skin prep, lash application, and draping.',
    iconName: 'Crown',
    popular: true,
    image: 'https://i.ibb.co/73fvpKm/image.png'
  },
  {
    id: 'm2',
    name: 'Engagement Makeup',
    category: 'makeup',
    description: 'Elegant, radiating look tailored for ring ceremonies and intimate family gatherings, balancing glow and sophistication.',
    iconName: 'Sparkles',
    image: 'https://i.ibb.co/Xkdh0DRW/Whats-App-Image-2026-07-25-at-18-11-41.jpg'
  },
  {
    id: 'm3',
    name: 'Reception Makeup',
    category: 'makeup',
    description: 'Stunning and glamorous evening makeup tailored for high-contrast stage lighting, photographers, and your grand entry.',
    iconName: 'Heart',
    image: 'https://i.ibb.co/sdkqj5Yw/image.png'
  },
  {
    id: 'm4',
    name: 'Haldi & Mehendi Ceremony Makeup',
    category: 'makeup',
    description: 'Fresh, dew-like light makeup that feels breathable and radiant for outdoor morning events. Waterproof and smudge-proof.',
    iconName: 'Sun',
    image: 'https://i.ibb.co/m5GdbgHr/image.png'
  },
  {
    id: 'm5',
    name: 'Pre-bridal Beauty Work',
    category: 'makeup',
    description: 'Comprehensive beauty preparation including facials, detailing, skin nourishing therapies, and exfoliating treatments weeks before your main events.',
    iconName: 'Gem',
    image: 'https://i.ibb.co/vxbL9Z7Y/image.png'
  },
  {
    id: 'm6',
    name: 'Groom Makeup Package',
    category: 'makeup',
    description: 'Minimal, matte camera-ready groom styling for a natural, refined appearance that perfectly complements the bride.',
    iconName: 'User',
    image: 'https://i.ibb.co/5XC23vZG/image.png'
  },
  {
    id: 'm7',
    name: 'Party Makeup',
    category: 'makeup',
    description: 'Chic, premium makeup for guests, cocktail parties, birthdays, or festivals with customized palettes and flawless finishes.',
    iconName: 'PartyPopper',
    image: 'https://i.ibb.co/B5kDjJrb/image.png'
  },
  {
    id: 'm8',
    name: 'Basic Makeup',
    category: 'makeup',
    description: 'Subtle and simple everyday style enhancement with light corrections, flawless base, and soft highlight.',
    iconName: 'Smile',
    image: 'https://i.ibb.co/0pBfrvR6/image.png'
  },
  {
    id: 'm9',
    name: 'Photoshoot Model\'s Makeup',
    category: 'makeup',
    description: 'Creative and high-definition fashion-forward makeup for lookbooks, designer campaigns, and editorial catalogs.',
    iconName: 'Camera',
    popular: true,
    image: 'https://i.ibb.co/fz93VWW2/image.png'
  },
  {
    id: 'm10',
    name: 'Theatre Artist Character & Actor Makeup',
    category: 'makeup',
    description: 'Heavy-duty character prosthetic work and expressive theatrical makeup designed for stage visibility under intense spotlights.',
    iconName: 'MasksPlay',
    image: 'https://i.ibb.co/tPzLDXcg/image.png'
  },
  {
    id: 'm11',
    name: 'Annual School Function Makeup',
    category: 'makeup',
    description: 'Vibrant, bulk makeup setups for children and stage performers for group dances, annual events, and dramas.',
    iconName: 'GraduationCap',
    image: 'https://i.ibb.co/Zzqwdpkx/image.png'
  },
  {
    id: 'm12',
    name: 'Annual Ram Leela Makeup',
    category: 'makeup',
    description: 'Traditional and mythological character makeups (Lord Rama, Sita, Ravana, Hanuman) utilizing high-pigment durable theatrical colors.',
    iconName: 'Flame',
    popular: true,
    image: 'https://i.ibb.co/m5XfXnsW/image.png'
  },
  {
    id: 'm13',
    name: 'Web Series Artist & Actor Makeup',
    category: 'makeup',
    description: 'Dynamic, ultra-realistic 4K/8K resolution makeup matching the character arc, scene continuity, and emotional moods of web streaming media.',
    iconName: 'Tv',
    image: 'https://i.ibb.co/PsHX6nBy/image.png'
  },
  {
    id: 'm14',
    name: 'Film Movie Artist & Actor Makeup',
    category: 'makeup',
    description: 'Premium on-set makeup support for feature films, keeping continuity, handling weather conditions, and matching high-definition cinema cameras.',
    iconName: 'Clapperboard',
    image: 'https://i.ibb.co/JjL5g4MH/image.png'
  },
  {
    id: 'm15',
    name: 'Makeup Contract for News Channels',
    category: 'makeup',
    description: 'Matte, highly professional, glare-reducing studio makeup contracts for news anchors, panelists, and broadcast personalities.',
    iconName: 'Radio',
    image: 'https://i.ibb.co/xtjjvtjs/image.png'
  },
  {
    id: 'm16',
    name: 'Auto Expo Model\'s Makeup',
    category: 'makeup',
    description: 'Sleek, glamorous, modern, and high-impact futuristic makeups that stand out on the exhibition floors and flash photography.',
    iconName: 'Car',
    image: 'https://i.ibb.co/wZwCPSLH/Whats-App-Image-2026-07-23-at-23-33-28.jpg'
  },
  {
    id: 'm17',
    name: 'Fashion Show Makeup',
    category: 'makeup',
    description: 'Avant-garde, dramatic runway makeups designed in collaboration with fashion designers to highlight seasonal couture.',
    iconName: 'UserCheck',
    image: 'https://i.ibb.co/5hgrVN3y/image.png'
  },
  {
    id: 'm18',
    name: 'Event Shows & Concert Makeup',
    category: 'makeup',
    description: 'Sweat-resistant, high-glam, glitter, and spotlight-ready makeup designed for dancers, rockstars, and stage anchors.',
    iconName: 'Mic',
    image: 'https://i.ibb.co/wNQ9PTpc/image.png'
  },
  {
    id: 'm19',
    name: "Wedding Event Makeup's",
    category: 'makeup',
    description: 'Complete family packages spanning bride, groom, bridesmaids, and close relatives, fully managed by our professional freelance team.',
    iconName: 'Users',
    image: 'https://i.ibb.co/d04ZshCT/image.png'
  }
];

export const HAIR_SERVICES: ServiceItem[] = [
  {
    id: 'h1',
    name: 'Basic Hair Style',
    category: 'hair',
    description: 'Clean blow drys, straight ironing, or simple elegant waves perfect for everyday professional or casual outings.',
    iconName: 'Scissors',
    image: 'https://i.ibb.co/dwTPxFtq/image.png'
  },
  {
    id: 'h2',
    name: 'Party Wear Hair Style',
    category: 'hair',
    description: 'Stylish updos, elegant half-tie cascades, and messy buns custom styled to complement your party outfits.',
    iconName: 'Sparkle',
    image: 'https://i.ibb.co/XxBRS3qj/image.png'
  },
  {
    id: 'h3',
    name: 'Advance Hair Style',
    category: 'hair',
    description: 'Complex braided buns, vintage waves, intricate rose designs, and sleek architectural runway styling.',
    iconName: 'Flower',
    popular: true,
    image: 'https://i.ibb.co/x8fmdvB6/image.png'
  },
  {
    id: 'h4',
    name: 'Every Occasion Hair Style',
    category: 'hair',
    description: 'Versatile styling tailored precisely to your facial geometry, dress neckline, and event theme.',
    iconName: 'Calendar',
    image: 'https://i.ibb.co/3mqy3TLH/image.png'
  },
  {
    id: 'h5',
    name: 'Crimping Hair Style',
    category: 'hair',
    description: 'Adding dynamic volume and unique texture through precision crimping techniques, forming base for grand styles.',
    iconName: 'Activity',
    image: 'https://i.ibb.co/yndLsTQ5/image.png'
  },
  {
    id: 'h6',
    name: 'Ironing Curls Hair Style',
    category: 'hair',
    description: 'High-definition bouncy curls or ribbon curls created precisely using professional hair straighteners.',
    iconName: 'Zap',
    image: 'https://i.ibb.co/XxW6F98m/image.png'
  },
  {
    id: 'h7',
    name: 'Tong Curls Hair Style',
    category: 'hair',
    description: 'Glamorous Hollywood waves or soft beachy ringlets styled with professional heating barrel tongs.',
    iconName: 'RefreshCw',
    image: 'https://i.ibb.co/GfhDb5Gx/image.png'
  },
  {
    id: 'h8',
    name: 'Hair Style with Hair Accessories',
    category: 'hair',
    description: 'Intricate styling beautifully embedded with fresh flowers, pearls, crowns, tiaras, or traditional mathapatti.',
    iconName: 'Award',
    popular: true,
    image: 'https://i.ibb.co/11KhSQT/image.png'
  }
];

export const COURSES: CourseItem[] = [
  {
    id: 'c1',
    name: 'Basic Makeup Course',
    duration: '4 Weeks',
    level: 'Beginner',
    description: 'Master the fundamentals of skin tones, color theory, product choices, base preparation, simple eye techniques, and everyday enhancement makeup.',
    modules: [
      'Understanding Skin Types & Face Shapes',
      'Color Correction & Foundation Matching',
      'Daytime Glam vs. Evening Matte Looks',
      'Basic Eye Liner & Lip Artistry'
    ],
    price: '₹15,000'
  },
  {
    id: 'c2',
    name: 'Advance Makeup Course',
    duration: '8 Weeks',
    level: 'Advanced',
    description: 'Deep dive into specialized bridal styling, high-definition (HD) makeup, airbrush systems, cut-crease eye art, and commercial photoshoot projects.',
    modules: [
      'Airbrush Makeup Application Methods',
      'Advanced High-Definition (HD) Techniques',
      'Traditional, Muslim, & South-Indian Bridal Looks',
      'Creative Editorial & Glossy High-Fashion Looks'
    ],
    price: '₹35,000'
  },
  {
    id: 'c3',
    name: 'Prosthetic & SFX Theatre Makeup Trainer Course',
    duration: '12 Weeks',
    level: 'Professional',
    description: 'Specialized course by Rohit kumar covering professional theatre character design, wound creation, old age effects, and molding prosthetic appliances.',
    modules: [
      '3D Scraping & Wax Modeling',
      'Creating Realistic Burns, Cuts, and Scarring',
      'Age Transformation & Character Masking',
      'Mythological Character Art (Ram Leela / Historical)'
    ],
    price: '₹55,000'
  },
  {
    id: 'c4',
    name: 'Basic Hair Styles Course',
    duration: '3 Weeks',
    level: 'Beginner',
    description: 'Learn the foundational concepts of hair styling, tool safety, blow-dry sections, straight ironing, and basic braids.',
    modules: [
      'Hair Anatomy & Texture Analysis',
      'Mastering the Blow-Dry & Volumizing',
      'Straightening & Basic Curling Irons',
      'Classic Low & High Buns'
    ],
    price: '₹12,000'
  },
  {
    id: 'c5',
    name: 'Basic to Advance Hair Styles Course',
    duration: '6 Weeks',
    level: 'Professional',
    description: 'Complete comprehensive masterclass on curls, braids, advanced updos, crimping, and styling hair with artificial extensions & floral ornaments.',
    modules: [
      'Crimping & Dynamic Volume Creation',
      'Tong Curling & Hollywood Glamour Waves',
      'Sleek Architectural Updos & Rose Buns',
      'Placing Extensions, Hairpieces, and Accessories'
    ],
    price: '₹25,000'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  // ✦ Photoshoot Collection
  {
    id: 'photo-1',
    title: 'High-Fashion Editorial Glamour',
    category: 'editorial',
    image: 'https://i.ibb.co/C54DLdmp/image.png',
    description: 'Sculpted contouring, sharp eye definition, and luminous glass skin tailored for high-fashion runway and magazine shoots.'
  },
  {
    id: 'photo-2',
    title: 'Studio Glam Fashion Portrait',
    category: 'editorial',
    image: 'https://i.ibb.co/T5L8VMW/image.png',
    description: 'Flawless studio lighting-ready base with dramatic lash enhancement and soft blush glow.'
  },
  {
    id: 'photo-3',
    title: 'Avant-Garde Magazine Editorial Look',
    category: 'editorial',
    image: 'https://i.ibb.co/6chPmqGt/image.png',
    description: 'Striking high-contrast beauty look designed for glossy editorial spreads and catalog campaigns.'
  },
  {
    id: 'photo-4',
    title: 'Chic Commercial Model Makeover',
    category: 'editorial',
    image: 'https://i.ibb.co/nM7dGHVL/image.png',
    description: 'Effortless modern aesthetic with radiant dewiness and warm contouring for commercial brand shoots.'
  },
  {
    id: 'photo-5',
    title: 'High-End Catalog Beauty Styling',
    category: 'editorial',
    image: 'https://i.ibb.co/cKcKQj5Q/image.png',
    description: 'Precision-blended eyeshadows and velvety matte lips crafted for studio digital cameras.'
  },
  {
    id: 'photo-6',
    title: 'Contemporary Fashion Ramp Glow',
    category: 'editorial',
    image: 'https://i.ibb.co/m59DbtxX/image.png',
    description: 'Glossy highlights and bold gaze styling suited for runway walks and high-end couture.'
  },
  {
    id: 'photo-7',
    title: 'Creative Brand Shoot Glamour',
    category: 'editorial',
    image: 'https://i.ibb.co/h1Jv44tD/image.png',
    description: 'Balanced color harmony and sweat-resistant formula for full-day studio lighting sessions.'
  },
  {
    id: 'photo-8',
    title: 'Luxury Portfolio Model Transformation',
    category: 'editorial',
    image: 'https://i.ibb.co/Ld2GQ8w5/image.png',
    description: 'Sleek brow framing, defined lip liner, and seamless foundation base for modeling portfolios.'
  },
  {
    id: 'photo-9',
    title: 'Vogue-Inspired Editorial Portrait',
    category: 'editorial',
    image: 'https://i.ibb.co/xqkgFNzQ/image.png',
    description: 'Artistic eyeshadow transitions and structured cheekbone sculpting for fashion publications.'
  },
  {
    id: 'photo-10',
    title: 'Modern Studio Fashion Artistry',
    category: 'editorial',
    image: 'https://i.ibb.co/s9Y94x8J/image.png',
    description: 'Clean graphic lines and lit-from-within glow designed for 4K video and still photography.'
  },
  {
    id: 'photo-11',
    title: 'Haute Couture Runway Elegance',
    category: 'editorial',
    image: 'https://i.ibb.co/4ZZMVYD3/image.png',
    description: 'Dramatic gaze with nude velvet lip finish crafted for fashion designer showcases.'
  },
  {
    id: 'photo-12',
    title: 'Camera-Ready Glamour Portfolio',
    category: 'editorial',
    image: 'https://i.ibb.co/0Vv3B34J/image.png',
    description: 'Glare-free matte HD base ensuring zero flashback under bright studio strobe lights.'
  },
  {
    id: 'photo-13',
    title: 'Editorial Concept Fashion Look',
    category: 'editorial',
    image: 'https://i.ibb.co/qMnSmsMD/image.png',
    description: 'Expressive makeup artistry blending bold tones and ultra-fine skin finishing.'
  },
  {
    id: 'photo-14',
    title: 'High-Definition Commercial Photoshoot',
    category: 'editorial',
    image: 'https://i.ibb.co/mrxSXvkb/image.png',
    description: 'Poreless complexion finish and soft bronze smoky eye for premium brand campaigns.'
  },
  {
    id: 'photo-15',
    title: 'Bold Fashion Catalog Masterpiece',
    category: 'editorial',
    image: 'https://i.ibb.co/1JRKxvmb/image.png',
    description: 'Sultry eye drama and sculpted features created for fashion lookbooks and digital catalogs.'
  },
  {
    id: 'photo-16',
    title: 'Signature Fashion Model Artistry',
    category: 'editorial',
    image: 'https://i.ibb.co/vCmQD51j/image.png',
    description: 'Flawless HD skin prep, defined lashes, and elegant lip tone for fashion modeling sessions.'
  },

  // ✦ Bridal Collection
  {
    id: 'bridal-1',
    title: 'Royal Heritage Bridal Transformation',
    category: 'bridal',
    image: 'https://i.ibb.co/rShgs9L/image.png',
    description: 'Timeless traditional bridal glamour with glowing HD foundation, regal kohl eyes, and deep crimson lips.'
  },
  {
    id: 'bridal-2',
    title: 'Classic Indian Bridal Elegance',
    category: 'bridal',
    image: 'https://i.ibb.co/JPYytpM/image.png',
    description: 'Grand bridal look with waterproof base, delicate golden shimmer lids, and flawless dupatta setting.'
  },
  {
    id: 'bridal-3',
    title: 'Flawless HD Royal Bridal Glow',
    category: 'bridal',
    image: 'https://i.ibb.co/nsy5WGtd/image.png',
    description: '18-hour sweatproof royal bridal base with dramatic cut-crease eye makeup and luxury lash extensions.'
  },
  {
    id: 'bridal-4',
    title: 'Contemporary Pastel Wedding Bride',
    category: 'bridal',
    image: 'https://i.ibb.co/XksstWbM/image.png',
    description: 'Soft, romantic rose-gold hues paired with a radiant dewy complexion for modern wedding ceremonies.'
  },
  {
    id: 'bridal-5',
    title: 'Grand Wedding Reception Bridal Look',
    category: 'bridal',
    image: 'https://i.ibb.co/x83t3d1s/image.png',
    description: 'Statement evening bridal makeover featuring ultra-glam metallic eyes and long-lasting sculpted contour.'
  },

  // ✦ Hairstyles Collection
  {
    id: 'hair-1',
    title: 'Intricate Floral Bridal Bun',
    category: 'hair',
    image: 'https://i.ibb.co/k6ycMsMJ/image.png',
    description: 'Architectural structured bun styled with fresh floral accessories and secure dupatta placement.'
  },
  {
    id: 'hair-2',
    title: 'Hollywood Glamour Bouncy Waves',
    category: 'hair',
    image: 'https://i.ibb.co/G3FNtsmH/image.png',
    description: 'Voluminous, cascading thermal tong curls crafted for reception gowns and cocktail parties.'
  },
  {
    id: 'hair-3',
    title: 'Textured Crimping & Voluminous Updo',
    category: 'hair',
    image: 'https://i.ibb.co/xWMc3wZ/image.png',
    description: 'High-density micro-crimped hair base styled into an ornate, modern festive updo.'
  },
  {
    id: 'hair-4',
    title: 'Royal Rose Bud Hair Artistry',
    category: 'hair',
    image: 'https://i.ibb.co/tpqpNH02/image.png',
    description: 'Exquisite hand-sculpted rose petal hair shapes creating a breathtaking 360-degree profile.'
  },
  {
    id: 'hair-5',
    title: 'Sleek Architectural High Bun',
    category: 'hair',
    image: 'https://i.ibb.co/8V91HLF/image.png',
    description: 'Polished, clean top bun with neat front framing for modern brides and red-carpet events.'
  },
  {
    id: 'hair-6',
    title: 'Braided Crown with Pearl Accents',
    category: 'hair',
    image: 'https://i.ibb.co/gLD2dHbj/image.png',
    description: 'Romantic multi-strand Dutch braid woven with delicate pearls and floral baby\'s breath.'
  },
  {
    id: 'hair-7',
    title: 'Cascading Soft Mermaid Braids',
    category: 'hair',
    image: 'https://i.ibb.co/6Jbzx6q6/image.png',
    description: 'Elaborate textured bridal braid adorned with traditional jewelry and floral gajra details.'
  },
  {
    id: 'hair-8',
    title: 'Contemporary Party Wear Curls',
    category: 'hair',
    image: 'https://i.ibb.co/B5cfvK6x/image.png',
    description: 'Glossy, heat-protected iron curls delivering lasting bounce and movement throughout the evening.'
  },
  {
    id: 'hair-9',
    title: 'Classic Low Chignon with Brooch',
    category: 'hair',
    image: 'https://i.ibb.co/yBF1XjgK/image.png',
    description: 'Timeless low-set chignon bun designed for ethnic lehengas and heavy jewelry support.'
  },
  {
    id: 'hair-10',
    title: 'Modern Half-Up Romantic Curls',
    category: 'hair',
    image: 'https://i.ibb.co/WNGkhB4R/image.png',
    description: 'Delicate crown twists flowing into luscious, defined curls for sangeet and engagement ceremonies.'
  },
  {
    id: 'hair-11',
    title: 'Ornate Traditional Gajra Braid',
    category: 'hair',
    image: 'https://i.ibb.co/9mBxMpj9/image.png',
    description: 'Full-length festive braid accented with authentic fresh jasmine garlands and gold hairpins.'
  },

  // ✦ Celebrities Collection
  {
    id: 'celeb-1',
    title: 'Celebrity Red Carpet Spotlight Glow',
    category: 'celebrity',
    image: 'https://i.ibb.co/3ZcxXhq/image.png',
    description: 'High-impact red carpet look with flawless contouring and camera-ready HD skin finish.'
  },
  {
    id: 'celeb-2',
    title: 'VIP Celebrity Gala Glamour',
    category: 'celebrity',
    image: 'https://i.ibb.co/GvBLXqs9/image.png',
    description: 'Exclusive celebrity makeup styling with sculpted cheekbones and elegant evening eye makeup.'
  },
  {
    id: 'celeb-3',
    title: 'Celebrity Stage & Award Show Look',
    category: 'celebrity',
    image: 'https://i.ibb.co/wZqsmTsr/image.png',
    description: 'Long-wear sweatproof makeup crafted for intense stage lighting and 4K telecasts.'
  },
  {
    id: 'celeb-4',
    title: 'Media & Press Conference Celebrity Style',
    category: 'celebrity',
    image: 'https://i.ibb.co/fVQt3tVX/image.png',
    description: 'Natural yet high-definition makeup giving a fresh, polished finish for live television cameras.'
  },
  {
    id: 'celeb-5',
    title: 'Celebrity Music Video Transformation',
    category: 'celebrity',
    image: 'https://i.ibb.co/gZ1V3BWc/image.png',
    description: 'Daring, dynamic beauty look with vibrant accents designed for cinematic camera angles.'
  },
  {
    id: 'celeb-6',
    title: 'High-Profile Celebrity Shoot Artistry',
    category: 'celebrity',
    image: 'https://i.ibb.co/Lz3FrqvM/image.png',
    description: 'Refined aesthetic with seamless foundation blending and customized brow framing.'
  },
  {
    id: 'celeb-7',
    title: 'Star-Studded Premiere Makeup',
    category: 'celebrity',
    image: 'https://i.ibb.co/yc1WtLqG/image.png',
    description: 'Smoky eyes and velvet nude lips styled for celebrity movie premieres and launch events.'
  },
  {
    id: 'celeb-8',
    title: 'Celebrity Brand Ambassador Glam',
    category: 'celebrity',
    image: 'https://i.ibb.co/kgmPWhkn/image.png',
    description: 'Luminous, glass-skin complexion created for celebrity endorsement campaigns.'
  },
  {
    id: 'celeb-9',
    title: 'VIP Artist Runway Look',
    category: 'celebrity',
    image: 'https://i.ibb.co/PZrWCgKr/image.png',
    description: 'Bold, modern glamour tailored for celebrity appearances at premier fashion weeks.'
  },
  {
    id: 'celeb-10',
    title: 'Celebrity Cover Shoot Elegance',
    category: 'celebrity',
    image: 'https://i.ibb.co/dwP5jxhc/image.png',
    description: 'Pristine magazine cover styling with defined features and soft-focus skin texture.'
  },
  {
    id: 'celeb-11',
    title: 'Celebrity Film Promotion Glamour',
    category: 'celebrity',
    image: 'https://i.ibb.co/xy1F8pd/image.png',
    description: 'Vibrant, charismatic look crafted to look stunning across in-person events and social media.'
  },
  {
    id: 'celeb-12',
    title: 'Red Carpet Star Makeover',
    category: 'celebrity',
    image: 'https://i.ibb.co/jk4gfSWh/image.png',
    description: 'Dramatic eye contour and satin finish formulated to resist glare and high humidity.'
  },
  {
    id: 'celeb-13',
    title: 'Celebrity Studio Interview Styling',
    category: 'celebrity',
    image: 'https://i.ibb.co/NnbrRvqc/image.png',
    description: 'Balanced, glare-free HD makeup designed for news panels and broadcast interviews.'
  },
  {
    id: 'celeb-14',
    title: 'Iconic Celebrity Stage Performance Look',
    category: 'celebrity',
    image: 'https://i.ibb.co/j9s8R8vX/image.png',
    description: 'Expressive makeup with high-grade stage pigments that hold up through high-energy performances.'
  },
  {
    id: 'celeb-15',
    title: 'Celebrity Fashion Week Appearance',
    category: 'celebrity',
    image: 'https://i.ibb.co/Zp6KGnxw/image.png',
    description: 'Chic haute couture aesthetic with minimalist precision and radiant skin highlights.'
  },
  {
    id: 'celeb-16',
    title: 'Celebrity OTT Series Character Glam',
    category: 'celebrity',
    image: 'https://i.ibb.co/C3GczmxB/image.png',
    description: 'Realistic ultra-high-definition makeup crafted for 4K OTT web series and film productions.'
  },
  {
    id: 'celeb-17',
    title: 'Celebrity Concert & Live Tour Look',
    category: 'celebrity',
    image: 'https://i.ibb.co/k2W26Ncy/image.png',
    description: 'Vibrant, high-contrast makeup delivering maximum visibility under arena concert lights.'
  },
  {
    id: 'celeb-18',
    title: 'Star Luxury Event Makeover',
    category: 'celebrity',
    image: 'https://i.ibb.co/9mJvXHyR/image.png',
    description: 'Timeless elegance with velvet lipstick and soft diffused shadows for gala dinners.'
  },
  {
    id: 'celeb-19',
    title: 'Celebrity Photoshoot Signature Base',
    category: 'celebrity',
    image: 'https://i.ibb.co/bg3PHDvL/image.png',
    description: 'Ultra-fine pore coverage and warm bronzed glow for luxury magazine features.'
  },
  {
    id: 'celeb-20',
    title: 'VIP Red Carpet Couture Glamour',
    category: 'celebrity',
    image: 'https://i.ibb.co/pjqb0PdL/image.png',
    description: 'Sophisticated red-carpet styling with defined eyes and radiant cheekbone glow.'
  },
  {
    id: 'celeb-21',
    title: 'Celebrity Editorial Feature',
    category: 'celebrity',
    image: 'https://i.ibb.co/0Vs6bWkR/image.png',
    description: 'Striking editorial makeup crafted in collaboration with top celebrity stylists.'
  },
  {
    id: 'celeb-22',
    title: 'Celebrity Fashion Showcase Look',
    category: 'celebrity',
    image: 'https://i.ibb.co/1fZmrzYh/image.png',
    description: 'Glamorous, high-fashion styling with luminous skin and tailored lash enhancements.'
  },
  {
    id: 'celeb-23',
    title: 'Celebrity Event Signature Masterpiece',
    category: 'celebrity',
    image: 'https://i.ibb.co/WvNnjQSs/image.png',
    description: 'Unrivaled high-definition celebrity makeover for exclusive milestone celebrations.'
  },

  // ✦ Theatrical & SFX Characters
  {
    id: 'theatre-1',
    title: 'Dramatic Stage Play Character Look',
    category: 'character',
    image: 'https://i.ibb.co/TqwsJ3rJ/image.png',
    description: 'High-contrast theatrical character makeover with sweatproof stage paint and expressive facial contouring.'
  },
  {
    id: 'theatre-2',
    title: 'Intense Theatre Actor Transformation',
    category: 'character',
    image: 'https://i.ibb.co/GfzBDC0s/image.png',
    description: 'Bold theatrical character styling crafted for maximum stage visibility under strong theater spotlights.'
  },
  {
    id: 'theatre-3',
    title: 'Expressive Drama Character Artistry',
    category: 'character',
    image: 'https://i.ibb.co/j951g7xt/image.png',
    description: 'Distinctive stage drama character makeup with defined eyebrows, dramatic accents, and durable pigments.'
  },
  {
    id: 'theatre-4',
    title: 'Theatrical Narrative Character Look',
    category: 'character',
    image: 'https://i.ibb.co/xtCjtmZy/image.png',
    description: 'Custom theatrical role styling enhancing facial expressions and script-driven character personalities.'
  },
  {
    id: 'theatre-5',
    title: 'Stage Actor Transformation Profile',
    category: 'character',
    image: 'https://i.ibb.co/B2fkQyQH/image.png',
    description: 'Artistic stage makeup designed for theatre productions, combining prosthetic highlights and bold contours.'
  },
  {
    id: 'theatre-6',
    title: 'Classical Theatre Character Portrait',
    category: 'character',
    image: 'https://i.ibb.co/hRVVHLhM/image.png',
    description: 'Expressive theatrical styling tailored for amphitheater performances and cultural stage plays.'
  },
  {
    id: 'theatre-7',
    title: 'Theatrical Stage Drama Hero Profile',
    category: 'character',
    image: 'https://i.ibb.co/4w1GtQpQ/image.png',
    description: 'Heavy-duty theatrical stage character makeup ensuring longevity and bold visual impact from any seat.'
  },
  {
    id: 'theatre-8',
    title: 'Dynamic Stage Play Role Makeover',
    category: 'character',
    image: 'https://i.ibb.co/prfBj1cW/image.png',
    description: 'Comprehensive character transformation for live theatre, musicals, and classical drama acts.'
  },
  {
    id: 'char-1',
    title: 'Theatrical Character Transformation',
    category: 'character',
    image: 'https://i.ibb.co/21pXNYXV/image.png',
    description: 'Detailed stage character makeups featuring robust sweatproof colors and sharp contouring for intense theatre lights.'
  },
  {
    id: 'char-3',
    title: 'Stage Drama Character Design',
    category: 'character',
    image: 'https://i.ibb.co/ZRY3GQrB/image.png',
    description: 'Bold, expressive lines and high-contrast styling designed for maximum visibility in large amphitheaters.'
  },
  {
    id: 'char-4',
    title: 'Advanced Prosthetic Sculpting',
    category: 'character',
    image: 'https://i.ibb.co/tPhtwW9d/image.png',
    description: 'Three-dimensional wound aging, scars, and tissue modeling applied professionally using liquid latex.'
  },
  {
    id: 'char-5',
    title: 'Cinematic Actor Character Profile',
    category: 'character',
    image: 'https://i.ibb.co/wNtkjYN5/image.png',
    description: 'Custom character makeup aligned precisely with the script demands and emotional scene backdrops of cinema.'
  },

  // ✦ Wedding Events Collection
  {
    id: 'wedding-1',
    title: 'Grand Royal Wedding Celebration Look',
    category: 'wedding',
    image: 'https://i.ibb.co/Sqwdw5C/image.png',
    description: 'Opulent wedding event makeup designed for brides and VIP family members with radiant HD complexion and regal tones.'
  },
  {
    id: 'wedding-2',
    title: 'Festive Wedding Ceremony Elegance',
    category: 'wedding',
    image: 'https://i.ibb.co/j9xgVz5Q/image.png',
    description: 'Luminous festive celebration styling featuring glowing skin, soft smoky eyes, and elegant hair ornamentation.'
  },
  {
    id: 'wedding-3',
    title: 'Luxury Sangeet & Reception Makeover',
    category: 'wedding',
    image: 'https://i.ibb.co/WNj0pDBC/image.png',
    description: 'Glitter-infused evening glamour with sweatproof formula for dance celebrations and grand stage entrances.'
  },
  {
    id: 'wedding-4',
    title: 'Traditional Wedding Ritual Beauty',
    category: 'wedding',
    image: 'https://i.ibb.co/Pv20VZs6/image.png',
    description: 'Classic heritage styling with flawless skin coverage, rich traditional lip shades, and neat dupatta draping.'
  },
  {
    id: 'wedding-5',
    title: 'Intimate Family Wedding Event Glamour',
    category: 'wedding',
    image: 'https://i.ibb.co/PzCqpYBH/image.png',
    description: 'Soft yet striking festive party makeup tailored for bridesmaids, mothers, and close relatives.'
  },
  {
    id: 'wedding-6',
    title: 'Royal Mandap Ceremony Makeover',
    category: 'wedding',
    image: 'https://i.ibb.co/mVrJRvbd/image.png',
    description: '18-hour stay wedding event makeup formulated to withstand warm sacred fire heat and flash photography.'
  },
  {
    id: 'wedding-7',
    title: 'Royal Wedding Gala Evening Glamour',
    category: 'wedding',
    image: 'https://i.ibb.co/NqZ0KJr/image.png',
    description: 'Opulent wedding celebration makeup featuring radiant HD complexion, soft sculpted blush, and graceful bridal party styling.'
  },
  {
    id: 'wedding-8',
    title: 'Traditional Indian Wedding Draping & Styling',
    category: 'wedding',
    image: 'https://i.ibb.co/cS0qBSYG/image.png',
    description: 'Exquisite ceremonial wedding look with sweatproof HD base, classic ethnic jewelry setting, and regal bridal glow.'
  },
  {
    id: 'wedding-9',
    title: 'Festive Wedding Sangeet Celebration Look',
    category: 'wedding',
    image: 'https://i.ibb.co/B5zKvQh7/image.png',
    description: 'Dazzling high-definition festive makeover crafted for evening wedding rituals with camera-ready finish.'
  },
  {
    id: 'wedding-10',
    title: 'Grand Wedding Reception Bridal Elegance',
    category: 'wedding',
    image: 'https://i.ibb.co/S4mc4LwX/image.png',
    description: 'Sophisticated modern wedding event makeover featuring sculpted contours, dramatic eyes, and elegant hair styling.'
  },
  {
    id: 'wedding-11',
    title: 'Ceremonial Wedding Ritual Glamour',
    category: 'wedding',
    image: 'https://i.ibb.co/WvnsCNMx/image.png',
    description: 'Timeless wedding event makeup designed for long ceremonies under warm stage lighting with zero flashback.'
  },

  // ✦ Annual Ram Leela Collection
  {
    id: 'ramleela-1',
    title: 'Ram Leela Divine Character Transformation',
    category: 'ramleela',
    image: 'https://i.ibb.co/fY8VH25K/image.png',
    description: 'Authentic mythological character makeup with vibrant theatrical pigments and ornate traditional headpiece setting.'
  },
  {
    id: 'ramleela-2',
    title: 'Mythological Stage Actor Artistry',
    category: 'ramleela',
    image: 'https://i.ibb.co/yc6TZjNh/image.png',
    description: 'Bold, divine facial painting and traditional mukut ornamentation crafted for grand outdoor Ram Leela stages.'
  },
  {
    id: 'ramleela-3',
    title: 'Epic Ram Leela Theatrical Makeover',
    category: 'ramleela',
    image: 'https://i.ibb.co/cSM61Rxv/image.png',
    description: 'High-contrast mythological makeup designed for intense stage visibility and historical character portrayal.'
  },
  {
    id: 'ramleela-4',
    title: 'Ram Leela Traditional Tilak & Base Art',
    category: 'ramleela',
    image: 'https://i.ibb.co/jZ9rP1Q4/image.png',
    description: 'Intricate traditional sacred forehead markings, metallic paints, and sweatproof foundation for night-long enactments.'
  },
  {
    id: 'ramleela-5',
    title: 'Divine Ram Leela Role Profile',
    category: 'ramleela',
    image: 'https://i.ibb.co/d4pnrYjH/image.png',
    description: 'Vibrant, majestic facial art and classical dramatic styling tailored for leading Ram Leela characters.'
  },
  {
    id: 'ramleela-6',
    title: 'Grand Ram Leela Stage Performance Look',
    category: 'ramleela',
    image: 'https://i.ibb.co/LdYVzdLp/image.png',
    description: 'Intense, durable stage makeup with radiant traditional gold accents for large-scale religious theatrical acts.'
  },
  {
    id: 'ramleela-7',
    title: 'Mythological Warrior Character Look',
    category: 'ramleela',
    image: 'https://i.ibb.co/dswMZg4K/image.png',
    description: 'Powerful character sculpting with bold traditional facial markings designed for dramatic battle enactments.'
  },
  {
    id: 'ramleela-8',
    title: 'Ram Leela Cultural Drama Styling',
    category: 'ramleela',
    image: 'https://i.ibb.co/75kgwNC/image.png',
    description: 'High-impact historical makeup art recreating iconic mythological personalities with precision.'
  },
  {
    id: 'ramleela-9',
    title: 'Sacred Ram Leela Character Portrait',
    category: 'ramleela',
    image: 'https://i.ibb.co/MyFF78M2/image.png',
    description: 'Elaborate traditional facial artistry and jewelry coordination for festive Ramlila stage shows.'
  },
  {
    id: 'ramleela-10',
    title: 'Royal Mythological Character Makeover',
    category: 'ramleela',
    image: 'https://i.ibb.co/PGCMTfWf/image.png',
    description: 'Intricate detail work with radiant red and gold traditional cosmetic pigments for theatrical grandeur.'
  },
  {
    id: 'ramleela-11',
    title: 'Signature Ram Leela Stage Artistry',
    category: 'ramleela',
    image: 'https://i.ibb.co/xKwdFyFJ/image.png',
    description: 'Exemplary mythological stage art by Rohit kumar, crafted for thousands of live spectators.'
  },

  // ✦ Annual School Function Collection
  {
    id: 'school-1',
    title: 'Annual School Function Stage Transformation',
    category: 'school',
    image: 'https://i.ibb.co/tPYkysQV/image.png',
    description: 'Vibrant, skin-safe, and age-appropriate stage performance makeup designed for school annual day celebrations and dance dramas.'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Secrets to Keep Your Bridal Makeup Fresh All Day',
    excerpt: 'Ensure your wedding day look stands up to heat, lights, and tears. Learn professional priming and setting hacks used by elite freelance artists.',
    content: `Your wedding day is a marathon, and your makeup needs to go the distance. Here are five crucial secrets from professional makeup artist Rohit kumar:

1. **Hydration is Key, but Timing is Everything**: Start your skincare preparation weeks in advance. On the day of, use a lightweight water-based moisturizer at least 20 minutes before applying primer.
2. **The Double Priming Technique**: Apply a pore-minimizing primer on the T-zone and a hydrating primer on the perimeter of your face.
3. **Layering Cream and Powder**: Always lock in your cream contours and blushes with matching powder formulas to form a bulletproof bond.
4. **Baking with Translucent Powder**: Bake under your eyes and along the jawline for 3 minutes to seal the foundation from creasing under warm lights.
5. **The Setting Spray Sandwich**: Spray setting mist directly onto your beauty sponge before blending, and finish with a generous misting once the face is done.`,
    author: 'Rohit kumar',
    date: 'July 5, 2026',
    readTime: '4 min read',
    category: 'Bridal Tips',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b2',
    title: 'Prosthetic SFX: Transforming Characters on the Theatre Stage',
    excerpt: 'Explore the fascinating world of special effects makeup. Discover how liquid latex, silicone, and 3D modeling bring Ram Leela and modern dramas to life.',
    content: `SFX and prosthetic makeup are the unsung heroes of theatrical storytelling. Whether transforming a performer into a mythological deity for Ram Leela or applying realistic wounds for an action-packed play, the processes require absolute precision:

- **Lifecasting & Sculpting**: Creating custom molds of the actor's face allows us to mold prosthetic pieces out of foam latex or silicone that fit like a second skin.
- **Blending the Edges**: The mark of a true SFX master is making the edge of the prosthetic look invisible. We use specialized adhesives and acetone to dissolve and blend edges seamlessly into the skin.
- **The Role of Alcohol-Activated Paints**: Traditional water-based makeup can smudge with sweat. On stage, we rely on durable alcohol-activated paint palettes that remain completely waterproof and sweatproof under intense lighting.`,
    author: 'Rohit kumar',
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'SFX & Theatre',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b3',
    title: 'Selecting the Perfect Hair Accessories for Your Wedding Day',
    excerpt: 'From floral tiaras and Mathapattis to pearl-studded pins, learn how to match your hair accessories with your outfit and face shape.',
    content: `A gorgeous hairstyle is only complete when paired with the right ornament. Here is your ultimate guide to hair accessories:

- **Traditional Mathapatti and Maang Tikka**: Best paired with clean, sleek middle-parted low buns or traditional braids. It keeps the focus on the symmetry of your face.
- **Fresh Floral Garlands (Gajras)**: Pure jasmine or roses work beautifully with classic Indian braided buns. They add natural fragrance and timeless heritage to your bridal attire.
- **Modern Pearl-Studded Pins**: Perfect for elegant Hollywood waves or textured, messy side braids. They offer a delicate, modern sparkle without overwhelming your look.
- **Dainty Crystal Tiaras**: Excellent for modern evening receptions or engagement gowns when you want a regal, sophisticated princess vibe.`,
    author: 'Rohit kumar',
    date: 'June 15, 2026',
    readTime: '3 min read',
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Pooja Sharma',
    role: 'Bride',
    rating: 5,
    comment: 'Rohit did my bridal makeup and hairstyling, and he was absolute magic! He set up a complete premium makeup studio right inside my hotel room. My makeup stayed pristine from 4 PM until our wedding wrapped up at 4 AM. Highly recommended!',
    event: 'Bridal & Reception',
    date: 'June 12, 2026'
  },
  {
    id: 'r2',
    name: 'Siddharth Mehra',
    role: 'Theatre Director',
    rating: 5,
    comment: 'We hired Rohit and his freelance team for our grand Ram Leela production and theater actors. The prosthetic transformations for Ravana and Hanuman were incredibly realistic. The sweatproof makeup stood up perfectly under our scorching stage lights.',
    event: 'Theatrical Ram Leela',
    date: 'May 30, 2026'
  },
  {
    id: 'r3',
    name: 'Anjali Verma',
    role: 'Model / Content Creator',
    rating: 5,
    comment: 'Rohit is my go-to makeup artist for all high-fashion catalogs and brand photoshoots. His crimping and advanced tong curl styles are gorgeous, and his HD base always requires zero digital retouching. Flawless doorstep delivery!',
    event: 'Fashion Catalog Shoot',
    date: 'April 22, 2026'
  },
  {
    id: 'r4',
    name: 'Karan Kapoor',
    role: 'Groom',
    rating: 5,
    comment: 'I was hesitant about groom makeup, but Rohit kept it extremely natural and matte. He fixed my hair beautifully, styled my beard, and made sure I looked great next to my beautiful bride. Professional, timely, and very skilled!',
    event: 'Groom Styling Pack',
    date: 'June 12, 2026'
  }
];
