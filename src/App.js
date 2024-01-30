import "./App.css";
import Hero from "./components/Hero";
import WebHosting from "./components/WebHosting";
import LemonWares from "./components/LemonWares";
import Footer from "./components/Footer";
import MakeWebsite from "./components/MakeWebsite";
import BackToTop from "./components/BackToTop";
import { Preloader } from "./components/Preloader";
import Aos from "aos";
import RealStories from "./components/RealStories";

function App() {
  Aos.init({
    once: true,
    disable: "mobile",
  });
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <BackToTop />
        <Hero />
        <WebHosting />
        <LemonWares />
        <RealStories />
        <MakeWebsite />
        <Footer />
      </div>
    </>
  );
}

export default App;
