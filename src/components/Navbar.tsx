import React, { useState } from 'react';
import { Menu, X, Sparkles, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'portfolio', label: 'Work\'s Page' },
    { id: 'about', label: 'About & Experience' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'address', label: 'Address & Terms' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 sm:h-20 items-center justify-between px-3 sm:px-6 lg:px-8 gap-2">
        
        {/* Logo / Brand */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex cursor-pointer items-center space-x-2 sm:space-x-3 group min-w-0 shrink"
          id="nav-logo"
        >
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-amber-400/80 bg-neutral-950 p-1 shadow-md transition-transform duration-300 group-hover:scale-105">
            <img 
              src="https://i.ibb.co/B2z8StcV/image.png" 
              alt="Makeup's-anywhere. Logo" 
              className="h-full w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0 flex flex-col justify-center select-none">
            <span className="font-serif text-xs sm:text-base md:text-lg font-bold tracking-tight text-neutral-900 leading-tight block truncate">
              Makeup's-<span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent font-extrabold">anywhere.</span>
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-mono leading-tight block truncate mt-0.5">
              by Rohit kumar
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 overflow-x-auto py-1 max-w-2xl xl:max-w-3xl ml-4 mr-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 whitespace-nowrap cursor-pointer ${
                activePage === item.id
                  ? 'bg-neutral-950 text-amber-300 border border-amber-400/80 shadow-md'
                  : 'text-neutral-800 hover:text-rose-700 hover:bg-rose-50/80 border border-transparent'
              }`}
              id={`nav-item-${item.id}`}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-amber-400/90 p-1 shadow-sm shrink-0 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/B2z8StcV/image.png" 
                  alt="AT Logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Quick Contact & Action (Shifted to the right side on desktop) */}
        <div className="hidden sm:flex items-center space-x-3 ml-auto pl-4 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center space-x-1 text-xs text-neutral-600 hover:text-rose-600 bg-neutral-100 hover:bg-rose-50 px-3 py-1.5 rounded-full transition-all cursor-pointer"
            id="nav-quick-call-back"
          >
            <Phone className="h-3 w-3" />
            <span>Call Request</span>
          </button>
          
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-gradient-to-r from-amber-500 to-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-rose-100 transition-all active:scale-95 cursor-pointer ml-1"
            id="nav-book-btn"
          >
            Contact us
          </button>
        </div>

        {/* Mobile menu and contact button */}
        <div className="flex lg:hidden items-center space-x-1.5 sm:space-x-2.5 shrink-0 ml-auto">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-gradient-to-r from-amber-500 to-rose-600 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide sm:hidden cursor-pointer shadow-xs whitespace-nowrap shrink-0 active:scale-95"
          >
            Contact us
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1.5 sm:p-2 text-neutral-600 hover:bg-rose-50 hover:text-rose-600 focus:outline-none cursor-pointer shrink-0"
            aria-label="Toggle Menu"
            id="nav-mobile-toggle"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      {isOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="space-y-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3.5 w-full text-left px-3.5 py-2.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  activePage === item.id
                    ? 'bg-neutral-950 text-amber-300 border-2 border-amber-400/80 shadow-lg'
                    : 'text-neutral-800 hover:bg-neutral-100 hover:text-rose-600 border border-neutral-200/60'
                }`}
              >
                {/* 42px Circle Badge with Gold Ring & AT Logo */}
                <div className="h-[42px] w-[42px] rounded-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border-2 border-amber-400/90 p-1 shadow-md shrink-0 flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/B2z8StcV/image.png" 
                    alt="AT Logo" 
                    className="h-7 w-7 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="tracking-wide text-sm font-semibold">{item.label}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-neutral-100 flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-neutral-100 text-neutral-800 rounded-lg text-sm font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>Request Call Back</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-amber-500 to-rose-600 text-white rounded-lg text-sm font-semibold shadow-md"
              >
                <Sparkles className="h-4 w-4" />
                <span>Contact us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
