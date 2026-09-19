export type NavTab = 'Home' | 'Services' | 'Works' | 'About' | 'Contact';

export interface MetricCardData {
  title: string;
  value: string;
  subtext?: string;
  avatars?: string[];
}

export interface PartnerBrand {
  name: string;
  category?: string;
}
