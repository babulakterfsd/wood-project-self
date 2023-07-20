'use client'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Assortiment from '@/components/ui/Assortiment';
import Conctacteer from '@/components/ui/Conctacteer';
import Footer from '@/components/ui/Footer';
import GetInTouch from '@/components/ui/GetInTouch';
import Header from '@/components/ui/Header';
import Waardaes from '@/components/ui/Waardaes';
import Waarom from '@/components/ui/Waarom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Header />
      <Waardaes />
      <Assortiment />
      <Waarom />
      <Conctacteer />
      {/* <GetInTouch /> */}
      {windowHeight && (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="scrollToTop"
        />
      )}
      <Footer />
    </div>
  );
}
