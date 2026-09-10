import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Star, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1c0711] via-[#090205] to-[#0c0307] text-rose-100/90 border-t border-rose-950/80 pt-16 pb-8 relative overflow-hidden" id="footer-section">
      {/* Premium rose radial lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Promise */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-amber-400/80 bg-neutral-950 p-1 shadow-md">
                <img 
                  src="https://i.ibb.co/B2z8StcV/image.png" 
                  alt="Artist Makeup's A to Z Logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold tracking-tight text-white whitespace-nowrap">
                  Makeup's-<span className="text-amber-400 font-extrabold">anywhere.</span>
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono whitespace-nowrap">by Rohit kumar</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Premium doorstep freelance makeup & hair styling studio. Setting up customized setups directly at your desire home, room, and place with absolutely no extra charges!
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-300 bg-rose-950/50 border border-rose-900/40 px-3 py-1.5 rounded-lg w-fit font-mono font-medium">
              <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              <span>9/10 Direct Google Search</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rose-300 font-mono">Explore Website</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handlePageChange('home')} className="hover:text-amber-300 text-neutral-400 transition-colors cursor-pointer text-xs sm:text-sm">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange('services')} className="hover:text-amber-300 text-neutral-400 transition-colors cursor-pointer text-xs sm:text-sm">
                  Makeup & Hair Services
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange('courses')} className="hover:text-amber-300 text-neutral-400 transition-colors cursor-pointer text-xs sm:text-sm">
                  Professional Courses
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange('portfolio')} className="hover:text-amber-300 text-neutral-400 transition-colors cursor-pointer text-xs sm:text-sm">
                  Portfolio / Work's Page
                </button>
              </li>
              <li>
                <button onClick={() => handlePageChange('about')} className="hover:text-amber-300 text-neutral-400 transition-colors cursor-pointer text-xs sm:text-sm">
                  Meet Rohit kumar (About)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication Channels */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rose-300 font-mono">Quick Connect</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="tel:+917310016001" 
                  className="flex items-center space-x-2.5 hover:text-amber-300 text-neutral-400 transition-colors group"
                  id="footer-call-link"
                >
                  <div className="p-1.5 rounded bg-rose-950/40 border border-rose-900/30 text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-all">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Call Us Directly</span>
                    <span className="font-semibold text-xs sm:text-sm text-neutral-200">+91 73100 16001</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:atmakeupsstudio@gmail.com?subject=Makeup%20Service%20Inquiry" 
                  className="flex items-center space-x-2.5 hover:text-amber-300 text-neutral-400 transition-colors group"
                  id="footer-email-link"
                >
                  <div className="p-1.5 rounded bg-rose-950/40 border border-rose-900/30 text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Mail Us Directly</span>
                    <span className="font-semibold text-xs sm:text-sm text-neutral-200 break-all">atmakeupsstudio@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('address')}
                  className="flex items-start space-x-2.5 hover:text-amber-300 text-neutral-400 text-left transition-colors group w-full"
                >
                  <div className="p-1.5 rounded bg-rose-950/40 border border-rose-900/30 text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-all mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Coverage Location</span>
                    <span className="text-xs text-neutral-300">NCR, New Delhi, Noida, Gurgaon & Destination Weddings Globally</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Policy & Trust */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rose-300 font-mono">Trust & Policies</h3>
            <div className="bg-rose-950/20 p-4 rounded-xl border border-rose-900/30 space-y-3">
              <div className="flex items-start space-x-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-400 leading-normal">
                  <strong>50% Advance Bookings</strong> are secured. Rest of the balance paid on-site post completion.
                </p>
              </div>
              <button 
                onClick={() => handlePageChange('address')} 
                className="text-xs text-amber-300 hover:text-amber-200 hover:underline font-bold block pt-1"
                id="footer-terms-btn"
              >
                Read Booking Terms & Conditions &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-rose-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Artist Makeup's A to Z. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> for Rohit kumar Freelance Team.
          </p>
          <div className="flex space-x-4">
            <button onClick={() => handlePageChange('address')} className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => handlePageChange('contact')} className="hover:text-neutral-300 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
