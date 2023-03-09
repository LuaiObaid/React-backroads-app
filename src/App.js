import { Footer } from "./component/Footer";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Navbar";
import { Services } from "./component/Services";
import { Tour } from "./component/Tour";
import { About } from "./component/About";

function App() {
  /*to select all that has the same name ctrl shift and l */
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
    </>
  );
}

export default App;
