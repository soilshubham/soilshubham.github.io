import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        {/* <Projects /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
