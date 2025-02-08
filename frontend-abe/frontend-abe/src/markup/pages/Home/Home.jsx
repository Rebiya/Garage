import About from "../../components/About/About";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Features from "../../components/Features/Features";
import Schedule from "../../components/Schedule/Schedule";
import Services from "../../components/Services/Services";
import VideoSection from "../../components/VideoBanner/VideoBanner";
const Home = () => {
  return (
    <>
      <VideoSection />
      <About />
      <Services />
      <Features />
      <ChooseUs />
      <Schedule />
    </>
  );
};

export default Home;
