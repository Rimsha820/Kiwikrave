import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';
import t1 from '../../assets/per1.jpg';
import t2 from '../../assets/meet.jpg';
import t3 from '../../assets/per.jpg';
import t4 from '../../assets/meet.jpg';
import t5 from '../../assets/meet3.jpg';
import t6 from '../../assets/meet4.jpg';
import t7 from '../../assets/meet5.jpg';
import '../Merchant/Merchant.scss';
import './Contact.scss';
import FooterBottom from '../Footer/Bottom';
import ContactHeader from './Header';

export default function Contact({ standalone = false }: { standalone?: boolean }): JSX.Element {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);
  const [couriersCount, setCouriersCount] = useState(0);
  const statsRef = useRef<HTMLElement | null>(null);
  const TESTIMONIALS = [
    {
      text: 'Kiwikrave has been an incredible partner for our restaurant. Their delivery team is always on time, polite, and professional, which helps us keep our customers happy. When we first joined the platform, their staff helped us promote our business and guided us through setting up our menu online. Even when unexpected issues arise, their support team responds quickly and efficiently. Kiwikrave’s commitment to customer satisfaction and restaurant success truly stands out, and we’re proud to continue working with them.',
      author: 'Chez Chili',
      img: t1,
    },
    {
      text: 'Partnering with Kiwikrave has been one of the best decisions for our restaurant. Before joining, we had limited visibility online, but now our orders have nearly doubled. The delivery process is seamless, and their marketing campaigns have helped attract new and loyal customers. We especially appreciate their promotional tools, which allow us to customize offers and track performance. Kiwikrave understands how restaurants operate and always goes the extra mile to support us, even during peak hours.',
      author: 'Golden Dragon',
      img: t2,
    },
    {
      text: 'We’ve worked with several delivery services before, but none compare to the reliability and care that Kiwikrave provides. Their platform is intuitive and easy to use, which made training our team simple. Order accuracy has improved, and the delivery speed keeps our dishes fresh and delicious for customers. On top of that, Kiwikrave constantly gathers feedback to improve both the restaurant and customer experience. They genuinely value partnerships and have helped us grow significantly.',
      author: 'Tea & Tapas',
      img: t3,
    },
    {
      text: 'Kiwikrave’s real-time tracking system has completely changed how we handle deliveries. Customers love being able to see their order progress, and it’s reduced the number of support calls we receive. Their team is always professional and quick to resolve any issues. We’ve built strong trust with our customers because of how transparent the process is. Kiwikrave is more than just a delivery app — it’s a reliable business partner that helps us operate smoothly every single day.',
      author: 'Noodle House',
      img: t4,
    },
    {
      text: 'The marketing tools and restaurant promotions offered by Kiwikrave have made a huge impact on our visibility. Their platform allows us to reach new audiences without needing big ad budgets. We’ve seen a noticeable increase in repeat orders, and the feedback from customers has been overwhelmingly positive. What sets Kiwikrave apart is their understanding of what both restaurants and diners need. We’re truly grateful for their continued support and partnership.',
      author: 'Spicy Garden',
      img: t5,
    },
    {
      text: 'From the moment we joined Kiwikrave, the experience has been smooth and efficient. Setup took less than a day, and we were receiving orders almost immediately. Their onboarding team provided detailed training and checked in regularly to make sure we were satisfied. Since then, our business has seen steady growth, and our customers appreciate the quick service. Kiwikrave’s dedication to their partners really makes them stand out in the food delivery industry.',
      author: 'Chef’s Kitchen',
      img: t6,
    },
    {
      text: 'Kiwikrave’s data insights have been invaluable for our restaurant. The reports help us understand which dishes perform best and when customers are most active. This allows us to make informed decisions about promotions and menu updates. Their platform gives us the flexibility to adapt to customer needs and optimize our operations. It’s refreshing to work with a delivery service that truly cares about helping restaurants succeed long-term.',
      author: 'Urban Eats',
      img: t7,
    },
  ];
  

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const targetUsers = 2000000;
    const targetPartners = 32000;
    const targetCouriers = 25000;

    let hasAnimated = false;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (durationMs: number) => {
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / durationMs);
        const eased = easeOutCubic(t);
        setUsersCount(Math.round(targetUsers * eased));
        setPartnersCount(Math.round(targetPartners * eased));
        setCouriersCount(Math.round(targetCouriers * eased));
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animate(1500);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const format = (n: number) => n.toLocaleString();
  return (
    <>
      {standalone && <ContactHeader />}
      <div id="merchant" className="merchant">
      {/* Hero with form */}
      <section className="merchant-section merchant-hero contact-hero">
        <div className="merchant-hero__overlay">
          <div className="container">
            <div className="hero-copy">
              <h1>Partner With Kiwikrave</h1>
              <p>Kiwikrave builds the platform for you to connect with your customers. Eliminating the hassle of taking phone call orders, our smart platform helps increase efficiency. Partners are also able to view their order statistics, in order to improve operations.</p>
            </div>
            <div className="contact-form-card">
              <h3>Join Kiwikrave Delivery</h3>
              <div className="contact-form-scroll">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <select className="form-control" defaultValue="">
                    <option value="" disabled>Select Country</option>
                    <option value="us">United States</option>
                    <option value="au">Australia</option>
                    <option value="ca">Canada</option>
                  </select>
                  <select className="form-control" defaultValue="">
                    <option value="" disabled>Select Operating Region</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                  </select>
                  <input className="form-control" type="text" placeholder="Insert Contact Person" />
                  <input className="form-control" type="tel" placeholder="Insert Contact Number" />
                  <input className="form-control" type="email" placeholder="Insert Email" />
                  <input className="form-control" type="text" placeholder="Insert Merchant Name" />
                  <input className="form-control" type="text" placeholder="Insert Restaurant Address" />
                  <input className="form-control" type="text" placeholder="Insert Merchant Type" />
                  <select className="form-control" defaultValue="">
                    <option value="" disabled>Select Information Channel</option>
                    <option value="social">Social Media</option>
                    <option value="friends">Friends/Colleagues</option>
                    <option value="ads">Ads</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea className="form-control" placeholder="Merchant Description" rows={4}></textarea>
                  <button type="submit" className="btn-submit">Submit</button>
                </form>
              </div>
            </div>
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
              <p>Fantuan helps merchants develop brand awareness leading to an increase of new customers, and gives access to a loyal customer base with a stronger buying power.</p>
            </div>
          </div>
          <div className="benefit-item">
            <i className="fa-solid fa-sack-dollar"></i>
            <div>
              <h3>No additional costs</h3>
              <p>Operate with no setup fees or monthly subscriptions—pay only per order—while gaining access to promotions, analytics and seasonal campaigns that consistently bring in new diners.</p>
            </div>
          </div>
          <div className="benefit-item">
            <i className="fa-solid fa-kitchen-set"></i>
            <div>
              <h3>Improve restaurant efficiency</h3>
              <p>Streamlined order management and clear pickup/delivery workflows reduce wait times and mistakes; real‑time tablet notifications free your staff to focus on quality and service.</p>
            </div>
          </div>
          <div className="benefit-item">
            <i className="fa-solid fa-chart-line"></i>
            <div>
              <h3>Grow your business</h3>
              <p>Reach a large, loyal customer base and nearby discovery; targeted marketing and featured placements help increase repeat orders and overall revenue week after week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section ref={statsRef} className="merchant-section merchant-stats">
        <div className="container stats-row">
          <div className="stat">
            <div className="num">{format(usersCount)}+</div>
            <div className="label">Users</div>
            <div className="sublabel">active online users</div>
          </div>
          <div className="stat">
            <div className="num">{format(partnersCount)}+</div>
            <div className="label">Business partners</div>
            <div className="sublabel">leading brands and hidden gems</div>
          </div>
          <div className="stat">
            <div className="num">{format(couriersCount)}+</div>
            <div className="label">Couriers</div>
            <div className="sublabel">five stars delivery partners</div>
          </div>
        </div>
      </section>
      </div>
      <div className="kk-footer-sep">
        <FooterBottom />
      </div>
    </>
  );
}


