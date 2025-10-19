import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';
import './Header.scss';

const NAV_ITEMS = ['Merchant', 'Courier', 'Career'];

const LANGUAGE_OPTIONS = [
  { label: 'English', value: 'en' },
  { label: 'Urdu', value: 'ur' },
  { label: 'Arabic', value: 'ar' },
];

const COUNTRY_OPTIONS = [
  { label: 'United States', value: 'us' },
  { label: 'Australia', value: 'au' },
  { label: 'Canada', value: 'ca' },
];

type HeaderProps = {
  onNavigate: (name: string) => void;
  active?: string;
  language?: string;
  country?: string;
  onChangeLanguage?: (value: string) => void;
  onChangeCountry?: (value: string) => void;
};

export default function Header({ onNavigate, active, language = 'en', country = 'us', onChangeLanguage, onChangeCountry }: HeaderProps): JSX.Element {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langRef = useRef<HTMLLIElement | null>(null);
  const countryRef = useRef<HTMLLIElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langRef.current && !langRef.current.contains(target)) setIsLangOpen(false);
      if (countryRef.current && !countryRef.current.contains(target)) setIsCountryOpen(false);
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsMenuOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <header className={`kk-header${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="kk-nav">
        <a className="kk-logo" href="/" onClick={(e) => { e.preventDefault(); onNavigate('Home'); }}>
          <span className="kk-logo-mark" aria-label="KiwiKrave food logo">
            <i className="fa-solid fa-utensils" aria-hidden="true"></i>
          </span>
          <span className="kk-logo-text">
            <span className="kk-logo-word">KiwiKrave</span>
            <span className="kk-logo-sub">Delivery</span>
          </span>
        </a>
        <button
          className="kk-burger"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsLangOpen(false);
            setIsCountryOpen(false);
          }}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        <ul className={`kk-nav-list${isMenuOpen ? ' is-open' : ''}`}>
          {NAV_ITEMS.map((name) => (
            <li key={name} className={`kk-nav-item${active === name ? ' is-active' : ''}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(name); }}>{name}</a>
            </li>
          ))}
          <li className={`kk-nav-item kk-dropdown${isLangOpen ? ' is-open' : ''}`} ref={langRef}>
            <button className="kk-dropbtn" onClick={(e) => { e.preventDefault(); setIsLangOpen(!isLangOpen); setIsCountryOpen(false); }}>
              <i className="fa-solid fa-globe"></i>
              <span className="kk-drop-label">{LANGUAGE_OPTIONS.find(l => l.value === language)?.label || 'English'}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="kk-dropdown-menu">
              {LANGUAGE_OPTIONS.map(opt => (
                <li key={opt.value}><a href="#" onClick={(e) => { e.preventDefault(); onChangeLanguage && onChangeLanguage(opt.value); setIsLangOpen(false); }}>{opt.label}</a></li>
              ))}
            </ul>
          </li>
          <li className={`kk-nav-item kk-dropdown${isCountryOpen ? ' is-open' : ''}`} ref={countryRef}>
            <button className="kk-dropbtn" onClick={(e) => { e.preventDefault(); setIsCountryOpen(!isCountryOpen); setIsLangOpen(false); }}>
              <i className="fa-solid fa-location-dot"></i>
              <span className="kk-drop-label">{COUNTRY_OPTIONS.find(c => c.value === country)?.label || 'United States'}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="kk-dropdown-menu">
              {COUNTRY_OPTIONS.map(opt => (
                <li key={opt.value}><a href="#" onClick={(e) => { e.preventDefault(); onChangeCountry && onChangeCountry(opt.value); setIsCountryOpen(false); }}>{opt.label}</a></li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}


