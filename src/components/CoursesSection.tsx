import React, { useState } from 'react';
import { COURSES } from '../data';
import { 
  BookOpen, Clock, Award, CheckCircle2, 
  ChevronDown, ChevronUp, Sparkles, PhoneCall, X, Check, Calendar, ArrowRight
} from 'lucide-react';

interface CoursesSectionProps {
  setActivePage: (page: string) => void;
  setSelectedCourse?: (courseName: string) => void;
}

export default function CoursesSection({ setActivePage, setSelectedCourse }: CoursesSectionProps) {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  // Enrollment Modal state variables
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseName, setEnrollCourseName] = useState('');
  const [enrollName, setEnrollName] = useState('');
  const [enrollPhone, setEnrollPhone] = useState('');
  const [enrollBatch, setEnrollBatch] = useState('Morning Class');
  const [enrollExperience, setEnrollExperience] = useState('Beginner');
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [isSubmittingEnroll, setIsSubmittingEnroll] = useState(false);

  const toggleSyllabus = (id: string) => {
    if (expandedCourseId === id) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(id);
    }
  };

  const getPriceDetails = (priceStr: string) => {
    if (!priceStr) return { original: '', discounted: '' };
    const raw = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    const discount = Math.round(raw * 0.1);
    const discounted = raw - discount;
    return {
      original: priceStr,
      discounted: `₹${discounted.toLocaleString('en-IN')}`,
    };
  };

  const handleEnrollCourse = (courseName: string) => {
    setEnrollCourseName(courseName);
    setEnrollName('');
    setEnrollPhone('');
    setEnrollSuccess(false);
    setIsEnrollModalOpen(true);
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingEnroll(true);

    setTimeout(() => {
      setIsSubmittingEnroll(false);
      setEnrollSuccess(true);
      
      // Store record in local storage
      const existing = localStorage.getItem('artist_makeup_course_enrollments') || '[]';
      try {
        const enrollments = JSON.parse(existing);
        enrollments.unshift({
          courseName: enrollCourseName,
          studentName: enrollName,
          phone: enrollPhone,
          batch: enrollBatch,
          experience: enrollExperience,
          date: new Date().toLocaleDateString()
        });
        localStorage.setItem('artist_makeup_course_enrollments', JSON.stringify(enrollments));
      } catch (err) {
        console.error('Error saving enrollment', err);
      }
    }, 1200);
  };

  const handleWhatsAppShare = () => {
    const textMsg = `Hi Rohit%20kumar%21%20I%20want%20to%20enroll%20in%20your%20academy%20course%3A%20${encodeURIComponent(enrollCourseName)}.%0A%0A*Student%20Enrollment%20Details*%3A%0A-%20Name%3A%20${encodeURIComponent(enrollName)}%0A-%20Phone%3A%20${encodeURIComponent(enrollPhone)}%0A-%20Batch%3A%20${encodeURIComponent(enrollBatch)}%0A-%20Experience%3A%20${encodeURIComponent(enrollExperience)}%0A-%20Special%20Discount%3A%2010%25%20OFF%20Applied%21%0A%0APlease%20confirm%20my%20seat%20availability%21`;
    window.open(`https://wa.me/917310016001?text=${textMsg}`, '_blank');
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative" id="courses-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            ✦ Professional Academy
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Professional Makeup & Hair Styling Courses
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Kickstart your freelance career or master the high-demand art of prosthetic SFX. Learn directly from Rohit kumar, a seasoned theater trainer, with structured practical workshops.
          </p>
        </div>

        {/* Academy Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 text-sm">Professional Certification</h4>
              <p className="text-xs text-neutral-500 mt-1">Receive fully verified academy certificates valid globally for salon & movie production setups.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
            <div className="p-3 bg-rose-100 text-rose-700 rounded-xl">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 text-sm">100% Practical Training</h4>
              <p className="text-xs text-neutral-500 mt-1">Work directly on real models with high-end global tools and prosthetic materials.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 text-sm">Flexible Weekend Batches</h4>
              <p className="text-xs text-neutral-500 mt-1">Custom schedules tailored for college students, freelancers, and working professionals.</p>
            </div>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            return (
              <div 
                key={course.id}
                className="group relative flex flex-col justify-between bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-amber-400/50 transition-all duration-300"
                id={`course-card-${course.id}`}
              >
                <div>
                  {/* Category / Duration */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      course.level === 'Professional' 
                        ? 'bg-purple-100 text-purple-800' 
                        : course.level === 'Advanced' 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {course.level} Level
                    </span>
                    <div className="flex items-center space-x-1.5 text-xs text-neutral-500 font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors mt-4">
                    {course.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-neutral-500 leading-relaxed mt-2">
                    {course.description}
                  </p>

                  {/* Price Block with 10% OFF */}
                  {course.price && (() => {
                    const { original, discounted } = getPriceDetails(course.price);
                    return (
                      <div className="mt-4 space-y-1 bg-[#FFF8F2] p-3.5 rounded-xl border border-rose-100/50 text-left">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-xs text-neutral-500 font-medium">Fee:</span>
                          <span className="text-xs line-through text-neutral-400 font-mono font-semibold">{original}</span>
                          <span className="text-base font-black text-rose-600 font-mono">{discounted}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          <span className="text-[9px] text-emerald-600 font-extrabold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md uppercase tracking-wider">10% OFF Applied</span>
                          <span className="text-[9px] text-neutral-500 font-semibold bg-white/70 px-1.5 py-0.5 rounded border border-neutral-200/50">EMI Available</span>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Syllabus / Modules Accordion Trigger */}
                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="flex items-center justify-between w-full text-xs font-bold text-neutral-600 hover:text-amber-600 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Course Syllabus' : 'View Course Syllabus'}</span>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    {/* Collapsible Syllabus List */}
                    {isExpanded && (
                      <div className="mt-3 space-y-2 pl-1 animate-slide-down">
                        <p className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 font-bold">Key Modules:</p>
                        {course.modules.map((module, index) => (
                          <div key={index} className="flex items-center space-x-2 text-xs text-neutral-600">
                            <div className="h-4 w-4 rounded-full border border-amber-400/80 p-0.5 bg-neutral-950 shadow-xs shrink-0 flex items-center justify-center">
                              <img 
                                src="https://i.ibb.co/B2z8StcV/image.png" 
                                alt="Logo" 
                                className="h-full w-full object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span>{module}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Enroll Actions */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">Batch Starts Soon</span>
                  <button
                    onClick={() => handleEnrollCourse(course.name)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:shadow-md cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-tr from-neutral-900 to-neutral-800 p-8 text-center text-white relative overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="relative space-y-4">
            <Sparkles className="h-8 w-8 text-amber-400 mx-auto animate-pulse" />
            <h3 className="font-serif text-xl font-bold sm:text-2xl">Want to learn customized hairstyles or SFX character designs?</h3>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-xl mx-auto">
              We provide fully custom 1-on-1 coaching models tailored specifically to your speed and professional targets. Reach out for other custom sessions.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={() => handleEnrollCourse('Other Customized Training')}
                className="bg-amber-400 text-neutral-900 hover:bg-amber-300 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer"
              >
                Inquire For Custom Coaching &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* --- Dedicated Interactive Course Enrollment Modal --- */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-md w-full border border-rose-100 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header backdrop color strip */}
            <div className="bg-gradient-to-r from-[#1c0711] to-[#3a1125] p-6 text-white relative">
              <button 
                onClick={() => setIsEnrollModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest font-mono">✦ Academy Admission Form</span>
                <h3 className="text-lg font-serif font-extrabold pr-6">Course Enrollment</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-left">
              {enrollSuccess ? (
                <div className="space-y-6 text-center py-4 animate-scale-up">
                  <div className="h-14 w-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="h-8 w-8 stroke-[3px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl font-bold text-neutral-900">Enrollment Registered!</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Your interest in <strong>{enrollCourseName}</strong> has been saved. Your special <strong>10% discount</strong> code is registered under your contact details!
                    </p>
                  </div>

                  {/* Summary Slip */}
                  <div className="bg-[#FFF8F2] border border-rose-100/60 rounded-2xl p-4 text-left space-y-2 text-xs font-medium text-neutral-700">
                    <div className="flex justify-between border-b border-neutral-100 pb-1.5 font-bold">
                      <span className="text-neutral-500">Student:</span>
                      <span>{enrollName}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-100 pb-1.5 font-bold">
                      <span className="text-neutral-500">WhatsApp:</span>
                      <span>{enrollPhone}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-100 pb-1.5 font-bold">
                      <span className="text-neutral-500">Batch Type:</span>
                      <span>{enrollBatch}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-100 pb-1.5 font-bold">
                      <span className="text-neutral-500">Prior Experience:</span>
                      <span>{enrollExperience}</span>
                    </div>
                    <div className="flex justify-between font-bold text-emerald-600">
                      <span>Tuition Discount:</span>
                      <span>10% OFF Secured</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={handleWhatsAppShare}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      <PhoneCall className="h-4 w-4" />
                      <span>Confirm Seat via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsEnrollModalOpen(false)}
                      className="w-full text-xs font-bold text-neutral-500 hover:text-neutral-700 hover:underline cursor-pointer py-1 block"
                    >
                      Back to Academy Courses
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  {/* Selected Course Display */}
                  <div className="bg-[#FFF8F2] border border-rose-100/50 p-3.5 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider font-mono">Selected Course</span>
                      <h4 className="font-bold text-neutral-800 text-xs sm:text-sm line-clamp-1">{enrollCourseName}</h4>
                    </div>
                    <span className="text-[10px] text-rose-600 font-bold bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full shrink-0">10% Off Applied</span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prianka Sen"
                      value={enrollName}
                      onChange={(e) => setEnrollName(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  {/* WhatsApp contact field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 7310016001"
                      value={enrollPhone}
                      onChange={(e) => setEnrollPhone(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  {/* Batch preference dropdown */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                      Preferred Batch Scheduling
                    </label>
                    <select
                      value={enrollBatch}
                      onChange={(e) => setEnrollBatch(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-1 focus:outline-none"
                    >
                      <option value="Morning Class">Morning Class</option>
                      <option value="Evening Class">Evening Class</option>
                      <option value="Weekend Batch (Saturday & Sunday)">Weekend Batch (Saturday & Sunday)</option>
                      <option value="Regular Weekday (Monday to Friday)">Regular Weekday (Monday to Friday)</option>
                      <option value="1-on-1 Customized Session">Private 1-on-1 Session</option>
                    </select>
                  </div>

                  {/* Prior experience radio */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-600 uppercase tracking-wider mb-2">
                      Prior Makeup/Hairstyling Experience
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Beginner', 'Intermediate', 'Professional'].map((level) => (
                        <button
                          type="button"
                          key={level}
                          onClick={() => setEnrollExperience(level)}
                          className={`py-2 rounded-xl text-center text-[10px] font-bold border transition-all cursor-pointer ${
                            enrollExperience === level
                              ? 'bg-[#1c0711] text-white border-neutral-900'
                              : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-[#FFF8F2]'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmittingEnroll}
                      className="w-full bg-gradient-to-r from-amber-400 to-rose-400 hover:opacity-95 text-neutral-950 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmittingEnroll ? (
                        <span>Processing Seat Enrollment...</span>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 fill-current" />
                          <span>Submit Enrollment (Get 10% Off)</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
