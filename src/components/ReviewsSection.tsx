import React, { useState, useEffect } from 'react';
import { REVIEWS as INITIAL_REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquare, ThumbsUp, Sparkles, Check, Heart, ShieldAlert } from 'lucide-react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Happy Client');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [event, setEvent] = useState('Bridal / Party Makeup');
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    // Load reviews from localStorage if available, else use initial data
    const stored = localStorage.getItem('artist_makeup_reviews');
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch (e) {
        setReviews(INITIAL_REVIEWS);
      }
    } else {
      setReviews(INITIAL_REVIEWS);
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: Review = {
      id: `r-user-${Date.now()}`,
      name,
      role,
      rating,
      comment,
      event,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('artist_makeup_reviews', JSON.stringify(updatedReviews));

    // Clear Form
    setName('');
    setComment('');
    setRole('Happy Client');
    setEvent('Bridal / Party Makeup');
    setRating(5);
    setSuccessMsg(true);

    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  return (
    <section className="py-12 sm:py-16 bg-white" id="reviews-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            ✦ Client Testimonials
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            What our clients say about makeup's-anywhere .
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Verified ratings and feedback from brides, grooms, fashion coordinators, and drama directors. Experience our five-star doorstep service first hand.
          </p>
        </div>

        {/* Aggregate Score Card */}
        <div className="mt-12 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-150 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center md:border-r md:border-neutral-200 py-2">
            <h3 className="text-5xl font-extrabold text-rose-600 font-mono">4.9</h3>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-neutral-500 mt-2 font-semibold">Average Google Rating</p>
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <h4 className="font-bold text-neutral-800 text-sm">Doorstep Quality Highlights</h4>
            <ul className="text-xs text-neutral-600 space-y-2">
              <li className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% on-time arrival across all booking locations</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>High-grade premium skin preps (waterproof foundations & lash details)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Professionals wearing sanitized gear with neat kits</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Reviews List (Left Block) */}
          <div className="lg:col-span-7 space-y-6" id="reviews-cards-list">
            <h3 className="font-serif text-lg font-bold text-neutral-950 border-b border-neutral-100 pb-2">
              Recent Customer Reviews ({reviews.length})
            </h3>
            
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="bg-neutral-50 rounded-2xl p-6 border border-neutral-150/80 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
                      <p className="text-[10px] text-neutral-500 mt-0.5">{review.role} • {review.event}</p>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-mono font-medium">{review.date}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5 mt-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3.5 w-3.5 ${
                          i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-250'
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-neutral-600 leading-relaxed mt-3 bg-white/50 p-3 rounded-xl border border-neutral-100">
                    "{review.comment}"
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-semibold pt-1">
                    <span className="text-emerald-600 flex items-center gap-1">✓ Verified Booking</span>
                    <button className="hover:text-rose-600 flex items-center gap-1 transition-colors">
                      <ThumbsUp className="h-3 w-3" /> Helpful
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Review Form (Right Block) */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm h-fit">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-sm mb-2">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Share Your Experience
              </h3>
              <p className="text-neutral-500 text-xs">
                Your feedback matters! Write down your review on Rohit kumar's team styling.
              </p>
            </div>

            <form onSubmit={handleSubmitReview} className="mt-6 space-y-4">
              
              {/* Star Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Overall Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1.5 rounded-lg bg-white border border-neutral-200 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star 
                        className={`h-6 w-6 ${
                          star <= rating ? 'fill-amber-400' : 'text-neutral-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="rev-name" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="rev-name"
                  required
                  placeholder="e.g., Pooja Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                />
              </div>

              {/* Role / Profession */}
              <div>
                <label htmlFor="rev-role" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Role / Profile
                </label>
                <select
                  id="rev-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                >
                  <option value="Happy Bride">Happy Bride</option>
                  <option value="Happy Groom">Happy Groom</option>
                  <option value="Event Coordinator">Event Coordinator</option>
                  <option value="Theatre / Ram Leela Performer">Theatre / Ram Leela Performer</option>
                  <option value="Model / Actor">Model / Actor</option>
                  <option value="Happy Client">Happy Client</option>
                </select>
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="rev-event" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Occasion Styled For
                </label>
                <input
                  type="text"
                  id="rev-event"
                  placeholder="e.g., Wedding reception, Ram Leela drama"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500"
                />
              </div>

              {/* Comment text */}
              <div>
                <label htmlFor="rev-comment" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Honest Feedback
                </label>
                <textarea
                  id="rev-comment"
                  required
                  rows={4}
                  placeholder="Describe your doorstep setup service, makeup longevity, and experience..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                id="rev-submit-btn"
              >
                <Sparkles className="h-4 w-4 text-amber-300 fill-amber-300" />
                <span>Submit Verified Review</span>
              </button>

              {/* Success Callout */}
              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center space-x-2 text-emerald-800 text-xs animate-fade-in">
                  <Check className="h-4 w-4 stroke-[3px]" />
                  <span>Thank you! Your review has been added to our live stream list.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
