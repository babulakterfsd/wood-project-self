/* eslint-disable turbo/no-undeclared-env-vars */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import call from '../../../public/assets/images/call.png';
import fb from '../../../public/assets/images/fb.png';
import logo from '../../../public/assets/images/houttotaal_logo.png';
import insta from '../../../public/assets/images/insta.png';
import location from '../../../public/assets/images/location.png';
import mail from '../../../public/assets/images/mail.png';
import wtsapp from '../../../public/assets/images/wtsapp.png';

interface OpeningHoursAPIResponse {
  opening_hours: OpeningHours;
}

interface OpeningHours {
  friday: string;
  monday: string;
  saturday: string;
  sunday: string;
  thursday: string;
  tuesday: string;
  wednesday: string;
}

const Footer = () => {
  const [openingHours, setOpeningHours] = useState<OpeningHoursAPIResponse>({
    opening_hours: {
      friday: 'Op afspraak',
      monday: '08:30 -17:30',
      saturday: '08:30 -17:30',
      sunday: '08:30 -17:30',
      thursday: '09:00 - 17:30',
      tuesday: '10:00 - 13:00',
      wednesday: 'Gesloten',
    },
  });

  useEffect(() => {
    async function getOpeningHours() {
      if (!process.env.NEXT_PUBLIC_OPENING_HOURS_API_URL) {
        return;
      }

      const openingHours = await fetch(
        process.env.NEXT_PUBLIC_OPENING_HOURS_API_URL,
        {
          method: 'GET',
        }
      );

      setOpeningHours((await openingHours.json()) as OpeningHoursAPIResponse);
    }

    getOpeningHours();
  }, []);

  return (
    <section
      id="conctacteer"
      style={{
        // background:
        //   "linear-gradient(to right, rgba(0,0,0,1)2%, rgba(17,17,17,1), rgba(19,35,35,1) 40%)",
        background: '#e9e6d6',
      }}>
      <div className="py-16 main-container lg:py-20">
        <div className="grid grid-cols-12 gap-x-5 lg:gap-x-5 gap-y-10 lg:gap-y-0">
          {/* logo */}
          <div className="flex flex-col items-center justify-center col-span-12 mb-4 logo lg:col-span-2 lg:gap-y-6 lg:justify-start lg:items-start lg:mb-0">
           <Link href="/">
           <Image
              src={logo}
              alt="HoutTotaal Logo"
              className="object-contain cursor-pointer h-[49px] lg:h-[61px] w-[117px] lg:w-[145px]"
            />
           </Link>
            <div className="flex gap-x-2.5 -ml-10 sm:ml-0 mt-4 lg:mt-0">
              <Link href="https://www.instagram.com/houttotaal" target="_blank">
                <Image
                  src={insta}
                  alt="Instagram"
                  width={20}
                  height={15}
                  className="hidden object-contain duration-100 cursor-pointer lg:block hover:rotate-45"
                />
              </Link>
              <Link href="https://www.instagram.com/houttotaal" target="_blank">
                <Image
                  src={insta}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain duration-100 cursor-pointer lg:hidden hover:rotate-45"
                />
              </Link>
              <Link href="https://www.facebook.com/HoutTotaal" target="_blank">
                <Image
                  src={fb}
                  alt="Facebook"
                  width={12}
                  height={6}
                  className="hidden object-contain duration-100 cursor-pointer lg:block hover:rotate-45"
                />
              </Link>
              <Link href="https://www.facebook.com/HoutTotaal" target="_blank">
                <Image
                  src={fb}
                  alt="Facebook"
                  width={11}
                  height={11}
                  className="object-contain duration-100 cursor-pointer lg:hidden hover:rotate-45"
                />
              </Link>
            </div>
          </div>
          {/* links */}
          <div className="col-span-6 links md:col-span-4 lg:col-span-2">
            <h5 className="text-chocolate font-futura lg:text-[22px] mb-3 lg:mb-7 opacity-0">
              Quick Links
            </h5>
            <Link href="/">
              <p className="text-chocolate hover:text-[#c4843d] cursor-pointer  font-josefin lg:text-[14px] font-bold">
                Home
              </p>
            </Link>
            <Link href="/#assortiment">
              <p className="text-chocolate hover:text-[#c4843d] cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
                Assortiment
              </p>
            </Link>
            <Link href="/#waardaes">
              <p className="text-chocolate hover:text-[#c4843d] cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
                Waardes
              </p>
            </Link>
            <Link href="/#waarom">
              <p className="text-chocolate hover:text-[#c4843d] cursor-pointer  font-josefin text-[14px] font-bold">
                Waarom
              </p>
            </Link>
          </div>
          {/* hulp nodig */}
          <div className="col-span-6 hulpnoding md:col-span-4 lg:col-span-2 lg:-ml-10">
            <h5 className="text-chocolate font-futura lg:text-[22px] mb-3 lg:mb-7 opacity-0">
              Help nodig?
            </h5>
            <p className="text-chocolate hover:text-[#c4843d] cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
              <Link href="/terms">
              Algemene voorwaarden
              </Link>
            </p>
            <p className="text-chocolate hover:text-[#c4843d] cursor-pointer  font-josefin text-[14px] font-bold my-1.5 lg:my-3">
            <Link href="/privacy">
              Privacybeleid
              </Link>
            </p>
          </div>
          {/* Openingsuren */}
          <div className="col-span-6 getintouch md:col-span-4 lg:col-span-2 lg:-ml-6 lg:mr-12">
            <h5 className="text-chocolate font-futura lg:text-[22px] mb-4 lg:mb-7">
              Get in touch
            </h5>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <Image
                src={location}
                alt="Location"
                width={16}
                height={10}
                className="hidden object-contain -mt-16 lg:block"
              />
              <Image
                src={location}
                alt="Location"
                width={30}
                height={10}
                className="object-contain -mt-16 sm:mt-1 lg:hidden"
              />
              <p className="text-chocolate   font-josefin font-medium lg:leading-[25px]">
              Lageweg 35K <br />
              2222AG Katwijk aan Zee
              <br /> The Netherlands
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-medium my-1.5 lg:my-3 flex gap-x-2.5">
              <Image
                src={call}
                alt="Call"
                width={15}
                height={15}
                className="hidden object-contain lg:block"
              />
              <Image
                src={call}
                alt="Call"
                width={12}
                height={10}
                className="object-contain lg:hidden"
              />
              <p className="text-chocolate   font-josefin font-medium lg:leading-[25px]">
                +31 71 203 40 90
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-medium my-1.5 lg:my-3 flex gap-x-2.5">
              <Image
                src={wtsapp}
                alt="Call"
                width={15}
                height={15}
                className="hidden object-contain lg:block"
              />
              <Image
                src={wtsapp}
                alt="Call"
                width={12}
                height={10}
                className="object-contain lg:hidden"
              />
              <p className="text-chocolate   font-josefin font-medium lg:leading-[25px]">
                +31 633 966 002
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-medium flex gap-x-2.5">
              <Image
                src={mail}
                alt="Mail"
                width={15}
                height={15}
                className="hidden object-contain lg:block"
              />
              <Image
                src={mail}
                alt="Mail"
                width={12}
                height={10}
                className="object-contain lg:hidden"
              />
              <p className="text-chocolate   font-josefin font-medium lg:leading-[25px]">
                <Link href="mailto:info@houttotaal.nl">info@houttotaal.nl</Link>
              </p>
            </div>
          </div>

          {/* Openingsuren  */}
          <div className="col-span-6 getintouch md:col-span-4 lg:col-span-2 lg:-ml-6 lg:mr-12">
            <h5 className="text-chocolate font-futura lg:text-[22px] mb-4 lg:mb-7">
              Openingsuren
            </h5>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Ma - {openingHours.opening_hours.monday}
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Di - {openingHours.opening_hours.tuesday}
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Wo - {openingHours.opening_hours.wednesday}
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Do - {openingHours.opening_hours.thursday}
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Vr - {openingHours.opening_hours.friday}
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Za - {openingHours.opening_hours.saturday}
              </p>
            </div>
            <div className="text-chocolate font-josefin text-[14px] font-bold my-1.5 lg:my-3 flex gap-x-2.5">
              <p className="text-chocolate font-josefin font-bold lg:leading-[25px]">
                Zo - {openingHours.opening_hours.sunday}
              </p>
            </div>
          </div>
          {/* KvK & Bank  */}
          <div className="col-span-6 hulpnoding md:col-span-4 lg:col-span-2">
            <h5 className="text-chocolate font-futura lg:text-[22px] mb-3 lg:mb-7">
              KvK & Bank
            </h5>
            <p className="text-chocolate   font-josefin text-[14px] font-bold">
              61392421
            </p>
            <p className="text-chocolate   font-josefin text-[14px] font-bold my-1.5 lg:my-3">
              NL65 BUNQ 2064 2611 33
            </p>
          </div>
        </div>
      </div>
      <div className="divider h-[1px] w-full bg-[rgba(182,182,182,.74)]"></div>
      <p className="lg:mt-2 lg:pb-3 text-chocolate text-[12px] lg:text-base pt-1.5 pb-2 lg:py-0 text-center font-josefin font-semibold lg:leading-[36px]">
        Copyright © HoutTotaal.nl 2023. Alle Rechten Voorbehouden.
      </p>
    </section>
  );
};

export default Footer;
