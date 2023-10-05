import React, { useEffect } from "react";
import "./LandingVideo.css";
import DropboxVideo from "../../componentes/Video/Video";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
// import fondo from '../../multimedia/fondo.jpg'
import click from "../../multimedia/click.svg";
import { useHistory } from "react-router-dom";
import { eventViewContent } from "../../utils/pixelEvents/PixelEvents";
const LandingVideo = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    history.push("/viewcalendly");
    eventViewContent();
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
      <div className="text-center max-w-[1200px] mx-auto">
        <div className="overflow-hidden max-w-[400px] md:max-w-[970px] text-center mt-4 mx-auto">
          <h1 className=" font-inter text-4xl md:text-5xl font-extrabold text-gray-800 leading-custom mt-4 mx-4 md:mx-0">
            PASO 1: <span className=" text-custom-blue">MIRA EL VIDEO</span>
          </h1>
        </div>
        <div className="mx-auto max-w-[700px] mb-8 mt-8">
          <DropboxVideo />
        </div>
        <div className="overflow-hidden max-w-[350px] md:max-w-[970px] text-center mt-4 mx-auto">
          <h1 className="font-open-sans text-3xl md:text-5xl font-extrabold mb-4">
            PASO 2: <span className=" text-custom-blue">AGENDÁ UNA REUNION</span> {" "}CON NUESTRO EQUIPO
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="ov-btn-slide-left max-w-[700px] bg-gradient-to-r from-blue-400 to-blue-700 text-white text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2"
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
          </button>
        </div>
        <div className="border-2 border-red-500 mx-4 mb-20 mt-8">
          <div className="mt-2">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingVideo;
