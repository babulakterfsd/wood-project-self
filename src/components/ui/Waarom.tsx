'use client';
import VideoPlayer from "./VideoPlayer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Waarom = () => {
  return (
    <section id="waarom" className="bg-[#e9e6d6] py-14 lg:py-20">
      <div className="main-container">
        <h2 className="text-center text-chocolate font-futura text-3xl lg:text-5xl leading-[30px] lg:leading-[47px] tracking-[4.55px] uppercase mb-3 lg:mb-7" data-aos="fade-down"
            data-aos-duration="1000">
        WAAROM HOUTTOTAAL?
        </h2>
        <p className="text-chocolate text-center font-josefin  text-[12px] lg:text-[1.1rem] leading-[20px] lg:leading-[25px] lg:px-16 mb-5 lg:mb-16" data-aos="fade-down"
            data-aos-duration="1500">
        Onze uitgebreide duurzame voorraad betekent dat we bijna altijd kunnen voldoen aan uw behoeften. Met een breed scala aan producten, waaronder eikenhout voor de meubel industrie, hoveniers en trappenfabrieken, Thermische gemodificeerd Fraké voor oa gevelbekleding maar ook interieurs, Suar voor tafelbladen, hardhout voor onder andere terassen, kozijnen, steigers, bouwwerken en nog veel meer. Wij zijn flexibel en kunnen desgewenst ook machinale bewerkingen uitvoeren om uw maatwerk te leveren.
        Wij bieden wij onze klanten de beste houtsoorten aan voor een lage prijs. Onze toewijding en de mogelijkheden maken ons de ideale keus voor jouw houtbehoeften.
        </p>
        <div className="video-container flex justify-center items-center relative lg:ml-36" data-aos="fade-down"
            data-aos-duration="1000">
        <div className="container mx-auto p-2">
            <Swiper
                 spaceBetween={30}
                 pagination={{
                   clickable: true,
                 }}
                 modules={[Pagination]}
                 className="mySwiper"
            >
                <SwiperSlide>
                <VideoPlayer videoUrl="/1.mp4"/>
                </SwiperSlide>
                <SwiperSlide>
                <VideoPlayer videoUrl="/2.mp4"/>
                </SwiperSlide>
                <SwiperSlide>
                <VideoPlayer videoUrl="/3.mp4"/>
                </SwiperSlide>
                <SwiperSlide>
                <VideoPlayer videoUrl="/4.mp4"/>
                </SwiperSlide>
                <SwiperSlide>
                <VideoPlayer videoUrl="/5.mp4"/>
                </SwiperSlide>
                <SwiperSlide>
                <VideoPlayer videoUrl="/6.mp4"/>
                </SwiperSlide>
                <SwiperSlide>
                <VideoPlayer videoUrl="/7.mp4"/>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Waarom;
