import Image from "next/image";
import call from "../../../public/assets/images/call.png";
import fb from "../../../public/assets/images/fb.png";
import logo from "../../../public/assets/images/houttotaal_logo.png";
import insta from "../../../public/assets/images/insta.png";
import location from "../../../public/assets/images/location.png";
import mail from "../../../public/assets/images/mail.png";
import imdb from "../../../public/assets/images/md.png";
import twtr from "../../../public/assets/images/twtr.png";
import utube from "../../../public/assets/images/utube.png";
import vmo from "../../../public/assets/images/vmo.png";

const Footer = () => {
  return (
    <section
      id="conctacteer"
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,1)2%, rgba(17,17,17,1), rgba(19,35,35,1) 40%)",
      }}
    >
      <div className="main-container py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-x-5 lg:gap-x-0 gap-y-10 lg:gap-y-0">
          {/* logo */}
          <div className="logo col-span-12 lg:col-span-6 flex flex-col lg:gap-y-6 lg:ml-12 justify-center lg:justify-start items-center lg:items-start mb-16 lg:mb-0">
            <Image
              src={logo}
              alt="HoutTotaal Logo"
              className="object-contain cursor-pointer h-[49px] lg:h-[61px] w-[117px] lg:w-[145px]"
            />
            <p className="text-[#B5B5B5] font-josefin text-[12px] lg:leading-[15px] lg:w-[290px] text-center lg:text-left mt-2 lg:mt-0 mb-4 lg:mb-0">
              Whether you're a homeowner embarking on a renovation project or an
              interior designer working on a commercial space.
            </p>
            <div className="flex gap-x-5">
              <Image
                src={utube}
                alt="Youtube"
                width={25}
                height={17}
                className="object-contain cursor-pointer hidden lg:block"
              />
              <Image
                src={utube}
                alt="Youtube"
                width={20}
                height={13}
                className="object-contain cursor-pointer lg:hidden"
              />
              <Image
                src={insta}
                alt="Instagram"
                width={20}
                height={15}
                className="object-contain cursor-pointer hidden lg:block"
              />
              <Image
                src={insta}
                alt="Instagram"
                width={15}
                height={13}
                className="object-contain cursor-pointer lg:hidden"
              />
              <Image
                src={twtr}
                alt="Twitter"
                width={20}
                height={15}
                className="object-contain cursor-pointer hidden lg:block"
              />
              <Image
                src={twtr}
                alt="Twitter"
                width={18}
                height={13}
                className="object-contain cursor-pointer lg:hidden"
              />
              <Image
                src={fb}
                alt="Facebook"
                width={12}
                height={6}
                className="object-contain cursor-pointer hidden lg:block"
              />
              <Image
                src={fb}
                alt="Facebook"
                width={9}
                height={13}
                className="object-contain cursor-pointer lg:hidden"
              />
              <Image
                src={imdb}
                alt="Imdb"
                width={20}
                height={15}
                className="object-contain cursor-pointer hidden lg:block"
              />
              <Image
                src={imdb}
                alt="Imdb"
                width={15}
                height={13}
                className="object-contain cursor-pointer lg:hidden"
              />
              <Image
                src={vmo}
                alt="Viemo"
                width={20}
                height={15}
                className="object-contain cursor-pointer hidden lg:block"
              />
              <Image
                src={vmo}
                alt="Viemo"
                width={15}
                height={13}
                className="object-contain cursor-pointer lg:hidden"
              />
            </div>
          </div>
          {/* links */}
          <div className="links col-span-6 lg:col-span-2">
            <h5 className="text-white font-futura lg:text-[22px] mb-3 lg:mb-7">
              Quick Links
            </h5>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin lg:text-[14px] font-bold">
              Home
            </p>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
              Assortiment
            </p>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
              Waardes
            </p>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold">
              Waarom
            </p>
          </div>
          {/* hulp nodig */}
          <div className="hulpnoding col-span-6 lg:col-span-2">
            <h5 className="text-white font-futura lg:text-[22px] mb-3 lg:mb-7">
              Help nodig?
            </h5>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold">
              Over Ons
            </p>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
              Privacy Policy
            </p>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
              Terms & Condities
            </p>
            <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin text-[14px] font-bold">
              Cookie Policy
            </p>
          </div>
          {/* get in touch */}
          <div className="getintouch col-span-12 lg:col-span-2">
            <h5 className="text-white font-futura lg:text-[22px] mb-4 lg:mb-7">
              Get in touch
            </h5>
            <div className="text-white font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <Image
                src={location}
                alt="Location"
                width={15}
                height={15}
                className="object-contain -mt-3 hidden lg:block"
              />
              <Image
                src={location}
                alt="Location"
                width={12}
                height={10}
                className="object-contain mt-1 lg:hidden"
              />
              <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin font-medium lg:leading-[25px]">
                Lageweg 35K2222AG KATWIJK AAN ZEE
              </p>
            </div>
            <div className="text-white font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <Image
                src={call}
                alt="Call"
                width={15}
                height={15}
                className="object-contain hidden lg:block"
              />
              <Image
                src={call}
                alt="Call"
                width={12}
                height={10}
                className="object-contain lg:hidden"
              />
              <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin font-medium lg:leading-[25px]">
                06-33966002
              </p>
            </div>
            <div className="text-white font-josefin text-[14px] font-bold flex gap-x-2.5">
              <Image
                src={mail}
                alt="Mail"
                width={15}
                height={15}
                className="object-contain hidden lg:block"
              />
              <Image
                src={mail}
                alt="Mail"
                width={12}
                height={10}
                className="object-contain lg:hidden"
              />
              <p className="text-[#838381] hover:text-white cursor-pointer  font-josefin font-medium lg:leading-[25px]">
                hello@houttotaal.nl
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider h-[1px] w-full bg-[rgba(182,182,182,.74)]"></div>
      <p className="lg:mt-2 lg:pb-3 text-[#BBB] text-[12px] lg:text-base pt-1.5 pb-2 lg:py-0 text-center font-josefin font-semibold lg:leading-[36px]">
        All Rights Reserved by HoutTotaal.nl&trade; - &copy;2023
      </p>
    </section>
  );
};

export default Footer;
