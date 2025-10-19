import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Merchant from './components/Merchant'
import Courier from './components/Courier'
import Career from './components/Career'
import Contact from './components/Contact'
import './App.css'
import { useEffect } from 'react'

type PageName = 'Home' | 'Merchant' | 'Courier' | 'Career' | 'Contact'

function App() {
  const [active, setActive] = useState<PageName>('Home')
  const [language, setLanguage] = useState<string>('en')
  const [country, setCountry] = useState<string>('us')

  useEffect(() => {
    document.body.classList.add('theme-indigo')
    return () => document.body.classList.remove('theme-indigo')
  }, [])

  useEffect(() => {
    const getPageFromHash = (): PageName => {
      const hash = (window.location.hash || '').toLowerCase()
      if (hash === '#merchant') return 'Merchant'
      if (hash === '#courier') return 'Courier'
      if (hash === '#career') return 'Career'
      if (hash === '#contact') return 'Contact'
      return 'Home'
    }
    setActive(getPageFromHash())
    const onHashChange = () => setActive(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [active])

  const renderPage = () => {
    switch (active) {
      case 'Merchant':
        return <Merchant />
      case 'Courier':
        return <Courier />
      case 'Career':
        return <Career />
      case 'Contact':
        return <Contact standalone />
      case 'Home':
      default:
        return <Home />
    }
  }

  return (
    <>
      {active !== 'Contact' && (
        <Header
          onNavigate={(name) => { window.location.hash = `#${String(name).toLowerCase()}`; setActive(name as PageName) }}
          active={active}
          language={language}
          country={country}
          onChangeLanguage={setLanguage}
          onChangeCountry={setCountry}
        />
      )}
      <main>
        {renderPage()}
      </main>
      {active !== 'Contact' && <Footer />}
    </>
  )
}

export default App
