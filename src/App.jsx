import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import Header from "./assets/components/header/Header";
import AboutUs from "./assets/components/aboutUs/AboutUs";
import Pricing from "./assets/components/pricing/Pricing";
import Values from "./assets/components/values/Values";
import Contact from "./assets/components/contact/contact";
import Footer from "./assets/components/footer/Footer";
function App() {
  const [changeLanguage, setChangeLanguage] = useState(true);
  return (
    <>
      <Navbar
        setChangeLanguage={setChangeLanguage}
        changeLanguage={changeLanguage}
      />
      <Header />
      <AboutUs />
      <Pricing lng={changeLanguage} />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
