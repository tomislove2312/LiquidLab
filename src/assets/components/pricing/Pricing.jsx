import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fewcoctails from "../../images/fewcoctails.svg";
// import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import "./pricing.css";

const tabs = [
  {
    label: "Bronze",
    title: [
      "Osam Koktela klasika",
      "Dvodnevna Edukacija ",
      "Troskovnik za Koktele",
    ],
    description: [
      "Nasi strucni koktel majstori pripremit ce za vas osam koktela po izboru. Od osvjezavajucih Mojita i Huga do klasicnog Martinija, svaki koktel ce biti pazljivo pripremljen s najkvalitetnijim sastojcima kako bi Vasi gosti dozivjeli pravu eksploziju okusa.",
      "Ovih cetiri sata edukacije su prilika da uronite u svijet kokteliranja. Nasi iskusni instruktori ce vas voditi kroz temeljne tehnike mijesanja, doziranja, dekoracije i price iza svakog koktela. Nakon ovih dvodnevnih radionica, osjecat cete se kao pravi profesionalac u pripremi koktela.",
      "Kao poklon od nas, dobit cete i troskovnik za koktele - neophodan alat za mijesanje i doziranje sastojaka. Troskovnik ce vam pomoci da postignete savrsene proporcije i estetski dojmljive koktele svaki put kad se upustite u kokteliranje.Cijena ovog paketa je 600 eura. Nas cilj je osigurati da vasi gosti odu s osmijehom na licu.Za rezervacije i dodatne informacije, slobodno nas kontaktirajte.Prigrlite svijet koktela s Liquidlab-om.",
    ],
  },
  {
    label: "Silver",
    title: [
      "8-12 Koktela",
      "Tematski izgled koktel karte",
      "Dvodnevna edukacija ",
      "Troskovnik za Koktele",
    ],
    description: [
      "Prilagodite svoj izbor koktela, birajuci izmedu klasicnih omiljenih i nasih potpisnih kreacija. Nasi profesionalni barmeni ce ih pripremiti za vas ravno iz laboratorija.",
      "Vas bar ili restoran nema izrazenu tematiku? Nema problema,mi smo tu da smiksamo savrsenu formulu za tematiku kroz izgled koktel karte.",
      "Ovladajte umjetnoscu pravljenja koktela sa nasim iskusnim instruktorima. Tokom ovih interaktivnih i zabavnih sesija, naucit cete osnove koktel mjesanja, tehniku posluzivanja i tajne savrsenih koktela. Od klasicnih Martini-a do nasih jedinstvenih potpisnih koktela, postat cete majstor koktela!",
      "Da biste vase koktel iskustvo ucinili potpunim, u paketu dolazi i troskovnik za koktele.Cijena ovog paketa je 950 eura. Nas cilj je osigurati da vasi gosti odu s osmijehom na licu.Za rezervacije i dodatne informacije, slobodno nas kontaktirajte. Prigrlite svijet koktela s Liquidlab-om.",
    ],
  },
  {
    label: "Gold ",
    title: [
      "4 Klasicna Koktela i 8 tematskih",
      "Mocktails",
      "Dvodnevna edukacija ",
      "Troskovnik",
      "Support Tjedan",
      "Social Media",
    ],
    description: [
      "Nasi strucni koktel majstori pripremit ce za vas osam koktela po vlastitom izboru kako bi tematika vaseg bara bila sto izrazenija.Uz to dobijate cetiri klasicna koktela poput Long islanda,Espresso martinia ili sve vise rastucih Pornstar martinia ili Limoncello Spritza",
      "Jedan od najbrze rastucih trendova u zadnje vrijeme su i bezalkoholni kokteli/mockatilas.Kao poklon uz klasicne i tematske koktele dobivate i dva bezalkoholna u kojima djeca ali i sve vise mladih uzivaju...Uz nestvarnu marzu i savrsen okus bezalkoholni kokteli mogu biti savrsena investicija za vas bar.",
      "Duboko zaronite u svijet koktela s nasim strucnjacima. Naucite kako pripremiti, posluziti i impresionirati svoje goste.",
      "Dajemo vam detaljan troskovnik za svaki koktel i komponentu paketa kako biste lakse upravljali troskovima.",
      "Nakon sto zavrsite nas program, osigurat cemo vam tjedan dana besplatne podrske kako bismo rijesili sve vase nedoumice i odgovorili na pitanja.",
      "Uz tjedan supporta ulazi i social media promidzba vaseg bara putem naseg Instagram profila.Uz nas sadrzajni profil i sve vise pratitelja iz svijeta ugostiteljstva prosiriti cemo krug vasih potencijalnih novih gostiju uz svakodnevnu promociju vaseg bara smisljenu na nas nacin.Cijena ovog paketa je 1600 eura. Nas cilj je osigurati da vasi gosti odu s osmijehom na licu.Za rezervacije i dodatne informacije, slobodno nas kontaktirajte.Prigrlite svijet koktela s Liquidlab-om.",
    ],
  },
  {
    label: "Diamond ",
    title: [
      "8 Tematskih Koktela i 4 Klasika",
      "Mocktails",
      "Dvodnevna edukacija ",
      "Troskovnik za koktele",
      "Support Tjedan",
      "Social Media",
      "Event",
      "LL Diamond Special",
    ],
    description: [
      "Nasi strucni koktel majstori pripremit ce za vas osam koktela po vlastitom izboru kako bi tematika vaseg bara bila sto izrazenija.Uz to dobijate cetiri klasicna koktela poput Long islanda,Espresso martinia ili sve vise rastucih Pornstar martinia ili Limoncello Spritza",
      "Jedan od najbrze rastucih trendova u zadnje vrijeme su i bezalkoholni kokteli/mockatilas.Kao poklon uz klasicne i tematske koktele dobijate i dva bezalkoholna u kojima djeca ali i sve vise mladih uzivaju...Uz nestvarnu marzu i savrsen okus bezalkoholni kokteli mogu biti savrsena investicija za vas bar.",
      "Ovih cetiri sata edukacije su prilika da se uronite u svijet kokteliranja. Nasi iskusni instruktori ce vas voditi kroz temeljne tehnike mijesanja, doziranja, dekoracije i price iza svakog koktela. Nakon ovih dvodnevnih radionica, osjecat cete se kao pravi profesionalac u pripremi koktela.",
      "Kao poklon od nas, dobit cete i troskovnik za koktele - neophodan alat za mijesanje i doziranje sastojaka. Troskovnik ce vam pomoci da postignete savršene proporcije i estetski dojmljive koktele svaki put kad se upustite u kokteliranje.",
      "Nakon sto zavrsite nas program, osigurat cemo vam tjedan dana besplatne podrske kako bismo rijesili sve vase nedoumice i odgovorili na pitanja uz ukljucenu svakodnevnu promociju na drustvenim mrezama.",
      "Uz tjedan supporta ulazi i social media promidzba vaseg bara putem naseg Instagram profila.Uz nas sadrzajni profil i sve vise pratitelja iz svijeta ugostiteljstva prosiriti cemo krug vasih potencijalnih novih gostiju uz svakodnevnu promociju vaseg bara smisljenu na nas nacin.",
      "Na kraju Support Tjedna uz svakodnevnu promociju organiziramo samo za vas specijalnu event vecer gdje cemo zajedno kusati sve sto je iz naseg laboratorija dospjelo na vasu koktel kartu, uz naravno par iznenadenja.",
      "Slutimo da bi Aperol Spritz mogao dobiti opasnu konkurenciju u vidu naseg LL Wine Spritza.Otkrijmo zajedno o cemu se radi,a mi vam dajemo cetiri boce LL Wine uz 8 LL casa,uz naravno promociju pica na specijalnom eventu kojeg mi organiziramo samo za vas.Cijena ovog paketa je 6000 eura. Nas cilj je osigurati da vasi gosti odu s osmijehom na licu.Za rezervacije i dodatne informacije, slobodno nas kontaktirajte.",
    ],
  },
];

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [readMoreBronze, setReadMoreBronze] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  function showMoreHandler(index) {
    let newArray = readMoreBronze.map((item, i) =>
      i === index ? !item : item
    );
    setReadMoreBronze(newArray);
  }

  return (
    <div className="window">
      <div className="fewcoctails_wrapper">
        <div className="fewcoctails">
          <img src={fewcoctails} alt="cocktails" />
        </div>
        <h2>Our Packages</h2>
      </div>

      <nav>
        <ul>
          {tabs.map((item, index) => (
            <li
              key={index}
              className={
                item === selectedTab
                  ? `${item.label.toLowerCase()} package_titles tier_list`
                  : "tier_list"
              }
              onClick={() => setSelectedTab(item)}
            >
              {` ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              //   backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
            }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              duration: 0.2,
              //   backgroundColor: { repeat: Infinity },
            }}
          >
            <ol>
              {selectedTab.title.map((item, i) => (
                <li
                  onClick={() => showMoreHandler(i)}
                  className="list_tier_description"
                  key={i}
                >
                  <h3 className="title_description">
                    {item}
                    {"   "}
                    {readMoreBronze[i] ? (
                      <FontAwesomeIcon
                        className="caret_up"
                        icon="fa-duotone fa-caret-up"
                        style={{
                          "--fa-primary-color": "#57659e",
                          "--fa-secondary-color": "#57659e",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="fa-duotone fa-caret-down"
                        style={{
                          "--fa-primary-color": "#77579e",
                          "--fa-secondary-color": "#77579e",
                          "--fa-secondary-opacity": "0.7",
                        }}
                      />
                    )}
                  </h3>
                  <p className="more_title_description">
                    {readMoreBronze[i] ? selectedTab.description[i] : ""}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Pricing;
