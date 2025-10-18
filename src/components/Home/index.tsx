import type { JSX } from 'react';
import './Home.scss';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Advantages from './sections/Advantages';
import Download from './sections/Download';
import Cards from './sections/Cards';

export default function Home(): JSX.Element {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Advantages />
      <Download />
      <Cards />
    </div>
  );
}


