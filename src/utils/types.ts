import { startOfSecond } from "date-fns";

export interface Party {
  id: number;
  name: string;
  image: string;
  member: Person[];
  policy: string;
  description: string;
}

export interface Person {
  id: number;
  name: string;
  description: string;
  position: string;
  achievements: string[];
  contacts: Contact[];
}

export interface Contact {
  id: number;
  type: "Line" | "Facebook" | "Phone" | "Mail" | "Address" | "Instagram" | "Youtube" | "Discord" | "Twitter" | "Website";
  value: string;
  name: string;
}

export interface ShortParty {
  groupName: string;
  content: Content[]
}

export interface Content {
  id: number;
  content: any;
}