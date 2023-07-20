import Image from "next/image";
import assortiment1 from "../../../public/assets/images/uassortiment1.png";
import assortiment2 from "../../../public/assets/images/uassortiment2.png";
import assortiment3 from "../../../public/assets/images/uassortiment3.png";
import assortiment4 from "../../../public/assets/images/uassortiment4.png";
import assortiment5 from "../../../public/assets/images/uassortiment5.png";
import assortiment6 from "../../../public/assets/images/uassortiment6.png";
import assortiment7 from "../../../public/assets/images/uassortiment7.png";
import assortiment8 from "../../../public/assets/images/uassortiment8.png";
import assortiment9 from "../../../public/assets/images/uassortiment9.png";

import Styles from "../../styles/assortiment.module.css";

const Assortiment = () => {
  return (
    <section id="assortiment" className="text-white py-12 lg:py-20" style={{background: 'linear-gradient(180deg, #131313 0%, #162225 48.96%, #131313 100%)'}}>
      <div className="main-container">
        <div className="heading-texts flex justify-center lg:justify-between lg:mb-12">
          <div className="text lg:ml-8">
            <h2 className="font-futura text-[28px] lg:text-4xl lg:leading-[47px] tracking-[.55px] lg:tracking-[4.55px] uppercase text-center lg:text-left" data-aos="fade-down"
            data-aos-duration="1000">
            ONS ASSORTIMENT
            </h2>
            <p className="lg:mt-1 font-josefin text-[12px] lg:text-[17px] font-light leading-[20px] lg:leading-[28px] text-center lg:text-left" data-aos="fade-down"
            data-aos-duration="500">
            Ontdek de wereld van hout door ons uitgebreide assortiment.
            </p>
          </div>
          {/* <div className="btn-container hidden lg:block">
            <button className="border-2 border-white lg:px-12 lg:py-4 font-josefin text-[.8rem] font-bold leading-[14.4px] tracking-[4.2px] uppercase">
              BEKIJK ALLES
            </button>
          </div> */}
        </div>
        <div className="assortiment-container grid grid-cols-12 gap-x-5 md:gap-x-14 lg:gap-x-6 gap-y-10 lg:gap-y-12 mt-8 lg:mt-0">
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment1}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                GESCHAAFD RUW BALKEN OUD EIKEN
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold lg:leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            EIKENHOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Ons Eikenhout, met zijn opmerkelijke sterkte en schoonheid, vormt een tijdloze basis voor elke creatie.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment2}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                FRAKE VUREN
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            THERMO HOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Ontdek de unieke eigenschappen van ons Thermohout, waaronder het prachtige Frake en Vuren, ideaal voor duurzame en resistente projecten.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment3}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                STEIGERHOUT BOUWHOUT
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            VUREN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Ons Vurenhout, inclusief veelzijdig Steigerhout en Bouwhout, is de perfecte keuze voor constructies en designelementen.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment4}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                KOZIJNHOUT DIVERSE HARDHOUTSOORTEN
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            HARDHOUT
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Van robuust kozijnhout tot diverse hardhoutsoorten, ons Hardhout assortiment is ideaal voor die duurzame bouwprojecten.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment5}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                {/* Planed Rough Beams Old oak */}
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            SUAR
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Suar, met zijn opvallende graantextuur en duurzaamheid, biedt een unieke en rustieke touch aan elk meubelstuk.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment6}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                {/* Planed Rough Beams Old oak */}
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            MAHONIE
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Mahonie, met zijn prominente korrel en luxueuze uitstraling, tilt elk houtproject naar een hoger esthetisch niveau.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment7}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                {/* Planed Rough Beams Old oak */}
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            BRAZILIAANS NOTEN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Braziliaanse noten, met hun exotische look en extreme hardheid, zijn perfect voor het maken van meubels die opvallen.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment8}
                alt="assortiment1"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                SCHROEVEN BEUGELS SLOTBOUTEN
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            IJZERWAREN
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Maak uw project compleet met ons assortiment aan betrouwbare ijzerwaren, van stevige schroeven tot duurzame beugels en slotbouten.
            </p>
          </div>
          <div className="assortiment col-span-6 md:col-span-4  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className={Styles.container}>
              <Image
                src={assortiment9}
                alt="assortiment9"
                className={`${Styles.cardImage} lg:w-[290px] lg:h-[201px] lg:mb-5`}
              />
              <p
                className={`${Styles.overlayText} text-[#DDD] text-center font-josefin text-xs lg:text-[.9rem] font-bold leading-[20px] lg:leading-[28px] lg:tracking-[.07px] uppercase`}
              >
                Punto Palapa Parasol Plumas palapa
              </p>
            </div>
            <h6 className="text-[#DDD] text-center font-josefin font-bold leading-[25px] tracking-[.06px] lg:tracking-[.08px] mt-4 lg:mt-0">
            Parasols
            </h6>
            <p className="text-[#838381] text-center font-josefin text-[10px] md:text-[11.5px] lg:text-[.9rem] leading-[15px] lg:leading-[20px] tracking-[.05px] lg:tracking-[.07px]">
            Geniet koel en comfortabel van de zomer met onze duurzame parasols.
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
