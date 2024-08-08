import React, { useEffect, useState } from "react";
import "./LandingForm.css";
import gif from "../../multimedia/gif.gif";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Registro from "../../componentes/Registro/Registro";
import Registro2 from "../../componentes/Registro/Registro2";
import fondo from "../../multimedia/fondo.jpg";
import click from "../../multimedia/click.svg";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import ClientContainer from "../../componentes/ClientContainer/ClientContainer";
import BenefitsContainer from "../../componentes/BenefitsContainer/BenefitsContainer";
import TextAndImage from "../../componentes/TextAndImg/TextAndImg";
import { motion } from "framer-motion";
import WhatsAppButton from "../../componentes/Whatsapp/WhatsappButton";
import { useHistory } from "react-router-dom";
import YoutubeVideo from "../../componentes/Video/Video";
const LandingForm = () => {
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [showForm, setShowform] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
    const elements = document.querySelectorAll(".appear");
    elements.forEach((element, index) => {
      const delay = index * 100; // Ajusta el retraso entre elementos según sea necesario
      setTimeout(() => {
        element.classList.add("appear-active");
      }, delay);
    });
  }, [dispatch]);

  const handleImageHover = (e) => {
    e.target.classList.toggle("hovered-image");
    e.target.style.cursor = "pointer";
  };

  const handleClick = (click) => {
    setShowform(click);
  };
  const handleButtonClick = (click) => {
    history.push("/viewcalendly");
  };

  const actualizarEstadoPadre = (estado) => {
    setShowform(estado);
  };

  const modifiedCountries = countries.filter(
    (country) =>
      country.continent === "South America" ||
      country.continent === "North America"
  );

  const filteredCountryNames = [
    "British Virgin Islands",
    "Canada",
    "Venezuela",
    "Cayman Islands",
    "Caribbean Netherlands",
    "Saint Vincent and the Grenadines",
    "United States Virgin Islands",
    "United States",
    "French Guiana",
    "Turks and Caicos Islands",
    "Brazil",
    "Falkland Islands",
    "Sint Maarten",
    "Belize",
    "Montserrat",
    "Suriname",
    "Greenland",
    "Jamaica",
    "Guyana",
    "Saint Barthélemy",
    "Saint Pierre and Miquelon",
    "Martinique",
    "Guadeloupe",
    "Saint Kitts and Nevis",
    "Saint Martin",
    "Anguilla",
    "Saint Lucia",
    "Curaçao",
    "Dominican Republic",
    "Trinidad and Tobago",
    "Antigua and Barbuda",
  ];

  const filterCountries = modifiedCountries.filter(
    (country) => !filteredCountryNames.includes(country.name)
  );

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat bg-top bg-fixed h-full"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <Header />
      <div className="text-center max-w-[1323px] mx-auto">
        <div>
          <h1></h1>
        </div>
        <div className="">
          <motion.h1
            className="font-catamaran italic text-balance text-2xl md:text-4xl font-extrabold text-gray-800 leading-custom mb-0 mt-4 mx-1 md:mx-0"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="text-lg md:text-3xl font-normal mb-6">
              Muchas gracias por registrarte! Te dejamos un breve video sobre la
              explicación del software.
            </span>
          </motion.h1>
          <motion.h1
            className="font-catamaran italic text-balance text-2xl md:text-4xl font-extrabold text-gray-800 leading-custom mb-0 mt-4 mx-1 md:mx-0"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            &nbsp; {""}
            <span className="not-italic text-balance">
              {" "}
              <span className=" text-[#40b4e5]">Aumenta </span> la colocación de
              financiamiento{" "}
              <span className=" text-[#40b4e5]">reduciendo el riesgo</span> de
              fraudes, multas y problemas a la hora de recuperar.
            </span>
          </motion.h1>
        </div>
        <div className="w-full  flex justify-center px-2">
          <YoutubeVideo />
        </div>
        <div>
          <h1 className="font-catamaran text-2xl text-gray-800 text-center pb-1">
            Escala tu <span className=" text-[#40b4e5]">SOFIPO</span> o{" "}
            <span className=" text-[#40b4e5]">SOFOM</span>
          </h1>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.a
            className="ov-btn-slide-left max-w-[700px] bg-gradient-to-r from-[#40b4e5] to-[#09a3e4] text-white text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            href="https://wa.me/+523315712712"
            target="_blank"
            rel="noreferrer"
            style={{
              marginBottom: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={click}
              alt="click"
              style={{
                width: "31px",
                height: "31px",
                marginRight: "5px",
                fill: "white",
              }}
            />
            QUIERO HABLAR CON UN ASESOR
          </motion.a>
        </div>
        <div className="flex justify-center">
          <BenefitsContainer />
        </div>
        <div className="flex justify-center text-center">
          <TextAndImage />
        </div>
        {/* <div className="flex justify-center text-center py-4">
          <RegistroDisplayed  actualizarEstado={actualizarEstadoPadre}
                countries={filterCountries}  />
        </div> */}
      </div>
      <div className="mx-auto flex items-center justify-center">
        <ClientContainer />
      </div>
      <div className="mt-4">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.a
            className="ov-btn-slide-left max-w-[700px] bg-gradient-to-r from-[#40b4e5] to-[#09a3e4] text-white text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            href="https://wa.me/+523315712712"
            target="_blank"
            rel="noreferrer"
            style={{
              marginBottom: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={click}
              alt="click"
              style={{
                width: "31px",
                height: "31px",
                marginRight: "5px",
                fill: "white",
              }}
            />
            QUIERO HABLAR CON UN ASESOR
          </motion.a>
        </div>
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro2
                actualizarEstado={actualizarEstadoPadre}
                countries={filterCountries}
              />
            </div>
          </div>
        </>
      )}
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LandingForm;
