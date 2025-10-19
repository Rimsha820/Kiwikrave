import type { JSX } from 'react';
import '../features.scss';
import { useEffect, useState } from 'react';
import feat1 from '../../../assets/picked.png';
import feat2 from '../../../assets/pickup.png';
import feat3 from '../../../assets/uncooked.png';
import feat4 from '../../../assets/veges.png';
import feat5 from '../../../assets/food2.png';

const items = [
  {
    title: 'Food Delivery',
    text: 'Choose from a selection of big-name restaurants and local specialties. Your number one stop to get the most choices of Asian food and enjoy everyday discount!',
    imgAlt: 'Food Delivery',
    img: feat1,
  },
  {
    title: 'Self Pick-up',
    text: 'Skip the tip and delivery fees - pick your order up from the restaurant yourself. No need to wait in line and enjoy 10% off on selected restaurants!',
    imgAlt: 'Self Pick-up',
    img: feat2,
  },
  {
    title: 'KiwiKrave Rush',
    text: 'Too busy or tired to run errands? We get it. Enjoy convenient courier and errand services like having items bought from the store, a package delivered and more.',
    imgAlt: 'KiwiKrave Rush',
    img: feat3,
  },
  {
    title: 'KiwiKrave Mart',
    text: 'Besides instant restaurant delivery, you can also enjoy convenient delivery of a variety of products including fresh fruit, snacks, flowers, beauty products and more.',
    imgAlt: 'KiwiKrave Mart',
    img: feat4,
  },
  {
    title: 'About KiwiKrave Delivery',
    text: 'KiwiKrave Delivery is an online food ordering and delivery platform. We connect you with your favorite local gems through our platform, which facilitates instant delivery and pickup services of various types of products and items.',
    imgAlt: 'About KiwiKrave Delivery',
    img: feat5,
  },
];

export default function Features(): JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="home-section features">
      <div className="section-inner features-inner">
        {/* LEFT SIDE: TEXT */}
        <div className="rush-copy">
          <h2 className="offer-title">{items[index].title}</h2>
          <p className="rush-text">{items[index].text}</p>

          <div className="swap-dots">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to ${i + 1}`}
                className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="rush-visual">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`swap-img${i === index ? ' is-active' : ''}`}
              aria-label={it.imgAlt}
              style={{ backgroundImage: `url(${it.img})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
