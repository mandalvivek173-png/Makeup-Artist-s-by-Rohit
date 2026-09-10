import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/CoursesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ReviewsSection from './components/ReviewsSection';
import TermsSection from './components/TermsSection';
import BookingForm from './components/BookingForm';
import CallBackForm from './components/CallBackForm';
import HomeRedesign from './components/HomeRedesign';

import { 
  Sparkles, ShieldCheck, Search, Phone, Mail, 
  MapPin, Clock, Star, ThumbsUp, ChevronRight, MessageSquare,
  ArrowLeft, Home
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  
  // Shared states for booking pre-selection
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <div className="animate-fade-in">
            {/* Main Hero */}
            <Hero setActivePage={setActivePage} />

            {/* Redesigned Home Contents */}
            <HomeRedesign 
              setActivePage={setActivePage} 
              setSelectedService={setSelectedService} 
            />
          </div>
        );
      case 'services':
        return (
          <ServicesSection 
            setActivePage={setActivePage} 
            setSelectedService={setSelectedService} 
          />
        );
      case 'courses':
        return (
          <CoursesSection 
            setActivePage={setActivePage} 
            setSelectedCourse={setSelectedCourse} 
          />
        );
      case 'portfolio':
        return <PortfolioSection setActivePage={setActivePage} />;
      case 'about':
        return <AboutSection setActivePage={setActivePage} />;
      case 'blogs':
        return (
          <BlogSection 
            setActivePage={setActivePage} 
            setSelectedService={setSelectedService} 
          />
        );
      case 'reviews':
        return <ReviewsSection />;
      case 'address':
        return <TermsSection />;
      case 'contact':
        return (
          <div className="py-12 sm:py-16 bg-neutral-50 animate-fade-in" id="contact-us-page-view">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              
              {/* Layout Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                  ✦ Get in Touch / Booking Desk
                </span>
                <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                  Contact Us & Coordinate Bookings
                </h2>
                <p className="text-neutral-600 text-sm">
                  Whether you are ready to hire someone immediately, just after some discussion, or researching custom guest budgets, our team is on standby to help.
                </p>
              </div>

              {/* Grid: Booking Form and Call Back Panel */}
              <div className="space-y-12">
                <BookingForm 
                  initialService={selectedService} 
                  initialCourse={selectedCourse} 
                />
                
                <div className="border-t border-neutral-200 pt-12 space-y-8">
                  <div className="text-center space-y-2 max-w-lg mx-auto">
                    <h3 className="font-serif text-xl font-bold text-neutral-900">Quick Call or Email Us</h3>
                    <p className="text-xs text-neutral-500">Need immediate support or customized quotes? Mail us or dial our official numbers directly.</p>
                  </div>
                  <CallBackForm />
                </div>
              </div>

            </div>
          </div>
        );
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-rose-100 selection:text-rose-900">
      
      {/* Sticky Premium Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Node */}
      <main className="flex-grow">
        {activePage !== 'home' && (
          <div className="bg-neutral-50 border-b border-neutral-250/60 py-3.5 px-4 sm:px-6 lg:px-8 shadow-sm">
            <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 bg-white hover:bg-neutral-100 text-neutral-800 hover:text-rose-600 px-4 py-2 rounded-xl border border-neutral-200/80 shadow-xs text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer group"
                id="global-back-btn"
              >
                <ArrowLeft className="h-4 w-4 transform transition-transform group-hover:-translate-x-1 duration-300 text-rose-500" />
                <span>Go Back to Home</span>
              </button>
              
              <div className="flex items-center space-x-2 text-xs text-neutral-500 font-medium">
                <span className="flex items-center gap-1">
                  <Home className="h-3.5 w-3.5 text-neutral-400" />
                  Home
                </span>
                <span className="text-neutral-300">&rarr;</span>
                <span className="text-rose-600 font-bold bg-rose-50 border border-rose-100/80 px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono text-[10px]">
                  {activePage}
                </span>
              </div>
            </div>
          </div>
        )}
        {renderActivePage()}
      </main>

      {/* Permanent Footer */}
      <Footer setActivePage={setActivePage} />
      
    </div>
  );
}
