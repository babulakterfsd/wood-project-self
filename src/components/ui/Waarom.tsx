import VideoPlayer from "./VideoPlayer";

const Waarom = () => {
  return (
    <section id="waarom" className="bg-[#e9e6d6] py-14 lg:py-20">
      <div className="main-container">
        <h2 className="text-center text-chocolate font-futura text-3xl lg:text-5xl leading-[30px] lg:leading-[47px] tracking-[4.55px] uppercase mb-3 lg:mb-7">
        WAAROM HOUTTOTAAL?
        </h2>
        <p className="text-chocolate text-center font-josefin  text-[12px] lg:text-[1.1rem] leading-[20px] lg:leading-[25px] lg:px-16 mb-5 lg:mb-16">
        Onze uitgebreide voorraad betekent dat we altijd kunnen voldoen aan uw behoeften, of u nu een kleine hoeveelheid hout nodig heeft voor een doe-het-zelf project of grote hoeveelheden voor een grootschalige onderneming.
        </p>
        <div className="video-container flex justify-center items-center relative">
          <VideoPlayer videoUrl="/wholesale.mp4" />
        </div>
      </div>
    </section>
  );
};

export default Waarom;
