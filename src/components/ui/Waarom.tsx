import Image from "next/image";
import play from "../../../public/assets/images/play.png";
import waarom from "../../../public/assets/images/warrom.png";

const Waarom = () => {
  return (
    <section id="waarom" className="bg-[#e9e6d6] lg:py-20">
      <div className="main-container">
        <h2 className="text-center text-chocolate font-futura lg:text-5xl lg;leading-[47px] tracking-[4.55px] uppercase lg:mb-7">
          WAAROM HOUTTOTAAL?
        </h2>
        <p className="text-text-chocolate text-center font-josefin text-[1.1rem] leading-[25px] lg:px-16 lg:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          auctor nunc non magna volutpat, quis commodo ligula convallis. In hac
          habitasse platea dictumst. Sed euismod, nisl id vehicula ultrices,
          metus est efficitur ligula, id aliquet justo nisi ut leo.
        </p>
        <div className="video-container flex justify-center items-center relative">
          <Image
            src={waarom}
            alt="Picture of the author"
            width={1076}
            height={576}
          />
          <Image
            src={play}
            alt="Picture of the author"
            width={50}
            height={50}
            className="absolute cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Waarom;
