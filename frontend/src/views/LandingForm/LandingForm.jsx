import React, { useEffect, useState } from "react";
import "./LandingForm.css";
import gif from "../../multimedia/gif.gif";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Registro from "../../componentes/Registro/Registro";
import fondo from "../../multimedia/fondo.jpg";
import click from "../../multimedia/click.svg";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import ClientContainer from "../../componentes/ClientContainer/ClientContainer";
import BenefitsContainer from "../../componentes/BenefitsContainer/BenefitsContainer";
import TextAndImage from "../../componentes/TextAndImg/TextAndImg";
import { motion } from "framer-motion";
import YoutubeFrame from "../../multimedia/youtubeFrame.jpeg";
const LandingForm = () => {
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
      <div className="text-center py-4 max-w-[1323px] mx-auto">
        <div className="">
          <motion.h1
            className="font-catamaran italic text-balance text-2xl md:text-4xl font-extrabold text-gray-800 leading-custom mb-0 mt-4 mx-1 md:mx-0"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="text-xl md:text-3xl font-normal">
            Descubre la{" "}
            <span className=" ">Tecnología Innovadora</span> que
            transforma el sector financiero en Mexico:</span>&nbsp; {""}
            <br /> <br />
           <span className="not-italic"> <span className=" text-[#40b4e5]">Aumenta </span> la colocación de
            financiamiento{" "}
            <span className=" text-[#40b4e5]">reduciendo el riesgo</span> de
            fraudes, multas y problemas a la hora de recuperar.</span>
          </motion.h1>
        </div>

        {/* <h3 className="text-lg md:text-2xl mb-2 mx-6 my-2 md:my-0 md:mx-0">
          Copiando y pegando nuestra estrategia que nos viene generando en
          promedio un 29% mensual en los últimos dos años.
        </h3> */}
        <div className="mx-auto max-w-[700px] p-4 sm:p-4 mb-0 mt-0 sm:mb-2 sm:mt-2">
          <img
            src={YoutubeFrame}
            alt="gif"
            className="mr-2 sm:mr-0 transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 rounded-xl border-2 border-blue-500"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageHover}
            onClick={() => handleClick(true)}
          />
        </div>
        <div>
          <h1 className="font-catamaran text-2xl text-gray-800 text-center">
            Escala tu <span className=" text-[#40b4e5]">SOFIPO</span> o{" "}
            <span className=" text-[#40b4e5]">SOFOME</span>
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.button
            className="ov-btn-slide-left max-w-[700px] bg-gradient-to-r from-[#40b4e5] to-[#09a3e4] text-white text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            onClick={() => handleClick(true)}
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
            QUIERO UNA DEMOSTRACIÓN
          </motion.button>
        </div>
        <div className="flex justify-center">
          <BenefitsContainer />
        </div>
        <div className="flex justify-center text-center">
          <TextAndImage />
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center">
        <ClientContainer />
      </div>
      <div className="mt-4">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.button
            className="ov-btn-slide-left max-w-[700px] bg-gradient-to-r from-[#40b4e5] to-[#09a3e4] text-white text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            onClick={() => handleClick(true)}
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
            QUIERO UNA DEMOSTRACIÓN
          </motion.button>
        </div>
      </div>
      {/* <div className="text-center mx-auto max-w-[330px] md:max-w-[1150px] border-2 mt-20 mb-32 border-red-500 ">
        <h3 className="font-open-sans text-sm md:text-lg font-bold text-red-500 mb-4 mx-2 my-2 md:my-0">
          *Si no tienes mínimo $100 dólares para depositar en tu cuenta de
          trading no te registres porque esto no va funcionar para ti.
        </h3>
        <h3 className="font-open-sans text-sm md:text-lg font-bold text-red-500 mb-4 mx-2 my-2 md:my-0">
          *No somos una empresa multinivel, ni un fondo de inversión. Somos una
          academia de trading partner oficial del broker Libertex.
        </h3>
      </div> */}
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro
                actualizarEstado={actualizarEstadoPadre}
                countries={filterCountries}
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default LandingForm;
