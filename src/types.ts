export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'hair';
  description: string;
  iconName: string;
  popular?: boolean;
  image?: string;
}

export interface CourseItem {
  id: string;
  name: string;
  duration: string;
  level: 'Beginner' | 'Advanced' | 'Professional';
  description: string;
  modules: string[];
  price?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'editorial' | 'character' | 'hair' | 'celebrity' | 'wedding' | 'school' | 'ramleela';
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  event: string;
  date: string;
}

export interface BookingSubmission {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  services: string[];
  serviceLocation: string;
  eventDate: string;
  readyTime: string;
  heardAboutUs: string;
  numServices: string;
  budget: string;
  guestBudget: string;
  joinCourses: string;
  bookingDecision: string;
  otherSpecifications: string;
  callBackRequest: boolean;
}

export interface CallBackSubmission {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  inquiryFor: 'courses' | 'services' | 'both';
  callBackRequest: boolean;
}
