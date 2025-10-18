import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import './Merchant.scss';

export default function Merchant(): JSX.Element {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const QUOTE_ITEMS = [0, 1, 2, 3, 4];

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTE_ITEMS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div id="merchant" className="merchant">
      {/* Hero */}
      <section className="merchant-section merchant-hero">
        <div className="merchant-hero__overlay">
          <div className="container">
            <h1>Partner with Kiwikrave</h1>
            <p>Kiwikrave builds the platform for you to connect with your customers. Our smart platform helps increase efficiency and lets partners view their order statistics to improve operations.</p>
            <a href="#" className="btn btn-pill btn-teal">Join now</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="merchant-section merchant-benefits">
        <div className="container benefits-grid">
          <div className="benefit-item">
            <i className="fa-solid fa-users"></i>
            <div>
              <h3>More customers</h3>
              <p>Develop brand awareness and access a loyal customer base with stronger buying power.</p>
            </div>
          </div>
          <div className="benefit-item">
            <i className="fa-solid fa-sack-dollar"></i>
            <div>
              <h3>No additional costs</h3>
              <p>Use our platform and services at no additional costs while enjoying perks and extra profits.</p>
            </div>
          </div>
          <div className="benefit-item">
            <i className="fa-solid fa-kitchen-set"></i>
            <div>
              <h3>Improve restaurant efficiency</h3>
              <p>Increase dine-in quality and efficiency with organized order workflows.</p>
            </div>
          </div>
          <div className="benefit-item">
            <i className="fa-solid fa-chart-line"></i>
            <div>
              <h3>Grow your business</h3>
              <p>Leverage our large user base to increase delivery orders and revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="merchant-section merchant-stats">
        <div className="container stats-row">
          <div className="stat"><div className="num">2,000,000+</div><div className="label">Users</div></div>
          <div className="stat"><div className="num">32,000+</div><div className="label">Business partners</div></div>
          <div className="stat"><div className="num">25,000+</div><div className="label">Couriers</div></div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="merchant-section merchant-testimonial">
        <div className="container testimonial-grid">
          <div className="quote">
            <p>Kiwikrave has always been our friendly partner. Only fast delivery can maintain the taste and quality of food — Kiwikrave surely meets those expectations.</p>
            <div className="author">Zoe Dessert & Presotea</div>
            <div className="quote-dots">
              {QUOTE_ITEMS.map((_, i) => (
                <button key={i} aria-label={`Quote ${i + 1}`} className={i === quoteIndex ? 'is-active' : ''} onClick={() => setQuoteIndex(i)} />
              ))}
            </div>
          </div>
          <div className="photo" aria-hidden="true">
            {QUOTE_ITEMS.map((_, i) => (
              <div key={i} className={`qimg${i === quoteIndex ? ' is-active' : ''}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="merchant-section merchant-steps">
        <div className="container">
          <h2>4 simple steps to get started</h2>
          <p className="steps-sub">Eliminate inconvenient processes and share high customer traffic.</p>
          <div className="steps-grid">
            <div className="step">
              <i className="fa-solid fa-phone"></i>
              <h4>Contact Kiwikrave</h4>
              <p>Submit application — we will contact you shortly.</p>
            </div>
            <div className="step">
              <i className="fa-solid fa-file-signature"></i>
              <h4>Sign Contract</h4>
              <p>Our exclusive contract protects your best interests.</p>
            </div>
            <div className="step">
              <i className="fa-solid fa-tablet-screen-button"></i>
              <h4>Install Tablet</h4>
              <p>Tablet provides order notifications and data information.</p>
            </div>
            <div className="step">
              <i className="fa-solid fa-store"></i>
              <h4>Operate online</h4>
              <p>Manage your menu and receive more exposure channels.</p>
            </div>
          </div>
          <div className="steps-cta">
            <a className="btn btn-pill btn-teal" href="#">Join now</a>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="merchant-section merchant-invest">
        <div className="container invest-center">
          <h2>Advertisement for investment</h2>
          <p className="invest-sub">Use our big platform to accurately locate your customer base. Our advertising is the most direct and effective way to increase brand awareness.</p>
          <div className="invest-cta center">
            <a className="btn btn-outline" href="#">Contact Now</a>
            <a className="btn btn-outline" href="#">Media Kit</a>
          </div>
        </div>
      </section>
    </div>
  );
}


