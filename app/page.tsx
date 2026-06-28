import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Leistungen from "./components/Leistungen";
import Maschinen from "./components/Maschinen";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Leistungen />
      <Maschinen />
      <About />
      <Contact />
      <Footer />
    </>
  );
}