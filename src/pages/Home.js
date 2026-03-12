// import Footer from "../components/Footer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SlideImage from "../components/SlideImage";
import AboutTCF from "../homeSections/AboutTCF";
import Organiser from "../homeSections/Organizer";
import Vsion from "../homeSections/Vision";
import WhyTCF from "../homeSections/WhyTCF";

function Home() {
  return (
    <div>
      <Navbar/>
      <SlideImage/>
      
      <Vsion/>
      <WhyTCF/>
      <AboutTCF/>
      <Organiser/>
      <Footer/>
    </div>
  );
}

export default Home;