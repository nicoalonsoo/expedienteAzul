import React, { useEffect } from "react";
import "./LandingVideo.css";
import DropboxVideo from "../../componentes/Video/Video";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
// import fondo from '../../multimedia/fondo.jpg'
import click from "../../multimedia/click.svg";
import { useHistory } from "react-router-dom";
import { eventViewContent } from "../../utils/pixelEvents/PixelEvents";
import { motion } from "framer-motion";
const LandingVideo = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    history.push("/viewcalendly");

    // window.fbq("track", "Lead");
    // eventViewContent();
  };

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
      className="bg-cover bg-center bg-no-repeat bg-top bg-fixed h-full"
      // style={{
      //   backgroundImage:
      //     `url${fondo}`,
      // }}
    >
      <Header />
      <div className="text-center w-full lg:max-w-[1200px] mx-auto">
        <div className=" max-w-[400px] md:max-w-[970px] text-center mt-4 mx-auto">
          <motion.h1
            className="text-balance font-catamaran text-3xl md:text-5xl font-extrabold text-gray-800 leading-custom mt-4 mx-2 md:mx-0"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            PASO 1: <span className=" text-[#40b4e5]">MIRA EL VIDEO</span>
          </motion.h1>
        </div>
        <div className="w-full  flex justify-center px-2">
          <DropboxVideo />
        </div>
        <div className="w-full md:max-w-[970px] text-center px-2 lg:px-0 mt-4 mx-auto">
          <motion.h1
            className="text-balance  font-open-sans text-3xl md:text-5xl font-extrabold mb-4"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
          >
            PASO 2: <span className=" text-[#40b4e5]">AGENDÁ UNA REUNION</span>{" "}
            CON NUESTRO EQUIPO
          </motion.h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.button
            className="ov-btn-slide-left max-w-[700px] bg-gradient-to-r from-[#40b4e5] to-[#09a3e4] text-white text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            onClick={() => handleClick()}
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
            AGENDÁ TU REUNIÓN
          </motion.button>
        </div>
        {/* <div className="border-2 border-red-500 mx-4 mb-20 mt-8"> */}
        {/* <div className="mt-2">
            <h3 className="font-open-sans text-sm md:text-lg font-extrabold text-red-500 mb-4 mx-4 my-4 md:my-0">
              *Si ya tienes cuenta en Libertex puedes registrarte con el mismo
              nombre y número de teléfono pero distinto email.
            </h3>
            <h3 className="font-open-sans text-sm md:text-lg font-extrabold text-red-500 mb-4 mx-4 my-4 md:my-0">
              *Solamente regístrate si tienes más de $100 dólares para depositar
              en tu cuenta de trading
            </h3>
            <h3
              className="font-open-sans text-sm md:text-lg font-extrabold text-red-500 mb-4 mx-4 my-4 md:my-0"
              style={{ marginBottom: "1rem" }}
            >
              *No somos una empresa multinivel ni un fondo de inversión, somos
              una academia de trading asociada al broker Libertex.
            </h3>
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default LandingVideo;
