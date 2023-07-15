import Styles from '../../styles/getintouch.module.css';

const GetInTouch = () => {
  return (
    <section
      id="getintouch"
      className={`${Styles.getintouchbg} lg:h-96 py-24 lg:py-20`}
    >
      <div className="main-container flex justify-center items-center">
          {/* <h2 className="text-white text-center font-futura text-3xl lg:text-4xl leading-[38px] lg:leading-[47px] tracking-[4.55px] uppercase mb-3 lg:mb-2">
            GET IN TOUCH WITH US
          </h2> */}
          <p className="text-white text-center font-josefin text-[12px]  lg:text-[1.1rem] leading-[20px] lg:leading-[25px] lg:px-16 lg:mt-14">
          HoutTotaal is meer dan alleen een houthandelaar; het is een plaats waar kwaliteit, expertise en duurzaamheid samenkomen. Met een breed scala aan producten, waaronder eikenhout, thermohout, vurenhout en nog veel meer, bieden wij onze klanten alleen de beste houtsoorten aan. Onze toewijding aan uitstekende klantenservice en duurzame praktijken maken ons tot de ideale keus voor jouw houtbehoeften. Laat HoutTotaal je begeleiden bij het realiseren van al je houtprojecten.
          </p>
        </div>
    </section>
  );
};

export default GetInTouch;
