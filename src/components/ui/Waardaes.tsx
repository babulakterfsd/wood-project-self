import Image from "next/image";
import waardaes1 from "../../../public/assets/images/waardaes1.png";
import waardaes2 from "../../../public/assets/images/waardaes2.png";
import waardaes3 from "../../../public/assets/images/waardaes3.png";
import waardaes4 from "../../../public/assets/images/waardaes4.png";
import waardaes5 from "../../../public/assets/images/waardaes5.png";
import waardaes6 from "../../../public/assets/images/waardaes6.png";

const Waardaes = () => {
  return (
    <section id="waardaes" className="bg-[#e9e6d6] lg:py-20">
      <div className="main-container">
        <h2 className="text-center text-chocolate font-futura lg:text-[4rem] font-normal uppercase lg:mb-4">
          ONZE WAARDAES
        </h2>
        <p className="text-center text-chocolate font-josefin text-[1.1rem] font-light leading-[25px] lg:mb-14 lg:px-16">
          We believe that every space has its own unique personality, and what
          better way to enhance it than with custom-made planks? We are your
          go-to destination for high-quality, customizable planks that add
          warmth, elegance, and character to any environment.
        </p>
        <div className="waardaes-container grid grid-cols-12 lg:gap-x-20 lg:gap-y-16">
          <div className="waardae col-span-12 lg:col-span-4 flex items-center flex-col">
            <div className="icon h-16 w-16 bg-[#4d3525] rounded-full flex justify-center items-center lg:mb-9">
              <Image
                src={waardaes1}
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-2xl uppercase tracking-[.25px] lg:mb-1">
              Premium KWALITEIT
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.9rem] font-normal leading-[25px] tracking-[.07px]">
              We take pride in sourcing the finest quality wood from sustainable
              forests. Our planks are crafted with precision and undergo
              rigorous quality checks to ensure they meet the highest standards.
            </p>
          </div>
          <div className="waardae col-span-12 lg:col-span-4 flex items-center flex-col">
            <div className="icon h-16 w-16 bg-[#4d3525] rounded-full flex justify-center items-center lg:mb-9">
              <Image
                src={waardaes2}
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-2xl uppercase tracking-[.25px] lg:mb-1">
              VEEL UIT VOORRAAD LEVERBAAR
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.9rem] font-normal leading-[25px] tracking-[.07px]">
              We understand that every project is unique, and that's why we
              offer a wide range of customization options. From selecting the
              wood species and finish to choosing the dimensions and edge
              profiles.
            </p>
          </div>
          <div className="waardae col-span-12 lg:col-span-4 flex  items-center flex-col">
            <div className="icon h-16 w-16 bg-[#4d3525] rounded-full flex justify-center items-center lg:mb-9">
              <Image
                src={waardaes3}
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-2xl uppercase tracking-[.25px] lg:mb-1">
              Afhalen of voordelig bezorgen
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.9rem] font-normal leading-[25px] tracking-[.07px]">
              Our planks are incredibly versatile and can be used in various
              applications. Whether you're looking to create stunning hardwood
              floors, accent walls, furniture pieces, or any other woodworking
              project.
            </p>
          </div>
          <div className="waardae col-span-12 lg:col-span-4 flex  items-center flex-col">
            <div className="icon h-16 w-16 bg-[#4d3525] rounded-full flex justify-center items-center lg:mb-9">
              <Image
                src={waardaes4}
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-2xl uppercase tracking-[.25px] lg:mb-1">
              Deskundig advies en begeleiding
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.9rem] font-normal leading-[25px] tracking-[.07px]">
              At Wood Works, we prioritize customer satisfaction above all else.
              Our knowledgeable and friendly team is here to assist you every
              step of the way.
            </p>
          </div>
          <div className="waardae col-span-12 lg:col-span-4 flex  items-center flex-col">
            <div className="icon h-16 w-16 bg-[#4d3525] rounded-full flex justify-center items-center lg:mb-9">
              <Image
                src={waardaes5}
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-2xl uppercase tracking-[.25px] lg:mb-1">
              Duurzaam en verantwoord hout
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.9rem] font-normal leading-[25px] tracking-[.07px]">
              We understand the importance of environmental responsibility.
              That's why we are dedicated to sustainable practices throughout
              our operations.
            </p>
          </div>
          <div className="waardae col-span-12 lg:col-span-4 flex  items-center flex-col">
            <div className="icon h-16 w-16 bg-[#4d3525] rounded-full flex justify-center items-center lg:mb-9">
              <Image
                src={waardaes6}
                alt="Picture of the author"
                width={35}
                height={35}
              />
            </div>
            <h5 className="text-[#0A0019] text-center font-futura text-2xl uppercase tracking-[.25px] lg:mb-1">
              Competitive Pricing
            </h5>
            <p className="text-center text-[#838381] font-josefin text-[.9rem] font-normal leading-[25px] tracking-[.07px]">
              We believe that quality craftsmanship shouldn't come with an
              exorbitant price tag. Our planks are competitively priced,
              offering you exceptional value for your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waardaes;
