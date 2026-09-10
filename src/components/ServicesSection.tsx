import React, { useState } from 'react';
import { 
  MAKEUP_SERVICES, 
  HAIR_SERVICES 
} from '../data';
import { 
  Sparkles, Crown, Heart, Sun, Gem, User, Camera, Flame, 
  Tv, Clapperboard, Radio, Car, Users, Scissors, Activity, 
  Zap, RefreshCw, Award, Smile, Calendar, Search, HelpCircle, 
  CheckCircle, ShieldCheck
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  setActivePage: (page: string) => void;
  setSelectedService?: (serviceName: string) => void;
}

// Icon dictionary mapper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Crown': return <Crown className="h-6 w-6" />;
    case 'Sparkles': return <Sparkles className="h-6 w-6" />;
    case 'Heart': return <Heart className="h-6 w-6" />;
    case 'Sun': return <Sun className="h-6 w-6" />;
    case 'Gem': return <Gem className="h-6 w-6" />;
    case 'User': return <User className="h-6 w-6" />;
    case 'PartyPopper': return <Sparkles className="h-6 w-6" />;
    case 'Smile': return <Smile className="h-6 w-6" />;
    case 'Camera': return <Camera className="h-6 w-6" />;
    case 'Flame': return <Flame className="h-6 w-6" />;
    case 'Tv': return <Tv className="h-6 w-6" />;
    case 'Clapperboard': return <Clapperboard className="h-6 w-6" />;
    case 'Radio': return <Radio className="h-6 w-6" />;
    case 'Car': return <Car className="h-6 w-6" />;
    case 'Users': return <Users className="h-6 w-6" />;
    case 'Scissors': return <Scissors className="h-6 w-6" />;
    case 'Activity': return <Activity className="h-6 w-6" />;
    case 'Zap': return <Zap className="h-6 w-6" />;
    case 'RefreshCw': return <RefreshCw className="h-6 w-6" />;
    case 'Award': return <Award className="h-6 w-6" />;
    case 'Calendar': return <Calendar className="h-6 w-6" />;
    default: return <Sparkles className="h-6 w-6" />;
  }
};

export default function ServicesSection({ setActivePage, setSelectedService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'makeup' | 'hair'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleBookService = (serviceName: string) => {
    if (setSelectedService) {
      setSelectedService(serviceName);
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredMakeup = MAKEUP_SERVICES.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHair = HAIR_SERVICES.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalServicesCount = 
    (activeCategory === 'all' || activeCategory === 'makeup' ? filteredMakeup.length : 0) +
    (activeCategory === 'all' || activeCategory === 'hair' ? filteredHair.length : 0);

  return (
    <section className="py-12 sm:py-16 bg-neutral-50" id="services-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
            ✦ Artistry Menu A to Z
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Our Elite Makeup & Hair Styling Services
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Bespoke freelance styling tailored perfectly for brides, models, film sets, events, and theatrical characters. Backed by an expert team, we deliver high-contrast elegance straight to your doorstep.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-neutral-200 pb-6">
          
          {/* Category Tabs */}
          <div className="flex gap-2 p-1 bg-neutral-200/60 rounded-xl w-full md:w-auto">
            <button
              onClick={() => { setActiveCategory('all'); }}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-white text-rose-600 shadow-sm'
                  : 'text-neutral-600 hover:text-rose-600'
              }`}
            >
              All Services ({MAKEUP_SERVICES.length + HAIR_SERVICES.length})
            </button>
            <button
              onClick={() => { setActiveCategory('makeup'); }}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'makeup'
                  ? 'bg-white text-rose-600 shadow-sm'
                  : 'text-neutral-600 hover:text-rose-600'
              }`}
            >
              Makeup ({MAKEUP_SERVICES.length})
            </button>
            <button
              onClick={() => { setActiveCategory('hair'); }}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'hair'
                  ? 'bg-white text-rose-600 shadow-sm'
                  : 'text-neutral-600 hover:text-rose-600'
              }`}
            >
              Hairstyling ({HAIR_SERVICES.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              id="services-search"
            />
          </div>
        </div>

        {/* Doorstep service badge */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-rose-50 border border-rose-100/40 text-rose-950 text-xs">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-4 w-4 text-rose-600 shrink-0" />
            <p><strong>Premium Doorstep Guarantee:</strong> We travel to your home, hotel room, or venue carrying complete LED lights, mirror stands, and professional product kits. <strong>No travel or hidden charges!</strong></p>
          </div>
          <button 
            onClick={() => setActivePage('address')} 
            className="font-bold underline text-rose-700 hover:text-rose-900 cursor-pointer shrink-0"
          >
            Check coverage zones &rarr;
          </button>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <p className="mt-4 text-xs font-mono text-neutral-500">
            Found {totalServicesCount} match(es) for "{searchQuery}"
          </p>
        )}

        {/* Empty state */}
        {totalServicesCount === 0 && (
          <div className="mt-12 py-16 text-center border-2 border-dashed border-neutral-200 rounded-3xl bg-white max-w-md mx-auto space-y-3">
            <HelpCircle className="h-10 w-10 text-neutral-400 mx-auto" />
            <h3 className="font-bold text-neutral-800">No services found</h3>
            <p className="text-xs text-neutral-500 px-6">We couldn't find any service matching your query. Please search something else or write down your requirement in the booking form!</p>
            <button
              onClick={() => handleBookService('Custom Requested Service')}
              className="mt-2 text-xs font-bold text-rose-600 hover:underline"
            >
              Ask for Custom Service &rarr;
            </button>
          </div>
        )}

        {/* Makeup Services List */}
        {(activeCategory === 'all' || activeCategory === 'makeup') && filteredMakeup.length > 0 && (
          <div className="mt-12 space-y-6">
            <div className="flex items-center space-x-2 border-b border-rose-100 pb-2">
              <span className="h-2 w-2 rounded-full bg-rose-600" />
              <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-tight">
                Makeup Services A to Z
              </h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMakeup.map((service) => (
                <div 
                  key={service.id}
                  className="group relative flex flex-col justify-between bg-white border border-neutral-200/80 p-5 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  id={`service-${service.id}`}
                >
                  <div className="space-y-4">
                    {service.image && (
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-100">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {service.popular && (
                          <span className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            ✦ Popular Choice
                          </span>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shrink-0">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900 group-hover:text-rose-600 transition-colors text-sm sm:text-base leading-snug">
                            {service.name}
                          </h4>
                          <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-rose-500">Professional Makeup</span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-medium font-mono text-[10px]">Doorstep Service</span>
                    <button
                      onClick={() => handleBookService(service.name)}
                      className="font-bold text-rose-600 hover:text-rose-800 flex items-center space-x-1 group/btn cursor-pointer"
                    >
                      <span>Contact us</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hairstyling Services List */}
        {(activeCategory === 'all' || activeCategory === 'hair') && filteredHair.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center space-x-2 border-b border-amber-100 pb-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-tight">
                Hairstyling Masterpieces
              </h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredHair.map((service) => (
                <div 
                  key={service.id}
                  className="group relative flex flex-col justify-between bg-white border border-neutral-200/80 p-5 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  id={`service-${service.id}`}
                >
                  <div className="space-y-4">
                    {service.image && (
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-100">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {service.popular && (
                          <span className="absolute top-3 right-3 bg-amber-500 text-neutral-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            ✦ Popular Choice
                          </span>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900 group-hover:text-amber-600 transition-colors text-sm sm:text-base leading-snug">
                            {service.name}
                          </h4>
                          <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-amber-600">Advanced Hairstyling</span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-medium font-mono text-[10px]">Accessories & Setup Included</span>
                    <button
                      onClick={() => handleBookService(service.name)}
                      className="font-bold text-amber-600 hover:text-amber-800 flex items-center space-x-1 group/btn cursor-pointer"
                    >
                      <span>Contact us</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
