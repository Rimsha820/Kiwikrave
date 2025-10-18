import type { JSX } from 'react';
import './Courier.scss';

export default function Courier(): JSX.Element {
  return (
    <div id="courier" className="courier">
      {/* Hero */}
      <section className="courier-section courier-hero">
        <div className="courier-hero__overlay">
          <div className="container">
            <h1>Your time. Your terms.</h1>
            <p>Deliver when you want. Make what you need. Join now and start earning on your schedule.</p>
            <a href="#" className="btn btn-pill btn-light"><i className="fa-solid fa-user-plus"></i> Sign Up</a>
          </div>
        </div>
      </section>

      {/* Deliver with Kiwikrave */}
      <section className="courier-section courier-benefits">
        <div className="container">
          <h2>Deliver with Kiwikrave</h2>
          <p className="sub">Flexible hours, and competitive income. Earn on a schedule determined by you.</p>
          <div className="benefits-row">
            <div className="benefit">
              <i className="fa-solid fa-calendar-days"></i>
              <h3>Flexible hours</h3>
              <p>Receive deliveries that work for you; clear and concise payouts.</p>
            </div>
            <div className="benefit">
              <i className="fa-solid fa-chart-line"></i>
              <h3>Competitive income</h3>
              <p>The more you deliver, the more you gain. Track earnings in real time.</p>
            </div>
            <div className="benefit">
              <i className="fa-solid fa-truck-fast"></i>
              <h3>More transportation methods</h3>
              <p>Car, motorcycle, bike or electric scooter. Apply, get authorized fast and start earning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Team - testimonials */}
      <section className="courier-section courier-testimonials">
        <div className="container">
          <h2>Meet our Kiwikrave Delivery Team!</h2>
          <div className="dots" aria-hidden="true">
            <span className="dot is-active" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <i className="fa-solid fa-quote-left"></i>
              <p>As an independent contractor, I enjoy the personal freedom provided and setting my own schedule. This work is perfect for me!</p>
              <div className="person"><span className="avatar" /> Larry <small>Joined 2018</small></div>
            </div>
            <div className="testimonial">
              <i className="fa-solid fa-quote-left"></i>
              <p>I chose to be my own boss and make food deliveries. If something happens, I can always contact support; this is very convenient.</p>
              <div className="person"><span className="avatar" /> Jocelyn <small>Joined 2019</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="courier-section courier-reqs">
        <div className="container reqs-inner">
          <div className="reqs-illustration" aria-hidden="true" />
          <div>
            <h2>Delivery Requirements</h2>
            <ul className="reqs-list">
              <li>At least 18 years old or older</li>
              <li>Car, motorcycle, bike or electric scooter</li>
              <li>A valid driver’s license</li>
              <li>Legal authorizations for eligibility to work in your region</li>
              <li>Bank account number</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="courier-section courier-contact">
        <div className="container">
          <h2>Contact us</h2>
          <p>Manhattan: <a href="tel:+123456789">+1 (347) 456-7895</a></p>
        </div>
      </section>

      {/* Get Started */}
      <section className="courier-section courier-cta">
        <div className="container cta-inner">
          <div>
            <h2>Get Started</h2>
            <p>Flexible hours, competitive pay. Fill out the application form to become a driver.</p>
          </div>
          <a href="#" className="btn btn-pill btn-light"><i className="fa-solid fa-user-plus"></i> Sign Up</a>
        </div>
      </section>
    </div>
  );
}


