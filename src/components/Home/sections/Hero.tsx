import type { JSX } from 'react';
import '../hero.scss';
import heroImage from '../../../assets/Home .png';
import { useHero } from '../../../hooks/useHero';

export default function Hero(): JSX.Element {
  const { data } = useHero();
  const bgUrl = data?.backgroundImage?.data?.attributes?.url;
  const title = data?.title || 'Deliver what \n you crave now!';
  const primaryLabel = data?.ctaPrimaryLabel || 'Order Online Now';
  const primaryHref = data?.ctaPrimaryHref || '#';
  const secondaryLabel = data?.ctaSecondaryLabel || 'Download App';
  const secondaryHref = data?.ctaSecondaryHref || '#';
  return (
    <section className="home-section hero">
      <div className="hero-visual" aria-hidden="true">
        <img src={bgUrl || heroImage} alt="Featured selection" />
      </div>
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">{title.split('\n').map((l, i) => (<span key={i}>{i ? <><br />{l}</> : l}</span>))}</h1>
          <div className="hero-actions">
            <a href={primaryHref} className="btn btn-pill btn-yellow">{primaryLabel} <i className="fa-solid fa-angle-right"></i></a>
            <a href={secondaryHref} className="btn btn-pill btn-pink">{secondaryLabel} <i className="fa-solid fa-download"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}


