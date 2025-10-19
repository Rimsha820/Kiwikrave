import type { JSX } from 'react'
import { useEffect, useRef, useState } from 'react'
import '../Header/Header.scss'

export default function ContactHeader(): JSX.Element {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<'en' | 'zh'>('en')
  const langRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (langRef.current && !langRef.current.contains(target)) setIsLangOpen(false)
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  const LANGS = [
    { label: 'English', value: 'en' },
    { label: 'Chinese', value: 'zh' },
  ]

  return (
    <header className="kk-header is-scrolled">
      <nav className="kk-nav">
        <a className="kk-logo" href="/#home">
          <span className="kk-logo-mark" aria-label="KiwiKrave food logo">
            <i className="fa-solid fa-utensils" aria-hidden="true"></i>
          </span>
          <span className="kk-logo-text">
            <span className="kk-logo-word">KiwiKrave</span>
            <span className="kk-logo-sub">Delivery</span>
          </span>
        </a>
        <ul className="kk-nav-list">
          <li className={`kk-nav-item kk-dropdown${isLangOpen ? ' is-open' : ''}`} ref={langRef}>
            <button className="kk-dropbtn" onClick={(e) => { e.preventDefault(); setIsLangOpen(!isLangOpen) }}>
              <i className="fa-solid fa-globe"></i>
              <span className="kk-drop-label">{LANGS.find(l => l.value === selectedLang)?.label || 'English'}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="kk-dropdown-menu">
              {LANGS.map(opt => (
                <li key={opt.value}><a href="#" onClick={(e) => { e.preventDefault(); setSelectedLang(opt.value as 'en' | 'zh'); setIsLangOpen(false) }}>{opt.label}</a></li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}


