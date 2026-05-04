import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Catalog from "./components/Catalog";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Catalog/>
      <h1 className="text-center mt-5">Landing en proceso 🚀</h1>
    </>
  );
}

export default App;