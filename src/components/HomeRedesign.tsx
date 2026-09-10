import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, Check, Sparkles, ShieldCheck, Heart, ArrowRight, 
  Play, Users, Calendar, Award, Phone, PhoneCall, Clock, Volume2, 
  MapPin, Send, HelpCircle, ChevronDown, ChevronUp, Image, 
  Smile, Flame, Camera
} from 'lucide-react';
import { PORTFOLIO, REVIEWS } from '../data';

interface HomeRedesignProps {
  setActivePage: (page: string) => void;
  setSelectedService: (service: string) => void;
}

export default function HomeRedesign({ setActivePage, setSelectedService }: HomeRedesignProps) {
  // Before / After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isSliding, setIsSliding] = useState(false);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Portfolio masonry category filter state
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(12); // Initially show 12, can load more

  // Video gallery selected index
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  // Continuous brand marquee list
  const BRANDS = ['MAC', 'HUDA BEAUTY', 'DIOR', 'KRYOLAN', 'FOREVER52', 'CHANEL', 'ESTÉE LAUDER', 'NARS', 'ANASTASIA'];

  // Handle Before/After slider dragging
  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isSliding || e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  // Static stats
  const stats = [
    { value: '500+', label: 'Happy Brides', icon: Heart, color: 'text-rose-500' },
    { value: '4.9', label: 'Google Rating', icon: Star, color: 'text-amber-500' },
    { value: '16 Yrs', label: 'Expertise', icon: Clock, color: 'text-purple-500' },
    { value: '1,000+', label: 'Total Bookings', icon: Award, color: 'text-emerald-500' },
  ];

  // Specific high-quality services requested (Bridal, Party, Engagement, Reception, HD Makeup)
  const SERVICES_LIST = [
    {
      title: 'Bridal Makeup',
      image: 'https://i.ibb.co/4wRSQP6d/image.png',
      badge: '✦ Signature Masterpiece',
      price: '₹15,000 onwards',
      description: 'Handcrafted ultra-HD makeup that stays flawless for up to 18 hours. Complete with luxurious skin prepping, premium false mink lashes, high-end bridal draping, and flower bun placement.',
      features: ['Airbrush & HD Options', 'Waterproof & Cry-Resistant', 'Includes Dupatta Draping', 'Premium Mink Lashes'],
      discountText: 'Want to get an extra 20% off'
    },
    {
      title: 'Party Makeup',
      image: 'https://i.ibb.co/B5kDjJrb/image.png',
      badge: '✦ Glamorous & Radiant',
      price: '₹4,500 onwards',
      description: 'Chic personalized makeup for cocktail events, grand sangeet nights, festivals, or family guests. Designed to enhance your organic features with radiant spotlight-ready contours.',
      features: ['Customized Lip Art', 'Lightweight Breathing Base', 'Hairstyling Add-ons', 'Flawless Setting Spray'],
      discountText: 'Want to get an extra 35% off'
    },
    {
      title: 'Engagement Makeup',
      image: 'https://i.ibb.co/Xkdh0DRW/Whats-App-Image-2026-07-25-at-18-11-41.jpg',
      badge: '✦ Graceful Glow',
      price: '₹8,500 onwards',
      description: 'A delicate pastel-toned blend balancing glowing, hydrated glass skin and classic sophistication. Tailored specifically for ring ceremonies and morning rituals.',
      features: ['Glass-skin Hydration', 'Soft Shimmer Eyes', 'Custom Lip Tints', 'Sleek Side Braid/Waves'],
      discountText: 'Want to get an extra 45% off'
    },
    {
      title: 'Reception Makeup',
      image: 'https://i.ibb.co/sdkqj5Yw/image.png',
      badge: '✦ High-Contrast Glossy',
      price: '₹10,500 onwards',
      description: 'Grand evening glamour designed to catch photographers, flash, and theatrical venue lighting perfectly. Strong lip statement, metallic eye shimmers, and sculpted cheek highlights.',
      features: ['Spotlight-Ready Sculpting', 'Metallic/Glitter Pigments', 'Heavy Dupatta Pinning', 'Volume Hairstyling'],
      discountText: 'Want to get an extra 60% off'
    },
    {
      title: 'HD Makeup Masterclass',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
      badge: '✦ Camera-Proof Finish',
      price: '₹12,000 onwards',
      description: 'A ultra-thin premium layer designed for 4K/8K resolution digital cinema lenses, lookbooks, and broadcast media, keeping skin looking entirely real and glare-free.',
      features: ['Zero Camera Flashback', 'Micro-pigment Blending', 'Matte Shine Control', 'Covers minor blemishes'],
      discountText: 'Want to get an extra 50% off'
    }
  ];

  // Why Choose Us cards
  const WHY_CHOOSE_US = [
    {
      title: '100% At-Your-Doorstep',
      desc: 'No more frantic salon rush. We bring the entire high-end mobile beauty station directly inside your home or suite.',
      icon: MapPin,
      bg: 'bg-rose-50 border-rose-100',
      iconColor: 'text-rose-600 bg-rose-100/50'
    },
    {
      title: 'Absolutely Zero Travel Fees',
      desc: 'Transparent luxury pricing. All location travel across Delhi, Noida, Gurgaon, & NCR is covered with absolutely no extra surcharge.',
      icon: Check,
      bg: 'bg-amber-50 border-amber-100',
      iconColor: 'text-amber-600 bg-amber-100/50'
    },
    {
      title: '100% Genuine Luxury Brands Only',
      desc: 'We strictly use global prestige cosmetics like MAC, HUDA, Dior, Kryolan, and Forever52 for long-lasting flawless finishes.',
      icon: Sparkles,
      bg: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-600 bg-purple-100/50'
    },
    {
      title: 'Sterilized & Certified Hygiene',
      desc: 'Your safety is absolute. Our coordinates sanitize brushes, palettes, sponges, and hair irons with medical-grade cleaners.',
      icon: ShieldCheck,
      bg: 'bg-emerald-50 border-emerald-100',
      iconColor: 'text-emerald-600 bg-emerald-100/50'
    },
    {
      title: 'Flexible & Secured Advance',
      desc: 'Lock your special dates securely. Pay 50% in advance to secure the slot, and pay the rest on-site after complete satisfaction.',
      icon: Calendar,
      bg: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600 bg-blue-100/50'
    },
    {
      title: 'Led by Rohit kumar',
      desc: 'A celebrated makeup contractor & prosthetic theater specialist. Directing elite freelance makeup artists and hair stylists.',
      icon: Users,
      bg: 'bg-rose-50 border-rose-150',
      iconColor: 'text-rose-600 bg-rose-100/80'
    }
  ];

  // Pricing Packages
  const PACKAGES = [
    {
      name: 'Deluxe Party Look',
      price: '₹4,500',
      desc: 'Ideal for bridesmaids, sangeet, anniversary celebrations, and cocktail events.',
      features: [
        'Premium HD Face Makeup Base',
        'Custom Eyelash Application',
        'Hairstyling (Tong Curls / Braid / Blowdry)',
        'Prestige brands (MAC / Forever52)',
        'Done on-site at your home/room',
        'Zero Travel Surcharge'
      ],
      popular: false,
      btnLabel: 'Contact us'
    },
    {
      name: 'Ultra-HD Royal Bridal Package',
      price: '₹15,000',
      desc: 'Our ultimate luxury experience to make you look like a majestic queen under cameras.',
      features: [
        'Flawless Waterproof Airbrush / Ultra-HD Base',
        '3D Custom Mink Lashes & Eye Makeup',
        'Traditional / Modern Dupatta & Saree Draping',
        'Bridal Hair Bun with Flower accessories placement',
        'Global elite cosmetics (HUDA, Dior, Kryolan)',
        'On-location VIP setup & Travel included',
        'Complimentary Groom touch-up'
      ],
      popular: true,
      btnLabel: 'Contact us'
    },
    {
      name: 'Royal Pre-Bridal & Wedding Bundle',
      price: '₹22,000',
      desc: 'Complete all-in-one package managing both pre-wedding haldi/shadi looks.',
      features: [
        '1 Bridal Makeup + Hair + Draping (Main Shadi)',
        '1 Haldi or Sagan Look (Fresh Dewy Makeup + Hair)',
        'Real Flower placement assistance',
        'Premium skin exfoliating & hydration prep on-site',
        'VIP Coordination support line available 24/7',
        'Full portfolio look consultation session'
      ],
      popular: false,
      btnLabel: 'Contact us'
    }
  ];

  // FAQ Items
  const FAQS = [
    {
      q: 'Do you charge extra for travelling to my home or hotel room?',
      a: 'Absolutely not! Our doorstep freelance service has zero extra travel fees. Whether you are in Noida, Delhi, Gurgaon, NCR, or even booked at a destination wedding hotel, the price you see is the final price.'
    },
    {
      q: 'Which makeup and cosmetic brands do you use?',
      a: 'We strictly use 100% original high-end global prestige cosmetics. Our kits are stocked with MAC, HUDA Beauty, Dior, Kryolan, NARS, Forever52, and Anastasia Beverley Hills to ensure sweat-resistant, camera-safe, and gorgeous finishes.'
    },
    {
      q: 'What is your booking secure policy?',
      a: 'To lock in your dates, a 50% advance booking deposit is paid online or via UPI. This fully secures your slot. The remaining 50% balance is paid on-site post-completion once you are fully satisfied with your transformation!'
    },
    {
      q: 'Can you handle large group makeups for bridesmaids or school events?',
      a: 'Yes, absolutely! Led by celebrity trainer Rohit kumar, we coordinate a massive group of elite certified freelance artists and stylists. We can handle bulk requirements for weddings, school functions, Ram Leela theatre, auto expos, and fashion ramp walks.'
    },
    {
      q: 'How do I schedule a look consultation or customized quotation?',
      a: 'You can instantly connect with our desk via our WhatsApp Hotline button or call us directly. Our representatives are active 24/7 to help you curate custom palettes, choose the right hair buns, or configure customized guest budgets.'
    }
  ];

  // Real Instagram reels/posts provided by user
  const VIDEOS = [
    {
      id: 1,
      title: 'Flawless Royal Bridal Signature Glow',
      duration: '1:00',
      views: '34K',
      thumbnail: 'https://i.ibb.co/ZRDtJSVP/image.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-makeup-artist-applying-eyeshadow-34491-large.mp4',
      directUrl: 'https://www.instagram.com/p/CdG4EXHF0DR/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==',
      description: 'Behind-the-scenes look at a stunning royal bridal makeover. Watch the exquisite transition, premium skin prep, and luxury HD details.'
    },
    {
      id: 2,
      title: 'Wedding Traditional Dupatta Draping & Intricate Floral Bun Styling',
      duration: '1:24',
      views: '28K',
      thumbnail: 'https://i.ibb.co/zhxvXzpR/image.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-on-her-face-34493-large.mp4',
      directUrl: 'https://www.instagram.com/reel/DKB_mtuh7Pr/?igsh=MXZya2RsZjR3NnRvYw==',
      description: 'Watch our master stylist craft the perfect traditional rose-petal floral bun and secure heavy dupattas seamlessly.'
    },
    {
      id: 3,
      title: 'Ultra-HD Sangeet & Evening Reception Glam',
      duration: '1:05',
      views: '42K',
      thumbnail: 'https://i.ibb.co/N6rS00yk/Whats-App-Image-2026-07-21-at-14-48-42.jpg',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-applying-makeup-4482-large.mp4',
      directUrl: 'https://www.instagram.com/tv/CXorClkB9K2/?igsh=MXB3ZnNqN3BicXJyaw==',
      description: 'Live unretouched video showcase of a bold, high-contrast reception look that looks spectacular under spotlights.'
    }
  ];

  // Filtering portfolio items
  const filteredPortfolio = PORTFOLIO.filter(item => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'bridal') return item.category === 'bridal';
    if (activeCategory === 'hair') return item.category === 'hair';
    if (activeCategory === 'character') return item.category === 'character';
    if (activeCategory === 'editorial') return item.category === 'editorial';
    if (activeCategory === 'wedding') return item.category === 'wedding';
    if (activeCategory === 'celebrity') return item.category === 'celebrity';
    if (activeCategory === 'school') return item.category === 'school';
    if (activeCategory === 'ramleela') return item.category === 'ramleela';
    return true;
  });

  return (
    <div className="bg-[#FFF8F2] text-neutral-900 overflow-hidden font-sans">
      
      {/* 1. Continuous Marquee Scrolling Brands (Warm-toned gold strip) */}
      <div className="bg-[#1C0711] py-4.5 border-y border-rose-950/20 overflow-hidden relative z-10 shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex space-x-12 sm:space-x-16 text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-amber-200/90 uppercase items-center">
            {BRANDS.map((brand, i) => (
              <span key={`b1-${i}`} className="flex items-center gap-2">
                <span className="text-[6px] text-rose-500">✦</span>
                {brand}
              </span>
            ))}
          </div>
          <div className="flex space-x-12 sm:space-x-16 text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-amber-200/90 uppercase items-center pl-12 sm:pl-16">
            {BRANDS.map((brand, i) => (
              <span key={`b2-${i}`} className="flex items-center gap-2">
                <span className="text-[6px] text-rose-500">✦</span>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Animated Premium Statistics Section (Bright & Illuminated Studio Lighting with Image https://i.ibb.co/Z6140b6S/Whats-App-Image-2026-07-23-at-22-10-05.jpg) */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-rose-950/10 text-neutral-900" id="animated-stats-section">
        {/* Crisp & Bright Background Image Layer with CSS filter lighting */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/Z6140b6S/Whats-App-Image-2026-07-23-at-22-10-05.jpg" 
            alt="Luxury Studio Background" 
            className="w-full h-full object-cover object-[75%_center] sm:object-[80%_center] brightness-105 contrast-105 saturate-110 scale-102 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Warm, golden & rose ambient light overlay for vibrant visual effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-rose-100/20 to-amber-50/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-white/60" />
        </div>

        {/* CSS Glowing Light Orbs for high luxury lighting */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-300/40 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-rose-400/35 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-7 border-2 border-amber-300/80 shadow-[0_12px_30px_rgba(251,191,36,0.25)] text-center flex flex-col justify-center items-center group hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(244,63,94,0.3)] transition-all duration-300"
              >
                <div className="p-3.5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 text-neutral-950 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-amber-500/30">
                  <stat.icon className="h-6 w-6 text-neutral-950 stroke-[2.5px]" />
                </div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight font-mono bg-gradient-to-r from-rose-900 via-amber-800 to-rose-950 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-neutral-800 font-extrabold uppercase tracking-wider mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Client Reviews (Google Rating Banner + Verifiable Google Review Cards) */}
      <section className="py-24 sm:py-28 bg-[#FCF8F5] border-y border-rose-100/30" id="reviews-bento">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl text-left">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest font-mono flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                ✦ Authentic Client Love
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
                Google Verified Reviews & Real Brides
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                9 out of 10 clients search us directly on Google because of our flawless, waterproof doorstep conversions. See what they write about our premium bridal packages.
              </p>
            </div>
            <div className="bg-white border border-rose-100 rounded-2xl p-4.5 shadow-sm flex items-center gap-4 shrink-0 self-start lg:self-auto">
              <div className="h-11 w-11 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 font-bold">
                G
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-neutral-800 block mt-1">4.9 Star Rating (340+ Reviews)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100/40 shadow-md shadow-rose-100/20 hover:shadow-lg hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-amber-100 flex items-center justify-center font-bold text-neutral-800 font-serif">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">Pooja Sharma</h4>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-rose-500 font-bold">Verified Bride</span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 font-semibold font-mono">June 2026</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans italic">
                  "Rohit did my bridal makeup and hairstyling, and he was absolute magic! He set up a complete premium makeup studio right inside my hotel room. My makeup stayed pristine from 4 PM until our wedding wrapped up at 4 AM. Absolutely flawless waterproof glow!"
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-4 mt-6 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-bold text-[#1c0711] font-mono bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/40">✦ Bridal & Reception Package</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <ShieldCheck className="h-3.5 w-3.5" /> Google Verified
                </span>
              </div>
            </div>

            {/* Photo Card: Real Bride */}
            <div className="bg-white rounded-3xl overflow-hidden border border-rose-100/40 shadow-md shadow-rose-100/20 relative group min-h-[350px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.ibb.co/73fvpKm/image.png" 
                  alt="Real Bride Pooja Sharma by Rohit kumar" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              </div>
              <div className="relative z-10 p-6 space-y-2 text-left">
                <span className="text-[9px] uppercase font-bold tracking-widest text-amber-300 bg-neutral-950/70 border border-amber-400/30 px-2.5 py-1 rounded-full w-fit block backdrop-blur-md">
                  ✦ Authentic Bride Work
                </span>
                <h4 className="font-serif text-lg font-bold text-white">Classic Royal Red Bridal Glam</h4>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  Real signature makeover delivered by Rohit kumar's on-location coordination team. Waterproof base, custom braids, and velvet lip couture.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100/40 shadow-md shadow-rose-100/20 hover:shadow-lg hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-purple-100 flex items-center justify-center font-bold text-neutral-800 font-serif">
                      AV
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">Anjali Verma</h4>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-rose-500 font-bold">Fashion Model</span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 font-semibold font-mono">April 2026</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans italic">
                  "Rohit is my absolute go-to artist for high-fashion catalogs and outdoor brand photoshoots. His crimping styles and advanced tong curls are stunning, and his HD base always requires zero digital retouching. Extremely punctual and five-star quality!"
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-4 mt-6 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-bold text-[#1c0711] font-mono bg-[#FFF8F2] px-2.5 py-1 rounded-lg border border-rose-100">✦ Fashion Catalog Shoot</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <ShieldCheck className="h-3.5 w-3.5" /> Google Verified
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Cards with Large Images (Replaces the boring text-only columns) */}
      <section className="py-24 sm:py-28 bg-[#FFF8F2]" id="makeup-services-catalog">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              ✦ Handcrafted Transformations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
              Premium Doorstep Styling Catalog
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Say goodbye to uninspiring text lists. Explore our signature luxury makeup categories, featuring high-definition, heavy-spotlight, or lightweight ceremony makeovers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {SERVICES_LIST.map((service, idx) => (
              <div 
                key={idx}
                className={`lg:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white rounded-3xl overflow-hidden border border-rose-100/40 shadow-md shadow-rose-950/5 hover:shadow-xl hover:border-rose-200 transition-all duration-500 group relative`}
              >
                {/* Image panel (takes 5 columns on desktop) */}
                <div className="md:col-span-5 h-[280px] md:h-full relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c0711]/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[9px] font-mono font-bold tracking-wider text-amber-200 bg-neutral-950/80 px-3 py-1 rounded-full uppercase border border-amber-400/20 backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>

                {/* Text and Info panel (takes 7 columns on desktop) */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c0711] group-hover:text-rose-700 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700 border-t border-rose-100/50 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2">
                        <div className="h-5 w-5 rounded-full border border-amber-400/80 p-0.5 bg-neutral-950 shadow-xs shrink-0 flex items-center justify-center">
                          <img 
                            src="https://i.ibb.co/B2z8StcV/image.png" 
                            alt="Logo" 
                            className="h-full w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="font-medium text-[11px] sm:text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to action inside card */}
                  <div className="space-y-3 pt-2">
                    <p className="text-sm sm:text-base md:text-[17px] font-extrabold text-black font-sans tracking-tight flex items-center gap-1.5 whitespace-nowrap overflow-hidden">
                      <Sparkles className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-black fill-black shrink-0" />
                      <span className="truncate">{service.discountText || 'Want to get an extra 45% off'}</span>
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <button 
                        onClick={() => { setSelectedService(service.title); setActivePage('contact'); }}
                        className="inline-flex items-center space-x-1.5 bg-[#1C0711] text-white hover:bg-rose-950 px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-rose-950/10 cursor-pointer"
                      >
                        <span>Contact us</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    <a 
                      href={`https://wa.me/917310016001?text=${encodeURIComponent(`Hi Rohit kumar! I want to discuss about ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1 cursor-pointer bg-transparent border-none hover:underline"
                    >
                      Discuss on WhatsApp
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setActivePage('services')} 
              className="inline-flex items-center space-x-2 bg-white hover:bg-[#FFF8F2] text-neutral-800 border border-rose-200 hover:border-rose-400 px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-rose-950/5"
            >
              <span>Explore All Services A to Z (Makeup & Hair)</span>
              <ArrowRight className="h-4 w-4 text-rose-500" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Before / After Interactive Slider Section (Light Beige background) */}
      <section className="py-24 sm:py-28 bg-[#FCF8F5] border-y border-rose-100/30" id="before-after-slider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Descriptive column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest font-mono flex items-center gap-2">
                ✦ High-Definition Proof
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
                Authentic Bridal Transformations
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Drag the interactive horizontal handle left and right to reveal the impeccable, spotless high-definition base and custom hair styling designed by our freelance coordinators.
              </p>
              
              <div className="space-y-4 border-l-2 border-rose-200 pl-4 py-1">
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full border border-amber-400/80 p-0.5 bg-neutral-950 shadow-xs shrink-0 flex items-center justify-center">
                      <img 
                        src="https://i.ibb.co/B2z8StcV/image.png" 
                        alt="Logo" 
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    Poreless HD Base Correction
                  </h4>
                  <p className="text-xs text-neutral-500 pl-7">Formulated for 4K video capture, hiding minor spots and dry patches entirely.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full border border-amber-400/80 p-0.5 bg-neutral-950 shadow-xs shrink-0 flex items-center justify-center">
                      <img 
                        src="https://i.ibb.co/B2z8StcV/image.png" 
                        alt="Logo" 
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    Advanced Hair Volume Integration
                  </h4>
                  <p className="text-xs text-neutral-500 pl-7">Placing high-quality real extensions seamlessly with intricate rose braiding.</p>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setActivePage('portfolio')}
                  className="bg-[#1C0711] hover:bg-rose-950 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Explore Complete Portfolio
                </button>
              </div>
            </div>

            {/* Interactive Slider box */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div 
                ref={sliderRef}
                className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden border border-rose-200/50 shadow-2xl select-none cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsSliding(true)}
                onMouseUp={() => setIsSliding(false)}
                onMouseLeave={() => setIsSliding(false)}
              >
                {/* AFTER image (Underneath) */}
                <img 
                  src="https://i.ibb.co/TBZ6nbw6/Whats-App-Image-2026-07-14-at-09-45-37.jpg" 
                  alt="Transformation After Makeover" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-emerald-600/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg backdrop-blur-xs z-10">
                  After Look ✦ Flawless Glam
                </div>

                {/* BEFORE image (On top, clipped dynamically) */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src="https://i.ibb.co/73fvpKm/image.png" 
                    alt="Before Makeover Portrait" 
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                    style={{ width: sliderRef.current ? sliderRef.current.getBoundingClientRect().width : '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-amber-600/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg backdrop-blur-xs z-10">
                    Before Makeover
                  </div>
                </div>

                {/* Vertical Divider / Slider bar */}
                <div 
                  className="absolute inset-y-0 w-1 bg-amber-400 pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Control Icon */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-[#1c0711] border border-white flex items-center justify-between px-1 shadow-lg pointer-events-auto cursor-ew-resize">
                    <span className="text-[10px] font-bold select-none">&larr;</span>
                    <span className="text-[10px] font-bold select-none">&rarr;</span>
                  </div>
                </div>
              </div>
              <p className="text-neutral-500 text-xs mt-3 italic font-semibold">
                *Drag or hover over the image to view the seamless transition.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Instagram Reels / Video Gallery Section (Cream Background) */}
      <section className="py-24 sm:py-28 bg-[#FFF8F2]" id="video-reels-gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              ✦ Video Tutorials & Reels
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
              Watch Behind-The-Scenes Reels
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              See the direct mobile setup and intricate styling steps live in motion. Our master artists capture raw high-definition video feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <a 
                key={video.id}
                href={video.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden border border-rose-100/40 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between text-left block"
              >
                <div className="relative aspect-[9/12] max-h-[400px] overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                  
                  {/* Play Trigger (Opens Instagram directly) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-white/95 text-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 fill-current ml-1 animate-pulse" />
                  </div>

                  <span className="absolute bottom-4 left-4 bg-black/60 text-white font-mono text-[10px] px-2.5 py-1 rounded-md">
                    {video.duration} Mins
                  </span>

                  <span className="absolute bottom-4 right-4 bg-rose-600 text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                    Play on Instagram
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 font-mono">✦ Live Reel</span>
                    <span className="text-[10px] text-rose-600 font-bold font-mono flex items-center gap-0.5">
                      Instagram ↗
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xs sm:text-sm line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Why Choose Us Section (Cream/Beige Cards - 4-6 beautiful cards) */}
      <section className="py-24 sm:py-28 bg-[#FCF8F5] border-y border-rose-100/30" id="why-choose-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              ✦ Elite Value Proposition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
              Why brides choose makeup's-anywhere.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Setting up customized setups directly at your desire home, room, and place with absolutely no extra charges! Here is what defines our gold standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-rose-100/40 shadow-sm hover:shadow-md hover:border-rose-300 transition-all duration-300 text-left flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-4">
                  <div className={`p-3 w-fit rounded-2xl bg-rose-50 border border-rose-100/30 text-rose-600`}>
                    <item.icon className="h-6 w-6 stroke-[2px]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-amber-600 uppercase pt-2">
                  ✦ Guaranteed Standard
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Portfolio Masonry Gallery (Large Grid with filters of 20-30 pictures) */}
      <section className="py-24 sm:py-28 bg-[#FFF8F2]" id="portfolio-masonry">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4 text-left max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                ✦ High-Resolution Portfolios
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
                Handcrafted Makeovers Gallery
              </h2>
              <p className="text-neutral-600 text-sm">
                Scroll through genuine before-after and final makeover shots captured on-location. Tap any category below to filter our high-definition portfolio records.
              </p>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {[
                { key: 'all', label: 'All work' },
                { key: 'bridal', label: 'Bridal' },
                { key: 'hair', label: 'Hairstyles' },
                { key: 'character', label: 'Theatre character' },
                { key: 'editorial', label: 'Photoshoot' },
                { key: 'wedding', label: 'Wedding event' },
                { key: 'celebrity', label: 'Celebrities' },
                { key: 'school', label: 'Annual school function' },
                { key: 'ramleela', label: 'Annual ram leela' },
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setVisiblePhotosCount(12); // reset view count
                  }}
                  className={`px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    activeCategory === cat.key 
                      ? 'bg-[#1C0711] text-white border-neutral-950 shadow-md' 
                      : 'bg-white text-neutral-700 border-rose-100 hover:border-rose-300 hover:bg-[#FFF8F2]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPortfolio.slice(0, visiblePhotosCount).map((item, idx) => (
              <div 
                key={item.id || idx}
                className="bg-white rounded-2xl overflow-hidden border border-rose-100/40 shadow-sm hover:shadow-lg transition-all duration-300 group relative aspect-[4/5] flex flex-col justify-end"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                <div className="relative z-10 p-4 space-y-1 text-left">
                  <span className="text-[8px] font-mono font-bold tracking-widest text-amber-300 uppercase block">
                    ✦ {item.category === 'editorial'
                      ? 'Photoshoot'
                      : item.category === 'hair'
                      ? 'Hair Style'
                      : item.category === 'celebrity'
                      ? 'Celebrity'
                      : item.category === 'bridal'
                      ? 'Bridal'
                      : item.category === 'wedding'
                      ? 'Wedding Event'
                      : item.category === 'school'
                      ? 'School Function'
                      : item.category === 'ramleela'
                      ? 'Ram Leela'
                      : 'Theatre Character'}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-neutral-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button if available */}
          {filteredPortfolio.length > visiblePhotosCount && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setVisiblePhotosCount(prev => Math.min(filteredPortfolio.length, prev + 8))}
                className="inline-flex items-center space-x-2 bg-white hover:bg-[#FFF8F2] text-neutral-800 border border-rose-200 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-sm"
              >
                <span>View More Makeover Photos ({filteredPortfolio.length - visiblePhotosCount} remaining)</span>
                <Image className="h-4 w-4 text-rose-500" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 9. Pricing Packages comparison tables */}
      <section className="py-24 sm:py-28 bg-[#FCF8F5] border-y border-rose-100/30" id="pricing-packages">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              ✦ Gold-Standard Budgets
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
              Transparent Luxury Packages
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              No hidden travel fees or sudden overheads. All packages include direct coordination, 50% advance bookings, and complete doorstep customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pack, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                  pack.popular 
                    ? 'border-amber-400/90 shadow-[0_15px_40px_rgba(251,191,36,0.2)] scale-102 z-10' 
                    : 'border-rose-200/80 shadow-[0_12px_35px_rgba(244,63,94,0.08)] hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.15)]'
                }`}
              >
                {/* Premium Golden/Rose Decorative Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  pack.popular 
                    ? 'bg-gradient-to-r from-amber-400 via-rose-500 to-amber-400' 
                    : 'bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200'
                }`} />

                {pack.popular && (
                  <div className="absolute top-1.5 right-0 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-mono text-[9px] font-extrabold tracking-widest uppercase py-1.5 px-4 rounded-bl-2xl shadow-md">
                    ✦ Most Popular Choice
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#1c0711]">
                      {pack.name}
                    </h3>
                    <p className="text-neutral-500 text-xs mt-1.5 leading-relaxed">
                      {pack.desc}
                    </p>
                  </div>

                  <div className="flex items-baseline space-x-1.5 bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4">
                    <span className="text-4xl font-extrabold text-rose-600 tracking-tight font-mono">
                      {pack.price}
                    </span>
                    <span className="text-xs text-neutral-600 font-bold uppercase tracking-wider">/ event look</span>
                  </div>

                  <ul className="space-y-3 text-xs text-neutral-700">
                    {pack.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <div className="h-5 w-5 rounded-full border border-amber-400/80 p-0.5 bg-neutral-950 shadow-xs shrink-0 flex items-center justify-center mt-0.5">
                          <img 
                            src="https://i.ibb.co/B2z8StcV/image.png" 
                            alt="Logo" 
                            className="h-full w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="leading-snug font-medium text-neutral-800">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-rose-100/60 mt-6">
                  {/* Red Bold Discount Prompt */}
                  <div className="bg-red-50 border border-red-200/90 rounded-xl py-2 px-3 mb-3 text-center shadow-sm">
                    <span className="text-red-600 font-extrabold text-xs sm:text-sm tracking-wide block">
                      🔥 Want to get extra 20% off?
                    </span>
                  </div>

                  <button
                    onClick={() => { setSelectedService(pack.name); setActivePage('contact'); }}
                    className={`w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                      pack.popular 
                        ? 'bg-[#1C0711] text-white hover:bg-rose-950 shadow-md shadow-rose-950/20' 
                        : 'bg-[#FFF8F2] text-rose-900 hover:bg-rose-100 border border-rose-200'
                    }`}
                  >
                    <span>{pack.btnLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Collapsible Accordion FAQ list */}
      <section className="py-24 sm:py-28 bg-[#FFF8F2]" id="faq-accordion-section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono flex items-center justify-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              ✦ Clear Answers Directly
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c0711] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-sm">
              Everything you need to know about secure bookings, genuine cosmetic palettes, and direct on-site coordinations.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-rose-100/40 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-[#FCF8F5] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif font-bold text-neutral-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-rose-600 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-neutral-500 shrink-0 ml-4" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-rose-50/50 bg-[#FCF8F5]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. Small Premium CTA Section with Custom Requested Background Image */}
      <section className="py-24 bg-[#1C0711] text-white relative overflow-hidden" id="premium-booking-cta">
        {/* Requested Premium Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/vx7r2K0n/image.png" 
            alt="Luxury Bridal Studio Background" 
            className="w-full h-full object-cover object-center opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0711]/95 via-[#1C0711]/80 to-[#1C0711]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0711] via-transparent to-[#1C0711]/60" />
        </div>

        {/* Soft glowing ambient lighting circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Contact Us Logo & Branding Header */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="inline-flex items-center space-x-2.5 bg-rose-950/80 border border-amber-400/40 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
              <div className="h-7 w-7 rounded-full border border-amber-300 p-0.5 bg-neutral-950 flex items-center justify-center overflow-hidden shadow-md shrink-0">
                <img 
                  src="https://i.ibb.co/B2z8StcV/image.png" 
                  alt="Logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 font-mono">
                Contact Us / Booking Desk
              </span>
            </div>

            <span className="text-[10px] font-bold text-rose-300 uppercase tracking-widest font-mono">
              ✦ Limited Availability Slots
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Book Your Bridal Session Today
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Coordinate customized mobile beauty setups directly at your hotel room or sweet home with absolute peace of mind. Pay only 50% deposit to lock in your date.
            </p>
          </div>

          {/* Action buttons: Contact & WhatsApp */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                if (setActivePage) setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg cursor-pointer border border-rose-400/40"
              id="cta-book-now-btn"
            >
              <Calendar className="h-4 w-4 text-amber-300" />
              <span>Contact us</span>
            </button>
            <a
              href="https://wa.me/917310016001?text=Hi%20Rohit%20kumar!%20I%20want%20to%20book%20a%20bridal%20makeup%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-md border border-emerald-400/40"
              id="cta-whatsapp-btn"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp us</span>
            </a>
          </div>

          <p className="text-neutral-400 text-[10px] uppercase font-mono tracking-widest pt-2">
            NCR, NEW DELHI, NOIDA, GURGAON & DESTINATION WEDDINGS GLOBALLY
          </p>
        </div>
      </section>

      {/* 12. Persistent Floating Direct Call Button */}
      <a
        href="tel:+917310016001"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border-2 border-emerald-400/80"
        title="Direct Phone Call (+91 73100 16001)"
        id="floating-call-btn"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping group-hover:animate-none pointer-events-none" />
        <PhoneCall className="h-6 w-6 stroke-[2.5px]" />
      </a>

    </div>
  );
}
