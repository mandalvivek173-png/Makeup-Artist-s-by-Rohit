import React, { useState } from 'react';
import { Phone, Mail, Sparkles, Check, PhoneCall, Send, ShieldCheck, Star, Instagram, Facebook } from 'lucide-react';
import { CallBackSubmission } from '../types';

export default function CallBackForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [inquiryFor, setInquiryFor] = useState<'courses' | 'services' | 'both'>('services');
  const [callBackRequest, setCallBackRequest] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCallBackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data: CallBackSubmission = {
      firstName,
      lastName,
      email,
      contactNumber,
      inquiryFor,
      callBackRequest
    };

    setTimeout(() => {
      // Save query to localStorage list
      const existing = localStorage.getItem('artist_makeup_callbacks') || '[]';
      try {
        const callbacks = JSON.parse(existing);
        callbacks.unshift(data);
        localStorage.setItem('artist_makeup_callbacks', JSON.stringify(callbacks));
      } catch (err) {
        console.error('Error saving callback', err);
      }

      setIsSubmitting(false);
      setSuccess(true);

      // Open WhatsApp directly with prefilled user information
      const textMsg = `*Direct Call-Back / Inquiry Request for Rohit Kumar* 📞✨

👤 *Client Name:* ${firstName} ${lastName}
📱 *Phone:* ${contactNumber}
✉️ *Email:* ${email || 'Not provided'}
🎯 *Inquiry For:* ${inquiryFor}
📞 *Call-Back Request:* ${callBackRequest ? 'YES (Please call back)' : 'No'}

Please review my inquiry and contact me!`;

      window.open(`https://wa.me/917310016001?text=${encodeURIComponent(textMsg)}`, '_blank');

      // Clear fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setContactNumber('');
      setCallBackRequest(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="quick-callback-panels">
      
      {/* Card 1: Call Back Inquiry Form with Soft Glowing Border */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100/80 shadow-lg shadow-rose-100/30 hover:shadow-rose-150/40 hover:border-rose-200/50 transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100/40 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 text-white shadow-md shadow-rose-200/50">
            <PhoneCall className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-lg font-extrabold text-neutral-900 tracking-tight">
            Request to Call Back
          </h3>
          <p className="text-neutral-500 text-xs leading-relaxed">
            Fill in your basic details and our premium coordinating team will dial you back within 15 minutes.
          </p>
        </div>

        {success ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-scale-up my-auto">
            <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-6 w-6 stroke-[3px]" />
            </div>
            <h4 className="font-bold text-emerald-900 text-sm">Call Back Registered!</h4>
            <p className="text-xs text-neutral-600">
              Rohit kumar's coordination office will dial you shortly. Speak to you soon!
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="text-xs font-bold text-neutral-600 underline"
            >
              Submit Another Call Back
            </button>
          </div>
        ) : (
          <form onSubmit={handleCallBackSubmit} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="cb-first-name" className="block text-[10px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="cb-first-name"
                  required
                  placeholder="e.g., Rohit"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white border-2 border-neutral-300 rounded-xl px-4 py-2.5 text-xs font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="cb-last-name" className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="cb-last-name"
                  required
                  placeholder="e.g., kumar"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white border-2 border-neutral-300 rounded-xl px-4 py-2.5 text-xs font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all shadow-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="cb-email" className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  id="cb-email"
                  required
                  placeholder="e.g., example@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-2 border-neutral-300 rounded-xl px-4 py-2.5 text-xs font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="cb-contact" className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="cb-contact"
                  required
                  placeholder="e.g., +91 XXXXX XXXXX"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full bg-white border-2 border-neutral-300 rounded-xl px-4 py-2.5 text-xs font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all shadow-xs"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cb-inquiry" className="block text-[10px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Inquiry For
              </label>
              <select
                id="cb-inquiry"
                value={inquiryFor}
                onChange={(e) => setInquiryFor(e.target.value as any)}
                className="w-full bg-white border-2 border-neutral-300 rounded-xl px-4 py-2.5 text-xs font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all shadow-xs cursor-pointer"
              >
                <option value="services">Doorstep Makeup & Hairstyling Services</option>
                <option value="courses">Professional Academy Courses</option>
                <option value="both">Both Services & Academy Courses</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 py-2">
              <input
                type="checkbox"
                id="cb-checkbox"
                checked={callBackRequest}
                onChange={(e) => setCallBackRequest(e.target.checked)}
                className="rounded text-rose-600 focus:ring-rose-500/20 h-4.5 w-4.5 border-neutral-300"
              />
              <label htmlFor="cb-checkbox" className="text-xs text-neutral-700 font-bold cursor-pointer">
                Confirm my request for a call back
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-950 hover:from-rose-950 hover:to-neutral-950 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center space-x-2 border border-neutral-800"
              id="cb-submit-btn"
            >
              {isSubmitting ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Phone className="h-4 w-4 text-amber-400" />
              )}
              <span>{isSubmitting ? 'Registering Call...' : 'Call Me Back'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Card 2: Signature Artistry Masterpiece Showcase (Requested beautiful picture with high-contrast glowing styling) */}
      <div className="bg-neutral-950 rounded-3xl overflow-hidden border border-rose-900/30 shadow-2xl relative group flex flex-col justify-between min-h-[420px]">
        
        {/* Full card background image with beautiful soft glow and slow-scale hover */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop" 
            alt="Signature Bridal Makeup by Rohit kumar" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Elite warm-glowing luxury overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          <div className="absolute inset-0 bg-rose-950/10 mix-blend-color" />
        </div>

        {/* Ambient luxury radial glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-500/15 transition-all duration-700" />

        {/* Header Badge */}
        <div className="relative z-10 p-6 flex justify-between items-start">
          <span className="text-[9px] font-bold tracking-widest text-amber-300 bg-neutral-950/80 border border-amber-400/30 px-3 py-1 rounded-full uppercase backdrop-blur-md">
            ✦ Signature Work
          </span>
          <div className="h-8 w-8 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-serif font-bold text-sm shadow-md">
            R
          </div>
        </div>

        {/* Captions and Branding */}
        <div className="relative z-10 p-6 sm:p-8 space-y-3 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pt-12">
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold tracking-widest text-rose-400 bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-900/60 uppercase">
              (Artist)
            </span>
            <span className="text-xs font-semibold text-amber-300 tracking-wider">Rohit kumar Artistry</span>
          </div>
          
          <h4 className="font-serif text-xl font-bold text-white tracking-tight leading-snug">
            Uncompromising Elegance & Flawless HD Beauty
          </h4>
          
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Every masterpiece is handcrafted to glow under cameras, setting a new benchmark for bridal waves, premium draping, and professional high-definition cosmetic finishes.
          </p>
        </div>
      </div>

      {/* Card 3: Direct Hotline & Social Channels with Glossy Golden/Rose Glow & Background */}
      <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-900 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6 group" id="quick-direct-comms">
        
        {/* Soft elegant cosmetic background image layer */}
        <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity duration-1000">
          <img 
            src="https://i.ibb.co/vx7r2K0n/image.png" 
            alt="Luxury Studio Setup" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Dark gold-vibe overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
        
        {/* Dual neon light source glows */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 text-white shadow-md shadow-rose-950/50">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-white tracking-tight">
            Direct Instant Channels
          </h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Skip the forms! Ring our hotline directly, chat on WhatsApp, or send an email to our desk coordinators. Available 24/7.
          </p>
        </div>

        {/* Action Widgets */}
        <div className="space-y-3 relative z-10">
          <a
            href="https://wa.me/917310016001?text=Hi%20Rohit%20kumar%21%20I%20want%20to%20connect%20with%20you%20regarding%20makeup%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/90 transition-all duration-300 group/item shadow-md"
            id="whatsapp-action-box"
          >
            <div className="p-2.5 bg-emerald-500 text-white rounded-xl group-hover/item:bg-emerald-400 transition-colors">
              <Phone className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-emerald-400 tracking-wider">WhatsApp Direct Connect</span>
              <span className="font-semibold text-xs block text-white group-hover/item:text-emerald-300 transition-colors">Click to Chat on WhatsApp</span>
            </div>
          </a>

          <a
            href="tel:+917310016001"
            className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 hover:bg-neutral-900/95 transition-all duration-300 group/item"
            id="call-action-box"
          >
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl group-hover/item:bg-amber-400 group-hover/item:text-neutral-950 transition-colors">
              <Phone className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Direct Hotline 24/7</span>
              <span className="font-semibold text-xs block text-white group-hover/item:text-amber-400 transition-colors">+91 73100 16001</span>
            </div>
          </a>

          <a
            href="mailto:atmakeupsstudio@gmail.com?subject=Artist%20Makeup%20A%20to%20Z%20Service%20Inquiry&body=Hi%20Rohit%20kumar,%20I%20am%20interested%20in%20your%20makeup%20services.%20Please%20reach%20back."
            className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-rose-400/40 hover:bg-neutral-900/95 transition-all duration-300 group/item"
            id="mail-action-box"
          >
            <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-xl group-hover/item:bg-rose-500 group-hover/item:text-white transition-colors">
              <Mail className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Official Email Inbox</span>
              <span className="font-semibold text-xs block text-white group-hover/item:text-rose-400 transition-colors">atmakeupsstudio@gmail.com</span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/artist_makeups_a2z?igsh=bnh2Y2o2MDBpOWx1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-pink-500/40 hover:bg-neutral-900/95 transition-all duration-300 group/item"
            id="instagram-action-box"
          >
            <div className="p-2.5 bg-pink-500/10 text-pink-400 rounded-xl group-hover/item:bg-gradient-to-tr group-hover/item:from-amber-400 group-hover/item:via-pink-500 group-hover/item:to-purple-600 group-hover/item:text-white transition-all duration-300">
              <Instagram className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Instagram Portfolio</span>
              <span className="font-semibold text-xs block text-white group-hover/item:text-pink-400 transition-colors">@artist_makeups_a2z</span>
            </div>
          </a>

          <a
            href="https://www.facebook.com/share/1CQXjWmq6w/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-blue-500/40 hover:bg-neutral-900/95 transition-all duration-300 group/item"
            id="facebook-action-box"
          >
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
              <Facebook className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-neutral-500 tracking-wider">Facebook Community</span>
              <span className="font-semibold text-xs block text-white group-hover/item:text-blue-400 transition-colors">Artist Makeups A2Z</span>
            </div>
          </a>
        </div>

        {/* Premium Slogans with beautiful icons */}
        <div className="relative z-10 border-t border-neutral-800/80 pt-4 flex items-center justify-between gap-2 text-[10px] uppercase font-bold tracking-wider font-mono">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            Gold-Standard Quality
          </span>
          <span className="text-rose-400 flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            On-Location Luxury
          </span>
        </div>

      </div>

    </div>
  );
}
