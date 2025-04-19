
export type UserRole = "startup" | "enterprise" | "investor" | "admin";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  organizationId: string;
  name: string;
  avatar?: string;
  title?: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  logo?: string;
  coverImage?: string;
  bio: string;
  industry: string;
  location: string;
  website: string;
  size?: string;
  foundedYear?: number;
  followers: number;
  following: number;
  isVerified: boolean;
  verificationType?: string;
  verificationStatus: "pending" | "verified" | "rejected";
  role: UserRole;
}

export interface Pitch {
  id: string;
  organizationId: string;
  title: string;
  summary: string;
  videoUrl?: string;
  deckUrl?: string;
  fundingAmount?: number;
  stage: "seed" | "seriesA" | "seriesB" | "seriesC" | "growth" | "partnership";
  industry: string[];
  region: string;
  createdAt: Date;
  views: number;
  interests: number;
  comments: number;
  isFeatured: boolean;
}

export interface PitchComment {
  id: string;
  pitchId: string;
  userId: string;
  organizationId: string;
  content: string;
  isPrivate: boolean;
  createdAt: Date;
  parentId?: string;
}

export interface PitchEvent {
  id: string;
  title: string;
  description: string;
  organizerId: string;
  date: Date;
  duration: number; // in minutes
  maxAttendees: number;
  currentAttendees: number;
  videoUrl?: string;
  status: "upcoming" | "live" | "ended";
  industries: string[];
}
