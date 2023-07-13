import Assortiment from '@/components/ui/Assortiment';
import Conctacteer from '@/components/ui/Conctacteer';
import Footer from '@/components/ui/Footer';
import GetInTouch from '@/components/ui/GetInTouch';
import Header from '@/components/ui/Header';
import Waardaes from '@/components/ui/Waardaes';
import Waarom from '@/components/ui/Waarom';

export default function Home() {
  return (
    <>
      <Header />
      <Waardaes />
      <Assortiment />
      <Waarom />
      <Conctacteer />
      <GetInTouch />
      <Footer />
    </>
  );
}
