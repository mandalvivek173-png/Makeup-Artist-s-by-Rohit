import React, { useState } from 'react';
import { PORTFOLIO } from '../data';
import { Camera, Eye, X, HelpCircle, Heart, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  setActivePage: (page: string) => void;
}

export default function PortfolioSection({ setActivePage }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All work' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'hair', label: 'Hairstyles' },
    { id: 'character', label: 'Theatre character' },
    { id: 'editorial', label: 'Photoshoot' },
    { id: 'wedding', label: 'Wedding event' },
    { id: 'celebrity', label: 'Celebrities' },
    { id: 'school', label: 'Annual school function' },
    { id: 'ramleela', label: 'Annual ram leela' },
  ];

  const filteredPortfolio = PORTFOLIO.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bridal') return item.category === 'bridal';
    if (activeFilter === 'hair') return item.category === 'hair';
    if (activeFilter === 'character') return item.category === 'character';
    if (activeFilter === 'editorial') return item.category === 'editorial';
    if (activeFilter === 'wedding') return item.category === 'wedding';
    if (activeFilter === 'celebrity') return item.category === 'celebrity';
    if (activeFilter === 'school') return item.category === 'school';
    if (activeFilter === 'ramleela') return item.category === 'ramleela';
    return true;
  });

  return (
    <section className="py-12 sm:py-16 bg-neutral-900 text-neutral-100" id="portfolio-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
            ✦ Artistry Portfolio
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Rohit kumar's Live Work & Masterpieces
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Explore a curation of high-contrast bridal makeups, creative web-series actor profiles, dramatic SFX prosthetics, and intricate hair buns.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase border transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:text-white hover:bg-neutral-750'
              }`}
              id={`portfolio-filter-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group flex flex-col bg-neutral-850 border border-neutral-800 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:border-amber-400/30 hover:-translate-y-1"
              id={`portfolio-item-${item.id}`}
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge on photo corner */}
                <span className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur-sm text-amber-400 text-[10px] font-bold font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-neutral-800/80 shadow-md">
                  {item.category === 'bridal'
                    ? '✦ Bridal'
                    : item.category === 'editorial'
                    ? '✦ Photoshoot'
                    : item.category === 'hair'
                    ? '✦ Hair Style'
                    : item.category === 'celebrity'
                    ? '✦ Celebrity'
                    : item.category === 'wedding'
                    ? '✦ Wedding Event'
                    : item.category === 'school'
                    ? '✦ School Function'
                    : item.category === 'ramleela'
                    ? '✦ Ram Leela'
                    : '✦ Theatre Character'}
                </span>

                {/* Overlay with magnifying glass */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3.5 rounded-full bg-amber-400 text-neutral-950 font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Title & Description Below Image */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500 font-semibold uppercase tracking-wider">
                  <span>By Rohit kumar</span>
                  <span className="text-amber-500 group-hover:text-amber-400 transition-colors flex items-center gap-1">
                    View Masterpiece &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty portfolio category state */}
        {filteredPortfolio.length === 0 && (
          <div className="mt-12 py-16 text-center max-w-sm mx-auto space-y-3">
            <HelpCircle className="h-10 w-10 text-neutral-500 mx-auto" />
            <h4 className="font-bold text-neutral-300">No works uploaded for this category yet</h4>
            <p className="text-xs text-neutral-500">We are currently updating our portfolio. You can check other categories or message us on WhatsApp for live project references!</p>
          </div>
        )}

        {/* CTA section */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-neutral-800 border border-neutral-700/60 max-w-4xl mx-auto">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-white">Inspired by our portfolio designs?</h4>
            <p className="text-neutral-400 text-xs">Book a quick discussion to design a bespoke look for your upcoming wedding or event!</p>
          </div>
          <button
            onClick={() => setActivePage('contact')}
            className="bg-amber-400 hover:bg-amber-500 text-neutral-950 px-6 py-3 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap"
          >
            Design My Look &rarr;
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          id="portfolio-lightbox"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div 
            className="relative bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image display */}
            <div className="md:w-1/2 aspect-3/4 max-h-[80vh] overflow-hidden bg-neutral-950">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info details */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-950 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {selectedItem.category} Look
                </span>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="bg-neutral-850 p-4 rounded-xl border border-neutral-800 space-y-2 text-xs text-neutral-400">
                  <p className="font-bold text-white text-xs">✦ What makes this style special?</p>
                  <p>Handcrafted by Rohit kumar using waterproof primers, customized airbrush techniques, and professional-grade lash enhancements. Guaranteed to sustain high flash cameras and 12+ hour ceremony events!</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setActivePage('contact');
                  }}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-neutral-950 font-extrabold text-xs uppercase tracking-wide py-3 rounded-xl transition-all cursor-pointer text-center"
                >
                  Book Similar Look
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-bold text-xs uppercase py-3 rounded-xl transition-all cursor-pointer text-center"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
