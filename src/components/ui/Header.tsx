'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../../styles/header.module.css";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const Header = () => {
  const [windowHeight, setWindowHeight] = useState(false);
  const [windowHeight2, setWindowHeight2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight2(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="header" className={`${Styles.headerbg} h-screen`}>
      <div className="bg-[#121617] h-9 lg:h-11 flex justify-center  items-center">
        <p className="text-[6px] sm:text-[10px] lg:text-[.8rem] font-bold leading-3 tracking-[4.2px] uppercase text-white font-josefin text-center">
        GA VOOR GOED HOUT ZONDER DE HOOFDPRIJS TE BETALEN
        </p>
      </div>
      {windowHeight2 ? <Navbar2/> : <Navbar/>}
      <div className="main-container">
        <div className="headertextcontainer h-[75vh] flex justify-center items-center">
          <div className="text-container bg-[rgba(0,0,0,.50)] lg:bg-[rgba(0,0,0,.40)] pb-8 px-8 md:px-16 lg:px-36">
            <h1 className="text-white text-center font-futura text-[2.5rem] lg:text-[5rem] leading-[75%] lg:leading-[183.75px] uppercase pt-16 lg:pt-0" data-aos="fade-down"
            data-aos-duration="500">
              HOUTHANDEL
            </h1>
            <p className="mt-5 text-white text-center font-josefin text-[12px] md:text-[14px] lg:text-[1.2rem] font-light leading-[20px] lg:leading-[25px]" data-aos="fade-down"
            data-aos-duration="1000">
            Eik - Thermisch gemodificeerd Fraké - Hardhout - Terrasplanken - Steigerhout - Suar
            </p>
            <div className="text-center">
              <Link href="#assortiment">
              <button className="mt-8 lg:MT-12 bg-[#FBC700] text-chocolate font-josefin text-[10px] lg:text-[12px] font-bold leading-[14.4px] tracking-[4.2px] uppercase px-9 lg:px-12 py-3 lg:py-4" data-aos="fade-down"
            data-aos-duration="1500">
                 BEKIJK Assortiment
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {!windowHeight && (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="scrollToDown cursor-default"
        />
      )}
    </section>
  );
};

export default Header;
