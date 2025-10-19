import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Merchant from './components/Merchant'
import Contact from './components/Contact'
import './App.css'

function App() {
  const location = useLocation()
  const isContact = location.pathname === '/contact'

  useEffect(() => {
    document.body.classList.add('theme-indigo')
    return () => document.body.classList.remove('theme-indigo')
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <>
      {!isContact && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/contact" element={<Contact standalone />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isContact && <Footer />}
    </>
  )
}

export default App
