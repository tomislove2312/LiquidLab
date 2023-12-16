import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import Header from "./assets/components/header/Header";
import AboutUs from "./assets/components/aboutUs/aboutUs";
import Pricing from "./assets/components/pricing/Pricing";
import Values from "./assets/components/values/Values";
import Contact from "./assets/components/contact/contact";
import Footer from "./assets/components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Pricing />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
