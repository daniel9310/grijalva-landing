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
      <h1 className="text-center mt-5" color="red">Landing en proceso 🚀</h1>
      <Hero/>
      <Services/>
      <Catalog/>
      <Contact/>
      <WhatsAppButton/>
    </>
  );
}

export default App;