import React from 'react';
import { Sparkles, MapPin, Search, Star, PhoneCall, Award, Users } from 'lucide-react';

interface HeroProps {
  setActivePage: (page: string) => void;
}

export default function Hero({ setActivePage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center py-16 sm:py-24" id="home-hero">
      
      {/* Immersive full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/ynCG8pxM/Whats-App-Image-2026-07-14-at-09-05-42.jpg" 
          alt="Delhi's Premier Freelance Makeup Artist Rohit kumar" 
          className="h-full w-full object-cover object-[75%_center] sm:object-[80%_center] lg:object-[82%_center]"
          referrerPolicy="no-referrer"
        />
        {/* Advanced radial and linear gradient overlays for elegant cinematic lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/75 to-transparent/10 sm:from-neutral-950/90 sm:via-neutral-950/50 sm:to-transparent/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20" />
        
        {/* Soft radial gold spotlight effect on the left-hand side behind the text */}
        <div className="absolute top-1/4 left-1/12 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8 animate-fade-in text-left">
          
          {/* Subtle Accent Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-400/40 px-3.5 py-1.5 text-xs sm:text-sm text-amber-300 font-semibold font-mono uppercase tracking-widest backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            ✦ Premium Doorstep Artistry
          </div>
          
          {/* Main Display Typography */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              Delhi's Premier <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-100 to-rose-400 bg-clip-text text-transparent font-black">
                Freelance
              </span> <br />
              <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 bg-clip-text text-transparent font-black">
                Makeup Artist
              </span>
            </h1>
            
            {/* Lead Artist Name Title */}
            <div className="relative inline-block">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow">
                Rohit kumar
              </h2>
              <div className="absolute -bottom-1.5 left-0 w-2/3 h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full" />
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-neutral-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
            Experience elite luxury makeup, advanced hairstyling, and professional character SFX prosthetics delivered with flawless perfection. We set up an entire high-end mobile studio directly inside your home or suite across Delhi NCR—with no travel fees.
          </p>

          {/* Core Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 max-w-lg">
            <div className="space-y-0.5">
              <span className="block text-xl sm:text-2xl font-bold text-amber-400 drop-shadow-sm">100%</span>
              <span className="text-xs uppercase font-mono tracking-wider text-neutral-300 font-medium">At Doorstep</span>
            </div>
            <div className="space-y-0.5">
              <span className="block text-xl sm:text-2xl font-bold text-rose-400 drop-shadow-sm">Zero</span>
              <span className="text-xs uppercase font-mono tracking-wider text-neutral-300 font-medium">Travel Fees</span>
            </div>
            <div className="space-y-0.5">
              <span className="block text-xl sm:text-2xl font-bold text-amber-400 drop-shadow-sm">Premium</span>
              <span className="text-xs uppercase font-mono tracking-wider text-neutral-300 font-medium">Brands Only</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => setActivePage('contact')}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 via-rose-400 to-rose-500 text-neutral-950 hover:opacity-95 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xl shadow-rose-950/50"
              id="hero-book-btn"
            >
              <Sparkles className="h-4.5 w-4.5 text-neutral-950 fill-neutral-950" />
              <span>BOOK APPOINTMENT</span>
            </button>
            <button
              onClick={() => setActivePage('services')}
              className="flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg"
              id="hero-explore-services-btn"
            >
              <span>Our Services A to Z</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
