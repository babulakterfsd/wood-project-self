"use client";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    //mobile menu toggle
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");
    const hLink = document.querySelectorAll("#hLink");
    const faSolid = document.querySelector(".fa");
    if (hamburger && menu && hLink && faSolid) {
      hamburger.addEventListener("click", () => {
        console.log("clicked");
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
    <header className="sticky top-0 z-50">
      <nav className=" flex justify-center items-center">
        <div>
          <ul className="hidden lg:flex items-center space-x-20">
            <li>
              <Link href="#home" legacyBehavior>
                <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#features" legacyBehavior>
                <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                  Waarom?
                </a>
              </Link>
            </li>
            <li>
              <Link href="#testimonial" legacyBehavior>
                <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                  Waardes
                </a>
              </Link>
            </li>

            <li className="py-5 text-color-secondary font-bold text-3xl">
              <Link href="/" legacyBehavior>
                <a>
                  <span className="text-white">Logo</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#pricing" legacyBehavior>
                <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                  Assortiment
                </a>
              </Link>
            </li>
            <li>
              <Link href="#blog" legacyBehavior>
                <a className="text-white uppercase hover:border-b-2 h-2 ease-in duration-200">
                  Over Ons
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact" legacyBehavior>
                <a className="text-white uppercase hover:border-b-2 mt-1 ease-in duration-200">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className=" flex justify-between items-center px-3" id="">
        <nav>
          <div className="lg:hidden py-5 text-color-secondary font-bold text-3xl">
            <Link href="/" legacyBehavior>
              <a>
                <span className="text-white">Logo</span>
              </a>
            </Link>
          </div>
          <div
            id="menu"
            className="hidden bg-slate-950 h-[100vh] absolute inset-0"
          >
            <ul className="w-full grid justify-center items-center space-y-6 text-white py-20">
              <li>
                <Link href="#home" legacyBehavior>
                  <a className="text-white uppercase  hover:border-b-2 ease-in duration-200">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#features" legacyBehavior>
                  <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                    Waarom?
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#testimonial" legacyBehavior>
                  <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                    Waardes
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#pricing" legacyBehavior>
                  <a className="text-white uppercase hover:border-b-2 ease-in duration-200">
                    Assortiment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#blog" legacyBehavior>
                  <a className="text-white uppercase hover:border-b-2 h-2 ease-in duration-200">
                    Over Ons
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact" legacyBehavior>
                  <a className="text-white uppercase hover:border-b-2 mt-1 ease-in duration-200">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="hamburger" className="lg:hidden cursor-pointer z-50">
          <i className="fa fa-bars text-2xl text-white"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
