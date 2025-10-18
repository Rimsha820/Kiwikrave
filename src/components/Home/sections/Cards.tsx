import type { JSX } from 'react';
import '../cards.scss';

export default function Cards(): JSX.Element {
  return (
    <section className="home-section cards">
      <div className="section-inner">
        <div className="card-row">
          <div className="simple-card">
            <div className="card-icon"><i className="fa-solid fa-store"></i></div>
            <div className="card-content">
              <h3>Partner with Kiwikrave</h3>
              <p>Kiwikrave builds the platform for  you to connect <br /> with your customers.</p>
              <div className="card-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right-long"></i></div>
            </div>
          </div>
          <div className="simple-card">
            <div className="card-icon"><i className="fa-solid fa-car"></i></div>
            <div className="card-content">
              <h3>Drive with Kiwikrave</h3>
              <p>Enjoy flexible hours and competitive income.</p>
              <div className="card-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right-long"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


