import Footer2 from '@/components/ui/Footer2';
import Navbar3 from '@/components/ui/Navbar3';
import React from 'react';

const Privacy = () => {

  return (
    <section id='terms' className='bg-[#e9e6d6]'>
       <div className='bg-[#4D3525] h-[45px] flex justify-center items-center relative'>
         <h4 className='text-white text-[.75rem] font-josefin font-bold leading-[14.2px] tracking-[4.2px] uppercase text-center'>VANDAAG GRATIS LEVERING IN MADAGASCAR!</h4>
       </div>
        <Navbar3/>
        <div className="main-container pt-36 pb-24 lg:py-32">
          <h1 className='text-chocolate text-center font-futura lg:text-[4rem] lg:leading-[147px] uppercase'>PRIVACYBELEID</h1>
          <div className="flex justify-center">
          <hr className='w-[50%] h-1 bg-[#1E0C06] lg:-mt-4' />
          </div>
          <p className='text-[#838381] font-josefin text-[.87rem] lg:leading-[25px] tracking-[.07px] mt-6 lg:mt-20'>PRIVACYBELEID HOUTTOTAAL.NL</p>
          {/* term 1 */}
          <div className='mt-14'>
            <h3 className='text-[#0A0019] font-futura lg:text-[1.56rem] tracking-[.25px] uppercase'>1. INLEIDING</h3>
            <p className='text-[#838381] font-josefin text-[.88rem] leading-[25px] tracking-[.07px] mt-1'>Deze privacyverklaring is van toepassing op alle persoonsgegevens die HoutTotaal.nl (verder: "wij") verwerkt van iedereen die gebruik maakt van onze diensten of products, zowel bedrijfseigenaren als individuele kopers.
            </p>
          </div>
          {/* term 2 */}
          <div className='mt-14'>
            <h3 className='text-[#0A0019] font-futura lg:text-[1.56rem] tracking-[.25px] uppercase'>2. DE VERZAMELDE GEGEVENS </h3>
            <p className='text-[#838381] font-josefin text-[.88rem] leading-[25px] tracking-[.07px] mt-1'>Wij verzamelen, conform de GDPR en de Nederlandse privacywetten, de volgende persoonsgegevens via ons contactformulier: - Voor- en achternaam - E-mailadres - Telefoonnummer (optioneel) - Bedrijfsnaam (optioneel) - Bericht
            </p>
          </div>
          {/* term 3 */}
          <div className='mt-14'>
            <h3 className='text-[#0A0019] font-futura lg:text-[1.56rem] tracking-[.25px] uppercase'>3. HOE GEBRUIKEN WIJ UW GEGEVENS</h3>
            <p className='text-[#838381] font-josefin text-[.88rem] leading-[25px] tracking-[.07px] mt-1'>De gegevens worden gebruikt om uw aanvraag of aankoop te verwerken, en om u te informeren over relevante producten en diensten. Het telefoonnummer wordt enkel gebruikt in het geval van eventuele problemen betreffende uw aanvraag of aankoop.
            </p>
          </div>
          {/* term 4 */}
          <div className='mt-14'>
            <h3 className='text-[#0A0019] font-futura lg:text-[1.56rem] tracking-[.25px] uppercase'>4. HOE BESCHERMEN WIJ UW GEGEVENS</h3>
            <p className='text-[#838381] font-josefin text-[.88rem] leading-[25px] tracking-[.07px] mt-1'>Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens die wij bewaren te beschermen tegen ongeautoriseerde toegang, ongeautoriseerd gebruik, en tegen vernietiging, verlies of toevallige wijziging
            </p>
          </div>
          {/* term 5 */}
          <div className='mt-14'>
            <h3 className='text-[#0A0019] font-futura lg:text-[1.56rem] tracking-[.25px] uppercase'>5. DE RECHTEN VAN DE GEBRUIKER</h3>
            <p className='text-[#838381] font-josefin text-[.88rem] leading-[25px] tracking-[.07px] mt-1'>In overeenstemming met de GDPR en de Nederlandse privacywetten, heeft u het recht om toegang te vragen tot uw persoonsgegevens, deze te rectificeren, te wissen of gebruik van uw gegevens te beperken. Verder heeft u het recht om bezwaar te maken tegen het verwerken van uw gegevens. U kunt ons op elk moment vragen om uw gegevens over te dragen of kunt uw toestemming voor de verwerking van uw persoonsgegevens intrekken.
            </p>
          </div>
          {/* term 6 */}
          <div className='mt-14'>
            <h3 className='text-[#0A0019] font-futura lg:text-[1.56rem] tracking-[.25px] uppercase'>6. WIJZIGINGEN PRIVACYBELEID</h3>
            <p className='text-[#838381] font-josefin text-[.88rem] leading-[25px] tracking-[.07px] mt-1'>Wij behouden ons het recht voor om wijzigingen aan te brengen in deze privacyverklaring. Wanneer er belangrijke wijzigingen zijn, zullen we u hierover duidelijk en op tijd informeren. <br /> <br /> Als u vragen of opmerkingen heeft over hoe wij omgaan met uw privacy, neem dan contact met ons op via het contactformulier op onze website.
            </p>
          </div>
        </div>
        <Footer2/>
    </section>
  );
};

export default Privacy;
