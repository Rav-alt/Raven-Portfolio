import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
