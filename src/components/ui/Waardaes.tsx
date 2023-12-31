import Image from "next/image";
import waardaes1 from "../../../public/assets/images/waardaes1.png";
import waardaes2 from "../../../public/assets/images/waardaes2.png";
import waardaes3 from "../../../public/assets/images/waardaes3.png";
import waardaes4 from "../../../public/assets/images/waardaes4.png";

const Waardaes = () => {
  return (
    <section id="waardaes" className="bg-[#e9e6d6] py-16 lg:py-20">
      <div className="main-container">
        <h2 className="text-center text-chocolate font-futura text-3xl lg:text-[4rem] font-normal uppercase mb-2.5 lg:mb-4" data-aos="fade-down"
            data-aos-duration="1000">
          ONZE WAARDES
        </h2>
        <p className="text-center text-chocolate font-josefin text-[12px] lg:text-[1.1rem] font-light ledaing-[20px] lg leading-[15px]:lg:leading-[25px] mb-7 lg:mb-14 md:px-8 lg:px-16" data-aos="fade-down"
            data-aos-duration="500">
        Wij zijn een one-stop-shop voor zowel professionals als doe-het-zelvers. Elk stuk hout wordt geïnspecteerd op basis van strenge kwaliteitsnormen. Duurzaam en ethisch verantwoord geproduceerd hout is onze trots.
        </p>
        <div className="waardaes-container grid grid-cols-12 gap-x-4 md:gap-x-14 lg:gap-x-20 gap-y-10 lg:gap-y-16">
          {/* waardaes 1 */}
          <div className="waardae col-span-12 md:col-span-6  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className="icon h-11 lg:h-16 w-11 lg:w-16 bg-[#4d3525] rounded-full flex justify-center items-center mb-2 lg:mb-9">
              <Image
                src={waardaes1}
                alt="Picture of the author"
               className="h-5 lg:h-9 w-5 lg:w-9"
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-[1.1rem] lg:text-2xl uppercase tracking-[.18px] lg:tracking-[.25px] mb-1.5 lg:mb-1">
            PROFESSIONAL EN PARTICULIER
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.7rem] md:text-[13px] lg:text-[.9rem] font-normal leading-[15px] lg:leading-[25px] tracking-[.05px] lg:tracking-[.07px]">
            Bouwprofessional, hovenier of een enthousiaste doe-het-zelver? Bij ons bent u altijd welkom, ongeacht de schaal van uw project.
            </p>
          </div>
          {/* waardaes 2 */}
          <div className="waardae col-span-12 md:col-span-6  flex items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className="icon h-11 lg:h-16 w-11 lg:w-16 bg-[#4d3525] rounded-full flex justify-center items-center mb-2 lg:mb-9">
              <Image
                src={waardaes2}
                alt="Picture of the author"
               className="h-5 lg:h-9 w-5 lg:w-9"
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-[1.1rem] lg:text-2xl uppercase tracking-[.18px] lg:tracking-[.25px] mb-1.5 lg:mb-1">
            VEEL UIT VOORRAAD LEVERBAAR
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.7rem] md:text-[13px] lg:text-[.9rem] font-normal leading-[15px] lg:leading-[25px] tracking-[.05px] lg:tracking-[.07px]">
            Tijd is geld. Daarom houden we een uitgebreide voorraad van onze houtproducten klaar om te kunnen voldoen aan de vraag van onze klanten. Van kleine orders tot grootschalige projecten!
            </p>
          </div>
          {/* waardaes 3 */}
          <div className="waardae col-span-12 md:col-span-6  flex  items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className="icon h-11 lg:h-16 w-11 lg:w-16 bg-[#4d3525] rounded-full flex justify-center items-center mb-2 lg:mb-9">
              <Image
                src={waardaes3}
                alt="Picture of the author"
               className="h-5 lg:h-9 w-5 lg:w-9"
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-[1.1rem] lg:text-2xl uppercase tracking-[.18px] lg:tracking-[.25px] mb-1.5 lg:mb-1">
            AFHALEN OF VOORDELIG BEZORGEN
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.7rem] md:text-[13px] lg:text-[.9rem] font-normal leading-[15px] lg:leading-[25px] tracking-[.05px] lg:tracking-[.07px]">
            Flexibiliteit in bezorging is voor u een must. Daarom bieden wij u de mogelijkheid om uw bestelling af te halen of deze voordelig bij u op locatie te laten bezorgen. Efficiënt en zonder gedoe.
            </p>
          </div>
          {/* waardaes 4 */}
          <div className="waardae col-span-12 md:col-span-6  flex  items-center flex-col" data-aos="fade-up"
            data-aos-duration="500">
            <div className="icon h-11 lg:h-16 w-11 lg:w-16 bg-[#4d3525] rounded-full flex justify-center items-center mb-2 lg:mb-9">
              <Image
                src={waardaes4}
                alt="Picture of the author"
               className="h-5 lg:h-9 w-5 lg:w-9"
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-[1.1rem] lg:text-2xl uppercase tracking-[.18px] lg:tracking-[.25px] mb-1.5 lg:mb-1">
            DUURZAAM EN VERANTWOORD HOUT
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.7rem] md:text-[13px] lg:text-[.9rem] font-normal leading-[15px] lg:leading-[25px] tracking-[.05px] lg:tracking-[.07px]">
            Bij ons staat duurzaamheid centraal. Dit betekent dat elk stuk hout dat wij verkopen, wordt gekapt met respect voor onze planeet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waardaes;
