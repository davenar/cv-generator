export interface CVModel {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  photo?: string;
  birthDate?: string;
  address: Address;
  socialAccounts: SocialAccounts;
  email?: string;
  phoneNumber?: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  spokenLanguages: Language[];
  website?: string;
  showPrivacyInfo: boolean;
}

export interface Experience {
  title?: string;
  location?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface Education {
  title?: string;
  location?: string;
  score?: string;
  description?: string;
  startYear?: number;
  endYear?: number;
}

export interface Skill {
  name?: string;
}

export interface Language {
  name?: string;
  level?: string;
}

export interface Address {
  streetName?: string;
  streetNumber?: string;
  city?: string;
  zipCode?: string;
}

export interface SocialAccounts {
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  telegram?: string;
  youtube?: string;
  twitch?: string;
  pinterest?: string;
}

export const europeanLanguageLevels: string[] = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
];
