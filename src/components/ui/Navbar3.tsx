"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/images/houttotaal_logo.png";

const Navbar3 = () => {

  const [windowHeight, setWindowHeight] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    //mobile menu toggle
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");
    const hLink = document.querySelectorAll("#hLink");
    const faSolid = document.querySelector(".fa");
    if (hamburger && menu && hLink && faSolid) {
      hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        faSolid.classList.toggle("fa-times");
      });
      hLink.forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.toggle("hidden");
          faSolid.classList.toggle("fa-times");
          hamburger.classList.toggle("block");
        });
      });
    }

    const header = document.querySelector("header");
    const container = document.querySelector("#header_full");

    if (header && container) {
      window.onscroll = () => {
        if (window.scrollY > 100) {
          header.classList.add("bg-slate-950");
          header.classList.add("border-b");
          header.classList.add("border-gray");
          container.classList.add("padding-left-0");
          container.classList.add("padding-right-0");
        } else {
          header.classList.remove("bg-slate-950");
          header.classList.remove("border-b");
          header.classList.remove("border-gray");
        }
      };
    }
  }, []);
  return (
    <header className={` ${windowHeight ? 'fixed top-0' : 'absolute top-[45px]'}  z-50 bg-[#131b1d] w-full`}>
      <nav className=" flex justify-center items-center">
        <div>
          <ul className="hidden lg:flex items-center lg:space-x-2 2xl:space-x-4">
            <span className="hidden lg:flex items-center space-x-20 border-b-[1px]">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-white uppercase hover:pb-0.5 hover:border-b-2  font-josefin font-medium text-[1.1rem]">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#waardaes" legacyBehavior>
                  <a className="text-white uppercase hover:pb-0.5 hover:border-b-2  font-josefin font-medium text-[1.1rem]">
                    Waardes
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#assortiment" legacyBehavior>
                  <a className="text-white uppercase hover:pb-0.5 hover:border-b-2  font-josefin font-medium text-[1.1rem]">
                    Assortiment
                  </a>
                </Link>
              </li>

            </span>
            <li className="py-5 text-color-secondary font-bold text-3xl cursor-pointer">
              <Link href="/" legacyBehavior>
                <Image
                  src={logo}
                  alt="Houttotaal logo"
                  width={200}
                  height={100}
                  // className="lg:mx-10"
                />
              </Link>
            </li>
            <span className="hidden lg:flex items-center space-x-20 border-b-[1px]">

              <li>
                <Link href="/#getintouch" legacyBehavior>
                  <a className="text-white uppercase hover:pb-0.5 hover:border-b-2 h-2  font-josefin font-medium text-[1.1rem]">
                  BIJPRODUCTEN
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#waarom" legacyBehavior>
                  <a className="text-white uppercase hover:pb-0.5 hover:border-b-2  font-josefin font-medium text-[1.1rem]">
                    Waarom?
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#conctacteer" legacyBehavior>
                  <a className="text-white uppercase hover:pb-0.5 hover:border-b-2 mt-1  font-josefin font-medium text-[1.1rem]">
                    Contact
                  </a>
                </Link>
              </li>
            </span>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className=" flex justify-between items-center px-3" id="">
        <nav>
          <div className="lg:hidden py-5 text-color-secondary font-bold text-3xl">
            <Link href="/" legacyBehavior>
              <Image
                src={logo}
                alt="Houttotaal logo"
                width={126}
                height={53}
                className="ml-16 sm:ml-0"
              />
            </Link>
          </div>
          <div
            id="menu"
            className="hidden bg-slate-950 h-[100vh] absolute inset-0 z-50"
          >
            <ul className="w-full grid justify-center items-center space-y-6 text-white py-20">
              <li>
                <Link href="/" legacyBehavior>
                  <a
                    className="text-white uppercase  hover:border-b-2 "
                    id="hLink"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#waardaes" legacyBehavior>
                  <a
                    className="text-white uppercase hover:border-b-2 "
                    id="hLink"
                  >
                    Waardes
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#assortiment" legacyBehavior>
                  <a
                    className="text-white uppercase hover:border-b-2 "
                    id="hLink"
                  >
                    Assortiment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#waarom" legacyBehavior>
                  <a
                    className="text-white uppercase hover:border-b-2 "
                    id="hLink"
                  >
                    Waarom?
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#getintouch" legacyBehavior>
                  <a
                    className="text-white uppercase hover:border-b-2 h-2 "
                    id="hLink"
                  >
                    BIJPRODUCTEN
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#conctacteer" legacyBehavior>
                  <a
                    className="text-white uppercase hover:border-b-2 mt-1 "
                    id="hLink"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="hamburger" className="lg:hidden cursor-pointer z-50">
          <i className="fa fa-bars text-2xl text-white mt-2.5 mr-2"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar3;
