'use client';

const Conctacteer = () => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Currently not available, This feature is under development !')
  }

  return (
    <section
      id="conctacteer"
      className="py-12 lg:py-20"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,1)15% , rgba(19,35,35,1) 70%, rgba(17,17,17,1))",
      }}
    >
      <div className="main-container">
        <h2 className="text-white text-center font-futura text-3xl lg:text-[4rem] uppercase mb-2.5 lg:mb-7" data-aos="fade-down"
            data-aos-duration="1000">
        CONCTACTEER ONS
        </h2>
        <p className="text-white text-center font-josefin text-[12px] lg:text-[1.1rem] font-light leading-[20px] lg:leading-[25px] lg:px-16 mb-8 lg:mb-24" data-aos="fade-down"
            data-aos-duration="500">
        We nodigen u uit om ons te contacteren voor al uw vragen of zorgen. Ons toegewijde team staat klaar om u te begeleiden en te ondersteunen.
        </p>
        <div className="contact-form-container lg:px-44">
          <form className="" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0 md:gap-x-4">
              <input
                type="text"
                name="fname"
                placeholder="Voornaam*"
                className="col-span-12 md:col-span-4 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px] autofill:bg-[rgba]"
                required
                style={{
                  border: "0px transparent",
                  borderBottom: "2px solid white",
                }}
              />
              <input
                type="text"
                name="lname"
                placeholder="Achternaam*"
                className="col-span-12 md:col-span-4 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px]"
                required
                style={{
                  border: "0px transparent",
                  borderBottom: "2px solid white",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Emailadres*"
                className="col-span-12 md:col-span-4 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px]"
                required
                style={{
                  border: "0px transparent",
                  borderBottom: "2px solid white",
                }}
              />
              <textarea
                name="message"
                placeholder="Bericht*"
                className="col-span-12 font-poppins focus:outline-none bg-transparent h-16 lg:h-24 text-white text-[14px] lg:mt-12"
                required
                style={{
                  border: "0px transparent",
                  borderBottom: "2px solid white",
                }}
              />
              <div className="btn-container mt-4 lg:mt-0 flex justify-end col-span-12">
                <button
                  type="submit"
                  className=" text-white font-font-josefin text-[12px] font-bold leading-[14.4px] tracking-[4.2px] uppercase lg:mt-14 border-2 border-white px-12 py-3 lg:py-4 w-full lg:w-[auto]"
                  onClick={handleSubmit}
                >
                  Verstuur
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Conctacteer;
