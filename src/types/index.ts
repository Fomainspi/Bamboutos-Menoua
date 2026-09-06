export type ContentStatus = 'draft' | 'published' | 'archived';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author?: string;
  publishedAt?: string;
  coverImage?: string;
  content: string;
  featured?: boolean;
  status: ContentStatus;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  image?: string;
  organizer?: string;
  category: string;
  capacity?: number;
  registrationEnabled?: boolean;
  status: 'upcoming' | 'past' | 'cancelled';
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  location?: string;
  date?: string;
  photographer?: string;
  credit?: string;
  source?: string;
  image: string;
}

export interface HeritageItem {
  id: string;
  title: string;
  description: string;
  category:
    | 'photograph'
    | 'document'
    | 'oral-history'
    | 'interview'
    | 'object'
    | 'article'
    | 'audio'
    | 'video';
  location?: string;
  date?: string;
  source?: string;
  author?: string;
  photographer?: string;
  credit?: string;
  tags: string[];
}

export interface CulturalLocation {
  id: string;
  name: string;
  type:
    | 'department'
    | 'commune'
    | 'town'
    | 'village'
    | 'cultural-location'
    | 'chiefdom'
    | 'heritage-site';
  description: string;
  coordinates?: { lat: number; lng: number };
  images?: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  url: string;
  thumbnail?: string;
}

export interface CommunityStory {
  id: string;
  name: string;
  role: string;
  story: string;
  image?: string;
}

export type UserRole = 'member' | 'admin' | 'super_admin';

export interface MemberProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  country?: string;
  city?: string;
  departmentOfOrigin?: string;
  commune?: string;
  villageOrCommunity?: string;
  profession?: string;
  profilePhoto?: string;
  role: UserRole;
}
