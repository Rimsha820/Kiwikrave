import type { JSX } from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <footer className="kk-footer">
      <div className="kk-footer__content">
        <div className="kk-footer__columns">
          <div className="kk-col">
            <h4>{t('Kiwikrave Reviews')}</h4>
            <ul>
              <li><a href="#">{t('faq')}</a></li>
              <li><a href="#">{t('privacy_policy')}</a></li>
              <li><a href="#">{t('terms')}</a></li>
            </ul>
          </div>
          <div className="kk-col">
            <h4>{t('partner')}</h4>
            <ul>
              <li><a href="#">{t('courier')}</a></li>
            </ul>
          </div>
          <div className="kk-col kk-col--right">
            <div className="kk-contacts">
              <p><strong>{t('Questions or comments? Email us at')}</strong> <a href="mailto:feedback@kiwikrave.com">feedback@kiwikrave.com</a></p>
              <p><strong>{t('For advertising inquiries, email us at')}</strong> <a href="mailto:ads@kiwikrave.com">ads@kiwikrave.com</a></p>
              <p><strong>{t('For partnership, email us at')}</strong> <a href="mailto:channels@kiwikrave.com">channels@kiwikrave.com</a></p>
            </div>
            <div className="kk-badges">
              <a className="store-badge" href="#" aria-label="Get it on Google Play">
                <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
              </a>
              <a className="store-badge" href="#" aria-label="Download on the App Store">
                <img alt="Download on the App Store" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="kk-footer__bottom">
          <div className="kk-social">
            <a href="#" aria-label="Facebook" className="social-circle"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram" className="social-circle"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="YouTube" className="social-circle"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn" className="social-circle"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div className="kk-copy">{t('Copyright © 2025 Kiwikrave', { year: new Date().getFullYear() })}</div>
          <div className="kk-brand">
            <span className="kk-brand__logo">Kiwikrave</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


