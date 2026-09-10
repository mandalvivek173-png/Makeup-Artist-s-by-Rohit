import React, { useState, useEffect } from 'react';
import { BookingSubmission } from '../types';
import { MAKEUP_SERVICES, HAIR_SERVICES, COURSES } from '../data';
import { 
  Sparkles, Calendar, Clock, MapPin, DollarSign, 
  Users, Check, HelpCircle, PhoneCall, AlertCircle 
} from 'lucide-react';

interface BookingFormProps {
  initialService?: string;
  initialCourse?: string;
}

export default function BookingForm({ initialService = '', initialCourse = '' }: BookingFormProps) {
  
  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceLocation, setServiceLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [readyTime, setReadyTime] = useState('');
  const [heardAboutUs, setHeardAboutUs] = useState('Search on Google');
  const [numServices, setNumServices] = useState('Only me');
  const [budget, setBudget] = useState('Not decided');
  const [guestBudget, setGuestBudget] = useState('Not decided');
  const [joinCourses, setJoinCourses] = useState(initialCourse);
  const [bookingDecision, setBookingDecision] = useState('I am ready to hire someone');
  const [otherSpecifications, setOtherSpecifications] = useState('');
  const [callBackRequest, setCallBackRequest] = useState(false);

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<BookingSubmission | null>(null);

  // Handle pre-filled initial services
  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
    }
  }, [initialService]);

  // Handle pre-filled initial courses
  useEffect(() => {
    if (initialCourse) {
      setJoinCourses(initialCourse);
    }
  }, [initialCourse]);

  const toggleService = (serviceName: string) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter(s => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission: BookingSubmission = {
      firstName,
      lastName,
      email,
      contactNumber,
      services: selectedServices,
      serviceLocation,
      eventDate,
      readyTime,
      heardAboutUs,
      numServices,
      budget,
      guestBudget,
      joinCourses,
      bookingDecision,
      otherSpecifications,
      callBackRequest
    };

    const generateWhatsAppUrl = (sub: BookingSubmission) => {
      const servicesList = sub.services.length > 0
        ? sub.services.map(s => `• ${s}`).join('\n')
        : '• General / Custom Consultation';

      const textMsg = `*New Doorstep Booking Request for Rohit Kumar* 💄✨

👤 *Client:* ${sub.firstName} ${sub.lastName}
📱 *Phone:* ${sub.contactNumber}
✉️ *Email:* ${sub.email || 'Not provided'}

💅 *Selected Services:*
${servicesList}

📅 *Event Date:* ${sub.eventDate || 'To be decided'}
⏰ *Ready Time Needed:* ${sub.readyTime || 'N/A'}
📍 *Location / Venue:* ${sub.serviceLocation || 'N/A'}

📊 *Booking Details:*
• Services Count: ${sub.numServices || 'Only me'}
• Booking Budget: ₹${sub.budget || 'Not decided'}
• Guest Budget: ₹${sub.guestBudget || 'Not decided'}
• Decision Status: ${sub.bookingDecision || 'I am ready to hire someone'}
• Academy Interest: ${sub.joinCourses || 'No Course'}
• How Heard: ${sub.heardAboutUs || 'Search on Google'}
• Direct Call Back Requested: ${sub.callBackRequest ? 'YES (Please call back)' : 'No'}

💬 *Special Remarks / Skin Concerns:*
${sub.otherSpecifications || 'None'}

Please check availability and confirm booking deposit details!`;

      return `https://wa.me/917310016001?text=${encodeURIComponent(textMsg)}`;
    };

    // Simulate backend network delays & redirect to WhatsApp
    setTimeout(() => {
      // Save submission to localStorage
      const existing = localStorage.getItem('artist_makeup_bookings') || '[]';
      try {
        const bookings = JSON.parse(existing);
        bookings.unshift(submission);
        localStorage.setItem('artist_makeup_bookings', JSON.stringify(bookings));
      } catch (err) {
        console.error('Error saving booking', err);
      }

      setReceipt(submission);
      setIsSubmitting(false);

      // Open WhatsApp directly with pre-filled message
      const waUrl = generateWhatsAppUrl(submission);
      window.open(waUrl, '_blank');
      
      // Clear fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setContactNumber('');
      setSelectedServices([]);
      setServiceLocation('');
      setEventDate('');
      setReadyTime('');
      setOtherSpecifications('');
      setCallBackRequest(false);
    }, 1000);
  };

  const budgetOptions = [
    'Not decided',
    '1500 to 2000',
    '2000 to 3000',
    '2500 to 3500',
    '4000 to 8000',
    '8000 to 20000',
    '15000 to 25000',
    'No budget issue',
    'Other'
  ];

  const servicesNeededOptions = [
    'Only me',
    'Not confirmed now',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '10 plus additional staff if required to handle the event flow effectively.'
  ];

  const bookingDecisionOptions = [
    'I am ready to hire someone',
    'Just after discussion',
    'Within this week',
    'After one month',
    'Near Event date',
    'Not decided'
  ];

  return (
    <div className="bg-white rounded-3xl border border-neutral-150 p-6 sm:p-10 shadow-sm" id="booking-form-wrapper">
      
      {/* Dynamic Receipt Modal / Summary post submission */}
      {receipt ? (
        <div className="space-y-6 text-center py-6 animate-scale-up" id="booking-success-receipt">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md">
            <Check className="h-8 w-8 stroke-[3px]" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-neutral-900">
              Booking Request Submitted!
            </h3>
            <p className="text-sm text-neutral-500 max-w-lg mx-auto">
              Thank you, <strong>{receipt.firstName} {receipt.lastName}</strong>! Rohit kumar and his coordination staff will review your scheduling and contact you at <strong>{receipt.contactNumber}</strong> shortly.
            </p>
          </div>

          {/* Submission Receipt Details Card */}
          <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 text-left max-w-xl mx-auto space-y-4 text-xs text-neutral-600">
            <div className="border-b border-neutral-200 pb-3 flex justify-between items-center text-neutral-800">
              <span className="font-bold uppercase tracking-wider font-mono">✦ Booking Receipt</span>
              <span className="font-mono text-[10px] text-neutral-400">ID: AZ-{Math.floor(Math.random() * 90000) + 10000}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Event Date</span>
                <span className="font-semibold text-neutral-800">{receipt.eventDate || 'TBD'}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Ready By Time</span>
                <span className="font-semibold text-neutral-800">{receipt.readyTime || 'TBD'}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Service Location</span>
                <span className="font-semibold text-neutral-800">{receipt.serviceLocation || 'Doorstep Delivery'}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Requested Services</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {receipt.services.length > 0 ? (
                    receipt.services.map((s, idx) => (
                      <span key={idx} className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-medium border border-rose-100">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-neutral-400">No specific service selected (Custom discussion requested)</span>
                  )}
                </div>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Booking Decision</span>
                <span className="font-semibold text-amber-600">{receipt.bookingDecision}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Your Budget Range</span>
                <span className="font-semibold text-neutral-800">₹ {receipt.budget}</span>
              </div>
              {receipt.joinCourses && (
                <div className="col-span-2">
                  <span className="block text-[10px] uppercase font-bold text-neutral-400">Joined Course Academy</span>
                  <span className="font-semibold text-purple-600 block bg-purple-50 px-2.5 py-1 rounded border border-purple-100 mt-1 w-fit">
                    {receipt.joinCourses}
                  </span>
                </div>
              )}
            </div>

            {receipt.callBackRequest && (
              <div className="bg-amber-50 border border-amber-200/50 p-3 rounded-xl flex items-center space-x-2 text-amber-900 text-[11px] font-semibold">
                <PhoneCall className="h-4 w-4 text-amber-600 shrink-0" />
                <span>You requested a direct phone call back! We will dial you within 15 minutes.</span>
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={() => {
                const textMsg = `*Booking Inquiry Confirmation for Rohit Kumar* 💄✨\nClient: ${receipt.firstName} ${receipt.lastName}\nPhone: ${receipt.contactNumber}\nServices: ${receipt.services.join(', ') || 'Custom Consultation'}\nEvent Date: ${receipt.eventDate || 'TBD'}\nLocation: ${receipt.serviceLocation || 'TBD'}`;
                window.open(`https://wa.me/917310016001?text=${encodeURIComponent(textMsg)}`, '_blank');
              }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp Now</span>
            </button>
            <button
              onClick={() => setReceipt(null)}
              className="bg-neutral-950 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-neutral-900 cursor-pointer"
            >
              Book Another Session
            </button>
          </div>
        </div>
      ) : (
        
        <form onSubmit={handleFormSubmit} className="space-y-6">
          
          {/* Form Header info */}
          <div className="space-y-2 border-b border-neutral-100 pb-4">
            <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
              Get in Touch & Book Custom Services
            </h3>
            <p className="text-xs text-neutral-500 leading-normal">
              Enter your event particulars below to initiate booking. Rest assured, our doorstep setups carry <strong>absolutely no travel or hidden convenience charges!</strong>
            </p>
          </div>

          {/* Section 1: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
              [1] Personal Specifications
            </h4>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  First Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  required
                  placeholder="e.g., Pooja"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Last Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  required
                  placeholder="e.g., Sharma"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="email-id" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Email ID <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email-id"
                  required
                  placeholder="e.g., pooja.sharma@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="contact-number" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Contact Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact-number"
                  required
                  placeholder="e.g., +91 73100 16001"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Choose Services */}
          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
              [2] Select Services A to Z
            </h4>
            
            <div>
              <p className="text-xs text-neutral-500 mb-2 font-medium">Click to check all the services needed (You can select multiple):</p>
              
              <div className="grid grid-cols-1 gap-2 max-h-[220px] overflow-y-auto border border-neutral-200 rounded-xl p-3 bg-neutral-50">
                <p className="text-[10px] uppercase font-bold text-rose-500 tracking-wider mb-1 border-b border-rose-100 pb-1">Makeup Services</p>
                {MAKEUP_SERVICES.map(s => (
                  <label key={s.id} className="flex items-center space-x-2 text-xs text-neutral-700 cursor-pointer py-1 hover:bg-neutral-100/55 rounded px-1.5">
                    <input 
                      type="checkbox" 
                      checked={selectedServices.includes(s.name)}
                      onChange={() => toggleService(s.name)}
                      className="rounded text-rose-600 focus:ring-rose-500/20"
                    />
                    <span>{s.name}</span>
                  </label>
                ))}
                
                <p className="text-[10px] uppercase font-bold text-amber-500 tracking-wider mt-3 mb-1 border-b border-amber-100 pb-1">Hairstyling Services</p>
                {HAIR_SERVICES.map(s => (
                  <label key={s.id} className="flex items-center space-x-2 text-xs text-neutral-700 cursor-pointer py-1 hover:bg-neutral-100/55 rounded px-1.5">
                    <input 
                      type="checkbox" 
                      checked={selectedServices.includes(s.name)}
                      onChange={() => toggleService(s.name)}
                      className="rounded text-amber-600 focus:ring-amber-500/20"
                    />
                    <span>{s.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Event Specifics */}
          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
              [3] Event Location & Scheduling
            </h4>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <label htmlFor="event-date" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Event Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <input
                    type="date"
                    id="event-date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="ready-time" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Time Needed to Be Ready <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="ready-time"
                    required
                    placeholder="e.g., 4:00 PM"
                    value={readyTime}
                    onChange={(e) => setReadyTime(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="service-location" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Service Location / Venue <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="service-location"
                    required
                    placeholder="e.g., Noida Hub Hotel / Home Address"
                    value={serviceLocation}
                    onChange={(e) => setServiceLocation(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Budget & Scale */}
          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
              [4] Scale, Budgets & Academy Enrollment
            </h4>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label htmlFor="num-services" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  How many services are needed?
                </label>
                <select
                  id="num-services"
                  value={numServices}
                  onChange={(e) => setNumServices(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  {servicesNeededOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="user-budget" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Your Booking Budget (INR)
                </label>
                <select
                  id="user-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  {budgetOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="guest-budget" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Your Guest Budget per Person (INR)
                </label>
                <select
                  id="guest-budget"
                  value={guestBudget}
                  onChange={(e) => setGuestBudget(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  {budgetOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="join-academy" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Join Academy Course?
                </label>
                <select
                  id="join-academy"
                  value={joinCourses}
                  onChange={(e) => setJoinCourses(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  <option value="">No Course (Service Booking Only)</option>
                  {COURSES.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Other">Other Academy Sessions</option>
                </select>
              </div>

              <div>
                <label htmlFor="booking-decision" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Your Booking Decision
                </label>
                <select
                  id="booking-decision"
                  value={bookingDecision}
                  onChange={(e) => setBookingDecision(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  {bookingDecisionOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="hear-about" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="hear-about"
                  value={heardAboutUs}
                  onChange={(e) => setHeardAboutUs(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  <option value="Search on Google">Search on Google</option>
                  <option value="Instagram Catalog">Instagram Catalog</option>
                  <option value="Friend Reference">Friend Reference</option>
                  <option value="Theatrical / Movie sets">Theatrical / Movie sets</option>
                  <option value="Other">Other channels</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Other specs & Checkbox callback */}
          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
              [5] Final Remarks & Callback
            </h4>

            <div>
              <label htmlFor="other-specs" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Other Specifications / Requests
              </label>
              <textarea
                id="other-specs"
                rows={3}
                placeholder="Mention specific skin concerns, preferred brands, or custom hair extensions requirement..."
                value={otherSpecifications}
                onChange={(e) => setOtherSpecifications(e.target.value)}
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 resize-none"
              />
            </div>

            <div className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <input
                type="checkbox"
                id="callback-req"
                checked={callBackRequest}
                onChange={(e) => setCallBackRequest(e.target.checked)}
                className="h-4.5 w-4.5 rounded text-rose-600 focus:ring-rose-500/20"
              />
              <label htmlFor="callback-req" className="text-xs text-neutral-700 font-bold cursor-pointer">
                Please register a direct phone Call-Back request (Rohit kumar's coordination staff will dial you back).
              </label>
            </div>
          </div>

          {/* Terms Agreement notice */}
          <div className="flex items-start space-x-2 text-[10px] text-neutral-500 leading-normal">
            <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <p>By submitting this booking request, you acknowledge that a <strong>50% advance booking deposit</strong> is required to block dates, which is strictly non-refundable upon cancellation or event alterations by client.</p>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center space-x-2"
            id="booking-submit-btn"
          >
            {isSubmitting ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4 text-amber-300 fill-amber-300" />
            )}
            <span>{isSubmitting ? 'Registering Booking...' : 'Request Doorstep Booking'}</span>
          </button>

        </form>
      )}

    </div>
  );
}
