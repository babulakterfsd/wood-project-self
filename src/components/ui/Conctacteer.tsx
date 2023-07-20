/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';

const Conctacteer = () => {
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [business_name, setBusinessName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [user_message, setuserMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let data = {
      first_name,
      last_name,
      email,
      business_name,
      phone_number,
      user_message,
      project_id: "ae61ba86-7953-4a24-8b35-24ee0d1e1e72"
    }

    const resetForm = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setBusinessName('');
      setPhoneNumber('');
      setuserMessage('');
    }

    fetch('https://7hw3mpqkx1.execute-api.eu-central-1.amazonaws.com/dev/prod/contact_form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setSuccessMessage('Je bericht werd verzonden! We komen zo snel mogelijk bij je terug');
        setShowResult(true);
        resetForm();
        setTimeout(() => {
          setShowResult(false);
          setSuccessMessage('');
          setErrorMessage('');
        }, 3000);
      })
      .catch((err) => {
        setErrorMessage('Er ging iets mis tijdens het indienen van je formulier. Probeer het later nog eens')
        setShowResult(true);
        setTimeout(() => {
              setShowResult(false);
              setErrorMessage('');
              setSuccessMessage('');
          }, 3000);
      })
    }

  return (
    <section
      id="conctacteer"
      className="py-12 lg:py-20"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,1)15% , rgba(19,35,35,1) 70%, rgba(17,17,17,1))",
        // background: '#000',
      }}>
      <div className="main-container">
        <h2
          className="text-white text-center font-futura text-3xl lg:text-[4rem] uppercase mb-2.5 lg:mb-7"
          data-aos="fade-down"
          data-aos-duration="1000">
          Contacteer ons
        </h2>
        <p
          className="text-white text-center font-josefin text-[12px] lg:text-[1.1rem] font-light leading-[20px] lg:leading-[25px] lg:px-16 mb-8 lg:mb-24"
          data-aos="fade-down"
          data-aos-duration="500">
          We nodigen u uit om ons te contacteren voor al uw vragen of zorgen.
          Ons toegewijde team staat klaar om u te begeleiden en te ondersteunen.
        </p>
        <div className="contact-form-container lg:px-44">
          <form
            onSubmit={handleSubmit}
            className="relative"
            data-aos="fade-up"
            data-aos-duration="1000">
            <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0 md:gap-x-4">
              <input
                type="text"
                name="first_name"
                placeholder="Voornaam*"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="col-span-12 md:col-span-4 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px] autofill:bg-[rgba]"
                required
                style={{
                  border: '0px transparent',
                  borderBottom: '2px solid white',
                }}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Achternaam*"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="col-span-12 md:col-span-4 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px]"
                required
                style={{
                  border: '0px transparent',
                  borderBottom: '2px solid white',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Emailadres*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-12 md:col-span-4 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px]"
                required
                style={{
                  border: '0px transparent',
                  borderBottom: '2px solid white',
                }}
              />
              <input
                type="text"
                name="business_name"
                placeholder="Bedrijf"
                value={business_name}
                onChange={(e) => setBusinessName(e.target.value)}
                className="col-span-12 md:col-span-6 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px] lg:mt-12"
                style={{
                  border: '0px transparent',
                  borderBottom: '2px solid white',
                }}
              />
              <input
                type="tel"
                name="phone_number"
                placeholder=" Telefoonnummer"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="col-span-12 md:col-span-6 font-poppins focus:outline-none bg-transparent h-10 text-white text-[14px] lg:mt-12"
                style={{
                  border: '0px transparent',
                  borderBottom: '2px solid white',
                }}
              />
              <textarea
                name="user_message"
                placeholder="Bericht*"
                value={user_message}
                onChange={(e) => setuserMessage(e.target.value)}
                className="col-span-12 font-poppins focus:outline-none bg-transparent h-16 lg:h-12 text-white text-[14px] lg:mt-16"
                required
                style={{
                  border: '0px transparent',
                  borderBottom: '2px solid white',
                }}
              />

              <div className="flex justify-end col-span-12 mt-4 btn-container lg:mt-0">
                <button
                  type="submit"
                  className=" text-white font-font-josefin text-[12px] font-bold leading-[14.4px] tracking-[4.2px] uppercase lg:mt-14 border-2 border-white px-12 py-3 lg:py-4 w-full lg:w-[auto]">
                  Verstuur
                </button>
              </div>
            </div>
          </form>
          {showResult ? (
                <div className="flex justify-center lg:justify-start items-center">
                  <div className="bg-[#e9e6d6] rounded-full px-6 cursor-auto mx-auto my-4 py-2 absolute mt-24 lg:mt-20 z-50 shadow-2xl`">
                    {successMessage ? (
                      <div className="flex gap-x-1 items-center justify-center">
                        <svg
                          className="h-5 w-5 text-green-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />{' '}
                          <circle cx="12" cy="12" r="9" />{' '}
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span className="text-green-600 font-semibold text-md text-center">
                          {' '}
                          {successMessage}
                        </span>
                      </div>
                    ) : (
                      <div className="flex gap-x-1 items-center justify-center">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {' '}
                          <path stroke="none" d="M0 0h24v24H0z" />{' '}
                          <circle cx="12" cy="12" r="9" />{' '}
                          <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                        <span className="text-red-600 font-semibold text-md text-center">
                          {' '}
                          {errorMessage}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
        </div>
      </div>
    </section>
  );
};

export default Conctacteer;
