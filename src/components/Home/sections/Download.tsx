import type { JSX } from 'react';
import '../download.scss';

export default function Download(): JSX.Element {
  return (
    <section className="home-section download">
      <div className="section-inner two-col">
        <div className="left-img" aria-hidden="true"></div>
        <div className="right-copy">
          <h1 className="section-title">Download Our App</h1>
          <p>Life can be complicated but ordering food doesn't have to be. New users enjoy welcoming coupons set - Download now!</p>
          <div className="badges">
            <a className="store-badge" href="#" aria-label="Get it on Google Play">
              <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
            </a>
            <a className="store-badge" href="#" aria-label="Download on the App Store">
              <img alt="Download on the App Store" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


