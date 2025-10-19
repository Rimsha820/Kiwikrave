import type { JSX } from 'react'
import './FooterBottom.scss'

export default function FooterBottom(): JSX.Element {
  return (
    <footer className="kk-footer">
      <div className="kk-footer__content">
        <div className="kk-footer__bottom">
          <div className="kk-social">
            <a href="#" aria-label="Facebook" className="social-circle"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram" className="social-circle"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="YouTube" className="social-circle"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn" className="social-circle"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div className="kk-copy">Copyright © {new Date().getFullYear()} Kiwikrave</div>
          <div className="kk-brand">
            <span className="kk-brand__logo">Kiwikrave</span>
          </div>
        </div>
      </div>
    </footer>
  )
}


