export type StrapiId = number;

export type StrapiImage = {
  url: string;
  alternativeText?: string;
};

export type StrapiResponse<T> = {
  data: {
    id: StrapiId;
    attributes: T;
  } | null;
};

export type StrapiListResponse<T> = {
  data: Array<{
    id: StrapiId;
    attributes: T;
  }>;
};

export type HeroContent = {
  title: string;
  subtitle?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  backgroundImage?: {
    data?: { attributes: StrapiImage } | null;
  } | null;
};

export type FeatureItem = {
  title: string;
  text: string;
  image?: { data?: { attributes: StrapiImage } | null } | null;
  order?: number;
};

export type AdvantageItem = {
  title: string;
  text: string;
  icon?: { data?: { attributes: StrapiImage } | null } | null;
  order?: number;
};

export type DownloadContent = {
  headline: string;
  copy: string;
  image?: { data?: { attributes: StrapiImage } | null } | null;
  storeBadges?: Array<{ label: string; href: string; image?: { data?: { attributes: StrapiImage } | null } | null }>;
};

export type MerchantContent = {
  benefits?: Array<{ title: string; text: string; icon?: { data?: { attributes: StrapiImage } | null } | null; order?: number }>;
  statsUsers?: number;
  statsPartners?: number;
  statsCouriers?: number;
  steps?: Array<{ title: string; text: string; icon?: { data?: { attributes: StrapiImage } | null } | null; order?: number }>;
  testimonials?: Array<{ text: string; author: string; image?: { data?: { attributes: StrapiImage } | null } | null; order?: number }>;
  contactCtaLabel?: string;
  contactCtaHref?: string;
};

export type FooterContent = {
  socialLinks?: Array<{ network: string; href: string; icon?: { data?: { attributes: StrapiImage } | null } | null }>;
  copyrightText?: string;
};


