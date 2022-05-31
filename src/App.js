import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
