import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Project />
    </div>
  );
};

export default App;
