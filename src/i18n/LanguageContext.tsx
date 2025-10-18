import type { JSX, ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

type Lang = 'en' | 'ur';
type Dict = Record<string, string>;

const en: Dict = {
  hero_title: 'Deliver what you crave now!',
  order_now: 'Order Online Now',
  download_app: 'Download App',
  courier_title: 'Your time. Your terms.',
  courier_signup: 'Sign Up',
  deliver_with: 'Deliver with Kiwikrave',
};

const ur: Dict = {
  hero_title: 'اب جو چاہیں ابھی منگوائیں!',
  order_now: 'ابھی آرڈر کریں',
  download_app: 'ایپ ڈاؤن لوڈ کریں',
  courier_title: 'آپ کا وقت، آپ کی شرائط۔',
  courier_signup: 'سائن اپ',
  deliver_with: 'کیوی کرَیو کے ساتھ ڈیلیور کریں',
};

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [lang, setLang] = useState<Lang>('en');
  const dict = lang === 'ur' ? ur : en;
  const t = (k: string) => dict[k] ?? k;
  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}


