import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Catalog/>
      <Contact/>
      <WhatsAppButton/>
    </>
  );
}

export default App;