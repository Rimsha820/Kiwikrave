import type { JSX } from 'react';
import '../advantages.scss';
import advFast from '../../../assets/spoon.png';
import advStatus from '../../../assets/car.png';
import advPayment from '../../../assets/location.png';

export default function Advantages(): JSX.Element {
  return (
    <section className="home-section advantages">
      <div className="section-inner adv-inner">
        <h2 className="section-title">Our Advantages</h2>
        <p className="adv-intro">Partnered with over 20,000 different merchants while serving over 2,000,000 users. Kiwikrave is located in over 40 cities across the globe and is a leading Asian food delivery platform in North America and Australia.</p>
        <div className="adv-list">
          <div className="adv-item">
            <div className="adv-img"><img src={advFast} alt="Fast Delivery" /></div>
            <div className="adv-copy">
              <h3>Fast Delivery</h3>
              <p>Guaranteed efficiency with a team of over 25,000 courier</p>
            </div>
          </div>
          <div className="adv-item">
            <div className="adv-img"><img src={advStatus} alt="Real-Time Order Status" /></div>
            <div className="adv-copy">
              <h3>Real-Time Order Status</h3>
              <p>Get notification with real-time order status</p>
            </div>
          </div>
          <div className="adv-item">
            <div className="adv-img"><img src={advPayment} alt="Various Payment Methods" /></div>
            <div className="adv-copy">
              <h3>Various Payment Methods</h3>
              <p>Accept Visa, Mastercard, Debit, Alipay, WeChat Pay and cash</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


