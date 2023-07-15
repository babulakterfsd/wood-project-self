import Styles from '../../styles/getintouch.module.css';

const GetInTouch = () => {
  return (
    <section
      id="getintouch"
      className={`${Styles.getintouchbg} lg:h-96 py-24 lg:py-20`}
    >
      <div className="main-container">
        <div className="container">
          <h2 className="text-white text-center font-futura text-3xl lg:text-4xl leading-[38px] lg:leading-[47px] tracking-[4.55px] uppercase mb-3 lg:mb-2">
            GET IN TOUCH WITH US
          </h2>
          <p className="text-white text-center font-josefin text-[12px] lg:text-[1.1rem] leading-[20px] lg:leading-[25px] lg:px-16">
            Of je nu een huiseigenaar bent die aan een renovatieproject begint,
            of een interieurontwerper die aan een commerciële ruimte werkt, Wood
            Works heeft de perfecte planken om je ontwerp te verbeteren. Verken
            onze brede selectie, laat je inspireren door onze galerij met
            voltooide projecten en begin met het creëren van de ruimte van je
            dromen. <br /> Neem vandaag nog contact met ons op om je wensen te
            bespreken of bezoek onze showroom om de schoonheid en vakmanschap
            van onze planken uit de eerste hand te ervaren. Bij Wood Works zijn
            we gepassioneerd over houtbewerking, en we kunnen niet wachten om je
            te helpen je visie te realiseren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
