import logo from "./logo.svg";
import "./App.css";
import Navbars from "./components/Navbars";
import Hero from "./components/Hero";
import Unit from "./components/Unit";
import Hubungi from "./components/Hubungi";
import Footer from "./components/Footer";
import Tentang from "./components/Tentang";

function App() {
  return (
    <div>
      <Navbars />
      <Hero />
      <Tentang />
      <Unit />
      <Hubungi />
      <Footer />
    </div>
  );
}

export default App;
