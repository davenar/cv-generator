export interface CVModel {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  photo?: string;
  birthDate?: string;
  address: Address;
  email?: string;
  phoneNumber?: string;
  experience: Experience[];
  skills: Skill[];
  spokenLanguages: Language[];
}

export interface Experience {
  title?: string;
  location?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
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

export const europeanLanguageLevels: string[] = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
];
