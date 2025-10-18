import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Merchant from './components/Merchant'
import Courier from './components/Courier'
import Career from './components/Career'
import './App.css'
import { useEffect } from 'react'

type PageName = 'Home' | 'Merchant' | 'Courier' | 'Career'

function App() {
  const [active, setActive] = useState<PageName>('Home')
  const [language, setLanguage] = useState<string>('en')
  const [country, setCountry] = useState<string>('us')

  useEffect(() => {
    document.body.classList.add('theme-indigo')
    return () => document.body.classList.remove('theme-indigo')
  }, [])

  const renderPage = () => {
    switch (active) {
      case 'Merchant':
        return <Merchant />
      case 'Courier':
        return <Courier />
      case 'Career':
        return <Career />
      case 'Home':
      default:
        return <Home />
    }
  }

  return (
    <>
      <Header
        onNavigate={(name) => setActive(name as PageName)}
        active={active}
        language={language}
        country={country}
        onChangeLanguage={setLanguage}
        onChangeCountry={setCountry}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  )
}

export default App
