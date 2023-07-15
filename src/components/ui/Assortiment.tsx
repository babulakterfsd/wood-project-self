import Image from "next/image";
import assortiment1 from "../../../public/assets/images/uassortiment1.png";
import assortiment2 from "../../../public/assets/images/uassortiment2.png";
import assortiment3 from "../../../public/assets/images/uassortiment3.png";
import assortiment4 from "../../../public/assets/images/uassortiment4.png";
import assortiment5 from "../../../public/assets/images/uassortiment5.png";
import assortiment6 from "../../../public/assets/images/uassortiment6.png";
import assortiment7 from "../../../public/assets/images/uassortiment7.png";
import assortiment8 from "../../../public/assets/images/uassortiment8.png";

import Styles from "../../styles/assortiment.module.css";

const Assortiment = () => {
  return (
    <section id="assortiment" className="bg-[#101211] text-white py-12 lg:py-20">
      <div className="main-container">
        <div className="heading-texts flex justify-center lg:justify-between lg:mb-12">
          <div className="text">
            <h2 className="font-futura text-[28px] lg:text-4xl lg:leading-[47px] tracking-[.55px] lg:tracking-[4.55px] uppercase text-center lg:text-left ">
              ONS ASSORTIMENT
            </h2>
            <p className="lg:mt-1 font-josefin text-[12px] lg:text-[17px] font-light leading-[20px] lg:leading-[28px] text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur. Netus amet amet dictum
              accumsan sed.
            </p>
          </div>
          {/* <div className="btn-container hidden lg:block">
            <button className="border-2 border-white lg:px-12 lg:py-4 font-josefin text-[.8rem] font-bold leading-[14.4px] tracking-[4.2px] uppercase">
              BEKIJK ALLES
            </button>
          </div> */}
        </div>
        <div className="assortiment-container grid grid-cols-12 gap-x-5 md:gap-x-14 lg:gap-x-6 gap-y-10 lg:gap-y-12 mt-8 lg:mt-0">
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment1}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold lg:leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              EIKENHOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment2}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              THERMO HOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment3}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              VUREN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment4}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              HARDHOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment5}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              SUAR
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment6}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              MAHONIE
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment7}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              BRAZILIAANS NOTEN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4 lg:col-span-3 flex items-center flex-col">
            <div className={Styles.container}>
              <Image
                src={assortiment8}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Planed Rough Beams Old oak
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
              IJZERWAREN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
              Een super belangrijk en moeilijk te verkrijgen soort hout.
            </p>
          </div>
        </div>
        {/* <div className="btn-container mt-10 lg:hidden">
            <button className="w-full border-2 border-white px-16 py-3 font-josefin font-bold text-[10px] leading-[14.4px] tracking-[4.2px] uppercase">
              BEKIJK ALLES
            </button>
          </div> */}
      </div>
    </section>
  );
};

export default Assortiment;
