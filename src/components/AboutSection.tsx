import React from 'react';
import { 
  Users, Award, Calendar, BookOpen, Star, 
  MapPin, CheckCircle, Search, Heart, Briefcase 
} from 'lucide-react';

interface AboutSectionProps {
  setActivePage: (page: string) => void;
}

export default function AboutSection({ setActivePage }: AboutSectionProps) {
  
  const professionalTimeline = [
    {
      year: 'Active Contracts',
      title: 'News Channel Makeup Contracts',
      institution: 'Broadcast Television Channels',
      desc: 'Regular makeup contractor handling the daily camera, anti-glare, and studio lightning prep for on-air news anchors and guest speakers.'
    },
    {
      year: 'Season highlights',
      title: 'Annual Ram Leela Makeup & SFX',
      institution: 'Mythological Stage Productions',
      desc: 'Specially contracted to transform lead cast members into legendary deities (Hanuman, Ravana, Lord Rama) using durable high-pigmented character paints and prosthetics.'
    },
    {
      year: 'Entertainment industry',
      title: 'Web Series & Feature Film Artists',
      institution: 'Independent Movie & Streaming Projects',
      desc: 'Providing full on-set continuity styling, high-resolution 4K camera compatibility, and prosthetic wounds / aged face modeling on character profiles.'
    },
    {
      year: 'Auto & Fashion events',
      title: 'Auto Expo & Fashion Runway Makeup',
      institution: 'Corporate Exhibitions & Couture Shows',
      desc: 'Leading a massive freelance team to deliver futuristic metallic makeup styles and architectural hairstyles for models, matching designer directions.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FCF8F5] relative overflow-hidden" id="about-experience-section">
      {/* Decorative Fashion-Magazine styled background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e11d4808_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Editorial geometric line accents */}
      <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-rose-200/40 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-amber-200/40 pointer-events-none hidden md:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Biography and Team */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Block: Proprietor Photo Frame & Stats */}
          <div className="lg:col-span-5 relative" id="about-proprietor-block">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-rose-500/10 rounded-3xl rotate-3 -z-10" />
            
            <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-md">
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-200 shadow-sm relative group">
                <img 
                  src="https://i.ibb.co/QvqtKSL1/image.png" 
                  alt="Rohit kumar at work styling hair" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/10 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">✦ Lead Artist & Trainer</span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">Rohit kumar</h3>
                  <p className="text-xs text-neutral-300 mt-1">Professional Freelance Makeup Artist & Hair Stylist</p>
                </div>
              </div>

              {/* Stats highlights */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center border-t border-neutral-100 pt-4">
                <div className="p-3 bg-[#FFF8F2] rounded-xl border border-rose-100 shadow-xs">
                  <span className="block text-xl font-extrabold text-rose-600">16 Yrs</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Industry Experience</span>
                </div>
                <div className="p-3 bg-[#FFF8F2] rounded-xl border border-rose-100 shadow-xs">
                  <span className="block text-xl font-extrabold text-amber-600">Unlimited Staff</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Freelance Professionals</span>
                </div>
              </div>

              {/* Doorstep Assurance */}
              <div className="mt-4 p-3 bg-rose-50 rounded-xl text-center text-xs text-rose-800 font-semibold border border-rose-100/50">
                ⭐ Doorstep Services (No travel/extra charges) ⭐
              </div>
            </div>
          </div>

          {/* Right Block: Professional Biography & Slogans */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                ✦ Meet The Founder
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                Bespoke Artistry & Training Under Rohit kumar
              </h2>
              <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
                <p>
                  <strong>Rohit kumar</strong> is a highly decorated professional freelance makeup artist, hair stylist, hair dresser, movie makeup contractor, and specialized prosthetic SFX theatre makeup trainer. 
                </p>
                <p>
                  Whether detailing an elegant bridal cascade in your private living room, preparing a model for the high-exposure Auto Expo, or sculpting realistic wounds on set for feature films and news channels—Rohit and his team of highly trained freelance professionals represent the peak of creative craftsmanship.
                </p>
                <p className="font-medium text-neutral-900 border-l-4 border-amber-500 pl-4 bg-amber-50/50 py-2.5 rounded-r-xl">
                  "Our core promise is simple: We set up a complete professional makeup studio directly inside your desired room or place. Fully integrated doorstep execution—absolutely no travel fees!"
                </p>
              </div>
            </div>

            {/* Google Stat Callout */}
            <div className="flex items-start space-x-4 bg-neutral-50 p-5 rounded-2xl border border-neutral-200/60 shadow-sm" id="about-google-callout">
              <div className="p-3 bg-amber-100 rounded-xl text-amber-700 shrink-0">
                <Search className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-950 text-sm">Highly Searched on Google</h4>
                <p className="text-xs text-neutral-500 leading-normal">
                  <strong>9 of 10 customers</strong> search us directly on Google to grab our doorstep services! This outstanding market reputation drives our passion for absolute quality.
                </p>
              </div>
            </div>

            {/* Freelance Team Highlight */}
            <div className="flex items-start space-x-4 bg-neutral-50 p-5 rounded-2xl border border-neutral-200/60 shadow-sm" id="about-team-callout">
              <div className="p-3 bg-rose-100 rounded-xl text-rose-700 shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-950 text-sm">Our Elite Freelance Network</h4>
                <p className="text-xs text-neutral-500 leading-normal">
                  We are backed by an extensive team of professional freelance makeup artists and hair stylists. This allows us to easily handle multiple weddings, large events, news channel shifts, and school functions simultaneously.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Experience Timeline Section */}
        <div className="mt-20 border-t border-neutral-200 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">✦ Credentials & History</span>
            <h3 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl">Professional Assignments & Contracts</h3>
            <p className="text-neutral-500 text-xs sm:text-sm">We take contracts for school events, Ram Leelas, broadcasting studios, and elite wedding functions.</p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" id="about-timeline-grid">
            {professionalTimeline.map((item, index) => (
              <div 
                key={index} 
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 hover:border-amber-400 transition-colors shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono tracking-widest uppercase bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      {item.year}
                    </span>
                    <Briefcase className="h-4 w-4 text-neutral-400" />
                  </div>
                  <h4 className="font-bold text-neutral-900 text-base leading-tight font-serif">{item.title}</h4>
                  <p className="text-xs text-rose-600 font-semibold">{item.institution}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed pt-1">{item.desc}</p>
                </div>
                <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Professional Setup</span>
                  <span className="text-emerald-600 font-bold font-mono">✓ Contract Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
