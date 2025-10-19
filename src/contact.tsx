import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './components/Contact'

document.body.classList.add('theme-indigo')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contact standalone />
  </StrictMode>,
)



