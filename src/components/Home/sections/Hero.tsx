import type { JSX } from 'react';
import '../hero.scss';
import heroImage from '../../../assets/Home .png';

export default function Hero(): JSX.Element {
  return (
    <section className="home-section hero">
      <div className="hero-visual" aria-hidden="true">
        <img src={heroImage} alt="Featured selection" />
      </div>
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">Deliver what <br /> you crave now!</h1>
          <div className="hero-actions">
            <a href="#" className="btn btn-pill btn-yellow">Order Online Now <i className="fa-solid fa-angle-right"></i></a>
            <a href="#" className="btn btn-pill btn-pink">Download App <i className="fa-solid fa-download"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}


