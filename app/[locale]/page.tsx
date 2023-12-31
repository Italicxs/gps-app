import Hero from '../components/Hero';
import AboutUs from '../components/home/AboutUs';
import Services from '../components/home/Services';
import HowWeWork from '../components/home/HowWeWork';
import WhoAre from '../components/home/WhoAre';
import HowWeHelp from '../components/home/HowWeHelp';
import WhyUs from '../components/home/WhyUs';
import Loader from '../components/Loader';

export default function IndexPage() {
  return (
    <>
    <Loader></Loader> 
         <main>
          <Hero></Hero>
          <div id='AboutUs'><AboutUs></AboutUs></div>
          <Services></Services>
          <HowWeWork></HowWeWork>
          <WhoAre></WhoAre>
          <HowWeHelp></HowWeHelp>
          <WhyUs></WhyUs>
          </main>
    </>
  )
}



    