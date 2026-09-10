import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, User, Calendar, BookOpen, X, ArrowRight, Star, Search, 
  Share2, MessageCircle, Send, Check, HelpCircle, Instagram, 
  ChevronRight, Facebook, Twitter, Mail, ArrowLeft, Bookmark,
  Sparkles, Award, ShieldCheck, Heart, ExternalLink
} from 'lucide-react';

interface BlogSectionProps {
  setActivePage?: (page: string) => void;
  setSelectedService?: (service: string) => void;
}

interface BlogPost {
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  faqs: { q: string; a: string }[];
  internalLinks: { label: string; service: string; page: string }[];
  relatedIds: string[];
  isPopular?: boolean;
  isFeatured?: boolean;
}

// 10 high-quality blog posts, one for each requested category
const RICH_BLOGS: BlogPost[] = [
  {
    id: 'bridal-makeup-guide',
    title: 'The Ultimate Guide to Flawless Bridal Makeup: 18-Hour Stays',
    seoTitle: 'Flawless Bridal Makeup Delhi NCR - 18hr Longwear Secret | A to Z Makeup',
    metaDescription: 'Discover how to lock your bridal glow for 18+ hours. Expert tips on airbrush vs HD base, sweatproof primers, and dupatta draping by Rohit kumar.',
    category: 'Bridal Makeup',
    date: 'July 12, 2026',
    readTime: '5 min read',
    image: 'https://i.ibb.co/v4Jg4dbX/Whats-App-Image-2026-07-14-at-09-49-53.jpg',
    excerpt: 'Discover how to achieve a radiant, waterproof, and cry-resistant bridal base that holds up beautifully under extreme photoshoot flashes and grand stage lights.',
    content: [
      'Your wedding day is a gorgeous marathon, and your makeup needs to go the ultimate distance. As you walk toward the mandap under heavy photography flash, warm stage lights, and intense emotions, the last thing you want to worry about is a creasing base or a fading contour.',
      'Our signature doorstep bridal service specializes in ultra-HD and airbrush formulas designed specifically for the hot Delhi NCR climate. Here are the professional skin prepping and makeup setting steps that guarantee an eighteen-hour seamless lock:',
      '1. Skin Pre-Activation: True luxury makeup is 70% preparation and 30% application. We begin with a medical-grade double cleanse, followed by an alcohol-free exfoliating toner to sweep away dead cells. Then, we apply an ultra-hydrating hyaluronic serum, massage the skin to stimulate blood circulation, and seal it with a lightweight water-based moisturizer.',
      '2. The Double Priming Technique: Placing a single primer all over the face is a common rookie mistake. Professional makeup contractors use a silicone pore-minimizing primer strictly on the T-zone to control sebum, while blending a dewy, pearl-infused hydrating primer on the high points of the cheeks and perimeter of the face.',
      '3. Powder and Cream Layering: To prevent makeup from slipping, always set cream contours, blushes, and concealers with matching powder formulas. This locks the pigment in place and creates a rich, three-dimensional depth that catches broadcast lenses perfectly.',
      '4. Setting Spray Sandwiching: We apply setting mist at multiple stages. First, right after priming; second, mixed into the foundation blend; and third, a generous finishing misting after complete styling.'
    ],
    author: 'Rohit kumar',
    authorRole: 'Prosthetic & Bridal Specialist',
    isFeatured: true,
    isPopular: true,
    relatedIds: ['skincare-prep-timeline', 'bridal-tips-checklist', 'makeup-trends-airbrush'],
    internalLinks: [
      { label: 'Book Our Signature Bridal Makeup', service: 'Bridal Makeup', page: 'contact' },
      { label: 'Explore Luxury Packages Pricing', service: 'Ultra-HD Royal Bridal Package', page: 'home' }
    ],
    faqs: [
      { q: 'What is the main difference between Bridal Airbrush and HD Makeup?', a: 'Airbrush makeup uses a specialized compressor to spray a micro-fine mist of silicone foundation, making it extremely lightweight and waterproof. HD makeup uses high-definition pigments with light-diffusing particles applied with beauty sponges, which is highly recommended for dry skin or textured pores.' },
      { q: 'How long does a bridal makeup setup take on the wedding day?', a: 'We recommend dedicating 2.5 to 3 hours for a complete signature look, which includes skin preparation, HD makeup, eyelash extension application, hairstyling, and dupatta draping.' }
    ]
  },
  {
    id: 'party-makeup-trends',
    title: 'Trending Cocktail & Sangeet Party Makeup Looks for Bridesmaids',
    seoTitle: 'Cocktail & Party Makeup Ideas for Bridesmaids | A to Z Doorstep Styling',
    metaDescription: 'Step-by-step bridesmaid and party makeup guide. Learn spotlight contouring, dewy glass skin prep, and soft glitter shadow techniques.',
    category: 'Party Makeup',
    date: 'July 10, 2026',
    readTime: '3 min read',
    image: 'https://i.ibb.co/bRvdMXpB/image.png',
    excerpt: 'Turn heads at any night celebration with soft, dewy glass-skin bases paired with majestic champagne spotlight eyes and velvet contouring.',
    content: [
      'For bridesmaids and family guests, cocktail nights and grand sangeet stages demand a delicate balance. You want a glamorous, spotlight-ready appearance that shines under evening event lights, but you also want a lightweight base that lets you dance the night away without feeling cakey.',
      'This season, the Vogue-vibe is all about high-shine glass-skin and soft pastel glimmers. Rather than heavy baking, we focus on dynamic spot-concealing and luxury liquid highlighters.',
      'To achieve this trend, we recommend a soft bronze smokey eye with gold leaf foil placement right at the center of your eyelids. Pair this with a glossy nude lip and structured, feather-brushed brows for a clean yet striking high-end look.',
      'Our mobile doorstep styling setups bring prestige cosmetics like Huda Beauty and Dior right inside your room, ensuring you look like a million dollars before stepping onto the dance floor.'
    ],
    author: 'Anjali Verma',
    authorRole: 'Beauty Lead Writer',
    isPopular: true,
    relatedIds: ['reception-makeup-glam', 'hair-buns-waves', 'beauty-products-brands'],
    internalLinks: [
      { label: 'Book Party Makeup Service', service: 'Party Makeup', page: 'contact' },
      { label: 'Check Deluxe Party Package', service: 'Deluxe Party Look', page: 'home' }
    ],
    faqs: [
      { q: 'Is hairstyling included in the Party Makeup look?', a: 'Yes! Our party package includes complete hairstyling options like bouncy tong curls, sleek braids, blowdrys, and setting sprays.' },
      { q: 'Can you handle group bookings for bridesmaids?', a: 'Absolutely. Led by Rohit kumar, our team has certified artists who can style up to 15-20 family guests concurrently on-site.' }
    ]
  },
  {
    id: 'reception-makeup-glam',
    title: 'High-Contrast Glamour: Crafting the Perfect Evening Reception Look',
    seoTitle: 'High-Contrast Evening Reception Makeup Looks | Vogue Beauty Guide',
    metaDescription: 'Make a majestic entrance with bold reception makeup. Tips on metallic glitter shadow, sharp matte lips, and volume hairstyles.',
    category: 'Reception Makeup',
    date: 'July 08, 2026',
    readTime: '4 min read',
    image: 'https://i.ibb.co/7d1YP0x0/image.png',
    excerpt: 'Learn the secrets behind striking metallic eye shimmers, custom-sculpted cheek highlights, and bold liquid lip liners for your reception event.',
    content: [
      'The wedding reception is the grand finale of your marriage celebration. Unlike the traditional wedding ceremony where soft, timeless grace is preferred, the reception is your moment to showcase high-contrast modern drama.',
      'A true reception look is designed to catch photographers, high-speed flash, and warm theatrical venue spotlights beautifully.',
      'We focus on sculpting the facial structure. By using professional contouring palettes from Kryolan and contour sticks from Fenty, we build sharp cheekbones, defined jawlines, and lift the brow arch. We pair this with metallic glitter shadows—such as rose gold or metallic charcoal—to draw focus to your gaze.',
      'Lastly, a bold lipstick is essential. Dark crimson, rich velvet plum, or classic matte red lips define the high-fashion editorial aesthetic of modern receptions.'
    ],
    author: 'Rohit kumar',
    authorRole: 'Founder & Lead Contractor',
    relatedIds: ['bridal-makeup-guide', 'hair-buns-waves', 'makeup-trends-airbrush'],
    internalLinks: [
      { label: 'Request Custom Reception Quote', service: 'Reception Makeup', page: 'contact' },
      { label: 'View Portfolio Real Brides', service: 'Real Bridal Gallery', page: 'portfolio' }
    ],
    faqs: [
      { q: 'How is reception makeup different from morning wedding makeup?', a: 'Morning makeup focuses on pastel hues and dewy, natural finishes to prevent looking heavy in daylight. Reception makeup uses high-contrast shadows, bold contours, and metallic pigments that look spectacular in night photography and banquet lighting.' }
    ]
  },
  {
    id: 'hair-buns-waves',
    title: 'Mastering the Traditional Flower Bun and Modern Hollywood Waves',
    seoTitle: 'Indian Bridal Hair Styling Guide: Buns, Braids & Accessories',
    metaDescription: 'Learn how to match hair accessories, braids, and traditional rose flower buns to your facial contours and dupatta draping weights.',
    category: 'Hair Styling',
    date: 'July 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop',
    excerpt: 'From intricate rose-petal buns to voluminous waves with custom clip-in extensions, find the ideal wedding day hairstyle.',
    content: [
      'Your hairstyle holds the power to frame your entire ensemble. Even the most stunning makeup base can feel incomplete without a hairstyle that complements your face structure, neckline, and jewelry weight.',
      'Today, brides are split between two iconic styles: the timeless traditional floral braided bun and the glamorous Hollywood side waves.',
      'For heavy lehengas and double dupatta draping, a tight, structured low bun is non-negotiable. It provides the secure anchor needed to hold heavy fabrics without sagging. We elevate standard buns by weaving intricate rose braids and placing white jasmines (gajras) or red roses around the base.',
      'For modern gowns, receptions, or engagement ceremonies, Hollywood side waves offer an editorial, luxurious charm. We use advanced triple-barrel tongs and professional volumizing sprays from Schwarzkopf to achieve bouncy, long-lasting curls.'
    ],
    author: 'Priya Sen',
    authorRole: 'Master Hair Stylist',
    relatedIds: ['bridal-tips-checklist', 'skincare-prep-timeline', 'mehendi-vibrant-glow'],
    internalLinks: [
      { label: 'Book Our Master Hair Stylist', service: 'Hair Style with Hair Accessories', page: 'contact' }
    ],
    faqs: [
      { q: 'Do you provide extensions, or should I purchase my own?', a: 'We carry premium synthetic and real hair extensions for volume and length. You can also bring your own, and our stylists will sanitize and fit them seamlessly.' }
    ]
  },
  {
    id: 'skincare-prep-timeline',
    title: 'The Pre-Bridal Skincare Routine for a Natural Lit-From-Within Glow',
    seoTitle: 'Pre-Bridal Skincare Guide: Get Glass Skin Before Your Wedding',
    metaDescription: 'Prepare your skin for flawless makeup application. 3-month bridal skincare timeline featuring double cleansing, hydration serums, and exfoliation.',
    category: 'Skincare',
    date: 'June 29, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
    excerpt: 'Flawless makeup starts with a pristine skin canvas. Follow our dermatologist-approved 12-week hydration timeline.',
    content: [
      'The absolute secret to poreless, glowing makeup is the health of the skin underneath. While premium foundations can cover blemishes and correct uneven tones, skin texture, dehydration, and dry patches are factors that only systematic skincare can resolve.',
      'We recommend our brides start a dedicated skincare routine at least three months before their special date.',
      'Your morning routine should focus on antioxidant defense and hydration: use a gentle cleanser, a stable Vitamin C serum, a multi-molecular Hyaluronic acid, and a broad-spectrum SPF 50 sunscreen.',
      'Your evening routine is for repair: incorporate double cleansing (using an oil cleanser followed by a water-based gel), niacinamide for pore refinement, and a luxurious night recovery cream.'
    ],
    author: 'Dr. Kriti Nair',
    authorRole: 'Clinical Dermatologist Advisor',
    relatedIds: ['bridal-makeup-guide', 'bridal-tips-checklist', 'beauty-products-brands'],
    internalLinks: [
      { label: 'Connect on WhatsApp for Skin Consulting', service: 'Bridal Makeup', page: 'contact' }
    ],
    faqs: [
      { q: 'How many days before the wedding should I get a facial?', a: 'We highly recommend getting your final facial at least 5 to 7 days before your wedding. This allows any minor redness or purging to settle completely before makeup day.' }
    ]
  },
  {
    id: 'bridal-tips-checklist',
    title: '5 Things Every Bride Must Check Before Booking a Doorstep Makeup Artist',
    seoTitle: 'Checklist for Booking Doorstep Makeup Artists in Delhi NCR',
    metaDescription: 'Avoid wedding day stress. The ultimate checklist before hiring bridal freelance makeup artists, including hygiene standards and travel fees.',
    category: 'Bridal Tips',
    date: 'June 22, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
    excerpt: 'Do not leave your wedding look to chance. Read our guide on hygiene sterilization, travel convenience, and UPI advance securing.',
    content: [
      'Booking your bridal makeup artist is one of the most critical decisions you will make for your wedding day. With hundreds of freelance profiles online, it is easy to get overwhelmed.',
      'Here are 5 absolute checkpoints every bride must verify before signing a booking contract:',
      '1. 100% Genuine Luxury Products: Ensure the artist uses authentic, premium cosmetics. Fake products can irritate the skin and crease under lights.',
      '2. Strict Tool Sanitization: The brushes, palettes, and sponges used must be sterilized with medical-grade cleaners before they touch your face.',
      '3. Transparent Travel Fees: Many freelancers add surprise travel and accommodation surcharges on the wedding day. Look for an agency—like A to Z Makeup—that includes all travel costs upfront.',
      '4. Secured Deposit Policy: Never pay 100% upfront. Ensure the agency has a structured advance deposit system, with the remainder paid after you are fully satisfied.'
    ],
    author: 'Rohit kumar',
    authorRole: 'Founder',
    isPopular: true,
    relatedIds: ['bridal-makeup-guide', 'skincare-prep-timeline', 'makeup-trends-airbrush'],
    internalLinks: [
      { label: 'View Our Transparent Booking Terms', service: 'Bridal Makeup', page: 'address' }
    ],
    faqs: [
      { q: 'Is there a booking advance required?', a: 'Yes, we require a 50% advance deposit to lock in your date securely. The remaining 50% is paid on-site post-completion.' }
    ]
  },
  {
    id: 'mehendi-vibrant-glow',
    title: 'Vibrant and Fresh Makeup Styles for Your Sun-Drenched Mehendi',
    seoTitle: 'Fresh Dewy Mehendi Makeup Styles for Brides | Nykaa Luxe Inspired',
    metaDescription: 'Get the perfect sun-kissed Mehendi and Haldi look. Lightweight foundations, coral blush highlights, and braided floral hairstyles.',
    category: 'Mehendi',
    date: 'June 18, 2026',
    readTime: '3 min read',
    image: 'https://i.ibb.co/bM95K4XC/image.png',
    excerpt: 'Beat the afternoon heat with featherlight pastel tones, peach cheek blushes, and waterproof eyeliner for your joyous outdoor Mehendi ceremony.',
    content: [
      'Outdoor morning ceremonies like Mehendi, Haldi, and Sagan require a completely different approach to beauty than evening functions.',
      'Under bright natural sunlight, heavy makeup bases can look unnatural and dry. The goal is to achieve a fresh, dewy, sun-kissed finish that looks effortless.',
      'We use ultra-sheer tinted moisturizers and liquid blushes in vibrant peach or soft coral to mimic a natural flush. Eyes are kept clean with soft brown liners, waterproof mascara, and a touch of golden shimmer at the inner corners.',
      'We complete the look with an elegant side-braid woven with fresh marigolds or pastel baby’s breath flowers, giving you a beautiful, bohemian aesthetic.'
    ],
    author: 'Anjali Verma',
    authorRole: 'Beauty Lead Writer',
    relatedIds: ['skincare-prep-timeline', 'hair-buns-waves', 'engagement-glow'],
    internalLinks: [
      { label: 'Reserve Mehendi Slot Today', service: 'Engagement Makeup', page: 'contact' }
    ],
    faqs: [
      { q: 'What kind of makeup is recommended for outdoor daytime events?', a: 'We highly recommend lightweight, water-based HD makeup with a soft, dewy glow, paired with sweat-resistant setting sprays.' }
    ]
  },
  {
    id: 'engagement-glow',
    title: 'Pastel Glow & Glass Skin Makeup for Morning Ring Ceremonies',
    seoTitle: 'Elegant Morning Engagement Makeup Trends | Dior Beauty Inspired',
    metaDescription: 'Achieve the iconic glass skin glow for engagement events. Soft shimmers, pastel lip stains, and sleek side braids.',
    category: 'Engagement',
    date: 'June 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop',
    excerpt: 'Balancing minimalism and classic bridal luxury. Discover soft shimmer techniques that make morning engagement photos look ethereal.',
    content: [
      'Morning ring ceremonies are highly intimate, filled with soft light and elegant pastel couture. For your engagement look, a heavy bridal base can feel overwhelming.',
      'Instead, we embrace the legendary glass skin glow—a hydrated, luminous base that looks like healthy skin.',
      'We achieve this by blending high-end liquid highlighters into the foundation, setting only the T-zone, and leaving the cheeks radiant.',
      'For eyes, we use soft rose gold or champagne shimmers paired with a classic winged eyeliner. A matching rose lip stain and a sleek side braid with baby’s breath complete this romantic morning look.'
    ],
    author: 'Priya Sen',
    authorRole: 'Senior Stylist',
    relatedIds: ['mehendi-vibrant-glow', 'skincare-prep-timeline', 'beauty-products-brands'],
    internalLinks: [
      { label: 'Schedule Engagement Makeover', service: 'Engagement Makeup', page: 'contact' }
    ],
    faqs: [
      { q: 'Should my engagement makeup match my lehenga/gown color?', a: 'It should complement it! If your outfit is pastel pink, we recommend soft rose gold or peach accents rather than an exact match, ensuring a sophisticated look.' }
    ]
  },
  {
    id: 'makeup-trends-airbrush',
    title: 'The Fall 2026 Bridal Makeup Trends: Airbrush vs. Ultra-HD Bases',
    seoTitle: 'Vogue Beauty: Bridal Makeup Trends Fall 2026 | Airbrush vs HD',
    metaDescription: 'Understand the key differences between airbrush and ultra-HD makeup bases. Choose the perfect finish for your wedding photography style.',
    category: 'Makeup Trends',
    date: 'June 05, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop',
    excerpt: 'We break down the technical differences, benefits, and costs of airbrush vs. ultra-HD formulations for modern digital lenses.',
    content: [
      'As digital photography lenses transition to ultra-high resolutions (4K, 8K, and beyond), makeup techniques have had to adapt to stay undetectable.',
      'Every bride wants a base that looks completely seamless under high-resolution cameras. This leads to the ultimate question: Airbrush or HD Makeup?',
      'HD Makeup utilizes micro-milled pigments that diffuse light, making the foundation look like real skin while covering blemishes. It is highly versatile and works beautifully on all skin types.',
      'Airbrush Makeup utilizes a specialized air gun to spray a thin, even layer of silicone-based foundation. It is incredibly waterproof, sweatproof, and highly recommended for oily skin types in humid weather.',
      'Our doorstep setups provide both options, helping you select the perfect formula based on your unique skin type and event style.'
    ],
    author: 'Rohit kumar',
    authorRole: 'Founder & Pro Instructor',
    isPopular: true,
    relatedIds: ['bridal-makeup-guide', 'bridal-tips-checklist', 'beauty-products-brands'],
    internalLinks: [
      { label: 'Register for HD Makeup Class', service: 'HD Makeup Masterclass', page: 'contact' }
    ],
    faqs: [
      { q: 'Which is better for oily skin in summer months?', a: 'Airbrush makeup is superior for oily skin during humid months due to its sweatproof, silicone-based formula that controls shine for up to 18 hours.' }
    ]
  },
  {
    id: 'beauty-products-brands',
    title: 'The Top 10 High-End Cosmetic Brands in Our Bridal Doorstep Kit',
    seoTitle: 'Luxury Makeup Products Checklist: MAC, Dior, HUDA Beauty, Kryolan',
    metaDescription: 'A peek inside our elite mobile cosmetic kit. Why we strictly use genuine Dior, MAC, NARS, and Kryolan for doorstep transformations.',
    category: 'Beauty Products',
    date: 'May 25, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
    excerpt: 'Discover why genuine luxury cosmetic formulas are vital for achieving flawless, sweat-resistant, photo-ready finishes on all skin types.',
    content: [
      'At A to Z Makeup, we believe there is no room for compromise on your special day. The skin is a delicate organ, and cheap or expired products can cause irritation and ruin your photos.',
      'We are proud to share a look inside our elite mobile kits, stocked with original luxury cosmetics from around the globe.',
      'Our kit features iconic products like Dior Backstage foundations for an airbrushed look, Huda Beauty eyeshadow palettes for pigmented shimmers, and Kryolan Derma Color for flawless coverage.',
      'We also rely on MAC Prep + Prime setting sprays to guarantee sweatproof longevity, and NARS Radiant Creamy concealers to brighten the eyes without creasing.',
      'Every product in our kit is meticulously sanitized before use, ensuring you receive a five-star, luxury beauty experience directly at home.'
    ],
    author: 'Anjali Verma',
    authorRole: 'Beauty Lead Writer',
    relatedIds: ['skincare-prep-timeline', 'bridal-tips-checklist', 'bridal-makeup-guide'],
    internalLinks: [
      { label: 'Book Doorstep Luxury Styling', service: 'Bridal Makeup', page: 'contact' }
    ],
    faqs: [
      { q: 'Do you use original products for party makeup as well?', a: 'Yes! We use the exact same premium luxury kits for all services, including bridal, party, and theatrical makeovers.' }
    ]
  }
];

// Aesthetic FAQ section specifically for beauty magazine
const BEAUTY_FAQS = [
  {
    q: 'How far in advance should I book my bridal doorstep styling slot?',
    a: 'We recommend reserving your date 3 to 6 months in advance, especially during the peak wedding season (November to February) to secure our elite freelance coordinators.'
  },
  {
    q: 'Do you charge extra travel fees for locations in Greater Noida or Gurgaon?',
    a: 'Absolutely not. Our luxury doorstep service includes zero travel surcharges across all of Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.'
  },
  {
    q: 'How do you ensure hygiene during on-location makeovers?',
    a: 'We follow strict medical-grade hygiene protocols. All brushes, beauty sponges, stainless steel mixing palettes, and hair tongs are deeply sanitized with professional isopropyl alcohol solutions between clients.'
  }
];

// Mock Instagram Gallery representing real beauty makeovers
const INSTA_GALLERY = [
  { id: 'ig1', image: 'https://i.ibb.co/v4Jg4dbX/Whats-App-Image-2026-07-14-at-09-49-53.jpg', likes: '1.2K' },
  { id: 'ig2', image: 'https://i.ibb.co/bRvdMXpB/image.png', likes: '942' },
  { id: 'ig3', image: 'https://i.ibb.co/7d1YP0x0/image.png', likes: '1.5K' },
  { id: 'ig4', image: 'https://i.ibb.co/bM95K4XC/image.png', likes: '811' },
  { id: 'ig5', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=300&auto=format&fit=crop', likes: '2.1K' },
  { id: 'ig6', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=300&auto=format&fit=crop', likes: '1.8K' }
];

export default function BlogSection({ setActivePage, setSelectedService }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // List of the requested 10 filters
  const CATEGORIES = [
    'All',
    'Bridal Makeup',
    'Party Makeup',
    'Reception Makeup',
    'Hair Styling',
    'Skincare',
    'Bridal Tips',
    'Mehendi',
    'Engagement',
    'Makeup Trends',
    'Beauty Products'
  ];

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    return RICH_BLOGS.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Find the featured post (fallback to first item if none specified)
  const featuredPost = useMemo(() => {
    return RICH_BLOGS.find(post => post.isFeatured) || RICH_BLOGS[0];
  }, []);

  // Filter popular posts
  const popularPosts = useMemo(() => {
    return RICH_BLOGS.filter(post => post.isPopular);
  }, []);

  // Recent posts list (excluding current featured post if indexing)
  const recentPosts = useMemo(() => {
    return RICH_BLOGS.slice(1, 5);
  }, []);

  // Get related posts when a post is active
  const relatedPosts = useMemo(() => {
    if (!selectedPost) return [];
    return RICH_BLOGS.filter(post => 
      selectedPost.relatedIds.includes(post.id) && post.id !== selectedPost.id
    );
  }, [selectedPost]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const handleCopyLink = (postId: string) => {
    const dummyUrl = `${window.location.origin}/magazine/article/${postId}`;
    navigator.clipboard.writeText(dummyUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleInternalLinkClick = (link: { service: string; page: string }) => {
    if (setSelectedService) {
      setSelectedService(link.service);
    }
    if (setActivePage) {
      setActivePage(link.page);
    }
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFDF9] text-neutral-900 min-h-screen relative font-sans selection:bg-amber-100 selection:text-amber-900" id="luxury-magazine-root">
      
      {/* 1. Header Hero Panel / Brand Marquee (Dior / Vogue Vibe) */}
      <header className="border-b border-amber-100 bg-white py-10" id="magazine-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex justify-center items-center gap-2">
            <span className="h-1 w-8 bg-amber-400"></span>
            <span className="text-[11px] font-mono tracking-[0.4em] text-amber-700 font-extrabold uppercase">VOGUE INSPIRED ARTISTRY MAGAZINE</span>
            <span className="h-1 w-8 bg-amber-400"></span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-black tracking-tighter text-neutral-950 uppercase">
            A &bull; Z <span className="font-normal italic text-amber-700">Luxe</span> Beauty
          </h1>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto font-serif tracking-wide">
            Your daily catalog of masterclass skincare secrets, traditional dupatta drapes, bridal makeup trends, and behind-the-scenes premium transformations.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            /* ==========================================
               INDEX / LISTING VIEW
               ========================================== */
            <motion.div 
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              
              {/* 2. Top Featured Article Hero Section (Vogue Look) */}
              <section className="bg-white border border-amber-100/60 rounded-3xl overflow-hidden shadow-sm" id="featured-hero-article">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 h-[320px] sm:h-[480px] relative overflow-hidden group">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
                    <span className="absolute top-6 left-6 text-[10px] font-mono font-bold tracking-widest text-white bg-amber-700 border border-amber-400/30 px-3.5 py-1.5 rounded-full uppercase backdrop-blur-xs">
                      ✦ Featured Masterpiece
                    </span>
                  </div>
                  
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-left space-y-6 bg-[#FCFBF8]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                          {featuredPost.category}
                        </span>
                        <span className="text-neutral-400 text-xs font-mono">•</span>
                        <span className="text-neutral-500 text-xs font-mono flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-amber-600" /> {featuredPost.readTime}
                        </span>
                      </div>
                      
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight hover:text-amber-800 transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-neutral-600 text-sm leading-relaxed font-serif italic">
                        "{featuredPost.excerpt}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-amber-100/60 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="h-9 w-9 rounded-full bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center">
                          RK
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-neutral-800">{featuredPost.author}</span>
                          <span className="block text-[10px] text-amber-600 font-mono tracking-widest uppercase">{featuredPost.authorRole}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedPost(featuredPost)}
                        className="inline-flex items-center space-x-1.5 bg-[#1C0711] text-white hover:bg-amber-800 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                      >
                        <span>Read Featured Look</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Horizontal Smooth Scroll Category Filters & Search */}
              <section className="bg-[#FAF6F0] p-6 rounded-2xl border border-amber-100" id="magazine-controls">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                  
                  {/* Category filters */}
                  <div className="w-full md:w-auto">
                    <span className="block text-left text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 mb-2.5">
                      ✦ Filter Magazine Issues
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all uppercase cursor-pointer border ${
                            activeCategory === cat 
                              ? 'bg-[#1C0711] text-white border-[#1C0711] shadow-sm' 
                              : 'bg-white text-neutral-700 border-amber-100 hover:border-amber-400 hover:bg-[#FFFDF9]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="w-full md:w-72 shrink-0">
                    <span className="block text-left text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 mb-2.5">
                      ✦ Search Articles
                    </span>
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <input 
                        type="text"
                        placeholder="Search makeup tips..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-amber-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 rounded-xl text-xs font-medium outline-hidden"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </section>

              {/* 4. Main Body Content (2 Columns: Grid of Cards + Editorial Sidebar) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Side: Responsive Blog Cards Grid */}
                <div className="lg:col-span-8 space-y-8" id="blog-grid-column">
                  <div className="text-left border-b border-amber-100 pb-3 flex justify-between items-end">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                      Latest <span className="font-normal italic text-amber-700">{activeCategory}</span> Articles
                    </h3>
                    <span className="text-xs text-neutral-500 font-mono">{filteredPosts.length} issues found</span>
                  </div>

                  {filteredPosts.length === 0 ? (
                    <div className="bg-white border border-amber-100 rounded-3xl p-12 text-center space-y-4">
                      <div className="text-amber-500 text-3xl">✦</div>
                      <h4 className="font-serif font-bold text-lg text-neutral-900">No matching luxury articles found</h4>
                      <p className="text-neutral-500 text-xs max-w-sm mx-auto">
                        We couldn't find any articles matching "{searchQuery}" in category "{activeCategory}". Try clearing your filters.
                      </p>
                      <button 
                        onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                        className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      {filteredPosts.map((post) => (
                        <article 
                          key={post.id}
                          className="bg-white rounded-3xl border border-amber-100/60 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                          id={`magazine-issue-${post.id}`}
                        >
                          <div>
                            {/* Card Image Wrapper */}
                            <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                              <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-4 left-4">
                                <span className="bg-[#1C0711] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                                  {post.category}
                                </span>
                              </div>
                            </div>

                            {/* Info Box */}
                            <div className="p-6 text-left space-y-3">
                              <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-mono uppercase">
                                <span className="text-amber-700 font-semibold">{post.date}</span>
                                <span>&bull;</span>
                                <span>{post.readTime}</span>
                              </div>

                              <h4 className="font-serif text-lg font-extrabold text-neutral-900 leading-snug group-hover:text-amber-800 transition-colors line-clamp-2">
                                {post.title}
                              </h4>

                              <p className="text-neutral-600 text-xs leading-relaxed line-clamp-3 font-serif">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>

                          {/* Footer with Author Details & CTA */}
                          <div className="px-6 py-4 border-t border-amber-50 flex items-center justify-between bg-[#FCFBF8]">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full bg-amber-500 text-neutral-950 font-bold text-[9px] flex items-center justify-center font-mono uppercase">
                                {post.author.slice(0, 2)}
                              </div>
                              <span className="text-[11px] font-bold text-neutral-800">{post.author}</span>
                            </div>

                            <button
                              onClick={() => {
                                setSelectedPost(post);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer font-serif"
                            >
                              <span>Read Issue</span>
                              <ChevronRight className="h-3 w-3" />
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Editorial Sidebar */}
                <aside className="lg:col-span-4 space-y-10" id="magazine-sidebar">
                  
                  {/* Sidebar 1: Popular Issues list (Nykaa Luxe style) */}
                  <div className="bg-white border border-amber-100 rounded-3xl p-6 text-left space-y-6 shadow-xs">
                    <h4 className="font-serif text-base font-bold text-neutral-950 uppercase tracking-wider border-b border-amber-100 pb-3 flex items-center justify-between">
                      <span>Popular Reads</span>
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    </h4>

                    <div className="space-y-4">
                      {popularPosts.slice(0, 4).map((post, idx) => (
                        <div 
                          key={post.id} 
                          onClick={() => { setSelectedPost(post); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className="flex items-start gap-4 group cursor-pointer pb-4 border-b border-neutral-50 last:border-b-0 last:pb-0"
                        >
                          <span className="font-mono text-xl font-bold text-amber-400 group-hover:text-amber-600 transition-colors shrink-0">
                            0{idx + 1}
                          </span>
                          <div className="space-y-1">
                            <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-amber-700 block">
                              {post.category}
                            </span>
                            <h5 className="text-xs font-bold font-serif text-neutral-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                              {post.title}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar 2: Newsletter Subscription Box */}
                  <div className="bg-[#1C0711] text-white border border-rose-950 rounded-3xl p-6 text-left space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 bg-amber-500/10 rounded-full blur-2xl"></div>
                    
                    <div className="space-y-2 relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-bold block">
                        ✦ NYKAA LUXE INSPIRED NEWSLETTER
                      </span>
                      <h4 className="font-serif text-xl font-extrabold text-white">Join A&Z Luxe Club</h4>
                      <p className="text-neutral-300 text-xs leading-relaxed">
                        Sign up to receive customized pre-bridal makeup checklists, luxury product reviews, and exclusive discount slot announcements directly to your inbox.
                      </p>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="space-y-3 relative z-10 pt-2">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                        <input 
                          type="email" 
                          required
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder="Your luxury email"
                          className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl py-2 pl-9 pr-4 text-xs text-white outline-hidden font-medium"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                      >
                        {newsletterSubscribed ? 'Subscription Confirmed! ✦' : 'Join VIP Registry'}
                      </button>
                    </form>
                    <span className="block text-[9px] text-neutral-400 font-serif italic text-center">
                      *We respect privacy. No spam. Unsubscribe anytime.
                    </span>
                  </div>

                  {/* Sidebar 3: Instagram Makeup Gallery (Beautiful grids) */}
                  <div className="bg-white border border-amber-100 rounded-3xl p-6 text-left space-y-4 shadow-xs">
                    <h4 className="font-serif text-base font-bold text-neutral-950 uppercase tracking-wider border-b border-amber-100 pb-3 flex items-center justify-between">
                      <span>On-Location Showcase</span>
                      <Instagram className="h-4 w-4 text-amber-700" />
                    </h4>
                    <p className="text-neutral-500 text-xs">
                      See our certified freelance team’s real, unedited transformations direct from brides' suites.
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      {INSTA_GALLERY.map((ig) => (
                        <div key={ig.id} className="relative aspect-square rounded-xl overflow-hidden group bg-neutral-100">
                          <img 
                            src={ig.image} 
                            alt="Insta preview" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-[10px] text-white font-bold font-mono">♥ {ig.likes}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center justify-center gap-1.5 pt-2 border-t border-neutral-50"
                    >
                      <span>Follow @AZMakeup_Luxe</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                </aside>
              </div>

              {/* 5. Frequently Asked Questions accordion (Beauty & Doorstep Makeup) */}
              <section className="bg-white border border-amber-100 rounded-3xl p-8 text-left space-y-6 shadow-xs" id="magazine-faqs">
                <div className="max-w-2xl">
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-amber-700 block mb-2">
                    ✦ HELPFUL BEAUTY ADVICE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    Doorstep Makeup & Styling FAQs
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Read accurate answers regarding our certified coordination standard, luxury kit safety, and reservation advances.
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl pt-4">
                  {BEAUTY_FAQS.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border border-amber-100 rounded-2xl bg-[#FCFBF8] hover:border-amber-400 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                      >
                        <span className="font-serif font-extrabold text-xs sm:text-sm text-neutral-900">
                          {faq.q}
                        </span>
                        <span className="text-amber-700 font-bold font-mono shrink-0">
                          {activeFaq === idx ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div 
                        className={`transition-all duration-300 ease-in-out ${
                          activeFaq === idx ? 'max-h-40 border-t border-amber-100/60 p-6 bg-white' : 'max-h-0'
                        } overflow-hidden`}
                      >
                        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </motion.div>
          ) : (
            /* ==========================================
               DETAILED ARTICLE READER VIEW
               ========================================== */
            <motion.div 
              key="reader-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 text-left"
            >
              {/* Breadcrumbs (Requested!) */}
              <nav className="flex items-center space-x-2 text-xs font-mono text-neutral-500 bg-white p-3 rounded-xl border border-amber-100/50">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="hover:text-amber-800 transition-colors"
                >
                  Magazine
                </button>
                <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                <span className="text-amber-700 font-semibold">{selectedPost.category}</span>
                <ChevronRight className="h-3.5 w-3.5 text-neutral-400 hidden sm:inline" />
                <span className="text-neutral-400 truncate max-w-[200px] hidden sm:inline">{selectedPost.title}</span>
              </nav>

              {/* Back to Magazine Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-950 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Issue Catalog</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Main Article Content */}
                <article className="lg:col-span-8 bg-white border border-amber-100 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xs" id="active-article-content">
                  
                  {/* Article Hero Header */}
                  <header className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold font-mono text-amber-800 bg-amber-50 border border-amber-200/50 px-3 py-1 rounded-full uppercase">
                        {selectedPost.category}
                      </span>
                      <span className="text-neutral-300 text-xs">•</span>
                      <span className="text-neutral-500 text-xs font-mono flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-neutral-950 leading-tight">
                      {selectedPost.title}
                    </h2>

                    {/* Author & Publish Details */}
                    <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-y border-amber-100/60 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center">
                          {selectedPost.author.slice(0, 2)}
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-neutral-900">{selectedPost.author}</span>
                          <span className="block text-[10px] text-amber-600 font-mono tracking-widest uppercase">{selectedPost.authorRole}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-neutral-500 text-xs font-mono">
                        <Calendar className="h-4 w-4 text-amber-600" />
                        <span>Published on {selectedPost.date}</span>
                      </div>
                    </div>
                  </header>

                  {/* SEO Display Box (Requested!) */}
                  <div className="bg-[#FCFBF8] border-l-4 border-amber-500 rounded-r-2xl p-4.5 space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 font-mono font-bold text-amber-800">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span>SEO GOOGLE METADATA CAPTURED</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-800 block">Google Search Snippet Title:</span>
                      <p className="text-neutral-600 font-mono text-[11px] select-all bg-white border border-neutral-200 p-2 rounded-md mt-1">{selectedPost.seoTitle}</p>
                    </div>
                    <div className="pt-1.5">
                      <span className="font-bold text-neutral-800 block">Snippet Meta Description:</span>
                      <p className="text-neutral-600 font-serif text-[11px] bg-white border border-neutral-200 p-2 rounded-md mt-1 italic">"{selectedPost.metaDescription}"</p>
                    </div>
                  </div>

                  {/* HD Hero Image */}
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100 relative shadow-sm">
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Interactive Social Share Buttons (Requested!) */}
                  <div className="flex items-center gap-3 flex-wrap border-b border-amber-100 pb-5">
                    <span className="text-xs font-mono font-bold uppercase text-neutral-500 mr-2">Share Article:</span>
                    <button 
                      onClick={() => handleCopyLink(selectedPost.id)}
                      className="p-2 rounded-full bg-neutral-100 hover:bg-amber-100 text-neutral-700 hover:text-amber-900 transition-all text-xs flex items-center gap-1.5 px-3"
                    >
                      <Share2 className="h-3.5 w-3.5" /> 
                      <span className="font-mono text-[10px]">{copied ? 'Copied! ✦' : 'Copy Link'}</span>
                    </button>
                    <a 
                      href={`https://wa.me/?text=Check%20out%20this%20amazing%20luxury%20beauty%20article%3A%20${encodeURIComponent(selectedPost.title)}%20${encodeURIComponent(window.location.origin + '/magazine/article/' + selectedPost.id)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all text-xs flex items-center gap-1.5 px-3"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> 
                      <span className="font-mono text-[10px]">WhatsApp</span>
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/magazine/article/' + selectedPost.id)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 transition-all text-xs flex items-center gap-1.5 px-3"
                    >
                      <Facebook className="h-3.5 w-3.5" /> 
                      <span className="font-mono text-[10px]">Facebook</span>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(window.location.origin + '/magazine/article/' + selectedPost.id)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 transition-all text-xs flex items-center gap-1.5 px-3"
                    >
                      <Twitter className="h-3.5 w-3.5" /> 
                      <span className="font-mono text-[10px]">Twitter</span>
                    </a>
                  </div>

                  {/* Elegant Editorial Text Content */}
                  <div className="space-y-6 font-serif text-neutral-800 text-sm sm:text-base leading-relaxed">
                    {selectedPost.content.map((paragraph, index) => {
                      if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.')) {
                        return (
                          <div key={index} className="pl-6 border-l-2 border-amber-300 py-1 space-y-1 my-4">
                            <p className="font-serif font-bold text-neutral-900 text-sm sm:text-base">
                              {paragraph.split(':')[0]}
                            </p>
                            <p className="text-neutral-600 text-xs sm:text-sm">
                              {paragraph.split(':').slice(1).join(':')}
                            </p>
                          </div>
                        );
                      }
                      return <p key={index}>{paragraph}</p>;
                    })}
                  </div>

                  {/* FAQ Schema display inside the blog article (Requested!) */}
                  <div className="border border-amber-100 rounded-3xl p-6 sm:p-8 bg-[#FCFBF8] space-y-6" id="faq-schema-display">
                    <div className="border-b border-amber-100 pb-3">
                      <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-amber-700 block">
                        ✦ GOOGLE INDEXED FAQ SCHEMA SCHEMATICS
                      </span>
                      <h4 className="font-serif text-lg font-bold text-neutral-950 mt-1">
                        Frequently Asked Questions Schema
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {selectedPost.faqs.map((faq, fIdx) => (
                        <div key={fIdx} className="space-y-2">
                          <h5 className="font-bold text-xs sm:text-sm text-neutral-900 flex items-start gap-1.5">
                            <span className="text-amber-700">Q:</span>
                            {faq.q}
                          </h5>
                          <p className="text-xs text-neutral-600 pl-4 border-l border-amber-200">
                            <span className="font-bold text-emerald-600 font-mono uppercase text-[9px] mr-1">[Schema Response]</span>
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Internal Links (Requested!) */}
                  <div className="border-t border-amber-100 pt-6 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-neutral-400 block">
                      ✦ RELATED LOCAL RESOURCES
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {selectedPost.internalLinks.map((link, lIdx) => (
                        <button
                          key={lIdx}
                          onClick={() => handleInternalLinkClick(link)}
                          className="inline-flex items-center space-x-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 hover:text-amber-950 border border-amber-200 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Call to Book Makeup Service (Requested!) */}
                  <div className="bg-[#1C0711] text-white rounded-3xl p-8 text-center space-y-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent"></div>
                    <div className="max-w-xl mx-auto space-y-3 relative z-10">
                      <span className="text-amber-400 font-mono text-[10px] tracking-widest font-bold uppercase block">
                        ✦ SIGNATURE LUXURY BOOKING DESK
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        Experience Flawless Doorstep Glamour
                      </h3>
                      <p className="text-neutral-300 text-xs sm:text-sm">
                        Ready to secure Rohit Kumar and our certified pool of elite freelance artists for your wedding, cocktail, or reception night? All bookings are fully customized with zero extra travel fees.
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                      <button
                        onClick={() => {
                          if (setSelectedService) {
                            setSelectedService(selectedPost.category);
                          }
                          if (setActivePage) {
                            setActivePage('contact');
                          }
                          setSelectedPost(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-amber-400 hover:bg-amber-300 text-neutral-950 font-mono text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg cursor-pointer"
                      >
                        Reserve Your Date Now
                      </button>
                      
                      <a
                        href={`https://wa.me/917310016001?text=Hi%20Rohit%20kumar%21%20I%20am%20reading%20your%20article%20"${encodeURIComponent(selectedPost.title)}"%20and%20would%20like%20to%20discuss%20doorstep%20booking.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all border border-white/20 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-4 w-4" /> 
                        <span>Chat With Rohit</span>
                      </a>
                    </div>
                  </div>

                </article>

                {/* Reader Sidebar */}
                <aside className="lg:col-span-4 space-y-8" id="reader-sidebar">
                  
                  {/* Related Articles column (Requested!) */}
                  <div className="bg-white border border-amber-100 rounded-3xl p-6 text-left space-y-4 shadow-xs">
                    <h4 className="font-serif text-sm font-bold text-neutral-950 uppercase tracking-wider border-b border-amber-100 pb-3">
                      Related Articles
                    </h4>

                    {relatedPosts.length === 0 ? (
                      <p className="text-neutral-400 text-xs italic">Explore more articles in the magazine index.</p>
                    ) : (
                      <div className="space-y-4">
                        {relatedPosts.map((rPost) => (
                          <div 
                            key={rPost.id}
                            onClick={() => {
                              setSelectedPost(rPost);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="group cursor-pointer flex items-center gap-3 pb-3 border-b border-neutral-50 last:border-0 last:pb-0"
                          >
                            <div className="h-14 w-14 rounded-xl overflow-hidden shrink-0 bg-neutral-100">
                              <img 
                                src={rPost.image} 
                                alt={rPost.title} 
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-amber-700 block">
                                {rPost.category}
                              </span>
                              <h5 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                                {rPost.title}
                              </h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Return To Catalog Card */}
                  <div className="bg-[#FAF6F0] border border-amber-100 rounded-3xl p-6 text-left space-y-4">
                    <h4 className="font-serif text-sm font-bold text-neutral-950">Luxury Magazine Index</h4>
                    <p className="text-neutral-500 text-xs">
                      Looking for another issue? Clear your active reader and scroll our customized search columns.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedPost(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full bg-neutral-950 hover:bg-neutral-900 text-white font-mono text-xs font-bold py-2.5 rounded-xl uppercase tracking-wider transition-all"
                    >
                      Browse All 10 Issues
                    </button>
                  </div>

                </aside>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Floating Gold/Green WhatsApp CTA box (Requested!) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2" id="floating-whatsapp-cta">
        <a 
          href="https://wa.me/917310016001?text=Hi%20Rohit%20kumar%21%20I%20am%20browsing%20your%20luxury%20A%26Z%20Beauty%20Magazine%20and%20want%20to%20consult%20about%20makeup%20packages."
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl hover:scale-105 transition-all text-xs border border-emerald-400/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <MessageCircle className="h-4.5 w-4.5 fill-current" />
          <span>WhatsApp Hotline</span>
        </a>
      </div>

    </div>
  );
}
