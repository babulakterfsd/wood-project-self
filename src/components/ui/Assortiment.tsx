import Image from "next/image";
import assortiment1 from "../../../public/assets/images/assortiment1.png";
import assortiment2 from "../../../public/assets/images/assortiment2.png";
import assortiment3 from "../../../public/assets/images/assortiment3.png";
import assortiment4 from "../../../public/assets/images/assortiment4.png";
import assortiment5 from "../../../public/assets/images/assortiment5.png";
import assortiment6 from "../../../public/assets/images/assortiment6.png";
import assortiment7 from "../../../public/assets/images/assortiment7.png";

import Styles from "../../styles/assortiment.module.css";

const Assortiment = () => {
  return (
    <section id="assortiment" className="bg-[#101211] text-white lg:py-20">
      <div className="main-container">
        <div className="heading-texts flex justify-between lg:mb-12">
          <div className="text">
            <h2 className="font-futura text-4xl leading-[47px] tracking-[4.55px] uppercase">
              ONS ASSORTIMENT
            </h2>
            <p className="lg:mt-1 font-josefin text-[17px] font-light leading-[28px]">
              Lorem ipsum dolor sit amet consectetur. Netus amet amet dictum
              accumsan sed.
            </p>
          </div>
          <div className="btn-container hidden lg:block">
            <button className="border-2 border-white lg:px-12 lg:py-4 font-josefin text-[.8rem] font-bold leading-[14.4px] tracking-[4.2px] uppercase">
              BEKIJK ALLES
            </button>
          </div>
        </div>
        <div className="assortiment-container grid grid-cols-12 lg:gap-x-6 lg:gap-y-12">
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment1}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              EIKENHOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment2}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              THERMO HOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment3}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              VUREN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment4}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              HARDHOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment3}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              SUAR
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment5}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              MAHONIE
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment6}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              BRAZILIAANS NOTEN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-12 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment7}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-[.9rem] font-bold leading-[28px] tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.08px]">
              IJZERWAREN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[.9rem] leading-[20px] tracking-[.07px] mt-2.5">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assortiment;
