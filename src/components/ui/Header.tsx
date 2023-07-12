import Styles from "../../styles/header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section id="header" className={`${Styles.headerbg} h-screen`}>
      <div className="bg-[#121617] lg:h-11 flex justify-center  items-center">
        <p className="text-[.8rem] font-bold leading-3 tracking-[4.2px] uppercase text-white font-josefin">
          VANDAAG GRATIS LEVERING IN MADAGASCAR!
        </p>
      </div>
      <div className="main-container">
        <Navbar />
        <div className="headertextcontainer h-[75vh] flex justify-center items-center">
          <div className="text-container bg-[rgba(0,0,0,.40)] pb-8 lg:px-36">
            <h1 className="text-white text-center font-futura lg:text-[4rem] leading-[147px] uppercase">
              HOUTHANDEL
            </h1>
            <p className="mt-5 text-white text-center font-josefin text-[1.2rem] font-[100] leading-[25px]">
              Oak - Thermally modified Fraké - hardwood - decking - scaffolding
              wood - Suar
            </p>
            <div className="text-center">
              <button className="mt-12 bg-[#FBC700] text-chocolate font-josefin text-[12px] font-bold leading-[14.4px] tracking-[4.2px] uppercase px-12 py-4">
                View Assortiment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
