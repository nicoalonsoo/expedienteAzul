import React, { useEffect } from "react";
import "./LandingVideo.css";
import DropboxVideo from "../../componentes/Video/Video";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
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
      style={{
        backgroundImage:
          "url(https://expedienteazul.com/financiera/wp-content/uploads/2018/05/fondo.jpg)",
      }}
    >
      <Header />
      <div className="text-center max-w-[1200px] mx-auto">
        <h3
          className="text-lg md:text-2xl mb-4 font-bold mx-4 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          COMO LOGRAR OBTENER UNA RENTABILIDAD DEL{" "}
          <span className="underline">10%</span> AL{" "}
          <span className="underline">30%</span> MENSUAL HACIENDO COPYTRADING
        </h3>
        <h1 className="font-open-sans text-3xl md:text-5xl font-extrabold mb-4">
          PASO 1: MIRA EL VIDEO
        </h1>
        <div className="mx-auto max-w-[700px] mb-8 mt-8">
          <DropboxVideo />
        </div>
        <h1 className="font-open-sans text-3xl md:text-5xl font-extrabold mb-4">
          PASO 2: REGISTRATE EN NUESTRA ACADEMIA
        </h1>
        <div className="border-2 border-red-500 mx-4">
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
            *No somos una empresa multinivel ni un fondo de inversión, somos una
            academia de trading asociada al broker Libertex.
          </h3>
          </div>
        </div>
        <button
          className="ov-btn-slide-left max-w-[700px] text-white text-2xl py-4 px-6 rounded-lg mb-4 mx-4 my-4 md:my-6"
          onClick={() => handleClick()}
        >
          REGÍSTRATE!
          <p className="text-0.875rem leading-1.25rem">
            (sólo para personas que quieren iniciarse en el trading o que ya se
            iniciaron pero no tienen buenos resultados).
          </p>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingVideo;
