import React from 'react';
import { ShieldCheck, MapPin, AlertTriangle, Coins, Ban, Map, Info, Star } from 'lucide-react';

export default function TermsSection() {
  const termsList = [
    {
      icon: <Coins className="h-6 w-6 text-amber-600" />,
      title: '50% Advance Booking Deposit',
      desc: 'To secure your dates and coordinate our freelance artists/hairstylists team, a 50% advance booking payment is mandatory. This blocks the calendar exclusively for your slot.'
    },
    {
      icon: <Ban className="h-6 w-6 text-rose-600" />,
      title: 'Advance Deposit is Strictly Non-Refundable',
      desc: 'The advance deposit will not be refunded or returned under any circumstances if the event is cancelled, altered, or if the event date is changed by the client.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: 'Rest of Balance Paid Same Day',
      desc: 'The remaining 50% balance must be paid immediately on the same day, right after our styling work is completed at your doorstep venue.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-neutral-50" id="terms-address-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Address, Right Terms */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Block: Address & Doorstep map details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                ✦ Main Studio & Coverage Map
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-neutral-900 leading-tight">
                Doorstep Salon Coverage & Location
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                While Rohit kumar and his freelance crew work primarily on-site directly inside your desired home room, bridal suite, or theatre set, we maintain a central administrative hub to coordinate bookings.
              </p>
            </div>

            {/* Hub coordinates */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-150 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-950 text-sm">Central Coordination Hub</h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Shahdara, New Delhi, Delhi 110053, India (Near Bhajanpura, 28°41'09.6"N 77°17'17.8"E)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 border-t border-neutral-100 pt-4">
                <Map className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-950 text-sm">Full Doorstep Coverage Area</h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    No travel or additional transport charges across New Delhi, Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad. We bring premium makeup kit or hair styling tools right to your suite.
                  </p>
                </div>
              </div>
            </div>

            {/* Clickable Map Location Image */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-neutral-800 text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Map className="h-4 w-4 text-rose-600" />
                  Live GPS Route & Coverage Area Map
                </h4>
                <span className="text-[10px] text-rose-600 font-extrabold bg-rose-50 px-2.5 py-1 rounded-full animate-pulse border border-rose-100">
                  Click Map to Navigate
                </span>
              </div>
              
              <a 
                href="https://www.google.com/maps/place/28%C2%B041'09.6%22N+77%C2%B017'17.8%22E/@28.6860033,77.2857046,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.6860033!4d77.2882795?hl=en&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-2xl border border-neutral-200 shadow-sm bg-white hover:border-rose-500 hover:shadow-md transition-all duration-300"
                id="interactive-google-map-card"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100 relative">
                  <img 
                    src="https://i.ibb.co/pBbLTRtT/image.png" 
                    alt="Doorstep Salon Coverage Map" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/5 group-hover:bg-neutral-950/20 transition-colors duration-300" />
                </div>
                
                {/* Details Footer inside link card */}
                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-bold tracking-widest font-mono text-rose-600 block">
                      Delhi NCR Active Zone
                    </span>
                    <span className="text-xs font-bold text-neutral-900 block group-hover:text-rose-600 transition-colors duration-300">
                      28°41'09.6"N 77°17'17.8"E • Shahdara, Delhi 110053
                    </span>
                  </div>
                  <span className="px-3 py-1.5 bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg group-hover:bg-rose-600 transition-colors duration-300 shrink-0 flex items-center gap-1">
                    Open In Google Maps ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Interactive Looking coverage guide */}
            <div className="bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-2xl p-6 text-white space-y-4 relative overflow-hidden shadow-md">
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-rose-500/10 blur-2xl" />
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">✦ Doorstep Advantage</span>
                <h4 className="font-serif text-base font-bold">Studio Set-up at Your Desired Room</h4>
                <p className="text-neutral-300 text-xs leading-normal">
                  No need to battle traffic on your special event! Our professional freelance artists carry professional folding makeup chairs, LED ring lights, and premium vanity kits. We create a beautiful high-end studio atmosphere in whatever corner of your home or hotel you choose.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 p-2.5 rounded-lg w-fit">
                <Star className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
                <span>Zero Hidden Fees Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Block: Terms & Conditions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                ✦ Contract Agreements
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-neutral-900 leading-tight">
                Booking Terms & Conditions
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Please read our studio policies carefully before proceeding to secure dates. These standard clauses enable us to coordinate our professional roster and ensure elite services.
              </p>
            </div>

            {/* Terms List cards */}
            <div className="space-y-4">
              {termsList.map((term, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-5 border border-neutral-150 shadow-sm flex items-start space-x-4 hover:border-amber-300/80 transition-all duration-300 group"
                  id={`term-card-${index}`}
                >
                  <div className="h-11 w-11 rounded-full border border-amber-400/80 bg-neutral-950 p-1 shadow-md shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="https://i.ibb.co/B2z8StcV/image.png" 
                      alt="Logo" 
                      className="h-full w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-neutral-950 text-sm leading-tight">
                        {term.title}
                      </h4>
                      <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-100/80 shrink-0 text-amber-700">
                        {term.icon}
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{term.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strict Notice Warning banner */}
            <div className="bg-rose-50 border border-rose-100/60 rounded-2xl p-5 flex items-start space-x-3 text-xs text-rose-800">
              <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <p className="font-bold">Important Cancellation/Date Change Warning:</p>
                <p className="leading-relaxed text-rose-700">
                  Because we decline other potential brides and corporate news channel shoots to reserve your slot, <strong>all deposit transactions are strictly final and non-refundable</strong>. Please verify your calendar carefully before sending payment.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
